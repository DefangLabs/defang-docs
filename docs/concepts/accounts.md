---
title: Accounts
description: How accounts are organized in Defang.
sidebar_position: 100
---

# Accounts

Below, we will cover account creation with Defang, and how resources are organized within a cloud environment using your account info.

Defang requires an account so we can organize your resources and provide you with a way to manage them. We also use your account to authenticate you when you interact with [Defang Playground](./defang-playground.md) and the [Defang Portal](./portal.md). Billing and payment information is also associated with your account.

## Creating an Account

To create an account, log in to Defang and accept the [Terms of Service](https://defang.io/policies/terms-service/) using the [CLI](/docs/concepts/authentication.md).

At the moment, the only way to authenticate with Defang is through GitHub. We plan to offer other [authentication](/docs/concepts/authentication.md) providers in the future. 

:::tip
Keep in mind that your Defang account is separate from your [cloud provider account](./defang-byoc.md). You will need to authenticate with your cloud provider account separately to deploy services to your own cloud account.
:::

## Structure

Your GitHub username will be used as your Defang username. Your Defang username is used to group all your [services](/docs/concepts/services) and generate domains for your services with the following structure:

```
<username>-<servicename>--<port>.prod1.defang.dev
```

For more about domain structures, see our [Domains](/docs/concepts/domains#structure) page.
