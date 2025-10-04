---
title: July 2024 Defang Compose Update
tags: [Cloud, NoDevOps, BYOC, CLI, AI, Debugging, Defang Compose Update]
author: Defang Team
---

![Defang Compose Update](/img/defang-compose-update.webp)

Hey folks! We can’t believe a month has gone by already, time flies when you’re having fun! We continued to make progress on our vision of providing a radically simpler way to Develop, Deploy, and Debug cloud applications. In July, we spent time on a couple of key areas:

1.  As our user-base grows, we wanted to make sure we’re able to scale our [Playground](/docs/concepts/defang-playground) environment to be able to handle the load. This involved being able to shard the workload across multiple ALBs and being able to dynamically move some workloads  across shards where possible. With these changes, we are now able handle a large number of concurrent users comfortably. The only noticeable change in behavior you would see is that Defang will now ask you to “`compose down`” your previous project before you are able to deploy a new project on Playground.

2.  The major news this month was the introduction of our “`debug`” functionality. The motivation for this feature was that while the Defang experience is amazing when everything goes smoothly, we saw users (including our own interns who are helping write all those [samples](https://defang.io/samples)) struggle when they hit an error. The underlying reason for the error could come from a variety of sources: an error in the developer’s application (including in their Dockerfile or Compose file), an issue in the way Defang is processing the application, or an issue in the underlying cloud platform (currently, AWS). To the developer, it is often not obvious what the issue is or how to fix it. That got us thinking how we could make this debugging experience “radically simpler” and thus the idea for `defang debug` was born.

    Now (with CLI v0.5.37 if your application encounters an error that leads to a failed deployment, a failed health-check, or a run-time error, Defang will automatically detect the issue. It will then offer to help you debug it by running the `defang debug`  command. If you choose to proceed, Defang will apply an LLM model to try to determine the precise cause of the error, with the context of your application source, logs, error code etc. And it will try to come up with one or more actionable insights on how to fix the error. For an example, see the case below:



    Behind the scenes, Defang is having a conversation on your behalf with the LLM to narrow down to the cause of the error.  We would love for you to try the `debug` feature and give us your feedback so we can improve it further. One future improvement already on our list is the ability to, with user consent, automatically apply a chosen fix and re-try. We are also looking for way to improve the range of failures we are able to diagnose successfully.

n{/* truncate */}
## Townhall

If you're excited about what's coming next and want to hear more about our vision for the future, join us for our Townhall on August 21st. We'll be sharing more about our roadmap and what we're working on next. We'll also be making sure to take time to answer any questions you have, hear your feedback, and learn more about what you want from Defang!

**[Register here](https://lu.ma/rlj13eq5)**

---

We’re excited to keep improving Defang to make it the easiest way for you to Develop, Deploy, and Debug cloud application. Stay tuned for more updates next month.
