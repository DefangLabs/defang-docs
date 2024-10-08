---
sidebar_position: 200
title: Getting Started
description: Get started with Defang.
---


# Getting Started


### Install the CLI

First, you'll need to install the Defang CLI. The CLI is the primary way to interact with Defang. It allows you to create, deploy, and manage your services. You can find the [different installation methods here](./installing.md).

### Authenticate with Defang

To do pretty much anything with Defang, you'll need to authenticate with the platform. You can do this by running the following command:

```bash
defang login
```

:::info
To learn more about how authentication works in defang, check out the [authenticating page](./authenticating.md).
:::

### Agree to the terms of service

Before you can deploy code you should read and agree to our the terms of service. You can do this by running:

```bash
defang terms
```

### Build and Deploy Services

Defang supports various ways of creating and deploying services to the cloud. The following tutorials dive into each one in more detail:

1. [Deploy an outline using AI](../tutorials/generate-new-code-using-ai.mdx)
2. [Build and deploy your code](../tutorials/deploy-code-compose.mdx)
3. [Deploy existing containers](../tutorials/deploy-container-using-the-cli.mdx)
4. [Deploy using Pulumi](../tutorials/deploy-using-pulumi.mdx)


### Monitor Services

By default, all the output (stdout and stderr) from your app is logged. You can view these logs in real-time. You can view logs for all your services, one service, or even one specific deployment of a service.

- From the CLI:

    ```tsx
    defang tail --name service1
    ```

- From the Defang Portal:

    [https://portal.defang.dev/](https://portal.defang.dev/)


:::info
* To learn more about observability in Defang, check out the [observability page](../concepts/observability.md).
* Note that the Defang Portal only displays services deployed to Defang Playground.
:::


### Update Services

To update your app (for example, updating the base image of your container, or making changes to your code) you can run the `defang compose up` command and it will build and deploy a new version with zero downtime. Your current version of the service will keep running and handling traffic while the new version is being built and deployed. Only after the new version passes the health checks and accepts traffic will the older version be stopped.

:::info
If you are using [compose files](../concepts/compose.md) to define your services, you can add/remove services, make changes to code, etc. When you run `defang compose up`, the update will be diffed against the current state and any necessary changes will be applied to make the current state match the desired state.
:::
