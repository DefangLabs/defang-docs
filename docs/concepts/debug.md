---
title: Debug
description: Defang uses AI to help you debug your cloud applications.
sidebar_position: 650
---

# Debug

Defang includes an AI-driven tool to help you debug your cloud applications. The AI agent will use your service logs as well as the files in your project to help you identify and resolve issues.

:::warning
The AI debugging agent is currently in preview and is currently limited in its capabilities. We plan to expand the capabilities of the AI agent in the future.
:::

## How it works

When you deploy a project with Defang, the CLI will wait for all services' statuses to switch to healthy. If any service fails to deploy, the AI debugger will kick in. It will analyze the logs and files in your project to identify the issue and provide you with a suggested fix. **The AI debugger will not change your files.**

:::info
The AI debugger only kicks in when any service in a project fails to deploy. This could be because of a build failure, healthchecks failing, or a variety of other issues. At the moment, we do not offer any way to trigger the AI debugger manually.
:::
