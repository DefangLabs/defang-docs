---
title: Services
description: Defang allows you deploy services, defined as containers, to the cloud.
sidebar_position: 200
---

# Services

Defang allows you deploy services defined as containers. You can define your services using a [Compose file](./compose.md) or a [Pulumi program](./pulumi.md). Services can be exposed to the internet or kept private, and can communicate between themselves using the following conventions for hostnames:

`<username>-<service-name>`

### Service Name Resolution
As shown above, Defang identifies services by the [account username](./accounts.md) and the service name. 

:::tip
Service names are defined in your Compose file or your Pulumi program.
:::

This means that if you have multiple Defang projects with the same service name, they will conflict with each other. To avoid naming conflicts, we recommend using a different name for each service you define. 

### Service Deployment
Defang manages the deployment process for services. You can learn more about how services are deployed in the [Deployment page](./deployments.md).

:::info
We plan to add support for other types of services in the future, including serverless functions.
:::
