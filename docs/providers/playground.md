# Playground

:::danger Deprecation Notice Defang Playground has been deprecated and will be discontinued. New projects cannot be deployed to Playground. If you have existing projects on Playground, please migrate them to your own cloud account. See the [migration guide](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud.md) for instructions. :::

The Defang Playground is a free deployment provider that allows you to experiment with Defang. The Playground is a shared environment that should not be used to run production workloads. The Playground is a great way to get started with Defang. You can even use [1-Click Deploy](https://docs.defang.io/docs/tutorials/using-one-click-deploy.md) to try it out quickly or you can get started with the [Defang CLI](https://docs.defang.io/docs/intro/getting-started.md).

This page highlights architectural considerations when deploying to the Playground and any differences you might encounter when deploying to the Playground versus deploying to your own cloud account.

info

The Playground allows only 1 deployed project at a time. Use the CLI `defang down` command to tear down a project before deploying a new one.

## Overview[​](#overview "Direct link to Overview")

Overall, the Defang Playground is very similar to deploying to your own cloud account. The Playground runs on a Defang-managed AWS account, so you can expect it to work similarly to deploying to [AWS](https://docs.defang.io/docs/providers/aws.md).

### Managed services[​](#managed-services "Direct link to Managed services")

In essence, the Playground does not support any [managed storage](https://docs.defang.io/docs/concepts/managed-storage.md) services, ie. `x-defang-postgres` and `x-defang-redis` are ignored when deploying to the Playground. You can however run both Postgres and Redis as regular container services for testing purposes.

### Managed LLMs[​](#managed-llms "Direct link to Managed LLMs")

Defang offers integration with managed, cloud-native large language model services with the `x-defang-llm` service extension when deploying to your own cloud account with BYOC. This extension is supported in the Defang Playground with one caveat: your MODEL (model ID) will be limited to a default model chosen by Defang.
