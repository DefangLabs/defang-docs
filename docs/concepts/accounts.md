---
title: Accounts
description: How accounts are organized in Defang.
sidebar_position: 100
---

# Accounts

In this section, we'll be talking about a couple different topics related to accounts in Defang. First we'll cover authentication and how to create an account, and then we'll talk about how resources are organized within a cloud environment using your account info.

:::tip Why do I need an account?
Defang requires an account so we can organize your resources and provide you with a way to manage them. We also use your account to authenticate you when you interact with [Defang Playground](./defang-playground.md) and the [Defang Portal](./portal.md).

Eventually, billing and payment information will be associated with your account.
:::

## Creating an Account

To create an account, simply login to Defang and accept the [terms of service](https://defang.io/terms-service.html) using the [CLI](../getting-started/authenticating.md).

At the moment, the only way to authenticate with Defang is through GitHub. We plan to offer other authentication providers in the future.

## Structure

Your GitHub username will be used as your Defang username and your Defang username is used to group all your services and to generate domains for your services with the following structure:

```
<username>-<servicename>--<port>.prod1.defang.dev
```

:::warning
Keep in mind that your Defang account is separate from your [cloud provider account](./defang-byoc.md). You will need to authenticate with your cloud provider account separately to deploy services to your own cloud account.
:::

:::info
We plan to introduce a more robust system for managing accounts, permissions, service groups, etc. in the future.
:::