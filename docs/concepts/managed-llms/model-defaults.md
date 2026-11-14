---
title: Choose models with recipes
description: Keep Compose model names portable and choose cloud models through your stack's recipe.
---

# Choose models with recipes

Use `chat-default`, `chat-large`, or `embedding-default` in your Compose file to let your stack's [recipe](../recipe.md) choose the cloud model. You can change that choice in a custom recipe without editing your application or waiting for a new CLI release.

```yaml
services:
  app:
    build: .
    models:
      chat:
        endpoint_var: CHAT_URL
        model_var: CHAT_MODEL
      embedding:
        endpoint_var: EMBEDDING_URL
        model_var: EMBEDDING_MODEL

models:
  chat:
    model: chat-default
  embedding:
    model: embedding-default
```

Your application reads the injected endpoint and model variables and calls the OpenAI-compatible API. Explicit environment values in your Compose file take precedence over values Defang would inject.

## Choose defaults for your stack

Start from your stack's current recipe in the [Defang Portal](../portal.md). Add or edit the model entries in its `config` section, keeping the other recipe settings you want to retain. Assign the custom recipe to the stack and deploy.

Each cloud has a separate model map:

| Cloud | Recipe key |
| --- | --- |
| AWS Bedrock | `defang-aws:models` |
| GCP Vertex AI | `defang-gcp:models` |
| Microsoft Foundry on Azure | `defang-azure:models` |
| Scaleway Generative APIs | `defang-scaleway:models` |

Each entry contains an ordered list of candidates. For example, this recipe fragment chooses a chat model family and a specific embedding model on AWS:

```yaml
config:
  defang-aws:models:
    chat-default:
      - model: us.amazon.nova-2-lite-v1
        role: chat
    embedding-default:
      - model: amazon.titan-embed-text-v2:0
        role: embedding
```

Here, the chat model omits the `:<revision>` suffix. Defang selects a supported revision within that family; it does not upgrade `v1` to another major version.

The same Compose file can use a different recipe when deployed to another cloud. The following fragments show the corresponding settings. Model access and availability depend on your cloud account and region.

### GCP

```yaml
config:
  defang-gcp:models:
    chat-default:
      - model: gemini-3.5-flash
        location: global
        role: chat
    embedding-default:
      - model: gemini-embedding-001
        role: embedding
```

`location` controls the Vertex AI endpoint used for that model. Use `global` only when it meets your application's location requirements. A provider-managed model alias can change upstream even when its name stays the same.

### Azure

```yaml
config:
  defang-azure:models:
    chat-default:
      - model: gpt-5.1
        format: OpenAI
        role: chat
      - model: gpt-4.1
        format: OpenAI
        role: chat
    embedding-default:
      - model: text-embedding-3-small
        version: "1"
        format: OpenAI
        role: embedding
```

Azure separates a model's name from its revision. Omitting `version` selects an eligible revision of that name and format. Setting `version` requests that exact revision; if it is unavailable, deployment fails. Unpinned candidates are tried in order when a model is unavailable. Access and network failures stop deployment.

Floating Azure candidates skip preview revisions unless you set `allow-preview: true`. The built-in Azure recipes retain their existing preview eligibility.

### Scaleway

```yaml
config:
  defang-scaleway:models:
    chat-default:
      - model: qwen3-235b-a22b-instruct-2507
        role: chat
    qwen3-235b-a22b-instruct:
      - model: qwen3-235b-a22b-instruct-2507
        role: chat
    embedding-default:
      - model: bge-multilingual-gemma2
        role: embedding
```

The custom key `qwen3-235b-a22b-instruct` gives Compose a family name without a release suffix. Set `models.chat.model` to that key to use it. You can later change the concrete ID in the recipe. Defang does not guess which suffixes can be removed from Scaleway model names. Applications call Scaleway's inference endpoint directly.

Scaleway inference requires an API key. Defang uses an `OPENAI_API_KEY` you have configured, or reuses your authenticated Scaleway API key when none is set. To supply a separate key, use `defang config set OPENAI_API_KEY`. Keep credentials out of recipe files.

## Aliases and exact models

The existing aliases remain supported, including the compatibility spellings `ai/chat-default`, `ai/chat-large`, and `ai/embedding-default`. Other `ai/` model names are not automatically converted into these aliases.

- An AWS model ID with an exact revision, or an ARN, requests that exact target and bypasses recipe mappings.
- A recipe key selects its configured candidates. Custom keys need `role: chat` or `role: embedding` when the cloud's model information cannot establish the role.
- On GCP, Azure and Scaleway, a matching recipe key takes precedence over a native model with the same name. Use distinct recipe keys to avoid that ambiguity.
- A native family name uses that cloud's version rules. Numeric suffixes such as GCP's `-001` are not universally removable patch versions.
- A missing built-in alias entry falls back to Defang's compatibility default. An invalid or empty entry is an error.

Custom recipes are not automatically merged with the latest built-in recipe. Start from an existing recipe when you want to retain its infrastructure settings. `chat-large` is a configurable alias, not a guarantee that every cloud offers the same model size or capabilities.

## Model updates and embeddings

Defang records the selected model and reuses it when the request and its relevant recipe entry have not changed. An unrelated recipe edit, such as log retention, does not upgrade a model. A changed chat selection is shown during deployment. Some cloud-managed aliases remain mutable upstream; storing their name does not freeze the underlying model weights.

Changing embedding models can make stored vectors incompatible, even if their dimensions match. Defang preserves an existing embedding selection when a recipe default changes. To migrate, regenerate the affected vectors and explicitly request the new exact model or a distinct recipe key pinned to it. Defang does not substitute another model to work around a retirement. An unchanged selection can still become unavailable upstream.

Recipe-based selection requires a compatible CLI and deployment engine. If deployment reports an older engine, use the upgrade guidance in the error. An older Scaleway CLI can still deploy its already-resolved model choice, but requires a CLI upgrade before recipe overrides can take effect.

DigitalOcean managed-model deployments are not supported.
