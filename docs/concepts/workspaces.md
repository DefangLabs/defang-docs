---
title: Workspaces
description: Workspaces organize teams and manage billing for Defang deployments.
---

# Workspaces

Workspaces are the primary way to organize teams and manage billing in Defang. A workspace represents a billing context that can be shared among team members, allowing multiple developers to deploy services under a team subscription.

## Types of Workspaces

Defang supports three types of workspaces:

### Personal Workspace

When you create a Defang account, a personal workspace is automatically created using your username. This workspace:

- Cannot be deleted
- Cannot have additional members
- Is always available as your default workspace
- Can have a subscription attached for individual use

### Defang-Managed Workspaces

You can create additional workspaces directly in the [Defang Portal](./portal.md). These workspaces:

- Can be renamed or deleted by the owner
- Support inviting team members via invite links
- Allow full membership management within Defang

### Provider-Managed Workspaces

When you log in with GitHub or GitLab and authorize Defang to access your organizations, workspaces are automatically created for each authorized organization. These workspaces:

- Cannot be deleted (the organization must be disconnected from Defang)
- Cannot have members directly invited: membership is managed through your Git provider
- The user who initially connects the organization becomes the workspace owner with billing access

:::info
Ownership transfer for provider-managed workspaces is not yet implemented. The user who connects an organization remains the billing contact.
:::

## Creating a Workspace

To create a Defang-managed workspace:

1. Log in to the [Defang Portal](https://portal.defang.dev)
2. Click the workspace switcher dropdown in the navigation bar
3. Click **Create Workspace** at the bottom of the dropdown
4. Enter a name (lowercase kebab-case is recommended, e.g., `my-team`)
5. Optionally add teammates and select a billing plan

Workspace names are unique and can be changed later. While the portal encourages kebab-case naming for compatibility with CLI usage, the name is stored as entered.

## Using Workspaces with the CLI

### Specifying a Workspace

You can specify which workspace to use for any CLI command using the `--workspace` flag:

```bash
defang compose up --workspace=my-team
```

Alternatively, set the `DEFANG_WORKSPACE` environment variable:

```bash
export DEFANG_WORKSPACE=my-team
defang compose up
```

:::tip
Workspaces can be specified by name or ID. Both work interchangeably.
:::

### Listing Workspaces

To see all workspaces you have access to:

```bash
defang workspace ls
```

Add `--verbose` to include workspace IDs, or `--json` for JSON output.

### Viewing Current Workspace

The `defang whoami` command shows your current workspace:

```bash
defang whoami
```

## Workspace Membership

### Defang-Managed Workspaces

For workspaces created in the Defang Portal:

1. The workspace owner can generate an invite link from the **Invites** tab
2. Share the link with team members
3. When a user clicks the link, they request access
4. The owner approves or denies the request from the portal

Members can have different roles:
- **Owner**: Full control including billing, settings, and member management
- **Admin**: Can manage members and settings
- **Member**: Can use the workspace subscription for deployments
- **Billing**: Can manage payment and subscription details

### Provider-Managed Workspaces

For workspaces created from GitHub or GitLab organizations, membership is managed entirely through your Git provider:

- Add users to the organization in GitHub/GitLab to grant them workspace access
- Remove users from the organization to revoke workspace access
- Changes sync automatically when users log in to Defang

## How Workspaces Relate to Projects

Workspaces provide access to _features_ (deployment capabilities, subscriptions) rather than to specific _projects_. This means:

- Any developer with access to both a workspace (with an active subscription) and a codebase can deploy that code
- If a developer changes workspaces, they can continue deploying the same project using a different workspace's subscription
- The deployment itself lives in the configured cloud account, independent of which workspace was used

:::warning
Deployment logs and history are associated with the workspace used at deployment time. If you deploy a project with Workspace A, then later deploy the same project with Workspace B, the deployment record will be stored under Workspace B.
:::

## CI/CD Integration

When deploying from GitHub Actions using OIDC authentication, the repository owner automatically becomes the tenant context. This allows CI/CD pipelines to deploy without explicitly specifying a workspace, as long as the repository owner has an active subscription.

For more details, see [Deploying from GitHub Actions](/docs/tutorials/deploying-from-github-actions).
