---
title: MCP Server
description: Model Context Protocol (MCP) Server with built-in tools to allow users to deploy with Defang through a supported IDE.
sidebar-position: 200
---

# Model Context Protocol (MCP) Server

The Defang [Model Context Protocol (MCP) Server](https://github.com/DefangLabs/defang/tree/main/src/pkg/mcp) includes built-in tools to allow users to deploy and manage cloud services through a supported IDE.

Using this MCP Server with an IDE will enable the AI coding agent (e.g. Copilot) to use Defang tools and resources to perform tasks, such as deploying a service to the cloud. This means you can now use Defang with IDE-integrated AI coding agents.

![Defang MCP Server Diagram](/img/mcp-concept/diagram.png)

For more details about MCP architecture, visit the [official MCP documentation](https://modelcontextprotocol.io/introduction).

:::info
This page is a guide to the Defang MCP Server detailing its installation, tools, and usage. If you are looking for an example of how you can deploy a MCP project with Defang, please instead refer to our [MCP sample application](https://github.com/DefangLabs/samples/tree/main/samples/mcp).
:::

## Installation

Ensure that you have the [Defang CLI](/docs/intro/getting-started.mdx#install-the-defang-cli) installed.

Run the setup command in your terminal for your IDE of choice from the [Supported IDEs](#supported-ides) section. This will connect the Defang MCP Server to your IDE. The general format of the command is as follows:

:::tip[Recommended Installation]
Install the [Defang CLI](/docs/intro/getting-started.mdx#install-the-defang-cli) using [Curl](https://curl.se/) or [Homebrew](https://brew.sh/)

```bash
defang mcp setup --client=<claude-code|claude-desktop|cursor|kiro|rovo|vscode|vscode-insiders|windsurf>
```

:::

Once the command completes, you may need to restart your IDE for the changes to take effect.

Once the MCP Server is running, you can access the Defang MCP tools directly through the AI agent chat in your IDE.

That's it! Feel free to explore our [Example Prompts](#example-prompts) to get ideas on how to interact with the AI agent and make the most of the Defang MCP Server.

Note that `npx` installation is supported, but not recommended.

```bash
npx -y defang@latest mcp setup --client=<claude-code|claude-desktop|cursor|kiro|rovo|vscode|vscode-insiders|windsurf>
```

## Supported IDEs

### [Claude Code](https://www.claude.com/product/claude-code)

While this is not an IDE in the traditional sense, it can support MCP servers. For a smoother experience, consider specifying a project name or directory when making chat prompts to this platform.

Setup command:

```bash
defang mcp setup --client=claude-code
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![Claude Code](/img/mcp-concept/claude-code.png)

### [Claude Desktop](https://claude.com/download)

While this is not an IDE in the traditional sense, it can support MCP servers. For a smoother experience, consider specifying a project name or directory when making chat prompts to this platform.

Setup command:

```bash
defang mcp setup --client=claude-desktop
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![Claude Desktop](/img/mcp-concept/claude-desktop.png)

### [Cursor](https://cursor.com/)

Setup command:

```bash
defang mcp setup --client=cursor
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![Cursor](/img/mcp-concept/cursor.png)

### [Kiro](https://kiro.dev/)

Setup command:

```bash
defang mcp setup --client=kiro
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![Kiro](/img/mcp-concept/kiro.png)

### [Rovo](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/)

While this is not an IDE in the traditional sense, it can support MCP servers. For a smoother experience, consider specifying a project name or directory when making chat prompts to this platform.

Setup command:

```bash
defang mcp setup --client=rovo
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![Rovo](/img/mcp-concept/rovo.png)

### [VS Code](https://code.visualstudio.com/)

Setup command:

```bash
defang mcp setup --client=vscode
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![VS Code](/img/mcp-concept/vscode.png)

### [VS Code Insiders](https://code.visualstudio.com/insiders/)

Setup command:

```bash
defang mcp setup --client=vscode-insiders
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![VS Code](/img/mcp-concept/vscode-insiders.png)

### [Windsurf](https://windsurf.com/)

Setup command:

```bash
defang mcp setup --client=windsurf
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![Windsurf](/img/mcp-concept/windsurf.png)

## MCP Tools

Below are the tools available in the Defang MCP Server.

:::info[Prerequisite]
In order to use any of the MCP tools, you must set a provider using one of the [MCP prompts](#mcp-prompts) first.
:::

### `deploy`

The `deploy` tool scans your project directory for Dockerfiles and `compose.yaml` files, then deploys the detected service(s) using Defang. You can monitor the deployment process in the Defang Portal.

### `services`

The `services` tool displays the details of all your services that are currently deployed in your project with Defang. It shows the Service Name, Deployment ID, Public URL and Service Status. If there are no services found, it will display an appropriate message.

### `destroy`

Given a project name or directory, the `destroy` tool identifies any services deployed with Defang and terminates them. If no services are found, it will display an appropriate message.

### `estimate`

The `estimate` tool scan your project directory and considers your [deployment mode](/docs/concepts/deployment-modes.md) (which defaults to `AFFORDABLE`) to provide a [cost estimation](/docs/concepts/estimation.md) for your project. Currently, the tool supports two providers: `AWS` or `GCP`.

### `list_configs`

The `list_configs` tool will [list](/docs/cli/defang_config) all the Defang configs set for your project.

### `set_config`

The `set_config` tool will [set](/docs/tutorials/configure-environment-variables#step-2---set-the-actual-value-in-the-defang-cli) a specific Defang config for your project.

### `remove_config`

The `remove_config` tool will [remove](/docs/tutorials/configure-environment-variables#removing-a-config-value) a specific Defang config for your project.

## MCP Prompts

Below are the [prompts](https://modelcontextprotocol.io/specification/2025-06-18/server/prompts) available in the Defang MCP Server.

### `defang.AWS_Setup`

The `defang.AWS_Setup` prompt helps you set up your AWS credentials for deploying services to AWS using Defang. Please read this [guide](../tutorials/deploying-with-the-defang-mcp-server#aws) on how to use this prompt.

:::note
Credentials never leave memory and are automatically cleared after you close your IDE.
:::

Arguments:

- AWS Credential - REQUIRED : Will take a profile name if using an AWS profile, or an Access Key ID if using Access Keys.
- AWS_SECRET_ACCESS_KEY - REQUIRED for Access Keys method: Leave blank if using an AWS profile.
- AWS_REGION - REQUIRED or OPTIONAL : Required if using Access Keys method, optional if using an AWS profile.

### `defang.GCP_Setup`

The `defang.GCP_Setup` prompt helps you set up your targeted GCP project for deploying services to GCP using Defang. Please read this [guide](../tutorials/deploying-with-the-defang-mcp-server#gcp) on how to use this prompt.

Arguments:

- GCP Project ID - REQUIRED : The ID of the GCP project you want to use (e.g., "my-gcp-project").

### `defang.Playground_Setup`

The `defang.Playground_Setup` prompt helps you set up Defang Playground as your deployment provider. Please read this [guide](../tutorials/deploying-with-the-defang-mcp-server#playground) on how to use this prompt.

Arguments:

- No arguments required

## Example Prompts

After connecting the Defang MCP Server to your IDE using an installation method, you can type in prompts in your chat to invoke the AI agent to use any MCP tool(s).

For example, you can ask the AI agent:

```
can you deploy this to defang?
```

```
please destroy this project.
```

```
what services do I have?
```

You can also choose to specify a project name or project directory if you do not have the project open:

```
deploy this with defang /Users/yourname/Documents/project1
```

```
do I have a service called project1
```

You can estimate the cost of a deployment to a supported cloud provider:

```
can you estimate balance mode on aws for this project?
```

```
can you estimate how much this project will cost on gcp?
```

You can list, set and remove Defang configs for a project:

```
what defang configs do I have set for this project?
```

```
list all the defang configs I have set for this project
```

```
set the defang config DATABASE_URL to example.com
```

```
remove the defang config DATABASE_URL
```

Feel free to try any of these prompts or create your own!

## Manual Setup

If you prefer to set up the Defang MCP Server manually without using the setup command and without installing the [Defang CLI](/docs/intro/getting-started.mdx#install-the-defang-cli), you can copy this MCP configuration into your IDE's MCP file:

```json
{
  "mcpServers": {
    "defang": {
      "command": "npx",
      "args": ["-y", "defang@latest", "mcp", "serve"]
    }
  }
}
```
