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

Ensure that you have the [npm package manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed, as `npx` commands are required for setup.

:::warning
At this time, the Defang MCP Server can only be installed using `npx`. Other methods are not yet supported.
:::
Run the setup command in your terminal for your IDE of choice from the [Supported IDEs](#supported-ides) section. This will connect the Defang MCP Server to your IDE. The general format of the command is as follows:

```bash
npx -y defang@latest mcp setup --client=<your-ide>
```

Once the command completes, you may need to restart your IDE for the changes to take effect.

Once the MCP Server is running, you can access the Defang MCP tools directly through the AI agent chat in your IDE.

That's it! Feel free to explore our [Example Prompts](#example-prompts) to get ideas on how to interact with the AI agent and make the most of the Defang MCP Server.

## Supported IDEs

### Cursor

Setup command:

```bash
npx -y defang@latest mcp setup --client=cursor
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![Cursor](/img/mcp-concept/cursor.png)

### Windsurf

Setup command:

```bash
npx -y defang@latest mcp setup --client=windsurf
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![Windsurf](/img/mcp-concept/windsurf.png)

### VS Code / VS Code Insiders

Setup command:

```bash
npx -y defang@latest mcp setup --client=vscode
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![VS Code](/img/mcp-concept/vscode.png)

### Claude Desktop

While this is not an IDE in the traditional sense, it can support MCP servers. For a smoother experience, consider specifying a project name or directory when making chat prompts to this platform.

Setup command:

```bash
npx -y defang@latest mcp setup --client=claude
```

Once setup is complete, you can interact with the AI coding agent using Defang-related actions like `check defang services` or [other prompts](#example-prompts). Here's an example of what it could look like:

![Claude Desktop](/img/mcp-concept/claude.png)

## MCP Tools

Below are the tools available in the Defang MCP Server.

### `deploy`

The `deploy` tool scans your project directory for Dockerfiles and `compose.yaml` files, then deploys the detected service(s) using Defang. You can monitor the deployment process in the Defang Portal.

:::info
The Defang MCP Server currently supports deployments to [Defang Playground](/docs/providers/playground). We plan to support BYOC in future updates.
:::

### `services`

The `services` tool displays the details of all your services that are currently deployed in your project with Defang. It shows the Service Name, Deployment ID, Public URL and Service Status. If there are no services found, it will display an appropriate message.

### `destroy`

Given a project name or directory, the `destroy` tool identifies any services deployed with Defang and terminates them. If no services are found, it will display an appropriate message.

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

Feel free to try any of these prompts or create your own!
