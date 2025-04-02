---
title: Deploying OpenAI-compatible apps with Defang
description: Defang makes it easy to leverage cloud-native managed language models for your OpenAI-compatible application.
sidebar_position: 3000
---

# Deploying OpenAI-compatible applications to cloud-native managed language models with Defang

Defang makes it easy to deploy on your favourite cloud's managed LLM service with our [OpenAI Access Gateway](https://github.com/DefangLabs/openai-access-gateway). This service sits between your application and the cloud service and acts as a compatibility layer. It handles incoming OpenAI requests, translates those requests to the appropriate cloud-native API, handles the native response, and re-constructs an OpenAI-compatible response.

See [our tutorial](/docs/tutorials/deploying-openai-apps-aws-bedrock/) which describes how to configure the OpenAI Access Gateway for your application

## Current Support

| Provider | Managed Language Models |
| --- | --- |
| [Playground](/docs/providers/playground#managed-services) | ❌ |
| [AWS Bedrock](/docs/providers/aws#managed-storage) | ✅ |
| [DigitalOcean GenAI](/docs/providers/digitalocean#future-improvements) | ❌ |
| [GCP Vertex](/docs/providers/gcp#future-improvements) | ❌ |
