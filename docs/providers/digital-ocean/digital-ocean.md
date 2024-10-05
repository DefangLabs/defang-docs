---
title: Digital Ocean
description: Defang allows you to easily create and manage full, scalable applications with DigitalOcean.
sidebar_position: 010
---

# Digital Ocean

:::info
This feature is available for public preview as of October 2024. This page will be updated when it is GA.
:::

Why should you use Defang with AWS? Defang allows you to easily create and manage full, scalable applications with DigitalOcean. Defang aims to make it easier to deploy your services to the cloud. DigitalOcean is one of the most popular cloud providers in the world and with Defang, you dont have to waste your time understanding the complexities and challenges of the DigitalOcean ecosystem. Let Defang do it for you and spend more time working on whats important to you!

## Getting Started
To get started with the Defang BYOC DigitalOcean provider, first [install the latest version of the Defang CLI](../getting-started#authenticate-with-defang). Next make sure you have signed up for a [DigitalOcean account](https://try.digitalocean.com/freetrialoffer/).  

After signing up for your account, be sure to setup your [personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) as well as your [Spaces access key](https://docs.digitalocean.com/products/spaces/how-to/manage-access/).  Next, save these values as environment variables with the names `DIGITALOCEAN_TOKEN`, `SPACES_ACCESS_KEY_ID`, and `SPACES_SECRET_ACCESS_KEY`. 

```bash
export DIGITALOCEAN_TOKEN=<your-token>
export SPACES_ACCESS_KEY_ID=<your-key-id>
export SPACES_SECRET_ACCESS_KEY=<your-key>
```

The Defang CLI will automatically check if they are set before running. Once you are ready to go, add the `--provider=digitalocean` to your command to tell the Defang CLI to use the AWS provider.

```bash
$ defang up --provider=digitalocean
# or
$ export DEFANG_PROVIDER=digitalocean
```

## Region

The Defang BYOC DigitalOcean Provider will use the region specified in the `REGION` environment variable. For a list of regions available in DO, see the [region documentation](https://docs.digitalocean.com/platform/regional-availability/#app-platform-availability). 

## Architecture

Defang uses resources that are native to the cloud provider you are using. The following describes the current state of Defang's support for DigitalOcean, the specific resources that Defang uses, and the roadmap for future support.

### Deployment

To deploy your services, the Defang CLI packages your code and uploads it to a [Spaces Object Storage](https://www.digitalocean.com/products/spaces) bucket in your account. The CLI then deploys an App Platform Appp that uses Pulumi to build your container image and run your service.

### Runtime

The provider runs your workloads using the [DigitalOcean App Platform](https://docs.digitalocean.com/products/app-platform/). 

### Secrets

Defang allows you to configure your services with sensitive config values. Sensitive values are added and stored with [encryption](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/) in your app once it has been deployed.

### Future Improvements

The following features are still in development for DigitalOcean:
- [Custom Domains](../concepts/domains.mdx)
- [Managed Redis](../concepts/managed-storage.md#managed-redis)

Stayed tuned for future updates!
