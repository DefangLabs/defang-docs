---
title: Managed Postgres
description: Defang can help you provision managed Postgres.
sidebar_position: 1000
---

# Managed Postgres

Postgres, or PostgreSQL, is an advanced open-source relational database system known for its robustness, extensibility, and compliance with SQL standards, making it a popular choice for complex applications requiring reliable data integrity and sophisticated querying capabilities.

## Current Support

| Provider | Managed Postgres |
| --- | --- |
| [Playground](/docs/providers/playground) | ❌ |
| [AWS](/docs/providers/aws/aws.md#managed-postgres) | ✅ |

## How to use Managed Postgres

To use managed Postgres, in your `compose.yaml` file, use the `x-defang-postgres` extension to define your Postgres service. Adding the extension will tell Defang to provision a managed instance, rather than running Postgres as a service.

### Required Configuration

When using managed Postgres, you **must** set a password for the database using `defang config set POSTGRES_PASSWORD`. If you do not provide the password, the deployment will fail. You can can assign the password in the service's environment variables (to learn more about how this works, read about [configuration](../configuration.md)).

### Optional Configuration

You can also set the following environment variables to configure the managed Postgres instance:

- `POSTGRES_USER`: The user for the managed Postgres instance. The default is `postgres`.
- `POSTGRES_DB`: The database name for the managed Postgres instance. The default is `postgres`.

### Connecting to Managed Postgres

You can connect to the managed Postgres instance using the name of your service as the hostname, `POSTGRES_USER`, `POSTGRES_DB`, and `POSTGRES_PASSWORD` environment variables.

### Example

```yaml
  app:
    # [...]
    environment:
      POSTGRES_HOST: database
      POSTGRES_USER: postgres
      POSTGRES_DB: postgres
      // highlight-start
      # Note: by leaving the value empty, Defang will use the 
      # value set using `defang config set POSTGRES_PASSWORD`
      POSTGRES_PASSWORD:
      // highlight-end
      # Note: you can create a connection string by using interpolation,
      # reference config variables by using ${<config name>}
      CONNECTURL: postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@database:5432/postgres
  database:
    image: postgres:15
    x-defang-postgres: true
    restart: unless-stopped
    ports:
      - mode: host
        target: 5432
    environment:
      // highlight-start
      # Note: by leaving the value empty, Defang will use the 
      # value set using `defang config set POSTGRES_PASSWORD`
      POSTGRES_PASSWORD:
      // highlight-end

```
