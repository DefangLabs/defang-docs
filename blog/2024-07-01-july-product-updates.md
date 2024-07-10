---
slug: july-2024-product-update
title: July 2024 Product Update 
tags: [Cloud, NoDevOps, BYOC, Windows, Managed Redis, CLI]
author: Defang Team
---

Hey folks! We've got another batch of updates to share with you about what the Defang team has been working on over the past month. We're committed to improving your deployment experience, so let's take a look at what's new.

## Windows Experience Improvements

For our Windows users out there, we've made some changes to make your Defang experience even smoother:

* You can now install Defang using `winget`, the Windows Package Manager, for a streamlined setup
* We've introduced a signed binary for added security and peace of mind

Deploying your apps from Windows just got a little bit nicer.

## Managed Redis is Here

We first introduced this last month, but we were just starting to roll it out. Since then we've improved the experience and make it dead simple to use: simply add this to your redis service definition in `compose.yaml`:

```yaml
x-defang-redis: true
```

Defang will take care of provisioning a fully AWS-managed Redis instance for you, so you can stay focused on your application.

We also added a sample that showcases the power of managed Redis: [BullMQ with Redis](https://github.com/DefangSamples/sample-bullmq-bullboard-redis-template). It demonstrates how you can use BullMQ and BullBoard with a managed Redis instance to create a powerful job queue system so you can easily build robust, scalable applications in AWS with Defang.

## Compose Profiles & Updated Samples

We've added a new "defang" profile for `compose.yaml` that's specifically for Defang-related services and configuration. This should help keep your Defang settings organized and separate from your application configuration.

We've also updated our sample projects to showcase how to use them with Defang, including:

* [BullMQ with Redis](https://github.com/DefangSamples/sample-bullmq-bullboard-redis-template)

Check them out if you're looking for some inspiration or a starting point for your own projects.

## CLI Updates

We're always looking for ways to enhance the CLI experience. Here's what's new:

* `npx defang` automatically checks to always have the latest version of the CLI
* The output during `defang compose up` has been streamlined to focus on the most important information
* `defang tail` now supports listening to specific services, making it easier to troubleshoot issues
* We've improved hints and error messages to better guide you when something goes wrong
* The CLI now has improved color support for light theme terminals, making it easier on the eyes

It's the small refinements that can make a big difference in your workflow.

## Other Updates

Here are a few more things that didn't quite fit with the rest:

* Visibility into ECS deployment events in BYOC tail logs
* Portal enhancements including sample project search and 1-click deploy
* Improvements to ACME certificate generation

Keep an eye out for these updates in the near future.

---

As always, we'd love your help shaping the future of Defang, so let us know what you'd like to see next. Happy deploying! 🚀