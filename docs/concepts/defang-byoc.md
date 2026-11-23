# Defang BYOC

Defang aims to make it easier to deploy your services to the cloud. Specifically, Defang's goal is to make it easier to deploy your workloads to your *own* cloud accounts. We refer to this as bring-your-own-cloud (BYOC).

Pricing

BYOC is available on all tiers (Starter, Pro, Enterprise). The Starter tier (free) includes 1 cloud account. Pro ($49/mo) includes 1 cloud account with additional deployment modes. Enterprise ($499/mo) includes 3 cloud accounts with fleet management capabilities.

Defang provisions and configures the necessary native managed services from your cloud provider to get your services up and running. For example, on AWS, Defang will configure an [ALB](https://aws.amazon.com/elasticloadbalancing/application-load-balancer/), set up [ECR](https://aws.amazon.com/ecr/), configure [CloudWatch](https://aws.amazon.com/cloudwatch/?nc2=type_a), and run your service on [ECS](https://aws.amazon.com/ecs/?nc2=type_a) and more. The following lists the existing and planned support for cloud providers.

info

Defang does not install or run any Defang or third party services at runtime. Defang does run the Defang build service to build your container images, which terminates after every build.

### Configuration[​](#configuration "Direct link to Configuration")

The Defang CLI can be configured to deploy to a cloud provider either by using the `--provider` flag or by setting the `DEFANG_PROVIDER` environment variable. For example:

```
# Supported provider values: auto, aws, azure, gcp
# Default is auto, which uses detected cloud credentials when available
$ defang compose up --provider=aws
# or
$ export DEFANG_PROVIDER=gcp
```

## AWS[​](#aws "Direct link to AWS")

Please read the [AWS Provider](https://docs.defang.io/docs/providers/aws.md) documentation for more details about how the AWS provider works and how to get started.

AWS Free Tier & Credits

You can use the AWS Free Tier to try out Defang. Learn more about it [here](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank\&all-free-tier.sort-order=asc\&awsf.Free%20Tier%20Types=*all\&awsf.Free%20Tier%20Categories=*all). If you're an eligible startup, you can sign up for credits [here](https://aws.amazon.com/startups/sign-up?referrer_url_path=%2Fstartups).

## DigitalOcean[​](#digitalocean "Direct link to DigitalOcean")

Deprecated

The DigitalOcean provider is deprecated. For new projects, use AWS, Google Cloud or Azure.

The [DigitalOcean Provider](https://docs.defang.io/docs/providers/digitalocean.md) page describes how it works for existing users.

## GCP[​](#gcp "Direct link to GCP")

info

The Defang GCP Provider is available for Public Preview as of December 2024.

Please check out the [GCP Provider](https://docs.defang.io/docs/providers/gcp.md) page for more details.

GCP Free Tier & Credits

You can use the GCP Free Tier to try out Defang. Learn more about it [here](https://cloud.google.com/free). If you're an eligible startup, you can sign up for credits [here](https://cloud.google.com/developers/startups).

## Azure[​](#azure "Direct link to Azure")

Please read the [Azure Provider](https://docs.defang.io/docs/providers/azure.md) documentation for more details about how the Azure provider works and how to get started.

Azure Free Tier & Credits

You can use the Azure Free Tier to try out Defang. Learn more about it [here](https://azure.microsoft.com/en-us/free/). If you're an eligible startup, you can sign up for credits through [Microsoft for Startups](https://www.microsoft.com/en-us/startups).
