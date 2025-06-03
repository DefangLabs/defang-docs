---
title: Managed MongoDB
description: Defang can help you provision managed MongoDB instances.
sidebar_position: 3000
---

# Managed MongoDB

:::info
This feature was introduced in Defang v1.2.0 released on June 3, 2025. [Upgrade to the latest version](https://docs.defang.io/docs/cli/defang_upgrade)
:::

Managed MongoDB is a service that allows you to store and retrieve large amounts of data in a document-oriented format. MongoDB is ideal for storing unstructured data like JSON documents, making it a popular choice for modern applications.

## Current Support

| Provider | Managed MongoDB |
| --- | --- |
| [Playground](/docs/providers/playground#managed-services) | ⚠️ Unmanaged |
| [AWS](/docs/providers/aws#managed-storage) | ✅ |
| [DigitalOcean](/docs/providers/digitalocean#future-improvements) | ❌ |
| [GCP](/docs/providers/gcp#future-improvements) | ❌ |

## How to use Managed MongoDB

To use managed MongoDB, in your `compose.yaml` file, use the `x-defang-mongodb` extension to define your MongoDB service. Adding the extension will tell Defang to provision a managed instance, rather than running MongoDB as a container.

### Required Configuration

When using managed MongoDB, you **must** set a username and password for the database. By default, these are read from the `MONGO_INITDB_ROOT_USERNAME` and `MONGO_INITDB_ROOT_PASSWORD` config variables, conform [the official MongoDB container image](https://hub.docker.com/_/mongo). These can be set using the `defang config set MONGO_INITDB_ROOT_USERNAME` and `defang config set MONGO_INITDB_ROOT_PASSWORD` commands. If you do not provide these values, the deployment will fail.

### Example

```yaml
services:
  app:
    # [...]
    environment:
      MONGO_URI: mongodb://$MONGO_INITDB_ROOT_USERNAME:$MONGO_INITDB_ROOT_PASSWORD@db:27017/
    depends_on:
      - db

  db:
    image: mongo:5
    x-defang-mongodb: true
```

:::warning[Version]
AWS DocumentDB is compatible with MongoDB 3.6, 4.0, and 5.0. The `mongo:5` image is compatible with DocumentDB 5.0, so we recommend using this version for your MongoDB service. Deployment will fail for versions higher than 5.
:::
