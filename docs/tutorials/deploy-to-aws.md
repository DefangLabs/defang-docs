# Deploy to Amazon Web Services (AWS)

This tutorial will show you how to deploy your services to your own AWS account using Defang.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

* [The Defang CLI](https://docs.defang.io/docs/intro/getting-started.md#install-the-defang-cli)
* [A Defang Account](https://docs.defang.io/docs/concepts/authentication.md)
* [AWS Account Credentials](https://docs.defang.io/docs/tutorials/setting_up_your_aws_account.md)
* [A `compose.yaml` file in your project](https://docs.docker.com/compose/gettingstarted/)
* [A Dockerfile in your project](https://docs.docker.com/get-started/docker-concepts/building-images/writing-a-dockerfile/) or use [Railpack](https://docs.defang.io/docs/concepts/railpack.md)

## Step 1 - Navigate to your project directory[​](#step-1---navigate-to-your-project-directory "Direct link to Step 1 - Navigate to your project directory")

Head to the folder where your project is located.

```
$ cd path/to/your/project
```

## Step 2 - Authenticate with AWS[​](#step-2---authenticate-with-aws "Direct link to Step 2 - Authenticate with AWS")

There are many ways to authenticate with your [AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-authentication.html), but we recommend using the AWS CLI `aws login` command to authenticate when deploying from your local machine. This will create a profile with short-lived credentials which Defang can use to deploy.

note

The AWS CLI is not required in order to use the Defang CLI, but it is a convenient way to authenticate with AWS.

## Step 3 - Create a stack[​](#step-3---create-a-stack "Direct link to Step 3 - Create a stack")

Before you deploy, you should create a [stack](https://docs.defang.io/docs/concepts/stacks.md). In this case, we will create a stack called `dev`:

```
$ defang stack create dev
```

Defang will ask us which region we want to deploy to, and which profile we should use to authenticate.

## Step 4 - Deploy[​](#step-4---deploy "Direct link to Step 4 - Deploy")

Invoke the following CLI command. Defang will ask you which stack you want to deploy to.

```
$ defang compose up
```

### Step 5 - Inspect your deployment[​](#step-5---inspect-your-deployment "Direct link to Step 5 - Inspect your deployment")

Defang will provision resources in your AWS account and deploy your services. You can inspect the resources created in your AWS Dashboard.

***

For a deeper discussion of the Defang AWS Architecture, including a list of the resources we provision in your account, see our [AWS Provider docs](https://docs.defang.io/docs/providers/aws.md).
