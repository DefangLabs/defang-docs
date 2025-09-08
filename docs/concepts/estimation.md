---
title: Cost Estimation
description: Defang enables you to estimate the cost of deploying and running your project before you even create a cloud account.
---

# Cost Estimation

Defang enables you to estimate the cost of deploying and running your project without needing to create an account with your cloud provider.

:::info
Currently, AWS and GCP are supported for cost estimation. Support for Digital Ocean is coming soon.
:::

## Generating an Estimate

Navigate your shell to your application's working directory and run
```
defang estimate [--provider=aws|gcp] [--mode=affordable|balanced|high_availability]
```

Here is an example of the output you would see if you estimated the cost deploying the [django-postgres](https://github.com/DefangLabs/samples/tree/main/samples/django-postgres) to AWS sample using the `balanced` [deployment mode](/docs/concepts/deployment-modes).

```
defang estimate --provider=aws --mode=balanced
 * Packaging the project files for django at /Users/defang/samples/samples/django-postgres/app
 * Generating deployment preview
 * Preparing estimate

Estimate for Deployment Mode: BALANCED

This mode strikes a balance between cost and availability. Your application
will be deployed with spot instances. Databases will be provisioned using
resources optimized for production. Services in the "internal" network will
be deployed to a private subnet with a NAT gateway for outbound internet access.

Cost    Quantity           Service   Description
$16.43  730 Hours          (shared)  AWSELB USW2-LoadBalancerUsage
$32.85  730 Hours          (shared)  AmazonEC2 USW2-NatGateway-Hours
$25.00  100 %Utilized/mo   db        AmazonRDS USW2-InstanceUsage:db.r5.large
$1.62   14600 GB-Hours     django    AmazonECS USW2-Fargate-EphemeralStorage-GB-Hours (20 GB * 730 hours)
$1.62   365 GB-Hours       django    AmazonECS USW2-Fargate-GB-Hours (0.50 GB * 730 hours)
-$1.14  365 GB-Hours       django    AmazonECS USW2-Fargate-GB-Hours-SpotDiscount (Estimated @ 70%)
$7.39   182.50 vCPU-Hours  django    AmazonECS USW2-Fargate-vCPU-Hours:perCPU (0.25 vCPU * 730 hours)
-$5.17  182.50 vCPU-Hours  django    AmazonECS USW2-Fargate-vCPU-Hours:perCPU-SpotDiscount (Estimated @ 70%)
Estimated Monthly Cost: $78.60 (+ usage)

Estimate does not include taxes or Discount Programs.
To estimate other modes, use defang estimate --mode=affordable|balanced|high_availability
For help with warnings, check our FAQ at https://s.defang.io/warnings
```

This estimate will include a line item for the most significant monthly costs associated with the services described in your project's compose file. If you modify the [`deploy.resources.reservations`](/docs/concepts/compose#deploy) section of your compose file, to increase or decrease replicas, CPU or memory allocations, those changes will be reflected in this estimate.

:::info
Some charges will not be included in this estimate, including charges related to usage like data transfer and storage costs.
:::

## Deploying your project

Now that you have estimated the costs associated with your project. You are ready to deploy to your target cloud.

```
defang compose up [--provider aws|gcp|digitalocean] [--mode affordable|balanced|high_availability]
```

