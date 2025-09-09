---
title: "August 2025 Defang Compose Update"
description: "Monthly product updates from the Defang team - August 2025"
slug: 2025-09-09-product-update
tags:
  [
    Cloud,
    NoDevOps,
    BYOC,
    GCP,
    AWS,
    AI,
    LLMs,
    Railpack,
    Cost Estimation,
    Agentic Apps,
    Defang Compose Update,
  ]
author: Defang Team
---

![Defang Compose Update](/img/defang-compose-update.webp)

August was about making migrations smoother and showing how you can already use Defang to deploy agentic apps at scale. We expanded our sample projects for popular multi-agent frameworks like CrewAI, LangGraph, Autogen, and Strands, validating them on Playground, AWS, and GCP so you can run multi-agent workloads in production without extra DevOps. Our new Heroku migration flow inspects dynos and add-ons, generates a clean Compose file, provisions managed equivalents like Postgres and Redis, and ships to your own cloud in one command. This cuts costs and removes lock-in. We also introduced MCP BYOC prompts so you can deploy to AWS and GCP straight from your IDE. Railpack on GCP now delivers faster, more reliable no-Dockerfile builds with clearer logs and closer parity with AWS.

## Heroku Migration

As more and more teams are moving away from legacy PaaS solutions, looking for more flexibility and more control, we’ve made it easier for teams to move off [Heroku](https://docs.defang.io/docs/tutorials/migrating-from-heroku). Defang now supports deployments without a Dockerfile and Defang will even generate a compose file from your Heroku application. The result is a smoother path to AWS or GCP with more features, lower costs, and no lock-in.

## Agentic Applications

We expanded and refined our sample projects for agentic frameworks like CrewAI, LangGraph, Autogen, and Strands, validating across Playground, AWS, and GCP for a seamless move to production. [Agentic applications](https://docs.defang.io/blog/agentic-apps) demand more than code. They need scalable compute, managed databases and caches, security, orchestration, and LLM integrations. That’s why Defang automates all the heavy lifting. When you define your app once in Docker Compose, Defang handles provisioning on AWS or GCP including compute, managed Postgres or MongoDB, Redis, LLM services, security, auto scaling, and compliance so you can focus purely on your agents.

## MCP BYOC Prompts

We now support deploying to [AWS](https://docs.defang.io/docs/tutorials/deploy-to-aws) and [GCP](https://docs.defang.io/docs/tutorials/deploy-to-gcp) through the [Defang MCP Server](https://docs.defang.io/docs/concepts/mcp) using prompts in your IDE. This keeps your workflow fast and frictionless, letting you go from code to cloud in seconds without breaking focus. You can stay in the flow with no context switching, spinning up services or scaling workloads simply by chatting in your editor. It means faster iteration, shorter feedback loops, and less time wrestling with terminals or cloud consoles.

:::note
Requires Defang CLI v2.1.3 or later.
:::

## Railpack GCP

[Railpack](https://docs.defang.io/docs/concepts/railpack) now works more smoothly on GCP with fixes to image builds, provider consistency, and a redesigned repo. You’ll see faster first builds and rebuilds with better caching, clearer logs when something fails, and closer parity with AWS so templates behave the same across clouds. Railpack also auto-detects common stacks when no Dockerfile is present, applies sensible defaults for runtime, ports, and health checks, and produces clean OCI images for Playground or your own cloud. Net result: you can ship no-Dockerfile apps across clouds with less setup and fewer surprises.

## Events and Community

In August, one of our campus advocates, Swapnendu Banerjee, hosted a [session](https://www.linkedin.com/posts/rajanyamaity_statuscode2-iiitkalyani-iiserkolkata-activity-7365717326035374081-Ky-S/) that showed how quickly you can deploy real apps to the cloud with Defang. Looking ahead, we’ll be at the [ALL IN conference](https://allinevent.ai/) in Montreal this month and would love to connect if you’re a Defang user or planning to attend.

We are excited to see what you will deploy with Defang next. Join our [Discord](https://s.defang.io/discord) to ask questions, get support, and share your builds with the community.

More coming in September.
