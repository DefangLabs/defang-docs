---
title: Configure Environment Variables
description: How to configure sensitive environment variables in Defang.
---

# Configure Environment Variables


This tutorial will show you how to configure sensitive environment variables in Defang.

## Pre-requisites
* [A `compose.yaml` file in your project](https://docs.docker.com/compose/gettingstarted/)
* [A Defang Account](/docs/concepts/authentication)
* [The Defang CLI](/docs/intro/getting-started#install-the-defang-cli)

## Step 1 - Go to your `compose.yaml` file
:::info
If you are using [Pulumi](/docs/concepts/pulumi) instead of Compose files to define your services, please see [Using Config With Pulumi](/docs/concepts/configuration#using-config-with-pulumi) instead.
:::

In your Compose file, you can define a sensitive config variable for your service by leaving it as a **blank or `null` value**. Defang will recognize it as a sensitive value.

In the example below, let's define `API_KEY` as an environment variable.

```yaml
services:
  service1:
    image: image1:latest
    environment:
      - API_KEY
```

The type of notation shown above is called *list notation*. Alternatively, you can use *map notation*, which is also acceptable:
```yaml
services:
  service1:
    image: image1:latest
    environment:
      API_KEY:
```

## Step 2 - Set the actual value in the Defang CLI
To store the actual (sensitive) value of the variable, open up a terminal and type the command:
```bash
defang config set API_KEY=actualvalue
```
Remember to replace `API_KEY` with your variable name and `actualvalue` with your actual value.

:::tip
You can view all the config variables you are storing in Defang by doing: `defang config ls`.
:::

### Editing a config value
To edit a value, you can run the command again with an updated value to overwrite the current value:
```bash
defang config set API_KEY=newvalue
```

### Removing a config value
To remove a value, run the command:
```bash
defang config rm API_KEY
```
:::tip
Remember to update your Compose file if you remove an environment variable.
:::

## Step 3 - Deploy
```bash
defang compose up
```

---
For a deeper discussion on how configuration works in Defang, see our [Configuration docs](/docs/concepts/configuration).
