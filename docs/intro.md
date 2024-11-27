---
sidebar_position: 100
title: Overview
description: Overview of Defang, a radically simpler way to develop, deploy, and debug production-ready cloud apps.
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/afglsBYieuc?si=iKgUX4ejz7AixxqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### What is Defang?

Defang is a radically simpler way for developers to develop, deploy, and debug their cloud applications. Defang enables you to easily author cloud application in any language, build and deploy to the cloud with a single command, and iterate quickly with AI-assisted tooling.

- The [Defang CLI](./getting-started/installing.md) includes an AI-driven assistant that translates natural language prompts to an outline for your project that you can then refine.
- Defang can automatically build and deploy your project with a single command.
    - If you’re new to Defang, you can try deploying to the [Defang Playground](./concepts/defang-playground.md), a hosted environment to learn to use Defang with non-production workloads.
    - Once you’re ready, you can [deploy](./concepts/deployments.md) it to your own cloud account - we call this [Defang BYOC](./concepts/defang-byoc.md). Defang takes care of all the heavy lifting such as configuring networking, security, [observability](./concepts/observability.md) and all the other details that usually slow down the average cloud developer.
- You can also use Defang to easily [publish updates](./concepts/deployments.md#deploying-updates) to your deployed application with zero downtime.

### Features

Defang provides a streamlined experience to develop, deploy, observe, and update your cloud applications. Defang includes the following features:

- Support for [various types of applications](./use-cases/use-cases.md): Web services and APIs, mobile app backends, ML services, hosting LLMs, etc.
- Support for your programming [language of choice](./samples.md): Node.js, Python, Golang, or anything else you can package in a Dockerfile.
- Built-in AI assistant to go [from natural language prompt to an outline project](./concepts/generate.md)
- Built-in AI assistant to help you [debug your cloud applications](./concepts/debug.md)
- Automated [Dockerfile builds](./concepts/deployments.md)
- Support for [pre-built Docker containers](./tutorials/deploy-container-using-the-cli.mdx), from public or private image registries
- Ability to express your project configuration using a [Docker Compose YAML](./concepts/compose.md) file
- Ability to manage [encrypted configuration values](./concepts/configuration.md)
- Pre-configured environments with built-in [security](./concepts/security.md), [networking](./concepts/networking.mdx), and [observability](./concepts/observability.md)
- [One-command deployments](./getting-started/installing.md)
- Support for [GPUs](./concepts/resources.md)
- Support for Infra-as-Code via the [Defang Pulumi provider](./concepts/pulumi.md)
