---
title: AWS
description: Defang allows you to easily create and manage full, scalable applications with AWS.
sidebar_position: 000
---

# AWS

:::info
Public Beta of the v1 Defang BYOC AWS Provider is released as of Feb 1 2024.
:::

Why should you use Defang with AWS? Defang allows you to easily create and manage full, scalable applications with AWS. Defang aims to make it easier to deploy your services to the cloud. Don't waste your time learning the ins and outs of AWS, deciding which of the 200+ services to use, and then writing the infrastructure code to deploy your services, and making sure they are properly secured. Defang does all of that for you.

## Getting Started

Getting started with the Defang BYOC AWS Provider is easy. The first step is to [authenticate your shell](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) with AWS as an admin user. The authenticated user should be an IAM admin because Defang will need permission to create resources and IAM roles in your account.

:::tip
If you have the aws CLI installed, you should be able to successfully run `aws sts get-caller-identity` and see your account ID.
:::

Use the `--provider=aws` flag to tell the Defang CLI to use the AWS Provider or set the `DEFANG_PROVIDER` environment variable to `aws`.

```bash
$ defang up --provider=aws
# or
$ export DEFANG_PROVIDER=aws
```

:::warning
The Defang CLI does not depend on the AWS CLI. It uses the [AWS SDK for Go](https://aws.amazon.com/sdk-for-go/) to interact with your AWS account. In most cases, if you can run the `aws sts get-caller-identity` from the tip above, you should be good to go. However, due to a difference between the AWS CLI and the AWS SDK for Go, there is at least one case where they behave differently: if you are using `aws sso login` and have clashing profiles in your `.aws/config` and `.aws/credentials` files, the AWS CLI will prioritize SSO profiles and caches over regular profiles, but the AWS SDK for Go will prioritize the credentials file, and it may fail.
:::

## Region

The Defang BYOC AWS Provider will use the region specified in the `AWS_REGION` environment variable, or a profile in the `~/.aws/config` file exactly as the AWS CLI would.

## Architecture

Defang uses resources that are native to the cloud provider you are using. The following describes the current state of Defang's support for AWS, the specific resources that Defang uses, and the roadmap for future support.

### Secrets

Defang allows you to configure your services with sensitive config values. Sensitive values are stored in AWS Systems Manager Parameter Store, and are encrypted.

### Deployment

To deploy your services, the Defang CLI packages your code and uploads it to an S3 bucket in your account. The CLI then deploys an ECS task that uses Pulumi to build your container image and run your service.

### Runtime

The provider runs your workloads using ECS using Fargate. It provisions a VPC with public and private subnets, and deploys your services to the private subnets. It then provisions an Application Load Balancer (ALB) and routes traffic to your services.

## Managed Storage

Defang can help you provision [managed storage](/docs/concepts/managed-storage/managed-storage.md) services. The following managed storage services are supported on AWS:

### Managed Postgres

When using [Managed Postgres](/docs/concepts/managed-storage/managed-postgres.md), the Defang CLI provisions an RDS Postgres instance in your account.

### Managed Redis

When using [Managed Redis](/docs/concepts/managed-storage/managed-redis.md), the Defang CLI provisions an ElastiCache Redis cluster in your account.
