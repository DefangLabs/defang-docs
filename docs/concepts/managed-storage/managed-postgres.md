# Managed Postgres

Postgres, or PostgreSQL, is a powerful open-source relational database system known for its robustness, extensibility, and compliance with SQL standards, making it ideal for complex applications requiring reliable data integrity and advanced querying. Defang can help you provision a managed Postgres instance.

## Current Support[​](#current-support "Direct link to Current Support")

| Provider                                                                                  | Managed Postgres                 |
| ----------------------------------------------------------------------------------------- | -------------------------------- |
| [AWS](https://docs.defang.io/docs/providers/aws.md#managed-storage)                       | ✅ RDS Postgres                  |
| [Azure](https://docs.defang.io/docs/providers/azure.md)                                   | ✅ Azure Database for PostgreSQL |
| [DigitalOcean](https://docs.defang.io/docs/providers/digitalocean.md#future-improvements) | ⚠️ Unmanaged                     |
| [GCP](https://docs.defang.io/docs/providers/gcp.md#managed-storage)                       | ✅ Cloud SQL Postgres            |

Managed Postgres is available in all AWS and GCP regions. On Azure, availability varies by region — see [Managed Postgres and Redis region availability](https://docs.defang.io/docs/providers/azure.md#managed-postgres-and-redis-region-availability) before choosing an `AZURE_LOCATION`.

## How to use Managed Postgres[​](#how-to-use-managed-postgres "Direct link to How to use Managed Postgres")

To use managed Postgres, in your `compose.yaml` file, use the `x-defang-postgres` extension to define your Postgres service. Adding the extension will tell Defang to provision a managed instance, rather than running Postgres as a service. Defang will show a warning when this extension is used on a service that does not use either a `postgres` or `pgvector` image. Defang will use the image tag to determine the version to provision from your cloud provider.

### Required Configuration[​](#required-configuration "Direct link to Required Configuration")

When using managed Postgres, you **must** set a password for the database using `defang config set POSTGRES_PASSWORD`. If you do not provide the password, the deployment will fail.

* `POSTGRES_PASSWORD`: You can can assign the password in the service's environment variables. To learn more about how this works, read about [configuration](https://docs.defang.io/docs/concepts/configuration.md).

### Optional Configuration[​](#optional-configuration "Direct link to Optional Configuration")

You can also set the following optional environment variables to configure the managed Postgres instance:

* `POSTGRES_USER`: The user for the managed Postgres instance. The default is `postgres`.
* `POSTGRES_DB`: The database name for the managed Postgres instance. The default is `postgres`.

### Connecting to Managed Postgres[​](#connecting-to-managed-postgres "Direct link to Connecting to Managed Postgres")

You can connect to the managed Postgres instance using the name of your service as the hostname, `POSTGRES_USER`, `POSTGRES_DB`, and `POSTGRES_PASSWORD` environment variables.

#### SSL[​](#ssl "Direct link to SSL")

In BYOC, Defang configures managed Postgres instances to require SSL connections. To connect to the database, you will need to use a connection string that includes `sslmode=require`.

If your application does not connect using SSL, you will see an error message like the following:

```
error: no pg_hba.conf entry for host "10.0.12.123", user "mydbuser", database "myappdatabase", no encryption
```

We recommend setting a defang config variable for the `SSL_MODE`, and then using that variable in your connection string. That way you can keep it empty for local development, and set it to `require` for production.

```
$ defang config set SSL_MODE=require
```

Then you can set up your `compose.yaml` file like this:

```
  app:
    # [...]
    environment:
      POSTGRES_HOST: database
      POSTGRES_USER: postgres
      POSTGRES_DB: postgres
      POSTGRES_PASSWORD: # load from defang config
      # Note: you can create a connection string by using interpolation,
      # reference config variables by using ${<config name>}
      POSTGRES_URL: postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}?sslmode=${SSL_MODE}
  db:
    image: postgres:18
    x-defang-postgres: true
    ports:
      - mode: host
        target: 5432
    environment:
      POSTGRES_PASSWORD: # load from defang config
```

### Example[​](#example "Direct link to Example")

info

For a smoother experience with Defang, we recommend using Postgres 14 for your container images. This version provides easier access and improved usability.

```
  app:
    # [...]
    environment:
      POSTGRES_HOST: database
      POSTGRES_USER: postgres
      POSTGRES_DB: postgres
      # Note: by leaving the value empty, Defang will use the
      # value set using `defang config set POSTGRES_PASSWORD`
      POSTGRES_PASSWORD:
      # Note: you can create a connection string by using interpolation,
      # reference config variables by using ${<config name>}
      CONNECTURL: postgresql://postgres:${POSTGRES_PASSWORD}@database:5432/postgres?sslmode=require
  database:
    image: postgres:18
    x-defang-postgres: true
    ports:
      - mode: host
        target: 5432
    environment:
      # Note: by leaving the value empty, Defang will use the
      # value set using `defang config set POSTGRES_PASSWORD`
      POSTGRES_PASSWORD:
```

## Final Snapshots[​](#final-snapshots "Direct link to Final Snapshots")

When a project is deployed to a [production environment](https://docs.defang.io/docs/concepts/deployment-modes.md), any managed Postgres instances are automatically configured to create a snapshot of the database before deletion. The snapshot will be named with the following format:

`<project-name>-<service>-postgres-<id>-final-snapshot`

The AWS Console can be used to restore a snapshot into a new instance of Postgres. This feature is not yet supported in GCP.
