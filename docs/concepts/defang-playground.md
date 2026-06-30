---
title: Defang Playground
description: Defang Playground is deprecated in favor of the Starter tier for BYOC deployments.
---

# Defang Playground

:::note
Defang Playground is being deprecated. Users are encouraged to use the **Starter** tier (free) to deploy to their own cloud account via [BYOC](./defang-byoc). Existing Playground users will be migrated to the Starter tier.
:::

Defang aims to make it easier to deploy your services to the cloud. Specifically, Defang's goal is to make it easier to deploy your workloads to your *own* cloud accounts. We refer to this as bring-your-own-cloud (BYOC), which you can read about in more depth [here](./defang-byoc).

Defang Playground is a legacy free environment that allows you to deploy services to a Defang-hosted cloud account without needing to manage your own. It is intended for non-production workloads only.

:::warning
Please note that the Defang Playground is intended for testing/learning purposes only. The environment may be reset at any time. Do not run production workloads in Defang Playground.
:::

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
