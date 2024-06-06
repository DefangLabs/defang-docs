---
slug: june-2024-product-update
title: June 2024 Product Update
tags: [Cloud, NoDevOps, BYOC, Playground, Load Testing, ACME, Managed Redis, Kaniko, Postgres, ECS]
author: Defang Team
---

Hey folks! We’re back with another exciting update about Defang. Our team has been working hard to bring you new features and improvements so you can get deploying faster. Here’s a rundown of what we’ve been up to this month:

## Load Testing

To make sure Defang is ready for loads of new users, we've been doing a lot of load testing. This is going to help us identify and address potential bottlenecks so we can make sure that Defang scales efficiently and handles all you new users smoothly.

## ACME for BYOD in BYOC and Playground

We’re excited to announce that ACME support is now available for Bring Your Own Domain (BYOD) in both Bring Your Own Cloud (BYOC) and Playground. This means you can easily add Let's Encrypt certificates to your custom domains, regardless of where your DNS is hosted. Defang will handle the certificate generation and automatic renewal for you. Nice and easy.

## Managed Redis

Redis is such a versatile tool that can help with so many different use cases. So we've introduced Managed Redis! You can now specify the Redis image in your `compose.yaml` file and indicate that you want it managed by your cloud provider using `x-defang-redis: true` in your service definition. 

## Upgraded Kaniko

We’ve upgraded our Kaniko integration to improve your container build experience. The new version comes with several bug fixes that enhance stability and performance. This means faster and more reliable builds for your applications.

## Warnings for Stateful Services

To help you avoid potential pitfalls, we’ve added warnings against deploying stateful services with Defang, since you shouldn't actually be deploying anything stateful with Defang.

## Upcoming Features

We’re not stopping here! Here’s a sneak peek at what’s coming soon:

### Managed Postgres

Building on the momentum of Managed Redis, we’re introducing Managed Postgres. Soon you’ll be able to easily integrate a managed Postgres database into your deployment!

### BYOC ECS Lifecycle Events

Defang runs your services with ECS, and we're working on making it clearer what's happening under the hood. 

---

Stay tuned for more updates and improvements. As always, we appreciate your feedback and are committed to making Defang the easiest way to deploy your applications to the cloud. Go deploy something awesome! 🚀
