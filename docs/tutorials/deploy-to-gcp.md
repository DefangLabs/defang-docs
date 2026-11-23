# Deploy to Google Cloud Platform (GCP)

This tutorial will show you how to deploy your services to your own GCP project using Defang.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

* [The Defang CLI](https://docs.defang.io/docs/intro/getting-started.md#install-the-defang-cli)
* [A Defang Account](https://docs.defang.io/docs/concepts/authentication.md)
* [gcloud CLI](https://cloud.google.com/sdk/docs/install)
* [GCP Application Default Credentials](https://cloud.google.com/docs/authentication/set-up-adc-local-dev-environment)
* [A `compose.yaml` file in your project](https://docs.docker.com/compose/gettingstarted/)
* [A Dockerfile in your project](https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/) or use [Railpack](https://docs.defang.io/docs/concepts/railpack.md)

## Step 1 - Navigate to your project directory[​](#step-1---navigate-to-your-project-directory "Direct link to Step 1 - Navigate to your project directory")

Head to the folder where your project is located.

```
$ cd path/to/your/project
```

## Step 2 - Configure your GCP credentials[​](#step-2---configure-your-gcp-credentials "Direct link to Step 2 - Configure your GCP credentials")

After signing in to your GCP account, select an existing project or [create a new project](https://developers.google.com/workspace/guides/create-project). Make sure [billing is enabled](https://cloud.google.com/billing/docs/how-to/modify-project). Keep a note of the project ID, you will need it in the next step.

Run the following gcloud command to authenticate with GCP:

```
$ gcloud auth application-default login
```

## Step 3 - Create a stack[​](#step-3---create-a-stack "Direct link to Step 3 - Create a stack")

Before you deploy, you should create a [stack](https://docs.defang.io/docs/concepts/stacks.md). In this case, we will create a stack called `dev`:

```
$ defang stack create dev
```

Defang will ask us which region we want to deploy to, and which GCP Project ID we should use.

## Step 4 - Deploy[​](#step-4---deploy "Direct link to Step 4 - Deploy")

Invoke the following CLI command. Defang will ask you which stack you want to deploy to.

```
$ defang compose up
```

## Step 5 - Inspect your deployment[​](#step-5---inspect-your-deployment "Direct link to Step 5 - Inspect your deployment")

Defang will provision resources in your GCP account and deploy your services. You can inspect the resources created in your [GCP Dashboard](https://console.cloud.google.com/).

***

For a deeper discussion of the Defang GCP Architecture, see our [GCP docs](https://docs.defang.io/docs/providers/gcp.md).
