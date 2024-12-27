---
title: Deployment
description: Defang will build your services in the cloud and manage the deployment process for you.
sidebar_position: 500
---

# Deployment

When you deploy using Defang, whether it's with `defang compose up` with a [Compose file](./compose.md) or using a [Pulumi program](./pulumi.md), Defang will build your services in the cloud and manage the deployment process for you. If you provide a Dockerfile and build context, Defang will upload the files found within the build context to the cloud (either yours in [Defang BYOC](./defang-byoc.md) or ours in [Defang Playground](./defang-playground.md)), build the image, and store it in the cloud provider's container registry. 

## Deploying Updates

When you run a deployment to update one or more [services](/docs/concepts/services), Defang will also make sure to get your new services up and running before deprovisioning any old services so you don't have to worry about downtime.

:::info
In [Defang BYOC](./defang-byoc.md), Defang uses your cloud provider account to build and store your images. In [Defang Playground](./defang-playground.md), we build and store your images for you.
:::

Note that we offer different [deployment modes](/docs/concepts/deployment-modes): development, staging, and production. You can switch the modes using the CLI. 

:::warning
Workloads with GPUs do not support zero downtime deployments. If you have a workload with a GPU, you will experience downtime during updates.
:::

## Instance Types

Defang defaults to "spot" instances. This is a cost-effective way to run your workloads, but it does mean that your workloads can be interrupted at any time. This is consistent with the [12 Factor](https://12factor.net/) principle of [disposability](https://12factor.net/disposability). 

:::info
In the future, we may provide a way to use "on-demand" instances for workloads that require more stability.
:::
