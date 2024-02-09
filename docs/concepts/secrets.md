---
title: Secrets
description: Secrets are a way to securely store sensitive information such as API keys, passwords, and other credentials.
sidebar_position: 250
---

# Secrets

The Defang CLI allows you to securely store sensitive information such as API keys, passwords, and other credentials.

You can use secrets by specifying them in the `secrets` section of a service in a `compose.yaml` file, or by specifying a secret in your Pulumi code.

## Connecting Services

If you have created a service before a secret you can connect it by running the `defang compose start` command if using the [`defang compose` workflow](./compose.md). If you are using the [Pulumi-based workflow](./pulumi.md) you will need to redeploy using Pulumi.

:::tip Sample
You can find a sample of how to set secrets [here](https://github.com/defang-io/defang/tree/main/samples/nodejs/ChatGPT%20API).
:::

## Providers

Here are the different ways secrets are stored depending on the provider you are using:

    * [AWS](../providers/aws.md#secrets)
