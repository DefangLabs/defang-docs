---
sidebar_position: 100
title: Overview
description: Overview of Defang, a radically simpler way to build, deploy, and optimize production-ready cloud apps.
---


### What is Defang?

Defang is a radically simpler way for developers to build, deploy their apps to the cloud. Defang enables you to easily author cloud application in any language, build and deploy to the cloud with a single command, and iterate quickly.

- The [Defang CLI](./getting-started/installing.md) includes an AI-driven assistant that translates natural language prompts to an outline for your project that you can then refine.
- Defang can automatically build and deploy your project with a single command.
    - If you’re new to Defang, you can try deploying to the [Defang Playground](./concepts/defang-playground.md), a hosted environment to learn to use Defang with non-production workloads.
    - Once you’re ready, you can [deploy](./concepts/deployments.md) it to your own cloud account - we call this [Defang BYOC](./concepts/defang-byoc.md). Defang takes care of all the heavy lifting such as configuring networking, security, [observability](./concepts/observability.md) and all the other details that usually slow down the average cloud developer.
- You can also use Defang to easily publish updates to your deployed application with zero downtime.

### Details

Defang provides a streamlined experience to develop, deploy, observe, and update your cloud applications. Defang includes the following features:

- Support for various types of applications: Web services and APIs, mobile app backends, ML services, etc.
- Support for your programming language of choice: Node.js, Python, Golang, or anything else you can package in a Dockerfile.
- Built-in AI assistant to go from natural language prompt to an outline project
- Automated Dockerfile builds
- Support for pre-built Docker containers, from public or private image registries
- Ability to express your project configuration using a [Docker Compose YAML](./concepts/compose.md) file
- Ability to manage encrypted [secrets](./concepts/secrets.md) and [configuration](./concepts/configuration.md)
- Pre-configured, secure environments with built-in networking, IAM roles, and observability
- One-command deployments
- Support for [GPUs](./concepts/resources.md)
- Support for Infra-as-Code via the [Defang Pulumi provider](./concepts/pulumi.md)
- Built-in observability

