# Managed Redis

Redis is an in-memory data structure store widely used for caching, real-time analytics, and session management due to its high performance, low latency, and support for various data types. Defang can help you provision a managed Redis instance.

## Current Support[​](#current-support "Direct link to Current Support")

| Provider                                                                                  | Managed Redis          |
| ----------------------------------------------------------------------------------------- | ---------------------- |
| [AWS](https://docs.defang.io/docs/providers/aws.md#managed-storage)                       | ✅ Elasticache         |
| [Azure](https://docs.defang.io/docs/providers/azure.md)                                   | ✅ Azure Managed Redis |
| [DigitalOcean](https://docs.defang.io/docs/providers/digitalocean.md#future-improvements) | ⚠️ Unmanaged           |
| [GCP](https://docs.defang.io/docs/providers/gcp.md#managed-redis)                         | ✅ Memorystore         |

Managed Redis is available in all AWS and GCP regions. On Azure, availability varies by region — see [Managed Postgres and Redis region availability](https://docs.defang.io/docs/providers/azure.md#managed-postgres-and-redis-region-availability) before choosing an `AZURE_LOCATION`.

## How to use Managed Redis[​](#how-to-use-managed-redis "Direct link to How to use Managed Redis")

To use managed Redis, in your `compose.yaml` file, use the `x-defang-redis` extension to define your Redis service. Adding the extension will tell Defang to provision a managed instance, rather than running Redis as a service. Defang will show a warning when this extension is used on a service that does not use either a `redis` or `valkey` image. Defang will use the image tag to determine the version to provision from your cloud provider.

Here's an example:

```
cache:
  image: redis:6.2
  x-defang-redis: true
  restart: unless-stopped
  ports:
    - mode: host
      target: 6379
```

## Final Snapshots[​](#final-snapshots "Direct link to Final Snapshots")

When a project is deployed with the `production` [deployment mode](https://docs.defang.io/docs/concepts/deployment-modes.md), any managed Redis instances are automatically configured to create a snapshot of the datastore before deletion. The snapshot will be named with the following format:

`<project-name>-<service>-redis-<id>-final-snapshot`

The AWS Console can be used to restore a snapshot into a new instance of Redis. This feature is not yet supported on GCP.
