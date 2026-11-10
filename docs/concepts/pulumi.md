---
title: Pulumi
description: Define your Defang services with Pulumi to integrate with other cloud resources.
---

# Pulumi

[Pulumi](https://www.pulumi.com) lets you define and manage cloud resources using a programming language. Defang's Pulumi providers deploy services to your cloud account alongside your other Pulumi-managed infrastructure.

## Install the Defang Pulumi Provider

Choose the provider for your cloud in the Pulumi Registry:

- [Defang AWS](https://www.pulumi.com/registry/packages/defang-aws/)
- [Defang GCP](https://www.pulumi.com/registry/packages/defang-gcp/)
- [Defang Azure](https://www.pulumi.com/registry/packages/defang-azure/)

Each registry page includes installation instructions, configuration, and API reference documentation. The original `defang` provider is deprecated; use a cloud-specific provider for new projects.

## When to Use the Defang Pulumi Provider

Use a Defang provider when you want to define services alongside other Pulumi resources, such as a database or storage bucket, or configure services using outputs from those resources.

## Example

The [Deploy Using Pulumi](/docs/tutorials/deploy-using-pulumi) tutorial deploys a service to AWS. The [provider repository](https://github.com/DefangLabs/pulumi-defang/tree/main/examples) has examples for other clouds and languages.
