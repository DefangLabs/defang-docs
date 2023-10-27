---
title: Services
description: Defang allows you deploy services, defined as containers, to the cloud.
sidebar_position: 200
---

# Services

At the moment, all services deployed with Defang are containerized. This means that you can use any container image from Docker Hub or any other container registry, including private registries. You can also use a local Dockerfile: when you run `defang compose up` or run your [Pulumi program](./pulumi.md), Defang will package your application source and upload it to the cloud to run the build process.

:::info
While this is the current state of the Defang model, we plan to add support for other types of services in the future, including serverless functions.
:::
