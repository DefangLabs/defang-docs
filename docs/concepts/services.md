---
title: Services
description: Defang allows you deploy services, defined as containers, to the cloud.
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

## Service Status

An overview of the possible statuses for a service in Defang.

| Status | Details |
|-|-|
| BUILD_QUEUED | The service update has been received and is now in the queue for its image to be built. |
| BUILD_PROVISIONING | The container orchestrator is provisioning the necessary resources for building your service's image. |
| BUILD_PENDING | The necessary resources to build your service have been provisioned but the build has not yet been initiated. |
| BUILD_ACTIVATING | The container orchestrator is pulling the build container's image and creating the build container. |
| BUILD_RUNNING | The container which builds your service's image is successfully running. |
| BUILD_STOPPING | The container orchestrator has sent a termination signal to the build container and is waiting for the build process to stop. |
| BUILD_FAILED | The build container exited with a non-zero status code. |
| UPDATE_QUEUED | The service update has been received and is now in the queue. |
| SERVICE_DEPLOYMENT_PENDING | The necessary resources to run your service have been provisioned but the service has not yet been initiated. |
| SERVICE_DEPLOYMENT_COMPLETED | Your service has been deployed and is healthy. |
| SERVICE_DEPLOYMENT_FAILED | Your service could not be deployed. |

:::tip
You can run the `defang compose ps` command to view the status of your services.
:::
