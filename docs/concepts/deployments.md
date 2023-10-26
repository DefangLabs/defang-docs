---
title: Deployments
description: Defang will build your services in the cloud and manage the deployment process for you.
sidebar_position: 250
---

# Deployments

When you deploy to Defang, whether it's with `defang compose up` or using a Pulumi program, Defang will build your services in the cloud and manage the deployment process for you. If you provide a Dockerfile and build context, Defang will upload the files found within the 
context, build the image, and store it in the [cloud provider's](./cloud-providers.md) container registry. Defang will also make sure to get your new service up and running before deprovisioning any old services so you don't have to worry about downtime.