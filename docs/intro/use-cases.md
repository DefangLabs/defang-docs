---
sidebar_position: 300
title: Use Cases
description: Use cases for Defang Deploy
---

# Defang Deploy Use Cases

Defang Deploy can be used for a wide variety of use cases, generally in line with the [12 Factor architecture](https://12factor.net/). In this section we'll document some examples. At the end of this section we will also cover use cases that are not supported by Defang Deploy.

## Web Services and APIs

Defang Deploy can be used to deploy web services and APIs. You can use any programming language you like, and you can use the built-in AI agent to help you get started.

Defang Deploy is a great choice for stateless web services and APIs because it takes care of all the heavy lifting such as configuring [networking](../concepts/networking.mdx), [security](../concepts/security.md), and [observability](../concepts/observability.md), and will give you a nice, [horizontally scalable](https://12factor.net/concurrency) deployment.

If you are using [Defang BYOC](../concepts/defang-byoc.md), you can easily connect to databases, storage, and other services that you have running in your cloud account.

## Mobile App Backends

A mobile app backend is a web service or API that is used by a mobile app. Defang Deploy is a great choice for mobile app backends because it helps you deploy horizontally scalable web services and APIs. It's also particularly useful for mobile app developers who aren't familiar with cloud infrastructure: you don't need to be a cloud expert, or even a web expert to use Defang Deploy and properly provision all the necessary infrastructure for your app's backend.

## Hosting LLMs

LLMs (Large Language Models) are a type of AI model that can be used for a wide variety of tasks such as text generation, translation, summarization, and more. Defang Deploy can be used to host LLMs and provide an API for them. Configuring cloud providers like AWS to easily run containerized workloads that depend on GPUs can be quite challenging, but Defang Deploy makes it easy.

# Anti-patterns

While Defang Deploy is great for a wide variety of use cases, there are some use cases that are not a good fit for Defang Deploy. Generally, the use-cases that are Defang Deploy anti-patterns are the same as the ones that are [12 Factor](https://12factor.net/) anti-patterns.

## Stateful Services

Some applications are designed to run in stateful environments. For example, a CMS like WordPress can be coerced to work in a stateless environment, but most of the tooling for it expects to have a long-lived filesystem and a database. Defang Deploy is not a good fit for these types of applications, because [containers are ephemeral and can be replaced at any time](https://12factor.net/processes).

## Data Stores

Defang Deploy now offers support for stateful workloads through our [managed storage](/docs/concepts/managed-storage) options, including [Postgres](/docs/concepts/managed-storage/managed-postgres) and [Redis](/docs/concepts/managed-storage/managed-redis) for data stores. However, we do not recommend using unsupported data stores with Defang Deploy, as this may lead to permanent data loss.

:::info
To better serve our users, we will be introducing additional managed storage options, such as [Object Storage](/docs/concepts/managed-storage/managed-object-storage), in the near future.
:::

Please be aware that if you choose not to use a Defang Deploy-supported [managed storage](/docs/concepts/managed-storage) option, there is a risk that any data stored in a container may be lost if the container is replaced.
