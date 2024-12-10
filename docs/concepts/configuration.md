---
title: Configuration
description: Configuring your Defang application, including sensitive config values like API keys, passwords, and other credentials.
sidebar_position: 225
---

# Configuration

Defang allows you to configure your application using environment variables. You can set environment variables in your [`compose.yaml` file](./compose.md), or in your [Pulumi program](./pulumi.md). Using Pulumi gives you the advantage of being able to manage your environment variables across different environments using Pulumi stacks.

:::tip Sample
You can find a sample of how to set environment variables with Pulumi [here](https://github.com/DefangLabs/defang/tree/main/samples/nodejs/remix-aiven-postgres).
:::

# Sensitive Config aka Secrets

The Defang CLI allows you to securely store sensitive information such as API keys, passwords, and other credentials. To do so, run:

```bash
# Set a configuration value called API_KEY
defang config set API_KEY
```

You can use sensitive config by specifying them in the `environment` section of a service in a `compose.yaml` file without any value, or by specifying an environment key with a `null` value in your Pulumi code.

```yaml
services:
  service1:
    image: image1:latest
    environment:
      - API_KEY
```

You can also use this syntax:


```yaml
services:
  service1:
    image: image1:latest
    environment:
      API_KEY:
```

Use the `defang config` command of the Defang CLI to manage the values.

## Interpolation

Environment variables are set within the *environment* section of a service in a `compose.yaml` file. Any variables declared here will become available within the service container.

Variables can be set by assigning a literal value, a reference to a configuration value, or a mix of literal and variable references. Variable references are declared using either **\$\{variable_name\}** or **$variable_name** forms. It is recommended to use the bracketed form. By interpolating over variable references within a string we can construct complex strings. Interpolation may be particularly useful when constructing connection strings to other services.

```
service:
    environment:
        - USER_PASSWORD // configuration variable
        - USER_NAME     // configuration variable
        - CONNECT=dbservice:${USER_NAME}:${USER_PASSWORD}@example.com:9876
```
In the example above, if we assume the value of the configuration variable ***USER_PASSWORD*** is *password* then the value assigned to ***CONNECT*** will resolve to *dbservice:alice:password@example.com:9876*


During `defang compose up` all variable references will be replaced with the actual value and made available in the container. If any referenced variable is not found the `defang compose up` command will be canceled.

## Connecting Services

If you have created a service before a secret you can connect it by running the `defang compose start` command if using the [`defang compose` workflow](./compose.md). If you are using the [Pulumi-based workflow](./pulumi.md) you will need to redeploy using Pulumi.

:::tip Sample
You can find a sample of how to set sensitive config values [here](https://github.com/DefangLabs/defang/tree/main/samples/nodejs/ChatGPT%20API).
:::

## Providers

Here are the different ways sensitive config values are stored depending on the provider you are using:

    * [AWS](../providers/aws/aws.md#secrets)


