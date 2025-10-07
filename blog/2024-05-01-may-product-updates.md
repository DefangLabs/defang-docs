---
title: April 2024 Defang Compose Update
tags: [Cloud, NoDevOps, BYOC, AWS ECS, defang compose up, Defang Compose Update]
authors: defang_team
---

![Defang Compose Update](/img/defang-compose-update.webp)

Hey folks! There is a lot going on at Defang and we're excited to share our latest product updates with you. Over the last month, we've been working hard to improve the Defang system and make it even easier for you to deploy your applications. Here's a quick overview of what we've been up to:

{/* truncate */}
## npx defang

We know a lot of you are using Defang for the first time. To make it easier to get started, we've added a new way to install the Defang CLI. Now you can use npx to run the CLI without installing it globally by running:

```bash
npx defang@latest
```

This will download the latest version of the Defang CLI and run it for you. No need to worry about installing or updating the CLI manually!

## (coming soon) Bring Your Own Domain with Let's Encrypt

Previously you could bring your own domain with <a href="/docs/concepts/defang-byoc">Defang BYOC</a>... but you had to host the DNS records with AWS Route 53 in the AWS account you were deploying to. Now you can point domains hosted anywhere to your Defang deployment and we'll take care of the rest. We'll help generate a Let's Encrypt certificate for your domain and automatically renew it for you.

## Windows Support

Some of you use Defang from a Windows PC and previously a few features didn't work correctly on Windows. Some stuff we've fixed:
* ansi color codes in logs
* handle ctrl-c when tailing logs

## Improved CLI

We've made a variety of small tweaks and improvements to the CLI which should make things a little bit cleaner and more stable.
* log messages have been made more clear
* adding more progress information during compose up

## Stability and Reliability

Defang is still in Beta and we know we've got to be rock solid by the time we release V1, so we've been working hard to improve the stability and reliability of the Defang architecture. We've been battle-testing different technologies to see how they hold up and have mad a few changes that should make things even better:
* capacity improvements in build queues
* improvements in log availability