---
title: Deployment
description: Defang will build your services in the cloud and manage the deployment process for you.
sidebar_position: 250
---

# Deployment

When you deploy using Defang, whether it's with `defang compose up` with a [compose file](./compose.md) or using a [Pulumi program](./pulumi.md), Defang will build your services in the cloud and manage the deployment process for you. If you provide a Dockerfile and build context, Defang will upload the files found within the build context to the cloud (either yours in [Defang BYOC](./defang-byoc.md) or ours in [Defang Playground](./defang-playground.md)), build the image, and store it in the cloud provider's container registry. Defang will also make sure to get your new service up and running before deprovisioning any old services so you don't have to worry about downtime.

:::info
In [Defang BYOC](./defang-byoc.md), Defang will use your cloud provider account to build and store your images. In [Defang Playground](./defang-playground.md) we will build and store your images for you.
:::