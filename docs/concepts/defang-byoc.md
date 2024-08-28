---
title: Defang BYOC
description: Defang allows you deploy services, defined as containers, to your own cloud accounts.
sidebar_position: 50
---

# Defang BYOC

Defang aims to make it easier to deploy your services to the cloud. Specifically, Defang's goal is to make it easier to deploy your workloads to your *own* cloud accounts. We refer to this as bring-your-own-cloud (BYOC). We also provide Defang Playground, but it is only intended for non-production workloads so you can get a feel for how Defang works.

Defang provisions and configures the necessary native managed services from your cloud provider to get your services up and running. For example, on AWS, Defang will configure an [ALB](https://aws.amazon.com/elasticloadbalancing/application-load-balancer/), setup [ECR](https://aws.amazon.com/ecr/), configure [CloudWatch](https://aws.amazon.com/cloudwatch/?nc2=type_a), and run your service on [ECS](https://aws.amazon.com/ecs/?nc2=type_a) and more. The following lists the existing and planned support for cloud providers.

:::info
Defang does not install or run any Defang or third party services at runtime.
Defang does run the Defang build service to build your container images, which terminates after every build.
:::

## AWS

:::info
The Public Beta of the v1 Defang BYOC AWS Provider is released as of Feb 1 2024.
:::

Please read the [AWS Provider](../providers/aws.md) documentation for more details about how the AWS provider works and how to get started.

## DigitalOcean

:::info
The Private Beta of the Defang BYOC DigitalOcean Provider will be released in September 2024. Its development is tracked [here](https://github.com/DefangLabs/defang/pull/594).
:::

## Azure

:::info
We will be working on Azure support in the future. If you are interested in Azure support, please vote on [this issue](https://github.com/DefangLabs/defang/issues/57).
:::

## GCP

:::info
We will be working on GCP support in the future. If you are interested in GCP support, please vote on [this issue](https://github.com/DefangLabs/defang/issues/58).
:::
