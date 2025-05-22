---
title: October 2024 Defang Compose Update
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
import { Button } from '@mui/material';

![Defang Compose Update](/img/defang-compose-update.webp)

Hi everyone, 

We are a little late getting our monthly update out this time, but we did ship a number of important updates in October that we would like to inform you about. And more is coming… stay tuned for that!

1. **New CLI version 0.6.5**: this was a big release with a number of improvements and bug fixes. You can find details in the release notes [here](https://github.com/DefangLabs/defang/releases/tag/v0.6.5), but to highlight a few: 
    - `defang --provider aws` shows improved error message if unauthenticated
    - Added `--wait` and `--wait-timeout` flags
    - Improved `generate` menu: all samples shown (previously these were restricted by language), and we moved the "Generate with AI" option to now be shown in the search filter.

2. **AI Debug for BYOC**: AI Debug feature is incredibly useful in helping users find and fix issues when something goes wrong. Our initial version only worked on Playground, but now we have extended this to BYOC environments. We hope this makes it even easier for you to deploy your apps to AWS, DigitalOcean, etc.

3. A range of other **improvements**, including
    - Network `aliases` support
    - GDPR Delete Me: You can now delete your Defang account from the Defang Portal
    - 30min time-out for the [deployments](https://docs.defang.io/docs/concepts/deployments) to avoid runaway tasks in your account
    - Allow Postgres major version upgrade, e.g. changing the image from`postgres:14` to `postgres:16` in your Compose file (Currently, we only support this in `--mode development`, we will explore ways to support in other modes in the future.)
    - More feedback logs when containers exit, e.g. failing health-checks
    - Fixes for multiple BYOD [domains](https://docs.defang.io/docs/concepts/domains) in a single account

## Events and Adoption

In October, the Defang team was actively involved in a range of exciting events. We participated in [MLH Cloud Week](https://ghw.mlh.io/events/cloud), [StormHacks](https://stormhacks.com/), and hosted a DevTools Vancouver [meetup](https://lu.ma/devtools2), bringing together local DevTool founders, engineers, and enthusiasts. It was inspiring to see Defang in action, helping these hackers build their amazing projects.

![DevToolsMeetup](/img/october-update/devtools-meetup.jpg)

When we shipped our Public Beta earlier in 2024, we had a goal to reach **1000 users** by end of year. **We are pleased to announce that we have already reached this milestone a couple of months in advance!** We are excited to see the momentum behind the product and how our users are using Defang for developing and deploying a variety of different applications. Thank you for your support!

## The Road Ahead

The team is now heads-down dotting the i’s and crossing the t’s so we can release Defang V1 before end of year. This will enable customers to use Defang for production workloads. We look forward to sharing more in our next monthly update.

---

<img src="/img/october-update/coffee-chat.png" alt="CoffeeChat" style={{ width: 300 }} />

---

As always, we appreciate your feedback and are committed to making Defang the easiest way to develop, deploy, and debug your cloud applications. Go build something awesome! 🚀
