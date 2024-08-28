---
title: Managed Storage
description: Defang can help you provision managed storage services.
sidebar_position: 450
---

# Managed Storage

Defang helps you provision the infrastructure you need to run your services. That infrastructure is designed to scale in and out without persistent storage, so you can build highly scalable services. But Defang can also help you provision managed services to store and persist your data, like [caches](#managed-redis), databases[<sup>\*</sup>](#managed-postgres) , and object storage[<sup>\*</sup>](#managed-object-storage).

## Managed Redis

Redis is an in-memory data structure store widely used for caching, real-time analytics, and session management due to its high performance, low latency, and support for various data types. Defang can help you provision a managed Redis instance. To read more about the specifics of how this works for each provider, see the following:
  - [Playground](../providers/playground#managed-redis)
  - [AWS](../providers/aws#managed-redis)

### How to use Managed Redis

To use managed Redis, in your `compose.yaml` file, use the `x-defang-redis` extension to define your Redis service. Adding the annotation will tell Defang to provision a managed instance, rather than running Redis as a service. Here's an example:

```yaml
  redisx:
    image: redis:6.2
    x-defang-redis: true
    restart: unless-stopped
    ports:
      - mode: host
        target: 6379
```

## Managed Postgres

:::info
As of July 22, 2024, managed Postgres is in development.
:::

Postgres, or PostgreSQL, is an advanced open-source relational database system known for its robustness, extensibility, and compliance with SQL standards, making it a popular choice for complex applications requiring reliable data integrity and sophisticated querying capabilities.

## Managed Object Storage

:::info
As of July 22, 2024, managed object storage is planned for future development.
:::
