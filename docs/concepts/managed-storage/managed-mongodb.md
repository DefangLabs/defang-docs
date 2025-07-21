---
title: Managed MongoDB
description: Defang can help you provision managed MongoDB instances.
sidebar_position: 3000
---

# Managed MongoDB

:::info
This feature was introduced in Defang v1.2.0 released on June 3, 2025 for AWS. [Upgrade to the latest version](/docs/cli/defang_upgrade)
:::

Managed MongoDB is a service that allows you to store and retrieve large amounts of data in a document-oriented format. MongoDB is ideal for storing unstructured data like JSON documents, making it a popular choice for modern applications.

## Current Support

| Provider | Managed MongoDB |
| --- | --- |
| [Playground](/docs/providers/playground#managed-services) | ⚠️ Unmanaged |
| [AWS](/docs/providers/aws#managed-storage) | ✅ DocumentDB |
| [DigitalOcean](/docs/providers/digitalocean#future-improvements) | ⚠️ Unmanaged |
| [GCP](/docs/providers/gcp#future-improvements) | ✅ Firestore |

## How to use Managed MongoDB

To use managed MongoDB, in your `compose.yaml` file, use the `x-defang-mongodb` extension to define your MongoDB service. Adding the extension will tell Defang to provision a managed instance, rather than running MongoDB as a container.

### Required Configuration

### AWS
When using managed MongoDB on AWS, you **must** set a username and password for the database. By default, these are read from the `MONGO_INITDB_ROOT_USERNAME` and `MONGO_INITDB_ROOT_PASSWORD` config variables, following [the official MongoDB container image](https://hub.docker.com/_/mongo) convention.

You can set these using the following commands:

```bash
defang config set MONGO_INITDB_ROOT_USERNAME <your-username>
defang config set MONGO_INITDB_ROOT_PASSWORD <your-password>
```

If you do not provide these values, the deployment will fail.

### GCP

When using managed MongoDB on GCP, you **must** set a `MONGO_INITDB_DATABASE` environment variable with the name of the database to create.

```yaml
services:
  db:
    x-defang-mongodb: true
    environment:
      MONGO_INITDB_DATABASE: mydb
```

**Important:** It's recommended that you **DO NOT** set `MONGO_INITDB_ROOT_USERNAME` and `MONGO_INITDB_ROOT_PASSWORD` config variables when using GCP. This is because GCP Firestore does not create default user accounts when creating MongoDB databases, and setting these credentials may cause connection issues.### Example

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
