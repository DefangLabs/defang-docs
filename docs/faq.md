---
sidebar_position: 600
title: FAQ
description: Frequently asked questions about Defang.
---


# FAQ

### Which cloud/region is the app being deployed to?

- In the [Defang Playground](./concepts/defang-playground.md) the app is deployed to AWS `us-west-2`. In the [Defang BYOC](./concepts/defang-byoc.md) model, the region is determined by your [Defang BYOC Provider](/docs/category/providers) settings.

### Can I bring my own AWS or other cloud account?

- Yes! Please check out the [Defang BYOC](./concepts/defang-byoc.md) documentation for more information.

### On AWS, can I deploy to services such as EC2, EKS, or Lambda?

- The current release includes support for containers only, deployed to ECS. We are still exploring how to support additional execution models such as VMs and functions-as-a-service. However, using our Pulumi provider, it is possible to combine Defang services with other native AWS resources.

### Can I access AWS storage services such as S3 or database services such as RDS? How?

- Yes, you can access whatever other resources exist in the cloud account you are using as a [Defang BYOC](./concepts/defang-byoc.md) Provider.

### Do you plan to support other clouds?

- While we currently support AWS as a [Defang BYOC](./concepts/defang-byoc.md) Provider, we plan to support other clouds in future releases, such as [Azure](./providers/azure.md) and [GCP](./providers/gcp.md).

### Can I run production apps with Defang?

- The [Defang Playground](./concepts/defang-playground.md) is meant for testing and trial purposes only. Deployment of productions apps with [Defang BYOC](./concepts/defang-byoc.md) is not yet supported and disallowed by the [Terms of Service](https://defang.io/terms-service.html). If you are interested in running production apps, please [contact us](https://defang.io/#Contact-us).
