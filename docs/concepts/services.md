# Services

Defang allows you to deploy services defined as containers. You can define your services using a [Compose file](https://docs.defang.io/docs/concepts/compose.md) or a [Pulumi program](https://docs.defang.io/docs/concepts/pulumi.md). Services can be exposed to the internet or kept private, and can communicate between themselves using certain conventions for hostnames.

### Service Name Resolution[​](#service-name-resolution "Direct link to Service Name Resolution")

Defang identifies services by using your [account username](https://docs.defang.io/docs/concepts/accounts.md), [project name](https://docs.defang.io/docs/concepts/projects.md), and service name. The port is included in the [domain](https://docs.defang.io/docs/concepts/domains.md) for the service.

tip

Service names are defined in your Compose file or in your Pulumi program.

* Playground
* BYOC

Domains for services in Playground follow the following pattern:

```
<username>-<service-name>--<port>.prod1a.defang.dev
```

Domains for services in Defang BYOC follow the following pattern:

```
<service-name>--<port>.<project-name>.<username>.defang.app
```

### Service Deployment[​](#service-deployment "Direct link to Service Deployment")

Defang manages the deployment process for services. You can learn more about how services are deployed in the [Deployment page](https://docs.defang.io/docs/concepts/deployments.md).

info

We plan to add support for other types of services in the future, including serverless functions.

## Service Status[​](#service-status "Direct link to Service Status")

An overview of the possible statuses for a service in Defang.

| Status                 | Details                                                                                                                       |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| BUILD\_QUEUED          | The service update has been received and is now in the queue for its image to be built.                                       |
| BUILD\_PROVISIONING    | The container orchestrator is provisioning the necessary resources for building your service's image.                         |
| BUILD\_PENDING         | The necessary resources to build your service have been provisioned but the build has not yet been initiated.                 |
| BUILD\_ACTIVATING      | The container orchestrator is pulling the build container's image and creating the build container.                           |
| BUILD\_RUNNING         | The container which builds your service's image is successfully running.                                                      |
| BUILD\_STOPPING        | The container orchestrator has sent a termination signal to the build container and is waiting for the build process to stop. |
| BUILD\_FAILED          | The build container exited with a non-zero status code.                                                                       |
| UPDATE\_QUEUED         | The service update has been received and is now in the queue.                                                                 |
| DEPLOYMENT\_PENDING    | The necessary resources to run your service have been provisioned but the service has not yet been initiated.                 |
| DEPLOYMENT\_COMPLETED  | Your service has been deployed and is healthy.                                                                                |
| DEPLOYMENT\_FAILED     | Your service could not be deployed.                                                                                           |
| DEPLOYMENT\_SCALED\_IN | The deployment has been scaled-in (spun down).                                                                                |

tip

You can run the `defang compose ps` command to view the status of your services.
