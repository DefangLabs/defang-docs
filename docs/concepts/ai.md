---
title: AI
description: How Defang uses AI to help you build and deploy your cloud applications.
sidebar_position: 100
---

# AI

Defang includes an AI-driven assistant that translates natural language prompts to an outline for your project that you can then refine. The AI assistant is available through the [Defang CLI](./getting-started/installing.md).

:::info
The AI assistant is currently in beta and only supports a limited set of prompts. We plan to expand the capabilities of the AI assistant in the future.
:::

We are working on expanding the range of supported prompts and improving the accuracy of the AI assistant. If you have any feedback or suggestions, please let us know by [opening an issue](https://github.com/defang-io/defang/issues/new).

## Example Prompts

Here are some example prompts that the AI assistant can help you with:

```
A basic service with 2 REST endpoints. The default endpoint will be for health check and should return a JSON object like this: { "status": "OK" }. The /echo endpoint will echo back all request parameters in the response.
```