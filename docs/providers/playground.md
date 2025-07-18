---
title: Playground
description: The Defang Playground is a free tier that allows you to experiment with Defang.
sidebar_position: 0000
---

The Defang Playground is a free deployment provider that allows you to experiment with Defang. The Playground is a shared environment that should not be used to run production workloads. The Playground is a great way to get started with Defang. You can even use [1-Click Deploy](/docs/tutorials/using-one-click-deploy) to try it out quickly or you can get started with the [Defang CLI](/docs/getting-started).

This page highlights architectural considerations when deploying to the Playground and any differences you might encounter when deploying to the Playground versus deploying to your own cloud account.

:::info
The Playground allows only 1 deployed project at a time. Use the CLI `defang down` command to tear down a project before deploying a new one.
:::

## Overview

Overall, the Defang Playground is very similar to deploying to your own cloud account. The Playground runs on a Defang-managed AWS account, so you can expect it to work similarly to deploying to [AWS](./aws/aws.md).

### Managed services

In essence, the Playground does not support any [managed storage](../concepts/managed-storage) services, ie. `x-defang-postgres` and `x-defang-redis` are ignored when deploying to the Playground. You can however run both Postgres and Redis as regular container services for testing purposes.

### Managed LLMs

Defang offers integration with managed, cloud-native large language model services with the `x-defang-llm` service extension when deploying to your own cloud account with BYOC. This extension is supported in the Defang Playground with one caveat: your MODEL (model ID) will be limited to a default model chosen by Defang.
