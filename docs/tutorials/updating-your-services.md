---
sidebar_position: 500
title: Updating Your Services
description: How to update services deployed with Defang
---

# Updating Your Services

This tutorial will show you how to update your services in Defang.

## Updating a Service

To update your app (for example, updating the base image of your container, or making changes to your code) all you have to do is run the `defang compose up` command and it will build and deploy a new version.

## Deploying New Services or Removing Existing Services

If you are using [Compose files](../concepts/compose.md) to define your services, you can add/remove services, make changes to code, etc. When you run `defang compose up`, the update will be diffed against the current state and any necessary changes will be applied to make the current state match the desired state.

## Deployment Modes

Defang offers multiple [deployment modes](/docs/concepts/deployment-modes). You can specify which mode you would like to be used when you deploy with the `--mode` flag on the CLI. The default mode is `development`. You may also specify `staging` or `production`.

```shell
$ defang compose up --mode=production
```

### Development Mode (Default)

The default deployment mode is `development`. This is the In this mode, the existing services will be deprovisioned before your new service will be spun up. This means that there will be a short downtime while the new service is being provisioned.

### Production Mode (Zero-downtime Updates)

If you are running in `production` mode, the update will be done with zero downtime. Your current version of the service will keep running and handling traffic while the new version is being built and deployed. Only after the new version passes the health checks and accepts traffic will the older version be stopped.

To teardown a production app Termination Protection must be disabled. This can be done in two ways. 

- Use `defang compose up --mode=staging` to change the app to a non-delete protected mode. `defang compose down` can then be executed after the deployment mode has been changed.

OR

- Alternatively, in the AWS console for EC2 Instances dashboard you can turn off Termination Protection for the desired app. 


:::info
For more information on Deployment Modes, see the [Deployment Modes](/docs/concepts/deployment-modes) concept documentation.
:::
