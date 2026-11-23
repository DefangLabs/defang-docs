# Configuration

Defang allows you to configure your application using environment variables. You can set environment variables in your [`compose.yaml` file](https://docs.defang.io/docs/concepts/compose.md), or in your [Pulumi program](#using-config-with-pulumi).

# Sensitive Config Values

The Defang CLI allows you to securely store sensitive information such as API keys, passwords, and other credentials. To do so, run:

```
# Set a configuration value called API_KEY
defang config set API_KEY
```

You can use sensitive config by specifying them in the `environment` section of a service in a `compose.yaml` file without any value, or by specifying an environment key with a `null` value in your Pulumi code.

Either one of list notation or map notation is acceptable for defining your environment variable(s). See below for an example of each.

#### With List Notation[​](#with-list-notation "Direct link to With List Notation")

```
services:
  service1:
    image: image1:latest
    environment:
      - API_KEY
```

#### With Map Notation[​](#with-map-notation "Direct link to With Map Notation")

```
services:
  service1:
    image: image1:latest
    environment:
      API_KEY:
```

Use the `defang config` command of the Defang CLI to manage the values.

tip

You can find a sample of how to set sensitive config values [here](https://github.com/DefangLabs/samples/tree/main/samples/nodejs-openai).

## Interpolation[​](#interpolation "Direct link to Interpolation")

Environment variables are set within the `environment` section of a service in a `compose.yaml` file. Any variables declared here will become available within the service container.

Variables can be set by assigning a literal value, a reference to a configuration value, or a mix of literal and variable references. Variable references are declared using either **${variable\_name}** or **$variable\_name** forms. It is recommended to use the bracketed form. By interpolating over variable references within a string we can construct complex strings. Interpolation may be particularly useful when constructing connection strings to other services.

```
service:
    environment:
        - USER_PASSWORD // configuration variable
        - USER_NAME     // configuration variable
        - CONNECT=dbservice:${USER_NAME}:${USER_PASSWORD}@example.com:9876
```

In the example above, if we assume the value of the configuration variable ***USER\_PASSWORD*** is *password* then the value assigned to ***CONNECT*** will resolve to *dbservice:alice<!-- -->:password<!-- -->@example.com:9876*

During `defang compose up` all variable references will be replaced with the actual value and made available in the container. If any referenced variable is not found the `defang compose up` command will be canceled.

## Environment Variable Precedence[​](#environment-variable-precedence "Direct link to Environment Variable Precedence")

During a deployment, config vars are exposed to your services as environment variables. Environment variables can be set in multiple places, but Defang uses the following precedence order to determine which value to use:

note

Defang does pass environment variables from the shell into your services. Environment variables must be set in one of the other supported ways listed below.

1. **Dotenv files**: The `.env` file in the current directory is read by default. This can be overriden per services by specifying the `env_file` service property the `compose.yaml` file.
2. **Docker Compose environment variables**: These are environment variables defined in the `environment` section of the service in the `compose.yaml` file.
3. **Defang config**: These are sensitive configuration values set using the `defang config set FOO=bar` command.

Environment variables are resolved in order of precedence, with the highest precedence value taking priority. For example, if you have a variable `DATABASE_URL` set in both a dotenv file and in Defang config, the value from Defang config will be used.

## Using Config with Pulumi[​](#using-config-with-pulumi "Direct link to Using Config with Pulumi")

In Defang, using config with [Pulumi](https://docs.defang.io/docs/concepts/pulumi.md) gives you the advantage of being able to manage your environment variables across different environments using Pulumi stacks.

tip

You can find a sample of how to set environment variables with Pulumi [here](https://github.com/DefangLabs/samples/tree/main/samples/pulumi-remix-postgres).

## Connecting Services[​](#connecting-services "Direct link to Connecting Services")

If you have created a service before a secret you can connect it by running the `defang compose start` command if using the [`defang compose` workflow](https://docs.defang.io/docs/concepts/compose.md). If you are using the [Pulumi-based workflow](https://docs.defang.io/docs/concepts/pulumi.md) you will need to redeploy using Pulumi.

## Providers[​](#providers "Direct link to Providers")

Here are the different ways sensitive config values are stored depending on the provider you are using:

* [AWS](https://docs.defang.io/docs/providers/aws.md#secrets)
* [Azure](https://docs.defang.io/docs/providers/azure.md#secrets)
* [DigitalOcean](https://docs.defang.io/docs/providers/digitalocean.md#secrets)
* [GCP](https://docs.defang.io/docs/providers/gcp.md#secrets)

info

Please note that while Defang supports setting sensitive config, it does not support the [`secrets`](https://docs.docker.com/reference/compose-file/secrets/) top-level element as seen in the Compose specification. Please see our [Compose](https://docs.defang.io/docs/concepts/compose.md) page for more details.

## Supported Providers[​](#supported-providers "Direct link to Supported Providers")

| Provider     | Config Support |
| ------------ | -------------- |
| AWS          | ✅             |
| Azure        | ✅             |
| DigitalOcean | ✅             |
| GCP          | ✅             |
