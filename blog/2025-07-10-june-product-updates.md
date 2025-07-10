---
title: "June 2025 Defang Compose Update"
description: "Monthly product updates from the Defang team - June 2025"
slug: 2025-07-10-product-update
tags:
  [
    Cloud,
    NoDevOps,
    BYOC,
    MCP,
    LLMs,
    Vibe Deploying,
    GCP,
    AWS,
    Events,
    Defang Compose Update,
  ]
author: Defang Team
---

![Defang Compose Update](/img/defang-compose-update.webp)

June was a big month at Defang. We rolled out powerful features across our CLI, Playground, and Portal, expanded support for both AWS and GCP, and introduced new tools to help you ship faster and smarter. From real-time cloud cost estimation to internal infra upgrades and community highlights, here’s everything we shipped.

## 🚀 Live AWS Cost Estimation

We just launched something we’re really excited about: live AWS cost estimation before you deploy.
Most devs ship to the cloud without knowing what it’s going to cost and that’s exactly the problem we’re solving. With Defang, you can now go from a local Docker Compose file to fully provisioned AWS infrastructure with live pricing, resource customization, and one-click teardown.

👉 [Check out the docs](https://docs.defang.io/docs/tutorials/estimating-aws-deployment-costs)

## 🧠 CrewAI + Defang Starter Kit

In June, we launched a full-stack starter kit for building real-time RAG and multi-agent apps with CrewAI + Defang.
It’s designed to help you move fast with a production-style setup — including Django, Celery, Channels, Postgres (with pgvector), Redis for live updates, and Dockerized model runners you can easily customize. CrewAI handles the agent workflows, and with Defang, you can deploy the whole thing to the cloud in a single command.
Whether you’re building a smart Q&A tool or a multi-agent research assistant, this stack gives you everything you need to get started.

👉 [Try it out here](https://github.com/DefangSamples/sample-crew-django-redis-postgres-template)

## 📊 Deployment Info in Portal

We’ve added active deployment information to Portal. This information shows deployment, etag (id), and provider to help users understand particulars about their deployments. This is the same as the ‘defang deployments’ CLI command.

## ☁️ Playground Now Runs on AWS + GCP

Internally, we also hit a big milestone: Playground now runs on both AWS and GCP, showing the power of Defang’s multi-cloud infrastructure.

## 🧩 VS Code Extension Released

We also released the Defang VS Code Extension, making it even easier to deploy and manage cloud apps right from your editor. No terminal needed.

- One-click deploy
- Built-in tools to manage services
- Zero config, fast setup

👉 [Try it out here](https://marketplace.visualstudio.com/items?itemName=DefangLabs.defang)

## 🛠️ Railpacks Progress

We also made progress on Railpacks, a new feature designed to make reusable infra patterns easier to deploy. The core PR has been merged, but it’s still going through testing and a few final additions before it’s ready for public release. Stay tuned for more in the next update.

## 💬 Ask Defang via Intercom

You can now try out the Ask Defang chatbot directly within Intercom! This new integration makes it easier than ever to get instant answers and support while you work.

## 🐳 Docker x Defang White Paper

And one more thing: bridging local development and cloud deployment just got easier. Defang now extends Docker Compose directly to AWS, Google Cloud, and DigitalOcean. No new tools, just familiar workflows at cloud scale.

👉 [Read the white paper here](https://defang.io/whitepapers/docker-compose-defang/)

## Events and Community

In June, we showcased a powerful new demo at AWS events: “What If You Could See AWS Costs Before You Deployed?” Jordan Stephens walked through how to go from Docker Compose to AWS infra with real-time cost estimates and easy teardown, all via Defang.

👉 [Watch the demo here](https://www.youtube.com/watch?v=YHmE_6MgcYA)

We can’t wait to see what you deploy with Defang.  
👉 [Join our Discord](https://discord.gg/9FF5MFAm)

More coming in July.
