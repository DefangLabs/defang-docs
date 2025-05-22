---
title: "Deploying Defang with Defang: Part 1"
author: Defang Team
tags: [defang-with-defang, deployment, defang-portal]
---

![Defang Compose Update](/img/defang-on-defang/part-1/header.png)

Deploying applications is hard. Deploying complex, multi-service applications is even harder. When we first built the Defang Portal, we quickly recognized the complexity required to deploy it, even with the early Defang tooling helping us simplify it a lot. But we’ve worked a lot to expand Defang’s capabilities over the last year+ so it could take on more of the work and simplify that process.

This evolution wasn’t just based on our own instincts and what we saw in the Portal—it was informed by listening to developers who have been using Defang, as well as our experience building dozens of sample projects for different frameworks and languages. Each time we build a new sample, we learn more about the different requirements of various types of applications and developers and refine Defang’s feature set accordingly. The Portal became an extension of this learning process, serving as both a proving ground and an opportunity to close any remaining gaps, since it’s one of the most complex things we’ve built with Defang.

Finally, though, the Defang Portal—an application with six services, including two managed data stores, authentication, and a frontend—is fully deployed using just Docker Compose files and the Defang CLI using GitHub Actions.

---

## **The Initial Setup: A More Complex Deployment**

The Portal isn’t a simple static website; it’s a **full-stack application** with the following services:

- **Next.js frontend** – Including server components and server actions.
- **Hasura (GraphQL API)** – Serves as a GraphQL layer.
- **Hono (TypeScript API)** – Lightweight API for custom business logic.
- **OpenAuth (Authentication Service)** – Manages authentication flows.
- **Redis** – Used for caching and session storage.
- **Postgres** – The main database.

Initially, we provisioned databases and some DNS configurations using Infra-as-Code because Defang couldn’t yet manage them for us. We also deployed the services themselves manually through infrastructure-as-code, requiring us to define each service separately.

This worked, but seemed unnecessarily complex, if we had the right tooling…

---

## **The Transition: Expanding Defang to Reduce Complexity**

We’ve made it a priority to expand Defang’s capabilities a lot over the last year so it could take on more of the heavy lifting of a more complex application. Over the past year, we’ve added loads of features to handle things like:

- **Provisioning databases**, including managing passwords and other secrets securely
- **Config interpolation using values stored in AWS SSM**, ensuring the same Compose file works both locally and in the cloud
- **Provisioning certs and managing DNS records** from configuration in the Compose file.

As a result, we reached a point where we no longer needed custom infrastructure definitions for most of our deployment.

## **What Changed?**

- **Previously**: GitHub Actions ran infra-as-code scripts to provision databases, manage DNS, and define services *separately from the Docker Compose file we used for local dev*
- **Now**: Our [**Defang GitHub Action**](https://github.com/marketplace/actions/defang-deployment-action) targets normal Compose files and deploys everything, using secrets and variables managed in GitHub Actions environments.
- **Result**: We **eliminated hundreds of lines of Infra-as-Code**, making our deployment leaner and easier to manage and reducing the differences between running the Portal locally and running it in the cloud.

This wasn’t just about reducing complexity—it was also a validation exercise. We knew that Defang had evolved enough to take over much of our deployment, but by going through the transition process ourselves, we could identify and close the remaining gaps and make sure our users could really make use of Defang for complex production-ready apps.

---

## **How Deployment Works Today**

### **Config & Secrets Management**

- **Sensitive configuration values** (database credentials, API keys) are stored **securely in AWS SSM** using Defang’s [configuration management tooling](https://docs.defang.io/docs/concepts/configuration).
- [**Environment variable interpolation**](https://docs.defang.io/docs/concepts/configuration#interpolation) allows these **SSM-stored config values** to be referenced directly in the Compose file, ensuring the same configuration works in local and cloud environments.
- **Defang provisions managed Postgres and Redis instances automatically** when using the `x-defang-postgres` and `x-defang-redis` extensions, securely injecting credentials where needed with variable interpolation.

### Deployment Modes

- [**Deployment modes**](https://docs.defang.io/docs/concepts/deployment-modes) (`development`, `staging`, `production`) adjust infrastructure settings across our dev/staging/prod deployments making sure dev is low cost, and production is secure and resilient.

### **DNS & Certs**

- When we first set up the portal (before we even released the private beta) DNS and certs had to be managed outside the Defang context. Now, **[we can provision certs using ACM or Let’s Encrypt](https://docs.defang.io/docs/concepts/domains)**.

### **CI/CD Integration**

- **Previously**: GitHub Actions ran custom infra-as-code scripts.
- **Now**: The [**Defang GitHub Action**](https://github.com/DefangLabs/defang-github-action) installs Defang automatically and runs `defang compose up`, simplifying deployment.
- **Result**: A streamlined, repeatable CI/CD pipeline.

---

## **The Takeaway: Why This Matters**

By transitioning to **fully Compose-based deployments**, we:

* ✅ **Eliminated hundreds of lines of Infra-as-Code**
* ✅ **Simplified configuration management** with secure, environment-aware secrets handling
* ✅ **Streamlined CI/CD** with a lightweight GitHub Actions workflow
* ✅ **Simplified DNS and cert management** 

Every sample project we built, every conversation we had with developers, and every challenge we encountered with the Portal helped us get to this point where we could focus on closing the gaps last few gaps to deploying everything from a Compose file.