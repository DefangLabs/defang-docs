---
title: Compose
description: Defang allows you to use the compose.yaml specification to deploy your application to the cloud.
sidebar_position: 400
---

# Compose

You might be familiar with [compose.yaml](https://docs.docker.com/compose/compose-file/) files, now known as the Compose specification and `compose.yaml` files. It's a simple way to define and run multi-container Docker applications. Defang allows you to use `compose.yaml` files to deploy your application to the cloud.

## How it works

You can define your [services](./services.md) using a `compose.yaml` file in the root of your project, or use the [`defang generate` command](../tutorials/generate-new-code-using-ai.mdx) to generate one (along with other resources). This file is used to define your application's services and how they run. You can edit this file to add more services or change the configuration of existing services.

When you run `defang up`, Defang will read your `compose.yaml` file and [deploy](./deployments.md) the services named in that file to the cloud.

## Service Name Resolution

One thing to keep in mind is that, at the time of this writing, Defang identifies services by the [user/account name](./accounts.md) and the service name (as defined in the `compose.yaml` file). This means that if you have multiple Defang projects with the same service name, they will conflict with each other. We plan to provide a more robust system for managing service names and protecting against conflicts in the future.

## Configuration

If you have a service that depends on a secret like an api key, you can set that [secret](./secrets.md) using the CLI:

```
defang secret set --name MY_API_KEY
```

and then connect it to the service by specifying it in the `compose.yaml`:

```
services:
  my-service:
    secrets:
      - MY_API_KEY
```

:::info Configuration & Secrets
Read more about configuration in the [configuration page](./configuration.md) and about secrets in the [secrets page](./secrets.md).
:::