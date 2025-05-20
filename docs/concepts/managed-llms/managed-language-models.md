---
title: Using Managed LLMs
description: Defang makes it easy to leverage cloud-native managed language models.
sidebar_position: 3000
---

# Managed Language Models

Each cloud provider offers their own managed Large Language Model services. AWS offers Bedrock, GCP offers Vertex AI, and Digital Ocean offers their GenAI platform. Defang makes it easy to leverage these services in your projects.

## Current Support

| Provider | Managed Language Models |
| --- | --- |
| [Playground](/docs/providers/playground#managed-large-language-models) | ✅ |
| [AWS Bedrock](/docs/providers/aws#managed-large-language-models) | ✅ |
| [DigitalOcean GenAI](/docs/providers/digitalocean#future-improvements) | ❌ |
| [GCP Vertex AI](/docs/providers/gcp#managed-large-language-models) | ✅ |

## Usage

In order to leverage cloud-native managed language models from your Defang services, all you need to do is add the `x-defang-llm` extension to the service config and Defang will configure the approprate roles and permissions for you.

## Example

:::info
Ensure you have enabled model access for the model you intend to use:
* [Configure AWS Bedrock model access](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access-modify.html)
* [Configure GCP Vertex AI model access](https://cloud.google.com/vertex-ai/generative-ai/docs/control-model-access)
:::

Assume you have a web service like the following, which uses the cloud native SDK, for example:

```diff
 services:
     app:
         build:
             context: .
+        x-defang-llm: true
```

## Deploying OpenAI-compatible apps

If you already have an OpenAI-compatible application, Defang makes it easy to deploy on your favourite cloud's managed LLM service. See our [OpenAI Access Gateway](/docs/concepts/managed-llms/openai-access-gateway).

:::tip
Defang has a [*Managed LLM sample*](https://github.com/DefangLabs/samples/tree/main/samples/managed-llm) that uses the OpenAI Access Gateway, and a [*Managed LLM with Docker Model Provider sample*](https://github.com/DefangLabs/samples/tree/main/samples/managed-llm-provider) that uses a Docker Model Provider.
:::


## Managed LLM on Playground
If you are using the Managed LLM feature on [Defang Playground](/docs/concepts.defang-playground), please note that your `MODEL` (model ID) will be limited to `ai/nova-micro`.
To access a full range of models, consider using [Defang BYOC](/docs/concepts/defang-byoc).
