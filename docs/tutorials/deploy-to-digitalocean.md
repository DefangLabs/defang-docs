# Deploy to DigitalOcean

Deprecated

The DigitalOcean provider is deprecated. For new projects, use [AWS, Google Cloud or Azure](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud.md).

This tutorial will show you how to deploy your services to your own DigitalOcean account using Defang.

## Pre-requisites[​](#pre-requisites "Direct link to Pre-requisites")

* [A Dockerfile in your project](https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/)
* [A `compose.yaml` file in your project](https://docs.docker.com/compose/gettingstarted/)
* [A Defang Account](https://docs.defang.io/docs/concepts/authentication.md)
* [The Defang CLI](https://docs.defang.io/docs/intro/getting-started.md#install-the-defang-cli)
* [DigitalOcean Account Credentials](https://docs.defang.io/docs/providers/digitalocean.md#getting-started)
* [DigitalOcean Spaces Access Keys](https://docs.defang.io/docs/providers/digitalocean.md#getting-started)

## Step 1 - Navigate to your project directory[​](#step-1---navigate-to-your-project-directory "Direct link to Step 1 - Navigate to your project directory")

Head to the folder where your project is located.

```
$ cd path/to/your/project
```

## Step 2 - Authenticate Defang to use your DigitalOcean Account[​](#step-2---authenticate-defang-to-use-your-digitalocean-account "Direct link to Step 2 - Authenticate Defang to use your DigitalOcean Account")

Defang will look for your DigitalOcean credentials in your shell environment and expect to find the following credentials:

* the `DIGITALOCEAN_TOKEN` environment variable
* and, the `SPACES_ACCESS_KEY_ID` and `SPACES_SECRET_ACCESS_KEY` environment variables

tip

You can find your DigitalOcean token in the [API section](https://cloud.digitalocean.com/account/api/tokens) and your Spaces Access Keys in the [Spaces Object Storage section](https://cloud.digitalocean.com/spaces) in the DigitalOcean Control Panel.

## Step 3 - Deploy[​](#step-3---deploy "Direct link to Step 3 - Deploy")

Invoke the `defang compose up` CLI command with the `--provider=digitalocean` flag or set the `DEFANG_PROVIDER=digitalocean` environment variable.

For example:

```
$ defang compose up --provider=digitalocean
```

## Step 4 - Inspect your deployment[​](#step-4---inspect-your-deployment "Direct link to Step 4 - Inspect your deployment")

Defang will provision resources in your DigitalOcean account and deploy your services. You can inspect the resources created in your DigitalOcean Dashboard.

***

For a deeper discussion of the Defang DigitalOcean Architecture, see our [DigitalOcean Provider docs](https://docs.defang.io/docs/providers/digitalocean.md).
