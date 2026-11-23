# DigitalOcean

Deprecated

The DigitalOcean provider is deprecated. For new projects, use [AWS](https://docs.defang.io/docs/providers/aws.md), [Google Cloud](https://docs.defang.io/docs/providers/gcp.md) or [Azure](https://docs.defang.io/docs/providers/azure.md).

Why should you use Defang with DigitalOcean? Defang allows you to easily create and manage full, scalable applications with DigitalOcean. Defang aims to make it easier to deploy your services to the cloud. DigitalOcean is one of the most popular cloud providers in the world and with Defang, you can bypass the complexities of the DigitalOcean platform. Let Defang do it for you and spend more time working on what's important to you!

## Getting Started[​](#getting-started "Direct link to Getting Started")

### Install Defang[​](#install-defang "Direct link to Install Defang")

To get started with the Defang BYOC DigitalOcean Provider, first [install the latest version of the Defang CLI](https://docs.defang.io/docs/intro/getting-started.md).

### Sign up for DigitalOcean[​](#sign-up-for-digitalocean "Direct link to Sign up for DigitalOcean")

Next, make sure you have signed up for a [DigitalOcean account](https://try.digitalocean.com/freetrialoffer/).

### Authenticate with DigitalOcean[​](#authenticate-with-digitalocean "Direct link to Authenticate with DigitalOcean")

After signing up for your account, be sure to set up your [personal access token](https://docs.digitalocean.com/reference/api/create-personal-access-token/). Defang will need to find this value in your shell as the `DIGITALOCEAN_TOKEN` environment variable.

### Authenticate with DigitalOcean Spaces[​](#authenticate-with-digitalocean-spaces "Direct link to Authenticate with DigitalOcean Spaces")

You will also need a [DigitalOcean Spaces access key](https://docs.digitalocean.com/products/spaces/how-to/manage-access/). Defang will need to find this value in your shell as the `SPACES_ACCESS_KEY_ID`, and `SPACES_SECRET_ACCESS_KEY` environment variables.

### Configure your shell environment[​](#configure-your-shell-environment "Direct link to Configure your shell environment")

```
export DIGITALOCEAN_TOKEN=<your-token>
export SPACES_ACCESS_KEY_ID=<your-key-id>
export SPACES_SECRET_ACCESS_KEY=<your-key>
```

The Defang CLI will automatically check if these envinonment variables are set before running.

### Deploy your project to DigitalOcean[​](#deploy-your-project-to-digitalocean "Direct link to Deploy your project to DigitalOcean")

Once you are ready to go, add the `--provider=digitalocean` to your command to tell the Defang CLI to use the DigitalOcean provider or set the `DEFANG_PROVIDER` environment variable to `digitalocean`.

```
$ defang compose up --provider=digitalocean
# or
$ export DEFANG_PROVIDER=digitalocean
```

## Region[​](#region "Direct link to Region")

The Defang BYOC DigitalOcean Provider will use the region specified in the `REGION` environment variable. For a list of regions available in DigitalOcean, see the [region documentation](https://docs.digitalocean.com/platform/regional-availability/#app-platform-availability).

## Architecture[​](#architecture "Direct link to Architecture")

Defang uses resources that are native to the cloud provider you are using. The following describes the current state of Defang's support for DigitalOcean, the specific resources that Defang uses, and the roadmap for future support.

### Deployment[​](#deployment "Direct link to Deployment")

To deploy your services, the Defang CLI packages your code and uploads it to a [Spaces Object Storage](https://www.digitalocean.com/products/spaces) bucket in your account. The CLI then deploys an App Platform App that uses Pulumi to build your container image and run your service.

### Runtime[​](#runtime "Direct link to Runtime")

The Provider runs your workloads using the [DigitalOcean App Platform](https://docs.digitalocean.com/products/app-platform/).

### Secrets[​](#secrets "Direct link to Secrets")

Defang allows you to configure your services with [sensitive config values](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/) in DigitalOcean. Sensitive values are added and stored with encryption in your app once it has been deployed.

### Future Improvements[​](#future-improvements "Direct link to Future Improvements")

The following features are still in development for DigitalOcean:

* [Custom Domains](https://docs.defang.io/docs/concepts/domains.md)
* [Managed Redis](https://docs.defang.io/docs/concepts/managed-storage/managed-redis.md)
* [Managed Postgres](https://docs.defang.io/docs/concepts/managed-storage/managed-postgres.md)
* [Managed Language Models](https://docs.defang.io/docs/concepts/managed-llms/managed-language-models.md)

Stay tuned for future updates!
