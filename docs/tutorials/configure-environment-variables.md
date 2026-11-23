# Configure Environment Variables

This tutorial will show you how to configure sensitive environment variables in Defang.

## Pre-requisites[​](#pre-requisites "Direct link to Pre-requisites")

* [A `compose.yaml` file in your project](https://docs.docker.com/compose/gettingstarted/)
* [A Defang Account](https://docs.defang.io/docs/concepts/authentication.md)
* [The Defang CLI](https://docs.defang.io/docs/intro/getting-started.md#install-the-defang-cli)

## Step 1 - Go to your `compose.yaml` file[​](#step-1---go-to-your-composeyaml-file "Direct link to step-1---go-to-your-composeyaml-file")

info

If you are using [Pulumi](https://docs.defang.io/docs/concepts/pulumi.md) instead of Compose files to define your services, please see [Using Config With Pulumi](https://docs.defang.io/docs/concepts/configuration.md#using-config-with-pulumi) instead.

In your Compose file, you can define a sensitive config variable for your service by leaving it as a **blank or `null` value**. Defang will recognize it as a sensitive value.

In the example below, let's define `API_KEY` as an environment variable.

```
services:
  service1:
    image: image1:latest
    environment:
      - API_KEY
```

The type of notation shown above is called *list notation*. Alternatively, you can use *map notation*, which is also acceptable:

```
services:
  service1:
    image: image1:latest
    environment:
      API_KEY:
```

## Step 2 - Set the actual value in the Defang CLI[​](#step-2---set-the-actual-value-in-the-defang-cli "Direct link to Step 2 - Set the actual value in the Defang CLI")

To store the actual (sensitive) value of the variable, open up a terminal and type the command:

```
defang config set API_KEY=actualvalue
```

Remember to replace `API_KEY` with your variable name and `actualvalue` with your actual value.

tip

You can view all the config variables you are storing in Defang by doing: `defang config ls`.

### Editing a config value[​](#editing-a-config-value "Direct link to Editing a config value")

To edit a value, you can run the command again with an updated value to overwrite the current value:

```
defang config set API_KEY=newvalue
```

### Removing a config value[​](#removing-a-config-value "Direct link to Removing a config value")

To remove a value, run the command:

```
defang config rm API_KEY
```

tip

Remember to update your Compose file if you remove an environment variable.

## Step 3 - Deploy[​](#step-3---deploy "Direct link to Step 3 - Deploy")

```
defang compose up
```

***

For a deeper discussion on how configuration works in Defang, see our [Configuration docs](https://docs.defang.io/docs/concepts/configuration.md).
