---
title: "Simple, Secure, and Scalable GCP Deployments from Docker Compose"
description: "Announcing our latest whitepaper: How Defang simplifies Google Cloud deployments with Docker Compose"
slug: defang-gcp-compose
tags: [Google Cloud, GCP, Docker Compose, Cloud Deployment, Defang, Whitepaper]
authors: defang_team
---

**Introducing Our New Whitepaper: Simple, Secure, and Scalable GCP Deployments from Docker Compose**

We’re excited to share our latest whitepaper, _Defang + GCP: Simple, Secure, and Scalable Deployments from Docker Compose_.

:::tip[Want to skip the blog?]
[Read the full whitepaper here.](https://defang.io/whitepapers/gcp-defang/)
:::

Deploying to Google Cloud Platform (GCP) doesn’t have to be complicated. Docker Compose made defining local apps simple, and Defang makes cloud deployments just as easy.

With Defang, you can:

- **Deploy to GCP with a single command.** Go from Compose to Cloud Run, Cloud SQL, and more with just `defang compose up --provider=gcp`.
- **Skip the DevOps overhead.** No need for Terraform, Pulumi, or custom scripts. Defang maps your Compose services to the right GCP resources — compute, storage, networking, and even managed LLMs.
- **Enjoy built-in security and scalability.** Defang automates GCP best practices, handling service accounts, secret management, HTTPS, auto-scaling, and more.
- **Integrate with your workflow.** Deploy from your terminal, GitHub Actions, or even natural language prompts in VS Code, Cursor, or Windsurf.
- **Save costs and avoid surprises.** Choose from affordable, balanced, or high-availability modes with built-in cost estimation coming soon.

Our whitepaper walks through how Defang integrates with GCP, including how it:

{/* truncate */}

✅ Builds your containers using Cloud Build  
✅ Manages secure deployments via Cloud Run and managed services  
✅ Supports custom domains, advanced networking, GPUs, LLMs, and more  
✅ Powers CI/CD pipelines with GitHub Actions and Pulumi

It also highlights how Defang itself deploys real apps like our Ask Defang chatbot using less than 100 lines of Compose on GCP.
Want to simplify your GCP deployments? Start with Compose, scale with Defang.

import Link from '@docusaurus/Link';

<div style={{marginTop: '2rem', marginBottom: '2rem'}}>
  <Link
    className="button button--primary button--lg"
    to="https://defang.io/whitepapers/gcp-defang/"
    children="Read the full whitepaper"
  />
</div>
