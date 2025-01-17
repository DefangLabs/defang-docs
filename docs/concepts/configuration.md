---
title: Configuration
description: Configuring your Defang application, including sensitive config values like API keys, passwords, and other credentials.
sidebar_position: 225
---

# Configuration

Defang allows you to configure your application using environment variables. You can set environment variables in your [`compose.yaml` file](./compose.md), or in your [Pulumi program](#using-config-with-pulumi).

# Sensitive Config Values

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

:::tip
You can find a sample of how to set sensitive config values [here](https://github.com/DefangLabs/samples/tree/main/samples/nodejs-openai).
:::

:::info
If you are using the [1-Click Deploy](/docs/tutorials/using-one-click-deploy) option, you can set sensitive config values as secrets in your GitHub repository and the action will automatically deploy them for you. [Learn how to manage config values with the Defang Github Action](https://github.com/DefangLabs/defang-github-action?tab=readme-ov-file#managing-config-values).
:::

## Interpolation

Environment variables are set within the `environment` section of a service in a `compose.yaml` file. Any variables declared here will become available within the service container.

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

## Using Config with Pulumi 
In Defang, using config with [Pulumi](./pulumi.md) gives you the advantage of being able to manage your environment variables across different environments using Pulumi stacks.

:::tip
You can find a sample of how to set environment variables with Pulumi [here](https://github.com/DefangLabs/samples/tree/main/samples/pulumi-remix-postgres).
:::

## Connecting Services

If you have created a service before a secret you can connect it by running the `defang compose start` command if using the [`defang compose` workflow](./compose.md). If you are using the [Pulumi-based workflow](./pulumi.md) you will need to redeploy using Pulumi.

## Providers

Here are the different ways sensitive config values are stored depending on the provider you are using:

    * [AWS](../providers/aws/aws.md#secrets)
    * [DigitalOcean](../providers/digitalocean#secrets)
    * [GCP](../providers/gcp#secrets)

:::info
Please note that while Defang supports setting sensitive config, it does not support the [`secrets`](https://docs.docker.com/reference/compose-file/secrets/) top-level element as seen in the Compose specification. Please see our [Compose](/docs/concepts/compose) page for more details.
:::
