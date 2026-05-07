---
title: Defang BYOC
description: Defang allows you deploy services, defined as containers, to your own cloud accounts.
---

# Defang BYOC

Defang aims to make it easier to deploy your services to the cloud. Specifically, Defang's goal is to make it easier to deploy your workloads to your *own* cloud accounts. We refer to this as bring-your-own-cloud (BYOC).

:::info[Pricing]
BYOC is available on all Navigator tiers. The Starter tier (free) includes 1 cloud account. Pro ($49/mo) includes 1 cloud account with additional deployment modes. Enterprise ($499/mo) includes 3 cloud accounts with fleet management capabilities.
:::

Defang provisions and configures the necessary native managed services from your cloud provider to get your services up and running. For example, on AWS, Defang will configure an [ALB](https://aws.amazon.com/elasticloadbalancing/application-load-balancer/), set up [ECR](https://aws.amazon.com/ecr/), configure [CloudWatch](https://aws.amazon.com/cloudwatch/?nc2=type_a), and run your service on [ECS](https://aws.amazon.com/ecs/?nc2=type_a) and more. The following lists the existing and planned support for cloud providers.

:::info
Defang does not install or run any Defang or third party services at runtime.
Defang does run the Defang build service to build your container images, which terminates after every build.
:::

### Configuration

The Defang CLI can be configured to deploy to a cloud provider either by using the `--provider` flag or by setting the `DEFANG_PROVIDER` environment variable. For example:

```bash
# Supported provider values: auto, aws, azure, defang, digitalocean, gcp
# Default is auto, which uses detected cloud credentials when available
$ defang compose up --provider=aws
# or
$ export DEFANG_PROVIDER=digitalocean
```

## AWS

Please read the [AWS Provider](/docs/providers/aws) documentation for more details about how the AWS provider works and how to get started.

:::tip[AWS Free Tier & Credits]
You can use the AWS Free Tier to try out Defang. Learn more about it [here](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all). If you're an eligible startup, you can sign up for credits [here](https://aws.amazon.com/startups/sign-up?referrer_url_path=%2Fstartups).
:::

## DigitalOcean

:::info

The Defang DigitalOcean Provider is available for Public Preview as of October 2024.
:::

Please read the [DigitalOcean Provider](/docs/providers/digitalocean) documentation for more details about how the DigitalOcean provider works and how to get started.

:::tip[DigitalOcean Credits]
You can get DigitalOcean credits to try out Defang. Learn more about it on their [pricing page](https://www.digitalocean.com/pricing). If you're an eligible startup, you can sign up for credits [here](https://www.digitalocean.com/hatch).
:::

## GCP

:::info
The Defang GCP Provider is available for Public Preview as of December 2024.
:::

Please check out the [GCP Provider](/docs/providers/gcp/) page for more details.

:::tip[GCP Free Tier & Credits]
You can use the GCP Free Tier to try out Defang. Learn more about it [here](https://cloud.google.com/free). If you're an eligible startup, you can sign up for credits [here](https://cloud.google.com/developers/startups).
:::

## Azure

:::info
The Defang Azure Provider is available for Public Preview.
:::

Please read the [Azure Provider](/docs/providers/azure) documentation for more details about how the Azure provider works and how to get started.

:::tip[Azure Free Tier & Credits]
You can use the Azure Free Tier to try out Defang. Learn more about it [here](https://azure.microsoft.com/en-us/free/). If you're an eligible startup, you can sign up for credits through [Microsoft for Startups](https://www.microsoft.com/en-us/startups).
:::
