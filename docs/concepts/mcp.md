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

First, make sure you have the [npm package manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed so that you can use `npx` commands.

Connect the Defang MCP Server with your IDE by running the following command in your terminal:

```bash
npx -y defang mcp setup --client=<your-ide>
```

Replace `<your-ide>` with the name of your preferred IDE. See our list of [Supported IDEs](#supported-ides). After setup, you can start the MCP Server with the command:

```bash
npx -y defang mcp serve
```

Once the MCP Server is running, you can access the Defang MCP tools directly through the AI agent chat in your IDE.

![IDE Screenshot](/img/mcp-concept/ide.png)

That's it! Feel free to explore our [Example Prompts](#example-prompts) to get ideas on how to interact with the AI agent and make the most of the Defang MCP Server.

## Supported IDEs

### Cursor

```bash
npx -y defang mcp setup --client=cursor
```

### Windsurf

```bash
npx -y defang mcp setup --client=windsurf
```

### VS Code

```bash
npx -y defang mcp setup --client=vscode
```

### Claude Desktop

(While this is not an IDE in the traditional sense, it can support MCP servers.)

```bash
npx -y defang mcp setup --client=claude
```

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
