---
title: Leveraging Managed Language Models with Defang
description: Defang makes it easy to leverage cloud-native managed language models.
sidebar_position: 3000
---

# Managed Language Models

Each cloud provider offers their own managed Large Language Model services. AWS offers Bedrock, GCP offers Vertex, and Digital Ocean offers their GenAI platform. Defang makes it easy to leverage these services in your projects.

## Usage

In order to leverage cloud-native managed language models from your Defang services, all you need to do is add the `x-defang-llm` extension to the service config and Defang will configure the approprate roles and permissions for you.

## Example

Assume you have a web service like the following, which uses the cloud native SDK, for example:

```diff
 services:
     app:
         build:
             context: .
+        x-defang-llm: true
```

## Deploying OpenAI-compatible apps

If you already have an OpenAI-compatible application, Defang makes it easy to deploy on your favourite cloud's managed LLM service. See our [OpenAI Access Gateway](/docs/concepts/managed-llms/openai-access-gateway)

## Current Support

| Provider | Managed Language Models |
| --- | --- |
| [Playground](/docs/providers/playground#managed-large-language-models) | ❌ |
| [AWS Bedrock](/docs/providers/aws#managed-large-language-models) | ✅ |
| [DigitalOcean GenAI](/docs/providers/digitalocean#future-improvements) | ❌ |
| [GCP Vertex](/docs/providers/gcp#managed-large-language-models) | ❌ |
