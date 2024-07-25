---
title: Generate
description: Defang uses AI to help you generate a starting point for your cloud applications.
sidebar_position: 100
---

# Generate

Defang includes an AI-driven assistant that translates natural language prompts to an outline for your project that you can then refine. The AI assistant is available through the [Defang CLI](../getting-started/installing.md).

:::info
The AI assistant is currently in beta and only supports a limited set of prompts, varying in complexity. We plan to expand the capabilities of the AI assistant in the future.
:::

We are working on expanding the range of supported prompts and improving the accuracy of the AI assistant. If you have any feedback or suggestions, please let us know by [opening an issue](https://github.com/DefangLabs/defang/issues/new).

## Example Prompts

Here are some example prompts that the AI assistant can help you with:

```
A basic service with 2 REST endpoints. The default endpoint will be for health check and should return a JSON object like this: { "status": "OK" }. The /echo endpoint will echo back all request parameters in the response.
```

```
A simple service that runs in the cloud and serves a web page
```

```
A simple flask app with one route that responds with a json object
```

```
A simple next.js app that serves a static page
```

```
A simple api with a single route built on express
```

**An example of a more complex prompt**

```
A service that uses bullmq and redis. The compose file should also include a redis service. The code should setup a queue. It should also expose three endpoints with express: one to add a job to the queue, another to check how many tasks are in the queue, and a last one that runs on / which is just a healthcheck. The code should also include a worker that processes the queue by logging what's in each task. Use environment variables to configure the redis connection. No password.
```
