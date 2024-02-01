---
title: Defang BYOC
description: Defang allows you deploy services, defined as containers, to your own cloud accounts.
sidebar_position: 000
---

# Defang BYOC

Defang aims to to make it easier to deploy your services to the cloud. Specifically, Defang's goal is to make it easier to deploy your workloads to your *own* cloud accounts. We refer to this as bring-your-own-cloud (BYOC). We also provide Defang Hosted, but it is only intended for non-production workloads so you can get a feel for how Defang works.

To the extent possible, Defang will use resources that are native to the cloud provider you are using. The following describes the current state of Defang's support for various cloud providers, the specific resources that Defang uses, and the roadmap for future support.

## AWS

:::info
Public Beta of the v1 Defang BYOC AWS Provider is released as of Feb 1 2024.
:::

### Deployment

To deploy your services, the Defang CLI packages your code and uploads it to an S3 bucket in your account. The CLI then deploys an ECS task that uses Pulumi to build your container image and run your service.

### Runtime

The provider runs your workloads using ECS using Fargate. It provisions a VPC with public and private subnets, and deploys your services to the private subnets. It then provisions an Application Load Balancer (ALB) and CloudFront to route traffic to your services.

### Getting Started

Please read the [AWS Provider](../providers/aws.md) documentation for more details about how the AWS provider works and how to get started.

## Azure

:::info
We will be working on Azure support in the future. If you are interested in Azure support, please vote on [this issue](https://github.com/defang-io/defang/issues/57).
:::

## GCP

:::info
We will be working on GCP support in the future. If you are interested in GCP support, please vote on [this issue](https://github.com/defang-io/defang/issues/58).
:::