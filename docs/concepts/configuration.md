---
title: Configuration
description: Configuring your Defang application, including sensitive config values like API keys, passwords, and other credentials.
sidebar_position: 225
---

# Configuration

Defang allows you to configure your application using environment variables. You can set environment variables in your [`compose.yaml` file](./compose.md), or in your [Pulumi program](./pulumi.md). Using Pulumi gives you the advantage of being able to manage your environment variables across different environments using Pulumi stacks.

:::tip Sample
You can find a sample of how to set environment variables with Pulumi [here](https://github.com/defang-io/defang/tree/main/samples/nodejs/remix-aiven-postgres).
:::

# Sensitive Config aka Secrets

The Defang CLI allows you to securely store sensitive information such as API keys, passwords, and other credentials.

You can use sensitive config by specifying them in the `environment` section of a service in a `compose.yaml` file without any value, or by specifying an environment key with a `null` value in your Pulumi code.

```ts
services:
  service1:
    image: image1:latest
    environment:
      - API_KEY
```

Use the `defang config` command of the Defang CLI to manage the values.

## Connecting Services

If you have created a service before a secret you can connect it by running the `defang compose start` command if using the [`defang compose` workflow](./compose.md). If you are using the [Pulumi-based workflow](./pulumi.md) you will need to redeploy using Pulumi.

:::tip Sample
You can find a sample of how to set sensitive config values [here](https://github.com/defang-io/defang/tree/main/samples/nodejs/ChatGPT%20API).
:::

## Providers

Here are the different ways sensitive config values are stored depending on the provider you are using:

    * [AWS](../providers/aws.md#secrets)
