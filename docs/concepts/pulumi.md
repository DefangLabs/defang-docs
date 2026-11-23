# Pulumi

[Pulumi](https://www.pulumi.com) lets you define and manage cloud resources using a programming language. Defang's Pulumi providers deploy services to your cloud account alongside your other Pulumi-managed infrastructure.

## Install the Defang Pulumi Provider[​](#install-the-defang-pulumi-provider "Direct link to Install the Defang Pulumi Provider")

Choose the provider for your cloud in the Pulumi Registry:

* [Defang AWS](https://www.pulumi.com/registry/packages/defang-aws/)
* [Defang GCP](https://www.pulumi.com/registry/packages/defang-gcp/)
* [Defang Azure](https://www.pulumi.com/registry/packages/defang-azure/)

Each registry page includes installation instructions, configuration, and API reference documentation. The original `defang` provider is deprecated; use a cloud-specific provider for new projects.

## When to Use the Defang Pulumi Provider[​](#when-to-use-the-defang-pulumi-provider "Direct link to When to Use the Defang Pulumi Provider")

Use a Defang provider when you want to define services alongside other Pulumi resources, such as a database or storage bucket, or configure services using outputs from those resources.

## Example[​](#example "Direct link to Example")

The [Deploy Using Pulumi](https://docs.defang.io/docs/tutorials/deploy-using-pulumi.md) tutorial deploys a service to AWS. The [provider repository](https://github.com/DefangLabs/pulumi-defang/tree/main/examples) has examples for other clouds and languages.
