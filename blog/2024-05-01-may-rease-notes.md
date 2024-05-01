---
slug: may-2024-product-update
title: May 2024 Product Update
tags: [Cloud, NoDevOps, BYOC, AWS ECS, defang compose up, Slack API]
author: Defang Team
---

Hey folks! We're excited to share our latest product updates with you. This month, we've been working hard to improve the Defang system and make it even easier for you to deploy your applications. Here's a quick overview of what we've been up to:

## npx defang

We know a lot of folks are using Defang for the first time. To make it easier to get started, we've added a new way to install the Defang CLI. Now you can use `npx` to run the CLI without installing it globally. Just run:

```bash
npx defang
```

This will download the latest version of the Defang CLI and run it for you. No need to worry about installing or updating the CLI manually!

## (coming soon) Bring Your Own Domain with Let's Encrypt

Previously you could bring your own domain with <a href="/docs/concepts/defang-byoc">Defang BYOC</a>... but you had to host the dns records with Route 53 in the AWS account you were deploying to. Now you can point domains hosted anywhere to your Defang deployment and we'll take care of the rest. We'll help generate a Let's Encrypt certificate for your domain and automatically renew it for you.

## Windows Support

Previously a few features didn't work on Windows. Some stuff we've fixed:
* ansi color codes in logs
* handle ctrl-c when tailing logs

## Improved CLI

We've made a variety of small tweaks and improvements to the CLI which should make things a little bit cleaner and more stable.

## Stability and Reliability

We've been working hard to improve the stability and reliability of the Defang architecture.