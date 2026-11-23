# Model Context Protocol (MCP) Server

The Defang [Model Context Protocol (MCP) Server](https://github.com/DefangLabs/defang/tree/main/src/pkg/mcp) includes built-in tools to allow users to deploy and manage cloud services through a supported IDE.

Using this MCP Server with an IDE will enable the AI coding agent (e.g. Copilot) to use Defang tools and resources to perform tasks, such as deploying a service to the cloud. This means you can now use Defang with IDE-integrated AI coding agents.

![Defang MCP Server Diagram](/assets/images/diagram-fe19c601d94e812b48e72ee66f0b43b4.png)

For more details about MCP architecture, visit the [official MCP documentation](https://modelcontextprotocol.io/introduction).

info

This page is a guide to the Defang MCP Server detailing its installation, tools, and usage. If you are looking for an example of how you can deploy a MCP project with Defang, please instead refer to our [MCP sample application](https://github.com/DefangLabs/samples/tree/main/samples/mcp).

## Installation[​](#installation "Direct link to Installation")

Ensure that you have the [Defang CLI](https://docs.defang.io/docs/intro/getting-started.md#install-the-defang-cli) installed.

Run the setup command in your terminal for your IDE of choice from the [Supported IDEs](#supported-ides) section. This will connect the Defang MCP Server to your IDE. The general format of the command is as follows:

Recommended Installation

Install the [Defang CLI](https://docs.defang.io/docs/intro/getting-started.md#install-the-defang-cli) using [Curl](https://curl.se/) or [Homebrew](https://brew.sh/)

```
defang mcp setup --client=<claude-code|claude-desktop|cursor|kiro|rovo|vscode|vscode-insiders|windsurf>
```

Once the command completes, you may need to restart your IDE for the changes to take effect.

Once the MCP Server is running, you can access the Defang MCP tools directly through the AI agent chat in your IDE.

That's it! Feel free to explore our [Example Prompts](#example-prompts) to get ideas on how to interact with the AI agent and make the most of the Defang MCP Server.

Note that `npx` installation is supported, but not recommended.

```
npx -y defang@latest mcp setup --client=<claude-code|claude-desktop|cursor|kiro|rovo|vscode|vscode-insiders|windsurf>
```

## Supported IDEs[​](#supported-ides "Direct link to Supported IDEs")

### [Claude Code](https://www.claude.com/product/claude-code)[​](#claude-code "Direct link to claude-code")

While this is not an IDE in the traditional sense, it can support MCP servers. For a smoother experience, consider specifying a project name or directory when making chat prompts to this platform.

Setup command:

```
defang mcp setup --client=claude-code
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![Claude Code](/assets/images/claude-code-51b6953004d1a730146dae32ec50f5d6.png)

### [Claude Desktop](https://claude.com/download)[​](#claude-desktop "Direct link to claude-desktop")

While this is not an IDE in the traditional sense, it can support MCP servers. For a smoother experience, consider specifying a project name or directory when making chat prompts to this platform.

Setup command:

```
defang mcp setup --client=claude-desktop
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![Claude Desktop](/assets/images/claude-desktop-47ace032d3d4b06f00ac34f4c8090413.png)

### [Cursor](https://cursor.com/)[​](#cursor "Direct link to cursor")

Setup command:

```
defang mcp setup --client=cursor
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![Cursor](/assets/images/cursor-6876b9c0575a3379b1dbb7dec6b94a3c.png)

### [Kiro](https://kiro.dev/)[​](#kiro "Direct link to kiro")

Setup command:

```
defang mcp setup --client=kiro
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![Kiro](/assets/images/kiro-f7b963589fab0edeba106caf3b4f6d28.png)

### [Rovo](https://support.atlassian.com/rovo/docs/use-rovo-dev-cli/)[​](#rovo "Direct link to rovo")

While this is not an IDE in the traditional sense, it can support MCP servers. For a smoother experience, consider specifying a project name or directory when making chat prompts to this platform.

Setup command:

```
defang mcp setup --client=rovo
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![Rovo](/assets/images/rovo-69eae25fc29c612d13e690cebd5f82ec.png)

### [VS Code](https://code.visualstudio.com/)[​](#vs-code "Direct link to vs-code")

Setup command:

```
defang mcp setup --client=vscode
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![VS Code](/assets/images/vscode-6d9b6219505e45a68463f86807f93f0e.png)

### [VS Code Insiders](https://code.visualstudio.com/insiders/)[​](#vs-code-insiders "Direct link to vs-code-insiders")

Setup command:

```
defang mcp setup --client=vscode-insiders
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![VS Code](/assets/images/vscode-insiders-4b31efc14e0ddb6717286ad3fccbfc01.png)

### [Windsurf](https://windsurf.com/)[​](#windsurf "Direct link to windsurf")

Setup command:

```
defang mcp setup --client=windsurf
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![Windsurf](/assets/images/windsurf-d7ebfb6700b526f573f81d989fa211ca.png)

## MCP Tools[​](#mcp-tools "Direct link to MCP Tools")

Below are the tools available in the Defang MCP Server.

Prerequisite

In order to use any of the MCP tools, you must set a provider using one of the [MCP prompts](#mcp-prompts) first.

### `deploy`[​](#deploy "Direct link to deploy")

The `deploy` tool scans your project directory for Dockerfiles and `compose.yaml` files, then deploys the detected service(s) using Defang. You can monitor the deployment process in the Defang Portal.

### `services`[​](#services "Direct link to services")

The `services` tool displays the details of all your services that are currently deployed in your project with Defang. It shows the Service Name, Deployment ID, Public URL and Service Status. If there are no services found, it will display an appropriate message.

### `destroy`[​](#destroy "Direct link to destroy")

Given a project name or directory, the `destroy` tool identifies any services deployed with Defang and terminates them. If no services are found, it will display an appropriate message.

### `estimate`[​](#estimate "Direct link to estimate")

warning

Cost estimation is temporarily unavailable. Follow [issue #2316](https://github.com/DefangLabs/defang/issues/2316) for the fix and its release.

The `estimate` tool scan your project directory and considers your [deployment mode](https://docs.defang.io/docs/concepts/deployment-modes.md) (which defaults to `AFFORDABLE`) to provide a [cost estimation](https://docs.defang.io/docs/concepts/estimation.md) for your project. Currently, the tool supports the following providers: `AWS`, or `GCP`.

### `list_configs`[​](#list_configs "Direct link to list_configs")

The `list_configs` tool will [list](https://docs.defang.io/docs/cli/defang_config.md) all the Defang configs set for your project.

### `set_config`[​](#set_config "Direct link to set_config")

The `set_config` tool will [set](https://docs.defang.io/docs/tutorials/configure-environment-variables.md#step-2---set-the-actual-value-in-the-defang-cli) a specific Defang config for your project.

### `remove_config`[​](#remove_config "Direct link to remove_config")

The `remove_config` tool will [remove](https://docs.defang.io/docs/tutorials/configure-environment-variables.md#removing-a-config-value) a specific Defang config for your project.

## Example Prompts[​](#example-prompts "Direct link to Example Prompts")

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

## Manual Setup[​](#manual-setup "Direct link to Manual Setup")

If you prefer to set up the Defang MCP Server manually without using the setup command and without installing the [Defang CLI](https://docs.defang.io/docs/intro/getting-started.md#install-the-defang-cli), you can copy this MCP configuration into your IDE's MCP file:

```
{
  "mcpServers": {
    "defang": {
      "command": "npx",
      "args": ["-y", "defang@latest", "mcp", "serve"]
    }
  }
}
```
