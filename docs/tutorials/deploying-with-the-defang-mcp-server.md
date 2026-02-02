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

There are many ways to authenticate with your [AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-authentication.html). We recommend using the [`aws login`](https://docs.aws.amazon.com/signin/latest/userguide/command-line-sign-in.html) cli command to create a profile with short-lived credentials. Defang can then use this profile to deploy your services.

:::tip
You can use the AWS CLI to verify that you've authenticated to AWS by running `aws sts get-caller-identity`. This will show you the currently authenticated account ID. (The AWS CLI is not required in order to use Defang with AWS)
:::

### Step 2 - Create a stack for deployment on AWS

When you deploy your project, you will need to create a new [stack](/docs/concepts/stacks). This stack is an isolated deployment of your project in a specific cloud account and region. Defang will ask you what which region you want the stack to be deployed to, and also what you want the stack to be called. You will also be asked to provide your AWS credentials. If you have created a profile, you can mention it by name, and defang will use the credentials from that profile. Your credentials are never stored by Defang.

:::note
If you want to use AWS Access Keys, we recommend using `aws configure` to set them up in a profile, rather than passing them directly to Defang.
:::

### Step 3 - Deploy

Once the prompt completes without errors, your chat input will be automatically populated with the deployment command for the IDE to execute.

### Step 4 - Inspect your deployment

You can check the status of your deployment by using the [Defang Services tool](../concepts/mcp#services) or you can inspect the resources created in your AWS Dashboard.

## GCP

### Prerequisites

- [gcloud CLI](https://cloud.google.com/sdk/docs/install)
- [GCP Application Default Credentials](https://cloud.google.com/docs/authentication/set-up-adc-local-dev-environment)

### Step 1 - Collect your credentials

After signing in to your GCP account, select an existing project or [create a new project](https://developers.google.com/workspace/guides/create-project). Make sure [billing is enabled](https://cloud.google.com/billing/docs/how-to/modify-project). Then, note down the project ID for the next step.

### Step 2 - Setup Defang for GCP

In your chat window, type `/defang.GCP_Setup` or select the corresponding prompt from your IDE’s options.

![Trigger Prompt](/img/prompts/gcp-prompt.png)

The [MCP argument](https://modelcontextprotocol.io/specification/2025-06-18/server/prompts) will require your GCP project ID you created in [Step 1](#step-1---collect-your-credentials-1).
![GCP Project ID](/img/prompts/gcp-project-id.png)

### Step 3 - Deploy

Once the prompt completes without errors, your chat input will be automatically populated with the deployment command for the IDE to execute.

### Step 4 - Inspect your deployment

You can check the status of your depolyment by using the [Defang Services tool](../concepts/mcp#services) or you can inspect the resources created in your GCP Dashboard.

## Playground

### Step 1 - Setting your provider

In your chat window, type `/defang.Playground_Setup` or select the corresponding prompt from your IDE’s options.

![Trigger Prompt](/img/prompts/playground-prompt.png)

There are no arguments to this prompt.

### Step 2 - Deploy

Once the prompt completes without errors, your chat input will be automatically populated with the deployment command for the LLM to execute.

### Step 3 - Inspect your deployment

You can check the status of your deployment by using the [Defang Services tool](../concepts/mcp#services) or you can inspect the the project on the [Defang portal](https://portal.defang.io/projects).
![screenshot of the defang portal](/img/getting-started-portal.png)
