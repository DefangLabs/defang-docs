---
title: Debug
description: Defang uses AI to help you debug your cloud applications.
sidebar_position: 650
---

# Debug

Defang includes an AI-driven tool in the CLI (command-line interface) to help you debug your cloud applications. The AI agent will use your service logs as well as the files in your project to help you identify and resolve issues.

:::info
Defang has another AI-driven tool called [`generate`](/docs/concepts/generate).
:::

## How It Works

Here is a typical workflow in the [Defang CLI](/docs/getting-started) that will automatically run the AI debugger tool:

1. When you deploy a project with Defang (i.e. `defang compose up`), the CLI will wait for all services' statuses to switch to healthy. 

2. If any service fails to deploy, the AI debugger will kick in and ask for permission.

3. The AI agent will analyze the logs and files in your project to identify the issue(s).

4. Then, it will provide you with the suggested fix(es) in the terminal. 

:::tip
The AI debugger will not change your files. Instead, it will show you a suggestion, and it is up to you if you want to use it in your code.
:::

The AI debugger only kicks in when any service in a project fails to deploy. This could be because of a build failure, healthchecks failing, or a variety of other issues. 

:::info
The AI debugger only kicks in when any service in a project fails to deploy. At the moment, we do not offer any way to trigger the AI debugger manually. 
:::
