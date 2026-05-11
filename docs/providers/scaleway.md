---
title: Scaleway
description: Defang can deploy Compose applications into a Scaleway account using Serverless Containers, Serverless Jobs, and managed services.
sidebar_position: 6
---

# Scaleway

:::info
The Defang Scaleway Provider is in draft preview. It is being validated for startup and agent workloads that need to deploy into customer-owned cloud accounts.
:::

Defang can deploy Docker Compose applications to Scaleway using bring-your-own-cloud (BYOC). The provider creates native Scaleway resources in your account, including Serverless Containers for application services, Serverless Jobs for Defang CD/build tasks, Object Storage for deployment state and build artifacts, Managed Database for PostgreSQL, Managed Redis, Container Registry, Secret Manager, and Cockpit logs.

## Getting Started

### Install Defang

Install the [Defang CLI](/docs/intro/getting-started), then select the Scaleway provider:

```bash
defang compose up --provider=scaleway
# or
export DEFANG_PROVIDER=scaleway
```

### Configure Scaleway Credentials

The Scaleway provider reads credentials from your shell environment:

```bash
export SCW_ACCESS_KEY=<your-scaleway-access-key>
export SCW_SECRET_KEY=<your-scaleway-secret-key>
export SCW_DEFAULT_PROJECT_ID=<your-scaleway-project-id>
export SCW_DEFAULT_REGION=fr-par
```

`SCW_DEFAULT_REGION` defaults to `fr-par` when omitted.

If you only have a Scaleway API key, use it as `SCW_SECRET_KEY`. You still need an access key for S3-compatible Object Storage. You can create or retrieve an access key for the same project with the Scaleway IAM API, then export it as `SCW_ACCESS_KEY`.

### Required Config Values

Use Defang config for application secrets and managed-service passwords:

```bash
defang config set POSTGRES_PASSWORD
defang config set REDIS_PASSWORD
```

Scaleway Managed Database for PostgreSQL enforces a password policy: 8-128 characters, with uppercase, lowercase, digit, and special character. Make sure generated or supplied passwords satisfy that policy.

When a Compose project uses Scaleway managed LLMs, Defang can create `OPENAI_API_KEY` automatically from the Scaleway secret key if that config value is missing.

## Architecture

### Deployment

The Defang CLI packages your application source and uploads it to a Scaleway Object Storage bucket. It then runs a Defang CD task as a Scaleway Serverless Job. The CD task runs Pulumi to build images, create managed resources, and deploy your application.

### Builds

Images are built with Kaniko in Scaleway Serverless Jobs and pushed to Scaleway Container Registry. Sensitive build values, such as object-storage credentials and Docker auth, are passed through Scaleway Secret Manager-backed job secret references.

### Runtime

Application services run as Scaleway Serverless Containers. Public HTTP services use ingress ports. Background workers without public ports are deployed as private containers with a health shim so Scaleway can perform the required HTTP health check.

### Service Status

After a successful deployment, Defang writes a `project.pb` state artifact to Object Storage. The CLI uses this artifact for commands such as `compose ps`.

### Logs

Defang queries Scaleway Cockpit's Loki-compatible logs endpoint using a Cockpit token with `read_only_logs` scope. Log availability and labels are controlled by Scaleway's Serverless Containers and Jobs logging pipeline.

## Managed Storage

### Managed Postgres

Services marked with `x-defang-postgres: true` are provisioned as Scaleway Managed Database for PostgreSQL. The provider rewrites dependent service environment variables so applications can connect to the managed database endpoint.

Scaleway reserves some default names. If a Compose file uses `POSTGRES_USER=postgres` or `POSTGRES_DB=postgres`, Defang maps those to Scaleway-safe values while preserving application connection strings.

### Managed Redis

Services marked with `x-defang-redis: true` are provisioned as Scaleway Managed Redis. Redis currently uses version `8.4.0` in the provider because that is the available version in the tested Scaleway region.

Set `REDIS_PASSWORD` with Defang config before deploying workloads that use managed Redis.

### Managed LLMs

Scaleway managed LLMs use the public Scaleway Generative API, which is OpenAI-compatible at:

```text
https://api.scaleway.ai/v1/
```

Unlike AWS and GCP, Defang does not deploy a LiteLLM sidecar for Scaleway. The CLI removes Compose model-provider services and injects OpenAI-compatible environment variables into dependent services.

Current model aliases:

| Defang model | Scaleway model |
| --- | --- |
| `chat-default` | `llama-3.3-70b-instruct` |
| `embedding-default` | `bge-multilingual-gemma2` |

Model discovery is currently static. If Scaleway adds or changes model IDs, Defang needs an update before those aliases change.

## Platform Limitations

- Serverless Containers do not support host-mode ports for application containers. Use ingress ports for public HTTP services.
- Scaleway private networks are egress-only for Serverless Containers. Containers can reach managed Postgres and Redis privately, but container-to-container traffic uses public HTTPS endpoints.
- Background workers cannot scale to zero because Scaleway only wakes containers from inbound HTTP traffic. Defang keeps portless workers at `min_scale=1`.
- The worker health shim currently depends on `/bin/sh` and one of `node`, `python3`, `python`, or `nc` being present in the image.
- Defang delegated domains require Scaleway domain permissions. If the credential cannot manage the delegated DNS zone, use the native Scaleway Serverless Container domain.
- `defang config set --random` may generate a password that does not satisfy Scaleway's PostgreSQL password policy. Use an explicit compliant value when needed.

## Validated Workloads

The Scaleway provider has been validated with the unmodified `mastra-extended` sample from the Defang samples repository. The validation deployed:

- Next.js app on Serverless Containers
- background worker on Serverless Containers
- Managed PostgreSQL
- Managed Redis
- Scaleway managed chat and embedding models

After deployment, Playwright was used to click `Generate sample items`, verify 10 tasks, 10 events, and 20 classified items, wait for generation to complete, and ask a question through the chat interface.
