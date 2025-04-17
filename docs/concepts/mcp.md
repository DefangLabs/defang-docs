---
title: MCP
description: Model Context Protocol (MCP) server with built-in tools to allow users to deploy with Defang through a supported IDE.
sidebar-position: 200
---

# Model Context Protocol (MCP)

Defang has a [Model Context Protocol (MCP) server](https://github.com/DefangLabs/defang) with built-in tools to allow users to deploy and manage cloud services through a
supported IDE.

For more detail on MCP architecture, visit the [official MCP documentation](https://modelcontextprotocol.io/introduction).

### What does an MCP server do?

An MCP server integration allows an AI agent to access external tools and resources to perform tasks beyond its usual capabilities (e.g. deploying a service). With Defang's MCP Server, you can deploy and manage your services simply by asking an AI agent within your IDE.

## Installation

First, install the [Defang CLI](/docs/getting-started). Then, connect the MCP server with your IDE by running the following command in your terminal:

```bash
defang mcp setup --client=<your-ide>
```

Replace `<your-ide>` with the name of your preferred IDE. See our list of [Supported IDEs](#supported-ides).

After setup, you can start the MCP server with the command:

```bash
defang mcp serve
```

Once the server is running, you can access the Defang MCP tools directly through the AI agent chat in your IDE.

## Supported IDEs

### Cursor

```bash
defang mcp setup --client=cursor
```

### Windsurf

```bash
defang mcp setup --client=windsurf
```

### VSCode / VSCode Insiders

```bash
defang mcp setup --client=vscode
```

### Claude Desktop

(While this is not an IDE in the traditional sense, it can support MCP servers.)

```bash
defang mcp setup --client=claude
```

## MCP Tools

Below are the tools available in the Defang MCP Server.

### `deploy`

The `deploy` tool scans your project directory for Dockerfiles and `compose.yaml` files, then deploys the detected service(s) using Defang. You can monitor the deployment process in the Defang Portal.

### `destroy`

Given a project name or directory, the `destroy` tool identifies any services deployed with Defang and terminates them. If no services are found, it will display an appropriate message.

### `login`

The `login` tool will open a browser to the Portal to authenticate to Defang. Once you are logged in, a session token is stored, and you will not need to log in again until the session expires or you manually log out.

### `services`

The `services` tool displays the details of all your services that are currently deployed with Defang. It shows the Service Name, Deployment ID, Public URL and Service Status. If there are no services found, it will display an appropriate message.

:::info
This page is a guide to the Defang MCP Server detailing its usage, installation, and tools. If you are looking for an example of how you can deploy a MCP project with Defang, please instead refer to our [MCP sample application](https://github.com/DefangLabs/samples/tree/main/samples/mcp).
:::

## Example Prompts

Let's say you are using an IDE with an AI agent. After connecting the Defang MCP Server to your IDE using an installation method, you can type in prompts in your chat to invoke the AI agent to use an MCP tool(s).

In your IDE with your project open, you can ask the AI agent:

```
can you deploy this to defang?
```

```
please destroy this project.
```

```
am I logged in to defang?
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
