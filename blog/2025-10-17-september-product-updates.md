---
title: "September 2025 Defang Compose Update"
description: "Monthly product updates from the Defang team - September 2025"
slug: 2025-10-17-product-update
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
    Portal,
    Defang Compose Update,
    VS Code,
    MCP,
  ]
authors: defang_team
---

![Defang Compose Update](/img/defang-compose-update.webp)

September focused on refinement and speed. We tightened deployment workflows, strengthened authentication, and made collaboration smoother across every environment. We improved Portal stability, added Railpack build logs, and refined Compose handling for managed services like Postgres, Mongo, and Redis. WAF is now enabled for high availability on AWS, and our VS Code extension is verified on the Marketplace with an easier MCP setup built right into the installer. Here's what's new.

{/* truncate */}

## Deployment and Infrastructure Improvements

We've made significant improvements to deployment workflows across both AWS and GCP. Portal stability has been enhanced for more reliable project management, and Railpack now includes build logs for better visibility into your image building process.

Compose handling for managed services like Postgres, MongoDB, and Redis has been refined to provide a smoother experience. On AWS, Web Application Firewall (WAF) is now enabled for high availability deployments, adding an extra layer of security to your applications.

## GCP Enhancements

On the GCP side, we introduced faster continuous-deployment image builds with caching support, dramatically reducing build times for subsequent deployments. BYOC (Bring Your Own Cloud) deployments now include health checks for better monitoring and reliability.

We've also improved certificate management and simplified networking by removing unnecessary internal load balancers, making your GCP deployments leaner and more efficient.

## Developer Experience

Our VS Code extension is now verified on the Marketplace, and we've built MCP setup directly into the installer for easier onboarding. CLI authentication has moved from localhost to auth.defang.io, enabling full compatibility with Docker containers and GitHub Codespaces.

Public DNS now auto-fills in Compose files, saving you time during configuration. We've also expanded MCP tools to include logs, BYOC, and Playground provider support.

## Documentation and Tutorials

Docs and onboarding got an upgrade with cleaner layouts, faster search, and clearer AWS key setup guides. We rolled out new tutorials for [deploying through GitHub Actions](https://docs.defang.io/docs/category/deploying-from-github-actions), making CI/CD integration more accessible.

New samples include [Google-ADK](https://github.com/DefangLabs/samples/tree/main/samples/google-adk) and [n8n](https://github.com/DefangSamples/sample-n8n-template/tree/main) deployments, showcasing more ways to build with Defang. These additions help you get started faster with popular frameworks and tools.

## Events and Community

At the Team BC booth during ALL IN Montreal, we showed how developers can deploy agentic apps to any cloud in minutes—no DevOps overhead. Our cofounders led live demos and connected with builders across Canada.

At the AWS Startup Showcase in Vancouver, we demonstrated [one-command Heroku to AWS migrations](https://www.youtube.com/watch?v=rZj37KQ867A&t=3s) to show just how seamless real-cloud deployment can be with Defang.

Meanwhile, our Campus Advocate Program kept growing. In "From Dhaka Beats to Cloud Feats: Deploying with Defang Made Simple," students deployed their first cloud apps with Defang, proving that real cloud development can be accessible to anyone.

We are excited to see what you will deploy with Defang next. Join our [Discord](https://discord.com/invite/9FF5MFAm) to ask questions, get support, and share your builds with the community.

More coming in October.
