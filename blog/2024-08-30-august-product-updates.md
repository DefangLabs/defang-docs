---
title: August 2024 Defang Compose Update
tags:
  [
    Cloud,
    NoDevOps,
    BYOC,
    DigitalOcean,
    CLI,
    AI,
    Debugging,
    Defang Compose Update,
  ]
authors: defang_team
---
import { Button } from '@mui/material';


![Defang Compose Update](/img/defang-compose-update.webp)

Wow - what a month of August it has been! We made some big strides of progress on our vision of providing a radically simpler way to Develop, Deploy, and Debug _portable_ cloud applications.

{/* truncate */}
## Ask Defang

We've just rolled out an initial version of Ask Defang, our AI-driven documentation assistant that can help you navigate the Defang docs and get deploying faster. It's deployed with Defang and using a combination of embeddings run on a GPU-powered service, Defang managed Redis, and OpenAI APIs.

Check it out [here](/docs/ask) or head to [ask.defang.io](https://ask.defang.io) to get started!

## Enhanced Platform Symmetry

We've been hard at work improving the symmetry between our Playground and BYOC environments as well as `docker compose up` vs `defang compose up` to provide a more seamless experience. You can now use multiple compose files and in BYOC the CLI will subscribe to events to monitor service health during deployments.

## AI Features and Debugging Improvements

We've been working on several AI-driven enhancements to make your development process even more efficient. We've addressed key issues, such as file generation failures due to parsing errors and invalid compose files. Also, our Debug Assistant is now more robust, handling context size limits better than before.

---

![Workshop](/img/august-update/workshop.jpg)

## August Events

This month, we hosted an in-person [workshop](https://www.linkedin.com/feed/update/urn:li:activity:7233915052083310595/) to get more developers acquainted with Defang and simplify their cloud app journey. You can view the presentation [here](https://s.defang.io/cloudjam2024). We also held the first-ever DevTools Vancouver [meetup](https://www.linkedin.com/posts/defanglabs_devtoolsmeetup-activity-7234599713751060483-zQsg?utm_source=share&utm_medium=member_desktop), bringing together local DevTool founders, engineers, and enthusiasts.

Looking ahead, we’re excited to collaborate with [MLH](https://mlh.io/), [Hack the North](https://hackthenorth.com/), [LangaraHacks](https://lhacks.langaracs.ca/), and more in September. If you'd like to attend any of these events, be sure to sign up!

---

<img src="/img/august-update/townhall.png" alt="TownHall" style={{ width: 300 }} />

---

## Roadmap

We're working on a number of new features to make Defang even better. Here are some of the most exciting ones:

- **Managed Postgres**: We're working on getting Defang to provision managed Postgres services for you, so you can easily store and query data in your applications.
- **DigitalOcean BYOC**: We're working on adding DigitalOcean BYOC to give you even more choice over where you deploy your applications.

---

We’re excited to keep enhancing Defang to make it the easiest way for you to Develop, Deploy, and Debug cloud applications. Stay tuned for more updates next month! 🚀
