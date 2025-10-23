---
title: Generate
description: Defang uses AI to help you generate a starting point for your cloud applications.
---

# Generate

Defang includes an AI-driven agent that translates natural language prompts to an outline for your project that you can then refine. The AI agent is available through the [Defang CLI](/docs/intro/getting-started#install-the-defang-cli).

We are working on expanding the range of supported prompts and improving the accuracy of the AI agent. If you have any feedback or suggestions, please let us know by [opening an issue](https://github.com/DefangLabs/defang/issues/new).

:::info
This page is about Defang's AI tool for project outline generation. We also have an AI tool for [debugging](/docs/concepts/debug).
:::

## Example Prompts

Here are some example prompts that the AI agent can help you with:

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

```
An HTTP GET endpoint that returns an HTML with a random meme from the imgflip API
```

**An example of a more complex prompt**

```
A service that uses bullmq and redis. The compose file should also include a redis service. The code should set up a queue. It should also expose three endpoints with express: one to add a job to the queue, another to check how many tasks are in the queue, and a last one that runs on / which is just a healthcheck. The code should also include a worker that processes the queue by logging what's in each task. Use environment variables to configure the redis connection. No password.
```
