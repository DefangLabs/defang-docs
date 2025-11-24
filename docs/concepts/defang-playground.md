---
title: Defang Playground
description: Defang Playground allows you to get a feel for how Defang works without running production workloads in your own cloud accounts.
sidebar_position: 00
---

# Defang Playground

Defang aims to make it easier to deploy your services to the cloud. Specifically, Defang's goal is to make it easier to deploy your workloads to your *own* cloud accounts. We refer to this as bring-your-own-cloud (BYOC) which you can read about in more depth [here](./defang-byoc). We also provide Defang Playground, but it is only intended for non-production workloads so you can get a feel for how Defang works.

Defang Playground is a free tier that allows you to deploy services to a Defang-hosted cloud account without needing to manage your own. It is intended for non-production workloads only. The Playground is a great way to get started with Defang. You can even use [1-Click Deploy](/docs/tutorials/using-one-click-deploy) to try it out quickly or you can get started with the [Defang CLI](/docs/getting-started).

:::warning
Please note that the Defang Playground is intended for testing/learning purposes only. The environment may be reset at any time. Do not run production workloads in Defang Playground.
:::

:::info
The Playground allows only 1 deployed project at a time. Use the CLI `defang down` command to tear down a project before deploying a new one.
:::

## Overview

Overall, the Defang Playground is very similar to deploying to your own cloud account. The Playground runs on Defang-managed GCP and AWS accounts, so you can expect it to work similarly to deploying to your own cloud.

This page highlights architectural considerations when deploying to the Playground and any differences you might encounter when deploying to the Playground versus deploying to your own cloud account.

## Limitations

There are a few limitations to Defang Playground. These limitations are in place to ensure that Defang Playground is only used for non-production workloads. If you are interested in running production workloads, you should use Defang BYOC.

### No Apex Domain Support

When you deploy a service to Defang Playground, it will be assigned a domain under the `defang.dev` domain. We do not support pointing your own apex domains to Defang Playground services, but you can use subdomains.

### Max Resources

* Projects: 1
* Services: 4
* CPUs: 2
* Memory: 1GiB
* Replicas: 1

### Managed services

In essence, the Playground does not support any [managed storage](./managed-storage) services, ie. `x-defang-postgres` and `x-defang-redis` are ignored when deploying to the Playground. You can however run both Postgres and Redis as regular container services for testing purposes.

### Managed LLMs

Defang offers integration with managed, cloud-native large language model services with the `x-defang-llm` service extension when deploying to your own cloud account with BYOC. This extension is supported in the Defang Playground with one caveat: your MODEL (model ID) will be limited to a default model chosen by Defang.
