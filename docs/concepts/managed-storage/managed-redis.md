---
title: Managed Redis
description: Defang can help you provision managed Redis instances.
sidebar_position: 2000
---

# Managed Redis

Redis is an in-memory data structure store widely used for caching, real-time analytics, and session management due to its high performance, low latency, and support for various data types. Defang can help you provision a managed Redis instance.

## Current Support

| Provider | Managed Redis |
| --- | --- |
| [Playground](/docs/providers/playground.md#managed-redis) | ❌ |
| [AWS](/docs/providers/aws/aws.md#managed-redis) | ✅ |
| [DigitalOcean](/docs/providers/digitalocean/digitalocean.md) | ❌ |

## How to use Managed Redis

To use managed Redis, in your `compose.yaml` file, use the `x-defang-redis` extension to define your Redis service. Adding the extension will tell Defang to provision a managed instance, rather than running Redis as a service. Defang will use the image tag to determine the version to provision from your cloud provider. Here's an example:

```yaml
cache:
  image: redis:6.2
  x-defang-redis: true
  restart: unless-stopped
  ports:
    - mode: host
      target: 6379
```
