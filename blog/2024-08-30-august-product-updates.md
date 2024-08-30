---
slug: 2024-08-31-product-update
title: August 2024 Defang Compose Update
tags:
  [
    Cloud,
    NoDevOps,
    BYOC,
    Digital Ocean,
    CLI,
    AI,
    Debugging,
    Defang Compose Update,
  ]
author: Defang Team
---
import { Button } from '@mui/material';


![Defang Compose Update](/img/defang-compose-update.webp)

Wow - what a month of Aug it has been! We made some big strides of progress on our vision of providing a radically simpler way to Develop, Deploy, and Debug _portable_ cloud applications.

## BYOC Digital Ocean in Preview

BYOC Digital Ocean in Preview! From the very beginning, it has been part of Defang’s vision to not only provide a simpler way to Develop, Deploy, and Debug your cloud applications, but to be able to do so in a portable way. As developers, we all value the flexibility of knowing our application can be deployed to our chosen cloud, even if that choice changes over time for a given application. Defang has already provided that choice since the beginning between the Defang Playground and BYOC with AWS. Today, we take an even bigger step in providing that choice with the announcement of the Preview of BYOC with Digital Ocean!

For now the Preview will only allow deploying services, no managed storage like Redis or Postgres. We are working on adding more features and will keep you updated on our progress.

The preview will be available within the next week or two following this announcement.

## Enhanced Platform Symmetry

We've been hard at work improving the symmetry between our Playground and BYOC environments as well as `docker compose up` vs `defang compose up` to provide a more seamless experience. You can now use multiple compose files and in BYOC the CLI will subcribe to events to monitor service health during deployments.

## Managed Postgres Coming Soon

We're excited to let you know that managed Postgres is almost here! We've got an initial version running internally, and we'll be rolling it out to you soon. Stay tuned for more updates on this front!

## AI Features and Debugging Improvements

We've been working on several AI-driven enhancements to make your development process even more efficient. We've addressed key issues, such as file generation failures due to parsing errors and invalid compose files. Also, our Debug Assistant is now more robust, handling context size limits better than before.

## Ask Defang

We've just rolled out an initial version of Ask Defang, our AI-driven documentation assistant that can help you navigate the Defang docs and get deploying faster. It's deployed with Defang and using a combination of embeddings run on a GPU-powered service, Defang managed Redis, and OpenAI APIs.

Check it out [here](/docs/ask) or head to [ask.defang.io](https://ask.defang.io) to get started!

---

![Workshop](/img/august-update/workshop.jpg)

## August Events

This month, we hosted an in-person [workshop](https://www.linkedin.com/feed/update/urn:li:activity:7233915052083310595/) to get more developers acquainted with Defang and simplify their cloud app journey. You can view the presentation [here](https://s.defang.io/cloudjam2024). We also held the first-ever DevTools Vancouver [meetup](https://www.linkedin.com/posts/defanglabs_devtoolsmeetup-activity-7234599713751060483-zQsg?utm_source=share&utm_medium=member_desktop), bringing together local DevTool founders, engineers, and enthusiasts.

Looking ahead, we’re excited to collaborate with MLH, Hack the North, LangaraHacks, and more in September. If you'd like to attend any of these events, be sure to [sign up](#)!

---

<img src="/img/august-update/townhall.png" alt="TownHall" style={{ width: 300 }} />

## Townhall

Mark your calendars! If you’re eager to learn more about what’s coming next, join us for our Townhall on September 25th. We’ll be sharing our future roadmap, answering your questions, and gathering your feedback.

<Button href="https://lu.ma/rlj13eq5" variant="contained" size="large" target="_blank">
Register here!
</Button>

---

We’re excited to keep enhancing Defang to make it the easiest way for you to Develop, Deploy, and Debug cloud applications. Stay tuned for more updates next month! 🚀
