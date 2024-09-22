---
title: Digital Ocean
description: Defang allows you to easily create and manage full, scalable applications with Digital Ocean.
sidebar_position: 010
---

# Digital Ocean

:::info
This feature is still in preview as of August 2024. This page will be updated when it is GA.
:::

Why should you use Defang with AWS? Defang allows you to easily create and manage full, scalable applications with Digital Ocean. Defang aims to make it easier to deploy your services to the cloud. Digital Ocean is one of the most popular cloud providers in the world and with Defang, you dont have to waste your time understanding the complexities and challenges of the Digital Ocean ecosystem. Let Defang do it for you and spend more time working on whats important to you!

## Getting Started
To get started with the Defang BYOC Digital Ocean provider, first [install the latest version of the Defang CLI](../getting-started#authenticate-with-defang). Next make sure you have signed up for a Digital Ocean account. After signing up for your account, be sure to setup your [personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/) as well as your [Spaces access key](https://docs.digitalocean.com/products/spaces/how-to/manage-access/).  Next, save these values as environment variables with the names `DIGITALOCEAN_TOKEN`, `SPACES_ACCESS_KEY_ID`, and `SPACES_SECRET_ACCESS_KEY`. The Defang CLI will automatically check if they are set before running. Once you are ready to go, add the `--provider=do` to your command to tell the Defang CLI to use the AWS provider.

## Region

The Defang BYOC Digital Ocean Provider will use the region specified in the `REGION` environment variable. For a list of regions available in DO, see the [region documentation](https://docs.digitalocean.com/platform/regional-availability/#app-platform-availability). 

## Architecture

Defang uses resources that are native to the cloud provider you are using. The following describes the current state of Defang's support for Digital Ocean, the specific resources that Defang uses, and the roadmap for future support.

### Deployment

To deploy your services, the Defang CLI packages your code and uploads it to a Spaces Object Store in your account. The CLI then deploys an App Platform Appp that uses Pulumi to build your container image and run your service.

### Runtime

The provider runs your workloads using the [Digital Ocean App Platform](https://docs.digitalocean.com/products/app-platform/). 

### Future Improvements

The following features are still in development for Digital Ocean:
- [Custom Domains](../concepts/domains.mdx)
- [Managed Redis](../concepts/managed-storage.md#managed-redis)
Stayed tuned for future updates!
