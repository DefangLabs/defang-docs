---
title: Installation handoffs
description: Send a customer from your application to Defang for cloud setup and deployment.
sidebar_position: 8
---

# Installation handoffs

An Installation handoff lets a software developer start customer onboarding in
their own application, then send the customer to Defang for hosted sign-in,
cloud trust setup, and deployment.

This page distinguishes the contract available today from planned partner API
capabilities. In particular, durable machine authentication, first-class
external references, a dedicated status API, signed callbacks, and automated
revocation are **not available yet**.

:::caution Current authentication limitation
The create-handoff action currently accepts an existing, short-lived developer
bearer token. It does not yet support a project-scoped machine credential. Use
the current contract for attended evaluation and integration development, not
as an unattended production service.
:::

## Responsibility boundaries

| Party | Owns |
| --- | --- |
| Developer | The application, repository, customer relationship, optional payment or entitlement flow, and the local mapping from an external reference to a Defang installation ID |
| Customer | The target cloud account, approval of cloud trust, customer-supplied configuration, and the decision to remove that trust |
| Defang | Hosted customer sign-in, cloud setup guidance, creation of the deployable stack, and dispatch of the developer's configured deployment workflow |

Defang does not process the developer's checkout, pricing, tax, refund, or
entitlement logic. Call the handoff only after the developer's backend has
verified its own business event. Do not send payment details to Defang.

The intended flow is:

1. The developer's trusted backend confirms signup, payment, or entitlement.
2. The backend creates or reuses an Installation handoff.
3. The backend saves the returned `installationId` beside its own opaque
   external reference.
4. The backend redirects the customer to the exact `handoffUrl` returned by
   Defang.
5. The customer signs in with the requested email address and approves cloud
   trust in the hosted setup flow.
6. Defang creates the stack and dispatches the developer project's deployment
   workflow.

## Contract available today

| Capability | Current behavior |
| --- | --- |
| Authentication | Existing developer bearer token with access to the developer workspace |
| Authorization | Developer persona, workspace membership, project ownership, active GitHub connection, exact repository, merged deployment workflow, and compatible OIDC trust are checked before a customer workspace is created |
| Create handoff | `createInstallationHandoff` GraphQL mutation |
| Idempotency | A matching customer workspace and `installationName` reuse the existing installation; incompatible details for that name return a conflict |
| External correlation | Keep it in the developer's database; the request has no external-reference field |
| Customer redirect | Defang returns a hosted login URL that continues to `/installations/{id}/setup` |
| Installation state | Create returns the initial `pending` or `ready` value; the underlying signed-in Portal view can read installation and deployment fields |
| Automatic deployment | Programmatic handoffs opt in to deployment after cloud setup; dispatch is claimed at most once and retried for a limited window |
| Partner polling and callbacks | Not available as a supported contract |
| Expiry, cancellation, revocation, uninstall | Not available as a supported self-service contract |

### Authentication and credential handling

Send the developer bearer token only from a backend:

```http
Authorization: Bearer <developer-token>
```

