---
title: Configuration
description: Configuring your Defang application.
sidebar_position: 225
---

# Configuration

Defang allows you to configure your application using environment variables. You can set environment variables in your [`compose.yaml` file](./compose.md), or in your [Pulumi program](./pulumi.md). Using Pulumi gives you the advantage of being able to manage your environment variables across different environments using Pulumi stacks.

You can also use the Defang CLI to store [sensitive config](./secrets.md) like API keys and database passwords.

:::tip Sample
You can find a sample of how to set environment variables with Pulumi [here](https://github.com/defang-io/defang/tree/main/samples/nodejs/remix-aiven-postgres).
:::