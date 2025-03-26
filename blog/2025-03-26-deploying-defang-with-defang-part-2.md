---
slug: deploying-defang-with-defang-part-2
title: "Deploying Defang with Defang: Part 2"
author: Defang Team
tags: [defang-with-defang, deployment, defang-website]
---

![Defang Compose Update](/img/defang-on-defang/part-1/header.png)

When we rebranded Defang, we knew our website needed more than just a fresh coat of paint. It needed to become a more dynamic part of our stack. We needed some parts to be more flexible, some parts to be more interactive, and better aligned with how modern apps are organized and deployed. And what better way to take it there than to deploy it with Defang itself?

This is part of our ongoing "Defang on Defang" series, where we show how we're using our own tool to deploy all the services that power Defang. In this post, we're diving into how we turned our own website into a project to better understand how Defang can be used to deploy a dynamic Next.js apps and how we can improve the experience for developers.

---

## From S3 + CloudFront to Dynamic, Containerized Deployments

Our original site was a Next.js app using [static exports](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports) deployed via S3 and fronted by CloudFront. That setup worked for a while—it was fast and simple. But with our rebrand, we added pages and components where it made sense to use (and test for other developers) some Next.js features that we couldn't use with the static export:

- [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [ISR](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)

That meant static hosting wouldn't cut it. So we decided to run the site as an app in a container.

That being said, our learnings from the previous setup *are* being used to develop the capabilities of Defang. We're using the experience to make sure that Defang can handle the deployment of static sites as well as dynamic ones. We'll keep you updated when that's ready.

---

## Deploying with Defang (and Why It Was Easy)

We already deploy our other services with Defang using Compose files. In fact, the static website actually already used a Dockerfile and Compose file to manage the build process. So we just had to make some minor changes to the Compose file to take into account new environment variables for features we're adding and make a few small changes to the Dockerfile to handle the new build process.

Some things we had to change:

**Adding ports to the Compose file**:
```yaml
    ports:
      - mode: ingress
        target: 3000
        published: 3000
```

**Adding domain info the Composer file**:
```yaml
    domainname: defang.io
    networks:
      public:
        aliases:
          - www.defang.io
```

One other hiccup was that we used to do www to non-www redirects using S3. There are a few ways to switch that up, but for the time being we decided to use Next.js middleware.

Pretty soon after that, the site was up and running in an AWS account—with TLS, DNS, and both the `www` and root domains automatically configured. Pretty straightfoward! 

---

## Real-World Lessons That Are Shaping Defang

Deploying the website wasn't just a checkbox—it helped surface real-world pain points and ideas for improvement.

### 1. Static Assets Still Need CDNs
Even though the site is dynamic now, we still want assets like `/_next/static` to load quickly from a CDN. This made it clear that CDN support—like CloudFront integration—should be easier to configure in Defang. That’s now on our roadmap. That's also going to be useful for other frameworks that use similar asset paths, like Django.

### 2. Next.js Env Vars Can Be Tricky in Containers
Next.js splits env vars between build-time and runtime, and the rules aren’t always obvious. Some need to be passed as build args, and others as runtime envs. That made us think harder about how Defang (or our docs) could help clarify or streamline this for developers—even if we can’t change that aspect of Next.js itself.

### 3. Redirects and Rewrites
We had to add a middleware to handle www to non-www redirects. This is a common need, so we're keeping an eye on how we can make this easier to deal with in Defang projects.

These are the kinds of things we only notice by using Defang on real-world projects.

---

## The Takeaway

Our site now runs like the rest of our infrastructure:

- Fully containerized
- Deployed to our own AWS account
- Managed with a Composer file
- Deployed with Defang

Stay tuned for the next post in the series—because this is just one piece of the puzzle.

