---
title: Defang Playground
description: Defang Playground allows you to get a feel for how Defang works without running production workloads in your own cloud accounts.
sidebar_position: 00
---

# Defang Playground

Defang aims to make it easier to deploy your services to the cloud. Specifically, Defang's goal is to make it easier to deploy your workloads to your *own* cloud accounts. We refer to this as bring-your-own-cloud (BYOC) which you can read about in more depth [here](./defang-byoc). We also provide Defang Playground, but it is only intended for non-production workloads so you can get a feel for how Defang works. 

Defang Playground is a free tier that allows you to deploy services to a Defang-hosted cloud account without needing to manage your own. It is intended for non-production workloads only.

## Limitations

There are a few limitations to Defang Playground. These limitations are in place to ensure that Defang Playground is only used for non-production workloads. If you are interested in running production workloads, you should use Defang BYOC.

### No Custom Domain Support

When you deploy a service to Defang Playground, it will be assigned a domain under the `defang.dev` domain. We do not support pointing your own domains to Defang Playground services.

### Max Resources

* Services: 5
* CPUs: 2
* Memory: 8GB
* Replicas: 2