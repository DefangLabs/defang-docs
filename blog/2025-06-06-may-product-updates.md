---
title: "May 2025 Defang Compose Update"
description: "Monthly product updates from the Defang team - May 2025"
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
authors: defang_team
---

![Defang Compose Update](/img/defang-compose-update.webp)

May was a big month at Defang. We shipped support for managed LLMs in Playground, added MongoDB support on AWS, improved the Defang MCP Server, and dropped new AI samples to make deploying faster than ever.

{/* truncate */}

## 🚀 Managed LLMs in Playground

You can now try managed LLMs directly in the Defang Playground.
Defang makes it easy to use cloud-native language models across providers — and now you can test them instantly in the Playground.

- Managed LLM support
- Playground-ready
- Available in CLI v1.1.22 or higher

To use managed language models in your own Defang services, just add `x-defang-llm: true` — Defang will configure the appropriate roles and permissions for you.

Already built on the OpenAI API? No need to rewrite anything.

With Defang's OpenAI Access Gateway, you can run your existing apps on Claude, DeepSeek, Mistral, and more — using the same OpenAI format.

[Learn more here.](/docs/concepts/managed-llms/managed-language-models)

[Try it out here.](https://github.com/DefangLabs/samples/tree/main/samples/managed-llm)

## 📦 MongoDB Preview on AWS

Last month, we added support for MongoDB-compatible workloads on AWS via Amazon DocumentDB.

Just add this to your `compose.yaml`:

```yaml
services:
  db:
    x-defang-mongodb: true
```

Once you add `x-defang-mongodb: true`, Defang will auto-spin a DocumentDB cluster in your AWS — no setup needed.

## 🛠 MCP Server Improvements

We've made the MCP Server and CLI easier to use and deploy:

- Users are now prompted to agree to Terms of Service via the portal login
- MCP Server and CLI are now containerized, enabling faster setup, smoother deployments, and better portability across environments

## 🌎 Events and Community

We kicked off the month by sponsoring Vancouver's first [Vibe Coding IRL](https://www.linkedin.com/feed/update/urn:li:activity:7336086817357606914) Sprint. Jordan Stephens from Defang ran a hands-on workshop [on "Ship AI Faster with Vertex AI" with GDG Vancouver](https://www.linkedin.com/posts/gdgyvr_gdgvancouver-buildwithai2025-vertexai-activity-7334288539473334272-LHBl) ([GDG Vancouver](https://gdg.community.dev/gdg-vancouver/)). Around the same time, our CTO and Co-founder Lio joined the [GenAI Founders Fireside panel](https://www.linkedin.com/posts/jenniferyli_genai-founders-fireside-networking-luma-activity-7330702064706117634-D7Hl) hosted by [AInBC](https://ainbc.ai/) and AWS.

Big moment for the team — we won the [Best Canadian Cloud Award](https://www.linkedin.com/feed/update/urn:li:activity:7333554571568435200) at the Vancouver Cloud Summit. Right after, we hit the expo floor at [Web Summit Vancouver](https://www.linkedin.com/posts/defanglabs_defang-websummit-websummitvancouver-activity-7333898557185302528-Rvsm) as part of the BETA startup program and got featured by FoundersBeta as one of the [Top 16 Startups to Watch](https://thefounderspress.com/web-summit-vancouver-top-companies-to-watch-in-2025/).

Our Campus Advocates also kept the momentum going, hosting [Defang events](https://www.linkedin.com/feed/update/urn:li:activity:7334554265056636928) around the world with live demos and workshops.

Last month's Defang Coffee Chat brought together the community for product updates, live demos, and a great convo on vibe deploying.

We're back again on June 25 at 10 AM PST. [Save your spot here.](https://lu.ma/bamhymdq)

We can't wait to see what you deploy with Defang. [Join our Discord](http://s.defang.io/discord) to ask questions, get support, and share your builds.

More coming in June.
