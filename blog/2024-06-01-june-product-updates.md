---
title: May 2024 Defang Compose Update
tags: [Cloud, NoDevOps, BYOC, Playground, Load Testing, ACME, Managed Redis, Kaniko, Postgres, ECS, Defang Compose Update]
author: Defang Team
---

![Defang Compose Update](/img/defang-compose-update.webp)

Hey folks! We're back with another exciting update about Defang. Our team has been working hard to bring you new features and improvements so you can get deploying faster. Here's a rundown of what we've been up to this month:


{/* truncate */}
## Samples, samples, samples!

We've been cranking out samples like there's no tomorrow. We've published samples to get you up and running with FastAPI, Elysia, Angular, React, Svelte, Sveltekit, Sails.js, Phoenix, and more. You can filter through them on the [Defang homepage](https://defang.io/#deploy). Check out our video about all the [new samples and functionality](https://www.youtube.com/watch?v=8wIU_af-sX8).

### Start from a sample in seconds

With all this work we've been putting into samples, we realized it would be pretty awesome if you could clone a sample faster. So we updated the CLI. Now, if you run `defang generate` you'll be able to filter through the samples and choose one. You can also filter through the samples on the [Defang homepage](https://defang.io/#deploy) and clone any of them with a simple command like `defang new sveltekit`.

### Sample templates

If you look through our [GitHub organization](https://github.com/DefangLabs), you'll start seeing loads of repos with the structure `sample-<sample_name>-template`. If you open them, you can create a new repo by clicking this button:

![screenshot of github UI pointing towards template button](https://github.com/DefangLabs/defang-docs/assets/910895/97d33d90-43b9-499a-b139-e114b701adcb)


Not only will that create a new repo based on the sample in your account, but if you've used Defang before (and accepted the Terms and Conditions) it will automatically deploy it to the playground so you can start playing with Defang immediately.

## ACME for BYOD

We’re excited to announce that ACME support is now available for Bring Your Own Domain (BYOD) in both Bring Your Own Cloud (BYOC) and Playground. This means you can easily add Let's Encrypt certificates to your custom domains, regardless of where your DNS is hosted. Defang will handle the certificate generation and automatic renewal for you. Nice and easy.

## Warnings for Stateful Services

To help you avoid potential pitfalls, we’ve added warnings against deploying stateful services with Defang, since you shouldn't actually be deploying anything stateful with Defang. For example, we'll warn you if you try to deploy services with images like `postgres:<version>`, `redis:<version>`, `minio:<version>`, etc. 

In the near future we will be offering ways to run some stateful services using cloud providers' managed offerings. For example Redis, Postgres, and S3. Speaking of which...

## Managed Redis!

Redis is such a versatile tool that can help with so many different use cases. So we've introduced Managed Redis! You can now specify the Redis image in your `compose.yaml` file and indicate that you want it managed by your cloud provider using `x-defang-redis: true` in your service definition. 

## Load Testing

To make sure Defang is ready for loads of new users, we've been doing a lot of load testing. This is going to help us identify and address potential bottlenecks so we can make sure that Defang scales efficiently and handles all you new users smoothly.

## Upgraded Kaniko

We’ve upgraded our Kaniko integration to version 1.23.0 to improve your container build experience. The new version comes with several bug fixes that enhance stability and performance. This means faster and more reliable builds for your applications.

## Upcoming Features

We’re not stopping here! Here’s a sneak peek at what’s coming soon:

### Managed Postgres

Building on the momentum of Managed Redis, we’re introducing Managed Postgres. Soon you’ll be able to easily integrate a managed Postgres database into your deployment!

### BYOC ECS Lifecycle Events

Defang runs your services with ECS, and we're working on making it clearer what's happening under the hood. 

---

Stay tuned for more updates and improvements. As always, we appreciate your feedback and are committed to making Defang the easiest way to deploy your applications to the cloud. Go deploy something awesome! 🚀
