# Deployment

When you deploy using Defang, whether it's with `defang compose up` with a [Compose file](https://docs.defang.io/docs/concepts/compose.md) or using a [Pulumi program](https://docs.defang.io/docs/concepts/pulumi.md), Defang will build your services in the cloud and manage the deployment process for you. If you provide a Dockerfile and build context, Defang will upload the files found within the build context to the cloud, build the image, and store it in the cloud provider's container registry.

## Deploying Updates[​](#deploying-updates "Direct link to Deploying Updates")

When you run a deployment to update one or more [services](https://docs.defang.io/docs/concepts/services.md), Defang will build new images for your services, and provision new resources to replace your existing services.

### Zero Downtime Deployments[​](#zero-downtime-deployments "Direct link to Zero Downtime Deployments")

Defang can deploy your services using different [modes](https://docs.defang.io/docs/concepts/deployment-modes.md). When using the `high_availability` mode, Defang will make sure the new replacement services are healthy before deprovisioning your existing services.

By default, using the `affordable` mode, Defang will deprovision your existing services before provisioning replacements. This helps reduce costs.

info

In [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc.md), Defang uses your cloud provider account to build and store your images.

### Deployment Modes[​](#deployment-modes "Direct link to Deployment Modes")

As mentioned above, Defang offers different [deployment modes](https://docs.defang.io/docs/concepts/deployment-modes.md): `affordable`, `balanced`, and `high_availability`. You choose the mode when you create a [stack](https://docs.defang.io/docs/concepts/stacks.md), which records the provider, region, and mode for a deployment.

warning

Workloads with GPUs do not support zero downtime deployments. If you have a workload with a GPU, you will experience downtime during updates.

## Instance Types[​](#instance-types "Direct link to Instance Types")

Defang defaults to "spot" instances. This is a cost-effective way to run your workloads, but it does mean that your workloads can be interrupted at any time. This is consistent with the [12 Factor](https://12factor.net/) principle of [disposability](https://12factor.net/disposability).

info

In the future, we may provide a way to use "on-demand" instances for workloads that require more stability.
