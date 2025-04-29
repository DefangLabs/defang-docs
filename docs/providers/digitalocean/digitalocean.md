---
title: DigitalOcean
description: Defang allows you to easily create and manage full, scalable applications with DigitalOcean.
sidebar_position: 010
---

# DigitalOcean

:::info
The Defang DigitalOcean Provider is available for Public Preview as of October 2024.
:::

:::tip[DigitalOcean Credits]
You can get DigitalOcean credits to try out Defang. Learn more about it on their [pricing page](https://www.digitalocean.com/pricing). If you're an eligible startup, you can sign up for credits [here](https://www.digitalocean.com/hatch).
:::

Why should you use Defang with DigitalOcean? Defang allows you to easily create and manage full, scalable applications with DigitalOcean. Defang aims to make it easier to deploy your services to the cloud. DigitalOcean is one of the most popular cloud providers in the world and with Defang, you can bypass the complexities of the DigitalOcean platform. Let Defang do it for you and spend more time working on what's important to you!

## Getting Started

### Install Defang

To get started with the Defang BYOC DigitalOcean Provider, first [install the latest version of the Defang CLI](../getting-started#authenticate-with-defang).

### Sign up for DigitalOcean

Next, make sure you have signed up for a [DigitalOcean account](https://try.digitalocean.com/freetrialoffer/).

### Authenticate with DigitalOcean

After signing up for your account, be sure to set up your [personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/). Defang will need to find this value in your shell as the `DIGITALOCEAN_TOKEN` environment variable.

### Authenticate with DigitalOcean Spaces

You will also need a [DigitalOcean Spaces access key](https://docs.digitalocean.com/products/spaces/how-to/manage-access/). Defang will need to find this value in your shell as the `SPACES_ACCESS_KEY_ID`, and `SPACES_SECRET_ACCESS_KEY` environment variables.

### Configure your shell environment

```bash
export DIGITALOCEAN_TOKEN=<your-token>
export SPACES_ACCESS_KEY_ID=<your-key-id>
export SPACES_SECRET_ACCESS_KEY=<your-key>
```

The Defang CLI will automatically check if these envinonment variables are set before running.

### Deploy your project to DigitalOcean

Once you are ready to go, add the `--provider=digitalocean` to your command to tell the Defang CLI to use the DigitalOcean provider or set the `DEFANG_PROVIDER` environment variable to `digitalocean`.

```bash
$ defang compose up --provider=digitalocean
# or
$ export DEFANG_PROVIDER=digitalocean
```

## Region

The Defang BYOC DigitalOcean Provider will use the region specified in the `REGION` environment variable. For a list of regions available in DigitalOcean, see the [region documentation](https://docs.digitalocean.com/platform/regional-availability/#app-platform-availability).

## Architecture

Defang uses resources that are native to the cloud provider you are using. The following describes the current state of Defang's support for DigitalOcean, the specific resources that Defang uses, and the roadmap for future support.

### Deployment

To deploy your services, the Defang CLI packages your code and uploads it to a [Spaces Object Storage](https://www.digitalocean.com/products/spaces) bucket in your account. The CLI then deploys an App Platform App that uses Pulumi to build your container image and run your service.

### Runtime

The Provider runs your workloads using the [DigitalOcean App Platform](https://docs.digitalocean.com/products/app-platform/).

### Secrets

Defang allows you to configure your services with [sensitive config values](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/) in DigitalOcean. Sensitive values are added and stored with encryption in your app once it has been deployed.

### Future Improvements

The following features are still in development for DigitalOcean:

- [Custom Domains](/docs/concepts//domains.mdx)
- [Managed Redis](/docs/concepts//managed-storage/managed-redis.md)
- [Managed Postgres](/docs/concepts/managed-storage/managed-postgres.mdx)
- [Managed Language Models](/docs/concepts/managed-llms/managed-language-models.md)

Stay tuned for future updates!
