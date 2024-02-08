---
sidebar_position: 100
title: Use Cases
description: Use cases for Defang.
---

# Use Cases

Defang can be used for a wide variety of use cases. In this section we'll document some examples. At the end of this section we will also cover use cases that are not supported by Defang.

## Web Services and APIs

Defang can be used to deploy web services and APIs. You can use any programming language you like, and you can use the built-in AI assistant to help you get started.

Defang is a great choice for [stateless](https://www.redhat.com/en/topics/cloud-native-apps/stateful-vs-stateless#stateful-vs-stateless) web services and APIs using the [12 Factor architecture](https://12factor.net/) because it takes care of all the heavy lifting such as configuring [networking](../concepts/networking.md), [security](../concepts/security.md), and [observability](../concepts/observability.md), and will give you a nice, [horizontally scalable](https://wa.aws.amazon.com/wellarchitected/2020-07-02T19-33-23/wat.concept.horizontal-scaling.en.html) deployment.

If you are using [Defang BYOC](../concepts/defang-byoc.md), you can easily connect to databases, storage, and other services that you have running in your cloud account.

## Mobile App Backends

A mobile app backend is a web service or API that is used by a mobile app. Defang is a great choice for mobile app backends because it helps you deploy horizontally scalable web services and APIs. It's also particularly useful for mobile app developers who aren't familiar with cloud infrastructure: you don't need to be a cloud expert, or even a web expert to use Defang and properly provision all the necessary infrastructure for your app's backend.

## Hosting LLMs

LLMs (Large Language Models) are a type of AI model that can be used for a wide variety of tasks such as text generation, translation, summarization, and more. Defang can be used to host LLMs and provide an API for them. Configuring cloud providers like AWS to easily run containerized workloads that depend on GPUs can be quite challenging, but Defang makes it easy.

# Anti-patterns

While Defang is great for a wide variety of use cases, there are some use cases that are not a good fit for Defang. Here are some examples:

## Stateful Services

Some applications are designed to run in [stateful environments](https://www.redhat.com/en/topics/cloud-native-apps/stateful-vs-stateless#stateful). For example, a CMS like WordPress can be coerced to work in a stateless environment, but most of the tooling for it expects to have a long-lived filesystem and a database. Defang is not a good fit for these types of applications, because containers are ephemeral and can be replaced at any time.

## Data Stores

Defang is not a good fit for data stores like databases, caches, and message queues. These types of services are designed to be long-lived and to store data. Defang is primarily designed for stateless workloads, and it's not a good fit for stateful workloads: if a container is replaced, all the data in it is lost. You could probably coerce a data store to work in a stateless environment with certain replication strategies, but it's not a good fit for Defang.