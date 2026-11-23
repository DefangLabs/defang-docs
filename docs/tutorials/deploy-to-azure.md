# Deploy to Microsoft Azure

This tutorial will show you how to deploy your services to your own Azure subscription using Defang.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

* [The Defang CLI](https://docs.defang.io/docs/intro/getting-started.md#install-the-defang-cli)
* [A Defang Account](https://docs.defang.io/docs/concepts/authentication.md)
* [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)
* [Azure Application Default Credentials](https://learn.microsoft.com/en-us/cli/azure/authenticate-azure-cli)
* [A `compose.yaml` file in your project](https://docs.docker.com/compose/gettingstarted/)
* [A Dockerfile in your project](https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/) or use [Railpack](https://docs.defang.io/docs/concepts/railpack.md)

## Step 1 - Navigate to your project directory[​](#step-1---navigate-to-your-project-directory "Direct link to Step 1 - Navigate to your project directory")

Head to the folder where your project is located.

```
$ cd path/to/your/project
```

## Step 2 - Configure your Azure credentials[​](#step-2---configure-your-azure-credentials "Direct link to Step 2 - Configure your Azure credentials")

After signing in to your Azure account, select an existing subscription or [create a new one](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/create-subscription). Make sure billing is enabled.

Run the following Azure CLI command to authenticate:

```
$ az login
```

## Step 3 - Create a stack[​](#step-3---create-a-stack "Direct link to Step 3 - Create a stack")

Before you deploy, you should create a [stack](https://docs.defang.io/docs/concepts/stacks.md). In this case, we will create a stack called `dev`:

```
$ defang stack create dev
```

Defang will ask which region you want to deploy to and which Azure subscription to use.

## Step 4 - Deploy[​](#step-4---deploy "Direct link to Step 4 - Deploy")

Invoke the following CLI command. Defang will ask you which stack you want to deploy to.

```
$ defang compose up
```

## Step 5 - Inspect your deployment[​](#step-5---inspect-your-deployment "Direct link to Step 5 - Inspect your deployment")

Defang will provision resources in your Azure subscription and deploy your services. You can inspect the resources created in your [Azure Portal](https://portal.azure.com/).

***

For a deeper discussion of the Defang Azure architecture, see our [Azure docs](https://docs.defang.io/docs/providers/azure.md).
