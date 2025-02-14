---
title: January 2025 Defang Compose Update
tags:
  [
    Cloud,
    NoDevOps,
    BYOC,
    Postgres,
    DigitalOcean,
    AWS,
    CLI,
    AI,
    Debugging,
    Defang Compose Update,
  ]
author: Defang Team
---

![Defang Compose Update](/img/defang-compose-update.webp)

Welcome to 2025! As we had shared in our early [Dec update](https://docs.defang.io/blog/2024-12-04-launch-week), we reached our V1 milestone with support for GCP and DigitalOcean in Preview and production support for AWS. We were very gratified to see the excitement around our launch, with Defang ending 2024 with twice the number of users as our original goal! 

We are excited to build on that momentum going into 2025. And we are off to a great start in Jan, with some key advancements:

1. **GCP parity with AWS:** We are really excited to announce that our GCP provider is now feature-complete, with support for key features such as [Managed Postgres](https://docs.defang.io/docs/concepts/managed-storage/managed-postgres), [Managed Redis](https://docs.defang.io/docs/concepts/managed-storage/managed-redis), [BYOD](https://docs.defang.io/docs/concepts/domains#bring-your-own-domain) (Bring-Your-Own-Domain), [GPUs](https://docs.defang.io/docs/tutorials/deploy-with-gpu), AI-assisted [Debugging](https://docs.defang.io/docs/concepts/debug), and more. Give it a try and let us know your feedback.
2. **Defang Deployed with Defang:** In 2025, we are doubling our focus on production use-cases where developers are using Defang every day to deploy their production apps. And where better to start than with Defang itself? We had already been using Defang to deploy portions of our infrastructure (such as our web site), but we are super happy to report that now we are using Defang to deploy **all** our services - including our Portal, Playground, the Defang back-end (aka Fabric) and more. We’ll be sharing more about how we did this, and publishing some of the related artifacts, in a blog post soon - stay tuned.
3. **Campus Advocate Program:** One of our key goals for 2025 is to bring Defang to more students and hobbyists. To do this, we are very excited to launch our [Campus Advocate Program](https://defang.io/cap/), a community of student leaders passionate about cloud technology. Our advocates will build communities, host events, and help peers adopt cloud development with Defang. If you’re a student eager to drive cloud innovation on your campus, we’d love to hear from you - you can [apply here](https://s.defang.io/cap?_gl=1*1rx948d*_ga*ODk3NDgzNjU4LjE3MTgxNDc2MjQ.*_ga_QVJVWN44CW*MTczODM2NjYyOC4xMDMuMS4xNzM4MzY4MjI2LjAuMC4w).
4. **1-click Deploy instructions:** One of our most popular features is the ability to deploy any of our 50+ samples with [a single click](https://docs.defang.io/docs/tutorials/using-one-click-deploy). We have now published [instructions](https://docs.defang.io/docs/tutorials/adding-custom-one-click-deploy) showing how you can provide a similar experience for your project or sample. We are curious to see what you deploy with this!
5. **Model Context Protocol** sample: AI agents are of course the rage nowadays. Recently, Docker published a [blog](https://www.docker.com/blog/the-model-context-protocol-simplifying-building-ai-apps-with-anthropic-claude-desktop-and-docker/) showing how you can use Docker to containerize “servers” following Anthropic’s [Model Context Protocol](https://modelcontextprotocol.io/introduction). We have now published a sample that shows you how to easily deploy such containerized servers to the cloud using Defang - [check it out here](https://github.com/DefangLabs/samples/tree/main/samples/mcp).

So, you can see we have been busy! But that is not all - we have a lot more in the pipeline in the coming months. Stay tuned - it’s going to be an exciting 2025!

P.S.: **Defang is now on Bluesky!** [Follow us](https://bsky.app/profile/defanglabs.bsky.social) to stay connected, get the latest updates, and join the conversation. See you there!
