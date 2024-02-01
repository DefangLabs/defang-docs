---
title: Defang Hosted
description: Defang Hosted allows you to get a feel for how Defang works without running production workloads in your own cloud accounts.
sidebar_position: 50
---

# Defang Hosted

Defang aims to make it easier to deploy your services to the cloud. Specifically, Defang's goal is to make it easier to deploy your workloads to your *own* cloud accounts. We refer to this as bring-your-own-cloud (BYOC) which you can read about in more depth [here](./defang-byoc). We also provide Defang Hosted, but it is only intended for non-production workloads so you can get a feel for how Defang works.

## Limitations

There are a few limitations to Defang Hosted. These limitations are in place to ensure that Defang Hosted is only used for non-production workloads. If you are interested in running production workloads, you should use Defang BYOC.

### No Domain Support

When you deploy a service to Defang Hosted, it will be assigned a domain under the `defang.dev` domain. We do not support pointing your own domains to Defang Hosted services.

### Max Resources

* Services: 5
* CPUs: 2
* Memory: 8GB
* Replicas: 2