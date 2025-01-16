---
title: Services
description: Defang allows you deploy services, defined as containers, to the cloud.
sidebar_position: 200
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Services

Defang allows you deploy services defined as containers. You can define your services using a [Compose file](./compose.md) or a [Pulumi program](./pulumi.md). Services can be exposed to the internet or kept private, and can communicate between themselves using certain conventions for hostnames.

### Service Name Resolution

Defang identifies services by using your [account username](/docs/concepts/accounts), [project name](/docs/concepts/projects), and service name. The port is included in the [domain](/docs/concepts/domains) for the service.


:::tip
Service names are defined in your Compose file or in your Pulumi program.
:::

<Tabs>
  <TabItem value="playground" label="Playground" default>
    Domains for services in Playground follow the following pattern:
    ```
    <username>-<service-name>--<port>.prod1a.defang.dev
    ```
  </TabItem>
  <TabItem value="byoc" label="BYOC">
    Domains for services in Defang BYOC follow the following pattern:
    ```
    <service-name>--<port>.<project-name>.<username>.defang.app
    ```
  </TabItem>
</Tabs>


### Service Deployment
Defang manages the deployment process for services. You can learn more about how services are deployed in the [Deployment page](./deployments.md).

:::info
We plan to add support for other types of services in the future, including serverless functions.
:::
