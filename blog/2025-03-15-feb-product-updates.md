---
title: February 2025 Defang Compose Update
tags:
  [
    Cloud,
    DevOps,
    Pulumi,
    Compose,
    OpenAuth,
    Portal,
    Events,
  ]
author: Defang Team
---

![Defang Compose Update](/img/defang-compose-update.webp)

Well, that went by quick! Seems like it was just a couple of weeks ago that we published the Jan update, and it’s already time for the next one. Still, we do have some exciting progress to report in this short month!

1. **Pulumi Provider:** We are excited to announce a Preview of the [Defang Pulumi Provider](https://github.com/DefangLabs/pulumi-defang/). With the Defang Pulumi Provider, you can leverage all the power of Defang with all of the extensibility of Pulumi. Defang will provision infrastructure to deploy your application straight from your Compose file, while allowing you to connect that deployment with other resources you deploy to your cloud account. The new provider makes it easy to leverage Defang if you’re already using Pulumi, and it also provides an upgrade-path for users who need more configurability than the Compose specification can provide.
2. **Portal Update:** We are now fully deploying our portal with Defang alone using the `defang compose up` command. Our original portal architecture was designed before we supported managed storage so we used to use Pulumi to provision and connect external storage. But since we added support in Compose to specify managed storage, we can fully describe our Portal using Compose alone. This has allowed us to rip out hundreds of lines of code and heavily simplify our deployments. To learn more about how we do this, check out our Defang-Deployed-with-Defang (Part 1) [blog](/blog/deploying-defang-with-defang-part-1).
3. **Open-Auth Contribution:** In the past couple months we have been communicating with the OpenAuth maintainers and contributors via PRs ([#120](https://github.com/toolbeam/openauth/pull/120), [#156](https://github.com/toolbeam/openauth/pull/156)) and Issues ([#127](https://github.com/toolbeam/openauth/issues/127)) to enable features like local testing with DynamoDB, enabling support for scopes, improving standards alignment, supporting Redis, and more. We are rebuilding our authentication systems around OpenAuth and are excited about the future of the project.

**Events and Social Media**

February was an exciting month for the Defang team as we continued to engage with the developer community and showcase what’s possible with Defang. We sponsored and demo’ed at the [DevTools Vancouver meetup](https://lu.ma/devtools3), as well as sponsored the [Vancouver.dev IRL: Building AI Startups](https://lu.ma/vandevirl2) event. Also, at the AWS Startup Innovation Showcase in Vancouver, our CTO [Lio](https://www.linkedin.com/in/lionello/)  [demonstrated](https://www.linkedin.com/feed/update/urn:li:activity:7299861024780808193) how Defang makes it effortless to deploy secure, scalable, and cost-efficient serverless apps on AWS! And finally, we had a great response to our [LinkedIn post](https://www.linkedin.com/posts/defanglabs_mcp-docker-anthropic-activity-7298043665883508736-i4dd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAAQqiEBLsVLYYAzEmBFB9oIl31nQ7kDII0) on the Model Context Protocol, catching the attention of many observers, including some of our key partners.

We are eager to see what you deploy with Defang. Join our [Discord](http://s.defang.io/discord) to ask any questions, see what others are building, and share your own experience with Defang. And stay tuned for more to come in March!