Never put the token in browser JavaScript, HTML, a query string, source control,
or logs. Load it from environment configuration and replace it when it expires.
There is currently no separate machine-credential rotation or revocation API;
that is part of the forthcoming contract tracked in
[Portal issue #1086](https://github.com/DefangLabs/portal/issues/1086).

The token can act only as its developer user and is checked for membership in
the supplied `tenantId`. Preflight also verifies that `projectId` belongs to
that workspace and that the repository is the one connected to the project's
deployment workflow. Supplying arbitrary repository coordinates is rejected.

### Create a handoff

Send the mutation to `https://graphql.defang.io/v1/graphql`:

```graphql
mutation CreateInstallationHandoff($input: CreateInstallationHandoffInput!) {
  createInstallationHandoff(input: $input) {
    installationId
    status
    handoffUrl
  }
}
```

Example variables for a `production` stack:

```json
{
  "input": {
    "tenantId": "11111111-1111-4111-8111-111111111111",
    "customerEmail": "cloud-owner@example.com",
    "projectId": "22222222-2222-4222-8222-222222222222",
    "installationName": "customer-51b05c77d09d6d340fbdc3d3",
    "recipe": "default",
    "stackName": "production",
    "cloudProvider": "aws",
    "githubOrg": "example-org",
    "repoPattern": "example-app",
    "refType": "environment",
    "refPattern": "defang-production"
  }
}
```

`cloudProvider` accepts `aws`, `gcp`, or `azure`. `refType` accepts `all`,
`branch`, or `environment`; `refPattern` is required for branch and environment
selectors.

Use an exact repository. Defang-generated workflows run in the GitHub
environment `defang-${stackName}`, so `environment` with
`defang-production` is the narrow selector for a stack named `production`.
`all` grants substantially broader trust. Azure requires a concrete repository
and branch or environment rather than wildcard trust.

The response contains the initial status and exact customer-facing URL:

```json
{
  "data": {
    "createInstallationHandoff": {
      "installationId": "33333333-3333-4333-8333-333333333333",
      "status": "pending",
      "handoffUrl": "https://portal.defang.io/clients/login?redirect=%2Finstallations%2F33333333-3333-4333-8333-333333333333%2Fsetup"
    }
  }
}
```

Allowlist `https://portal.defang.io` as the redirect origin, then use the
returned `handoffUrl` byte for byte. Do not decode and rebuild its query string.
The current request does not accept a vendor return URL, so the hosted setup
flow does not redirect back to the developer's application when it finishes.

### Idempotency and external references

The current API does not accept an `Idempotency-Key` header or external order
field. Its reuse key is the normalized customer identity plus
`installationName`:

- Repeating the same request returns the existing compatible installation and
  handoff URL.
- Reusing the name with different project, recipe, stack, provider, repository,
  or trust details returns a conflict instead of changing the installation.
- Changing the customer email addresses a different customer workspace and is
  not the same idempotency scope.

Keep the external order or entitlement reference in the developer's database.
The maintained sample hashes that reference into a stable, opaque installation
name and sends no payment data to Defang. In production, enforce a unique local
idempotency key and save the returned `installationId` and original request in
one transaction. A hash-derived name complements that database record; it does
not replace it.

### Customer sign-in and setup

The handoff URL starts Defang's email-code sign-in for the requested customer.
After the email is verified, Defang joins the authenticated identity to the
pre-created customer workspace and opens the installation setup route. The
customer then supplies or approves the provider details needed for the selected
cloud.

Cloud setup creates the Fabric stack and marks the installation `ready`. In the
current model, `ready` means setup produced a deployable stack; it does **not**
prove that the application is live.

### Automatic deployment and status

Installations newly created by the programmatic handoff set automatic deployment
on. When customer setup completes, Defang:

1. writes the deployable stack;
2. claims deployment with a conditional update;
3. dispatches the developer's GitHub Actions workflow as the Defang GitHub App,
   not as the customer or developer user;
4. briefly polls for the workflow run and records the immediate result.

The recorded deployment states are `dispatching`, `dispatch_failed`, `queued`,
`running`, `succeeded`, `failed`, and `unknown`. These fields are visible to
authenticated members of the customer or developer workspace, but there is no
dedicated, stable third-party status endpoint. Do not build a production poller
against the Portal's underlying table schema.

Current recovery boundaries are important:

- Readiness events retry six times at 120-second intervals.
- A definite GitHub rejection can be retried without creating two workflow
  runs.
- An ambiguous GitHub response becomes `unknown` and is not redispatched,
  because GitHub may already have accepted it.
- Orphaned `dispatching` or `unknown` claims do not yet have an automatic
  reaper.
- Status is updated only by a short poll during setup completion. There is no
  workflow callback or background reconciler, so a later success or failure may
  not be reflected in Portal.
- Dispatch currently reads the live repository default branch even though
  handoff preflight records release coordinates. A later default-branch change
  can change what is deployed.

During evaluation, inspect the run in GitHub Actions and the installation in
Portal. Wait for the dedicated polling and signed-callback contract before using
terminal status to drive billing, fulfillment, or support automation.

## Cloud trust and effective permissions

The customer grants persistent OIDC trust to the developer's GitHub Actions
identity. The workflow requests `contents: read` and `id-token: write`; it uses
the OIDC token to obtain temporary cloud credentials at deployment time. No
long-lived cloud access key is pasted into the developer application.

The current effective cloud roles are broad:

| Provider | Trust and effective deployment permission |
| --- | --- |
| AWS | A CloudFormation stack creates `defang-cd-CIRole` with the AWS-managed `AdministratorAccess` policy. Its trust policy admits the selected GitHub OIDC subject. During setup, the Portal server exchanges the customer's AWS authorization code for temporary access key, secret, and session token; uses them in server memory for STS, CloudFormation, and optional SSM writes; and returns only the account ID to the browser. |
| Google Cloud | A Workload Identity Pool admits the selected GitHub OIDC principal set, which receives `roles/owner` on the selected project. Setup uses the customer's browser-held Google access token; customer configuration is written directly to Secret Manager. |
| Azure | A user-assigned managed identity receives the `Owner` role at subscription scope, with a federated identity credential restricted to the selected GitHub repository and branch or environment. Setup uses the customer's browser-held Azure access token; customer configuration is written directly to Key Vault. |

These are the permissions the current implementation creates, not a claim of
least privilege. Review them with the customer before setup. The customer can
remove provider-side trust in its own cloud console, but Defang does not yet
offer a verified revocation or uninstall workflow. A database state change alone
must not be treated as proof that cloud access was removed.

## Configuration ownership and secrets

Project metadata can label configuration as developer-owned or customer-owned.
The hosted setup form returns only customer-owned field definitions; stored
values are not returned to the developer application.

- Developer-owned configuration remains with the developer's project and
  deployment setup.
- Customer-owned AWS values pass through the Portal server and are written to
  AWS Systems Manager Parameter Store as `SecureString` values.
- Customer-owned Google Cloud and Azure values are written from the browser to
  Secret Manager or Key Vault.

Never put customer configuration values, Portal bearer tokens, cloud temporary
credentials, callback secrets, or handoff URLs in application logs. Safe logs
may include the installation ID, derived installation name, initial status, and
a correlation ID generated by the developer's own system.

## Not available yet

The following requirements are active work, not shipped contract:

- project-scoped machine credentials, rotation, and revocation;
- a first-class external reference and vendor idempotency key;
- partner-controlled return URLs and registered callback destinations;
- a dedicated read-only lifecycle status endpoint;
- signed, replay-resistant callbacks and retry guarantees;
- truthful authorization, setup, deployment, expiry, cancellation, and
  revocation lifecycle states;
- customer self-service, provider-verified trust revocation and uninstall;
- continuous workflow-status reconciliation and recovery of orphaned dispatch
  claims.

Track the contract work in
[Portal issue #1086](https://github.com/DefangLabs/portal/issues/1086) and the
lifecycle/revocation work in
[Portal issue #1087](https://github.com/DefangLabs/portal/issues/1087). No
callback signature example is published here because no callback contract has
shipped; inventing one would create an incompatible public promise.

## Sample and local testing

The maintained implementation is in the
[Defang samples repository](https://github.com/DefangLabs/samples), under
`samples/customer-handoff`. It demonstrates:

- server-only environment configuration for the current credential;
- a developer-owned post-entitlement trigger boundary;
- a stable opaque installation name for compatible retries;
- the exact GraphQL request and response shape;
- allowlisting and preserving the literal handoff redirect;
- safe status handling and redacted structured logs;
- HTTP-boundary tests that require no live token or cloud account.

Run its contract tests from the sample directory:

```sh
cd app
npm test
```

For an end-to-end evaluation, configure a test developer project, repository,
customer inbox, and disposable cloud account. Complete the hosted flow, confirm
the GitHub Actions deployment starts, and inspect both success and deliberate
failure in GitHub Actions. The current repository does not include a partner
sandbox, fake cloud provider, callback fixture, or machine-auth fixture.
