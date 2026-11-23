# Updating Your Services

This tutorial will show you how to update your services in Defang.

## Updating a Service[​](#updating-a-service "Direct link to Updating a Service")

To update your app (for example, updating the base image of your container, or making changes to your code) all you have to do is run the `defang compose up` command and it will build and deploy a new version.

## Deploying New Services or Removing Existing Services[​](#deploying-new-services-or-removing-existing-services "Direct link to Deploying New Services or Removing Existing Services")

If you are using [Compose files](https://docs.defang.io/docs/concepts/compose.md) to define your services, you can add/remove services, make changes to code, etc. When you run `defang compose up`, the update will be diffed against the current state and any necessary changes will be applied to make the current state match the desired state.

## Deployment Modes[​](#deployment-modes "Direct link to Deployment Modes")

Defang offers multiple [deployment modes](https://docs.defang.io/docs/concepts/deployment-modes.md). You can specify which mode you would like to be used when you deploy with the `--mode` flag on the CLI. The default mode is `affordable`. You may also specify `balanced` or `high_availability`.

```
$ defang compose up --mode=production
```

tip

Rather than passing `--mode` (and `--provider`) on every deploy, configure a [stack](https://docs.defang.io/docs/concepts/stacks.md), which records the provider, region, and mode for a deployment. The flags still work and override the stack when needed.

### Development Mode (Default)[​](#development-mode-default "Direct link to Development Mode (Default)")

The default deployment mode is `development`. This is the In this mode, the existing services will be deprovisioned before your new service will be spun up. This means that there will be a short downtime while the new service is being provisioned.

### Production Mode (Zero-downtime Updates)[​](#production-mode-zero-downtime-updates "Direct link to Production Mode (Zero-downtime Updates)")

If you are running in `production` mode, the update will be done with zero downtime. Your current version of the service will keep running and handling traffic while the new version is being built and deployed. Only after the new version passes the health checks and accepts traffic will the older version be stopped.

## Deleting your Application[​](#deleting-your-application "Direct link to Deleting your Application")

To delete your app, use `defang compose down` in your compose file working directory, or use the `--project-name` flag.

In some cases, particularly on the AWS platform, additional actions may be required. Specifically load balancers may have Deletion Protection on. To turn this off in the AWS Console for EC2 Load Balancers, follow these steps:

1. Select the load balancer corresponding to the app’s name.
2. Go to the Attributes tab.
3. Click the Edit button.
4. Locate Deletion Protection and disable it.

info

For more information on Deployment Modes, see the [Deployment Modes](https://docs.defang.io/docs/concepts/deployment-modes.md) concept documentation.
