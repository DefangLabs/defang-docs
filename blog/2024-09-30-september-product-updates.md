---
title: September 2024 Defang Compose Update
tags:
  [
    Cloud,
    NoDevOps,
    BYOC,
    Postgres,
    DigitalOcean,
    CLI,
    AI,
    Debugging,
    Defang Compose Update,
  ]
author: Defang Team
---
import { Button } from '@mui/material';


![Defang Compose Update](/img/defang-compose-update.webp)

Hi everyone - you can feel the weather getting cooler, but things are heating up at Defang! Sep was another amazing month, with new features, new users, and new partners. Here is a quick summary:

1. **Bring-Your-Own-Cloud (BYOC) DigitalOcean in Preview!** From the very beginning, it has been part of Defang’s vision to not only provide a simpler way to develop, deploy, and debug your cloud applications, but to be able to do so in a portable way. As developers, we all value the flexibility of knowing our application can be deployed to our chosen cloud, even if that choice changes over time. Today, we take a big step in providing that choice with the Preview of BYOC with DigitalOcean! This literally means the same application can be deployed to the Defang Playground, AWS, or DigitalOcean with no changes! Take a look at the [docs](https://docs.defang.io/docs/providers/digitalocean), give it a try and share your feedback on our [Discord](http://s.defang.io/discord).
2. **Managed Postgres**: Postgres is one of the fundamental building blocks of many applications, and users wanted us to provide a way to add that to their application in a declarative way. So that’s exactly what we have done. You can now specify the Postgres image in your `compose.yaml` file and indicate that you want it managed by your cloud provider using `x-defang-postgres: true` in your service definition. Defang will automatically provision the appropriate managed Postgres in the target cloud (e.g. RDS on AWS) and do all the heavy lifting to configure and hook things up correctly. Check out the docs [here](https://docs.defang.io/docs/concepts/managed-storage/managed-postgres), give it a try and let us know what you think.
3. We continue to improve the **quality and performance** of existing features:
    1. We’ve made several improvements to our AI-assistant to increase the robustness of our Develop and Debug modules. For example, we updated generation to comply with latest Compose spec. We also addressed the top issues we saw people facing when deploying, such as out-of-memory errors when building containers. 
    2. To cope with our growing user-base, we have made several scaling improvements to our Playground and Portal environments.
    3. We also made several updates to our documentation and samples to keep up with the changes and enhancements in the Defang product. 

---

![Workshop](/img/september-update/workshop.jpg)

## September Events

In Sep, the Defang team participated in a number of events including HacktheNorth, LangaraHacks, MLH Global Hack Week and other MLH hackathons. It’s great to see Defang being put to use by these hackers to build their amazing projects. And we get useful insights from these events that help us improve the product. We will continue to do more of these events in the future - watch our [LinkedIn](https://www.linkedin.com/company/defanglabs) page for announcements.

---

## Google for Startups Accelerator Canada

Also in Sep, Defang was included in the [Google for Startups Accelerator Canada.](https://www.linkedin.com/posts/irankarimian_ai-startups-dominate-latest-google-for-startups-activity-7241805161411551232-thky?utm_source=share&utm_medium=member_desktop) This is a great recognition of the value Defang is providing to cloud developers. Through our collaboration with Google, we hope to add GCP as another target cloud for Defang in the coming months - stay tuned!

---

<img src="/img/september-update/coffee-chat.png" alt="CoffeeChat" style={{ width: 300 }} />

---

As always, we appreciate your feedback and are committed to making Defang the easiest way to develop, deploy, and debug your cloud applications. Go build something awesome! 🚀
