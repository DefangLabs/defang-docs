---
title: "March 2025 Defang Compose Update
"
description: "Monthly product updates from the Defang team - March 2025"
tags: [
    Cloud,
    NoDevOps,
    BYOC,
    Postgres,
    GCP,
    DigitalOcean,
    AWS,
    CLI,
    AI,
    LLMs,
    Pulumi,
    Autoscaling,
]
author: Defang Team
draft: false
---

![Defang Compose Update](/img/defang-compose-update.webp)

Wow - another month has gone by, time flies when you're having fun!

Let us share some important updates regarding what we achieved at Defang in March:

**Managed LLMs:** One of the coolest features we have released in a bit is [support for Managed LLMs (such as AWS Bedrock) through the `x-defang-llm` compose service extension](https://docs.defang.io/docs/concepts/managed-llms/managed-language-models). When coupled with the `defang/openai-access-gateway` service image, Defang offers the easiest way to [migrate your OpenAI-compatible application to cloud-native managed LLMs](https://docs.defang.io/docs/tutorials/deploying-openai-apps) without making any changes to your code. Support for GCP and DigitalOcean coming soon. **[Update: April 30, 2025 - GCP support is now enabled!]**

**Defang Pulumi Provider:** Last month, we announced a preview of the [Defang Pulumi Provider](https://github.com/DefangLabs/pulumi-defang), and this month we are excited to announce that V1 is now available in the [Pulumi Registry](https://www.pulumi.com/registry/packages/defang/). As much as we love Docker, we realize there are many real-world apps that have components that (currently) cannot be described completely in a Compose file. With the Defang Pulumi Provider, you can now leverage [the declarative simplicity of Defang with the imperative power of Pulumi](https://docs.defang.io/docs/concepts/pulumi#when-to-use-the-defang-pulumi-provider).

**Production-readiness:** As we onboard more customers, we are fixing many fit-n-finish items:

1. **Autoscaling:** Production apps need the ability to easily scale up and down with load, and so we've added support for autoscaling. By adding the `x-defang-autoscaling: true` extension to your service definition in Compose.yaml file, you can benefit from automatic scale out to handle large loads and scale in when load is low. Learn more [here](https://docs.defang.io/docs/tutorials/scaling-your-services).

2. **New** [CLI](https://github.com/DefangLabs/defang/releases)**:** We've been busy making the CLI more powerful, secure, and intelligent.
   • Smarter Config Handling: The new --random flag simplifies setup by generating secure, random config values, removing the need for manual secret creation. Separately, automatic detection of sensitive data in Compose files helps prevent accidental leaks by warning you before they are deployed. Together, these features improve security and streamline your workflow.
   • Time-Bound Log Tailing: Need to investigate a specific window? Use tail --until to view logs up to a chosen time—no more scrolling endlessly. Save time from sifting through irrelevant events and focus your investigation.
   • Automatic generation of a .dockerignore file for projects that don't already have one, saving you time and reducing image bloat. By excluding common unnecessary files—like .git, node_modules, or local configs—it helps keep your builds clean, fast, and secure right from the start, without needing manual setup.

3. **Networking / Reduce costs:** We have implemented private networks, as mentioned in the official Compose specification. We have also reduced costs by eliminating the need for a pricy NAT Gateway in "development mode" deployments!

### Events and Programs

In March, we had an incredible evening at the AWS Gen AI Loft in San Francisco! Our CTO and Co-founder [Lionello Lunesu](https://www.linkedin.com/in/lionello/) demoed how Defang makes deploying secure, scalable, production-ready containerized applications on AWS effortless. Check out the demo [here](https://youtu.be/C0MbB0-6mUk?si=6dEf3gIOmWe7pctK&t=1426)!

We also kicked off the [**Defang Campus Advocate Program**](https://defang.io/cap/), bringing together advocates from around the world. After launching the program in February, it was amazing to see the energy and momentum already building on campuses world-wide. Just as one example, check out [this post](https://www.linkedin.com/posts/akash-nath29_defang-backends-defang-activity-7314917342143029250-2_v8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAAQqiEBLsVLYYAzEmBFB9oIl31nQ7kDII0) from one of the students who attended a session hosted by our Campus Advocate [**Swapnendu Banerjee**](https://www.linkedin.com/in/swapnendu-banerjee-36ba06219/) and then went on to deploy his project with Defang. This is what we live for!

We wrapped up the month with our monthly Coffee Chat, featuring the latest Defang updates, live demos, and a conversation on vibe coding. Thanks to everyone who joined. The next one is on April 30. **Save your spot [here](https://lu.ma/r08oz3rl).**

As always, we appreciate your feedback and are committed to making Defang even better. Deploy any app to any cloud with a single command. Go build something awesome!
