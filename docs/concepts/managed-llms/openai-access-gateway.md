---
title: OpenAI Access Gateway
description: Defang makes it easy to leverage cloud-native managed language models for your OpenAI-compatible application.
sidebar_position: 3000
---

# OpenAI Access Gateway

Defang makes it easy to deploy on your favourite cloud's managed LLM service with our [OpenAI Access Gateway](https://github.com/DefangLabs/openai-access-gateway). This service sits between your application and the cloud service and acts as a compatibility layer.
It handles incoming OpenAI requests, translates those requests to the appropriate cloud-native API, handles the native response, and re-constructs an OpenAI-compatible response.

See [our tutorial](/docs/tutorials/deploying-openai-apps) which describes how to configure the OpenAI Access Gateway for your application

## Docker Provider Services

As of Docker Compose v2.35 and Docker Desktop v4.41, Compose introduces a new service type called `provider` that allows you to declare platform capabilities required by your application.
For AI models, you use the `model` type to declare model dependencies. This will expose an OpenAI compatible API for your service. Check the [Docker Model Runner documentation](https://docs.docker.com/compose/how-tos/model-runner/) for more details.

```yaml
services:
  chat:
    build: .
    depends_on:
      - ai_runner

  ai_runner:
    provider:
      type: model
      options:
        model: ai/mistral
    x-defang-llm: true
```

Under the hood, when you use the `model` provider, Defang will deploy the **OpenAI Access Gateway** in a private network. This allows you to use the same code for both local development and cloud deployment.

The `x-defang-llm` extension is used to configure the appropriate roles and permissions for your service. See the [Managed Language Models](/docs/concepts/managed-llms/managed-language-models/) page for more details.

## Model Mapping

Defang supports model mapping through the openai-access-gateway on AWS and GCP. This takes a model with a Docker naming convention (e.g. ai/lama3.3) and maps it to the closest matching model name on the target platform. If no such match can be found it can fallback onto a known existing model (e.g. ai/mistral). These environment variables are USE_MODEL_MAPPING (default to true) and FALLBACK_MODEL (no default), respectively.

## Current Support

| Provider | Managed Language Models |
| --- | --- |
| [Playground](/docs/providers/playground#managed-services) | ✅ |
| [AWS Bedrock](/docs/providers/aws#managed-llms) | ✅ |
| [DigitalOcean GenAI](/docs/providers/digitalocean#future-improvements) | ❌ |
| [GCP Vertex AI](/docs/providers/gcp#managed-llms) | ✅ |
