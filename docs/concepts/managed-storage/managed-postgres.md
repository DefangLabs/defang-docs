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
| [DigitalOcean](/docs/providers/digitalocean/digitalocean.md) | ❌ |

## How to use Managed Postgres

To use managed Postgres, in your `compose.yaml` file, use the `x-defang-postgres` extension to define your Postgres service. Adding the extension will tell Defang to provision a managed instance, rather than running Postgres as a service.

### Required Configuration

When using managed Postgres, you **must** set a password for the database using `defang config set POSTGRES_PASSWORD`. If you do not provide the password, the deployment will fail. 

- `POSTGRES_PASSWORD`: You can can assign the password in the service's environment variables. To learn more about how this works, read about [configuration](../configuration.md).

### Optional Configuration

You can also set the following optional environment variables to configure the managed Postgres instance:

- `POSTGRES_USER`: The user for the managed Postgres instance. The default is `postgres`.
- `POSTGRES_DB`: The database name for the managed Postgres instance. The default is `postgres`.

### Connecting to Managed Postgres

You can connect to the managed Postgres instance using the name of your service as the hostname, `POSTGRES_USER`, `POSTGRES_DB`, and `POSTGRES_PASSWORD` environment variables.

### Example
:::info 
For a smoother experience with Defang, we recommend using Postgres 14 for your container images. This version provides easier access and improved usability.
:::

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
      CONNECTURL: postgresql://postgres:${POSTGRES_PASSWORD}@database:5432/postgres?sslmode=require
  database:
    image: postgres:14
    x-defang-postgres: true
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

## Final Snapshots

When a project is deployed to a production environment any managed postgres instances are automatically configured to create a snapshot of the database before deletion. The snapshot will be named with the following format

`
<project-name>-<service>-postgres-<id>-final-snapshot
`

The AWS Console can be used to restore a snapshop into a new instance of postgres.

<!-- 
### Major Version Updating of Engine

To update the database engine you can simply update the image to a later version in your Compose file and apply it via ```defang compose up --provider=aws```. In the example below, we change from Postgres 15 to 16.

Please note the upgrading will occur immediately and may result in the database being unavailable for some time.

```
database:
  image: postgres:15
```

to

```
database:
  image: postgres:16
``` -->
