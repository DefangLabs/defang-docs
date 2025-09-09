# Deploying with the Defang MCP Server

This tutorial will show you how to deploy your services with the [Defang MCP Server](/docs/concepts/mcp.md).

## Prerequisites

- [The Defang MCP Server](/docs/concepts/mcp.md#installation)
- [A Defang Account](/docs/concepts/authentication)
- [A `compose.yaml` file in your project](https://docs.docker.com/compose/gettingstarted/)

Open your project with an IDE that has the [Defang MCP Server](/docs/concepts/mcp.md) installed.

:::tip
If the Defang MCP server doesn’t start automatically, try starting or restarting it from your IDE settings.
![VS Code](/img/prompts/start-server.png)
:::

## AWS

### Step 1 - Collect your credentials

There are many ways to authenticate with your [AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-authentication.html).

:::tip
If you have the AWS CLI installed, you can verify that you've authenticated to AWS by running `aws sts get-caller-identity` and see your account ID. (The AWS CLI is not required in order to use Defang with AWS)
:::

### Step 2 - Setup Defang for AWS

Open your chat window and type `/defang.AWS_Setup`, or select the corresponding prompt from your IDE’s options.

![Trigger Prompt](/img/prompts/aws-prompt.png)

The [MCP prompt](https://modelcontextprotocol.io/specification/2025-06-18/server/prompts) accepts two types of credentials:

1. Method 1 - Using an AWS Profile:
   The following prompt will have three arguments and only the first argument is required:

   - AWS Credential - REQUIRED : The name of the AWS profile you want to use (e.g., "default" or "my-profile"). ![AWS Profile argument](/img/prompts/aws-profile-arg.png)
   - AWS_SECRET_ACCESS_KEY - IGNORE : Leave this argument blank and press Enter. ![Ignore AWS Secret Access Key argument](/img/prompts/aws-ignore_secret.png)
   - AWS_REGION - OPTIONAL : The AWS region where you want to deploy your services (e.g., "us-west-2"). ![AWS Region argument Optional](/img/prompts/aws-optional-region.png)

2. Method 2 - Using Access Keys:
   The following prompt will have three arguments and all three arguments are required:

   - AWS Credential - REQUIRED : The AWS Access Key ID (e.g., "AKIAIOSFODNN7EXAMPLE"). ![AWS Access Key ID argument](/img/prompts/aws-access-key-arg.png)
   - AWS_SECRET_ACCESS_KEY - REQUIRED : The AWS Secret Access Key. (e.g., "wJalrXUtnFEMI/K7MDENG/bPExampleSecretKey").![AWS Secret Access Key argument](/img/prompts/aws-secret-key-arg.png)
   - AWS_REGION - REQUIRED : The AWS region where you want to deploy your services (e.g., "us-west-2"). ![AWS Region argument](/img/prompts/require-aws-region-arg.png)

### Step 3 - Deploy

Once the prompt completes without errors, your chat input will be automatically populated with the deployment command for the IDE to execute.

### Step 4 - Inspect your deployment

You can check the status of your deployment by using the [Defang Services tool](../concepts/mcp#services) or you can inspect the resources created in your AWS Dashboard.

## GCP

### Step 1 - Collect your credentials

After signing in to your GCP account, select an existing project or [create a new project](https://developers.google.com/workspace/guides/create-project). Make sure [billing is enabled](https://cloud.google.com/billing/docs/how-to/modify-project). Then, note down the project ID for the next step.

### Step 2 - Setup Defang for GCP

In your chat window, type `/defang.GCP_Setup` or select the corresponding prompt from your IDE’s options.

![Trigger Prompt](/img/prompts/gcp-prompt.png)

The [MCP argument](https://modelcontextprotocol.io/specification/2025-06-18/server/prompts) will require your GCP project ID you created in [Step 2](#step-2---authenticate-defang-to-use-your-gcp-account-1).
![GCP Project ID](/img/prompts/gcp-project-id.png)

### Step 3 - Deploy

Once the prompt completes without errors, your chat input will be automatically populated with the deployment command for the IDE to execute.

### Step 4 - Inspect your deployment

You can check the status of your depolyment by using the [Defang Services tool](../concepts/mcp#services) or you can inspect the resources created in your GCP Dashboard.

