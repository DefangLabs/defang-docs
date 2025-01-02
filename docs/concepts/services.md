---
title: Services
description: Defang allows you deploy services, defined as containers, to the cloud.
sidebar_position: 200
---

# Services

Defang allows you deploy services defined as containers. You can define your services using a [Compose file](./compose.md) or a [Pulumi program](./pulumi.md). Services can be exposed to the internet or kept private, and can communicate between themselves using the following conventions for hostnames:

`<username>-<service-name>`

You can learn more about accounts and usernames in the [Accounts page](./accounts.md).

:::tip
Service names are defined in your Compose file or your Pulumi program.
:::

Defang manages the deployment process for services. You can learn more about how services are deployed in the [Deployment page](./deployments.md).

:::info
We plan to add support for other types of services in the future, including serverless functions.
:::

### Status
Below is an overview of the possible statuses for a service in Defang. 

| Status | Details |
|-|-|
| BUILD_QUEUED | The build is being queued. | 
| BUILD_PROVISIONING | The build is provisioning. | 
| BUILD_PENDING | The build is pending. | 
| BUILD_ACTIVATING | The build is activating. | 
| BUILD_RUNNING | The build is running. | 
| BUILD_STOPPING | The build is stopping. | 
| BUILD_FAILED | The build failed. | 
| SERVICE_DEPLOYMENT_PENDING | The deployment is pending. | 
| SERVICE_DEPLOYMENT_COMPLETED | The deployment completed. | 
| SERVICE_DEPLOYMENT_FAILED | The deployment failed. | 
