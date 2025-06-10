---
title: "Deploying a Django App with Real-time Moderation Using Defang"
author: Defang Team
tags: [deployment, django, docker, compose]
---

<iframe style={{
  width: "100%",
  aspectRatio: 16/9,
}} src="https://www.youtube.com/embed/edWas0ZIeHI?si=SHD8QYcGLLeuPQ6l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# Deploying a Django App with Real-time Moderation Using Defang

In this guide, we'll walk through the easiest and fastest way to deploy a full-featured Django application—including real-time chat and background task processing—to the cloud using Defang. You'll see firsthand how simple Defang makes it to deploy apps that require multiple services like web servers, background workers, Redis, and Postgres.

## Clone the repo

Before we get started, you'll want to clone the repo with the app code, [here](https://github.com/DefangLabs/django-chat-demo).

## Overview of Our Django Application

We're deploying a real-time chat application that includes automatic moderation powered by a background worker using the Natural Language Toolkit (NLTK). The application structure includes:

- **Web Service**: Django app with chat functionality using Django Channels for real-time interactions.
- **Worker Service**: Background tasks processing messages for profanity and sentiment analysis.
- **Postgres Database**: Managed database instance for persistent storage.
- **Redis Broker**: Managed Redis instance serving as the broker for Celery tasks and Django Channels.

## Running Locally

To run the app locally, we use Docker Compose, splitting configurations into two YAML files:

- `compose.yaml`: Production configuration.
- `compose.dev.yaml`: Development overrides extending production.

You can quickly spin up the application locally with:

```bash
docker compose --env-file .env.dev -f compose.dev.yaml up --build
```

This runs things with autoreloading so you can iterate on the Django app, all while passing environment variables in the same way as we will with Defang's [secure configuration system](/docs/concepts/configuration) and being ready to deploy to production.

## Application Features

### Real-time Chat
Using Django Channels and Redis, users can engage in real-time conversations within chat rooms.

### Background Moderation Tasks
The worker service runs independently, handling moderation tasks asynchronously. It uses NLTK to:
- Check for profanity.
- Perform sentiment analysis.
- Automatically flag negative or inappropriate messages.

This decouples resource-intensive tasks from the main API server, ensuring optimal application responsiveness. The demo isn't doing anything very complicated, but you could easily run machine learning models [with access to GPUs](/docs/tutorials/deploy-with-gpu) with Defang if you needed to.

### Django Admin

The Django admin is setup to quickly visualize messages and their moderation status. Access it at `/admin` with your superuser credentials: username `admin` and password `admin` setup by default when you first run or deploy.


## Deploying with Defang

Deploying multi-service applications to cloud providers traditionally involves complex infrastructure setup, including configuring ECS clusters, security groups, networking, and more. Defang simplifies this significantly.

### Deploying to Defang Playground

The Defang Playground lets you quickly preview your deployed app in a managed environment.

**Secure Configuration**

Before deploying, securely set encrypted sensitive values:

```bash
defang config set DJANGO_SECRET_KEY
defang config set POSTGRES_PASSWORD
```

Then run the deployment command:

```bash
defang compose up
```

Defang automatically:
- Builds Docker containers.
- Sets up required services.
- Manages networking and provisioning.

Once deployed, your app is accessible via a public URL provided by Defang, which you can find in the CLI output or in our portal at [https://portal.defang.io](https://portal.defang.io)

### Deploying to Your Own Cloud

To deploy directly into your AWS account (or other [supported providers](/docs/category/providers)):

1. Set your cloud provider:
> In my case, I use an AWS Profile, but you should be able to use [any methods supported by the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)

```bash
export DEFANG_PROVIDER=AWS
export AWS_PROFILE=your-profile-name
```

**Secure Configuration**

Before deploying, securely set encrypted sensitive values in your cloud account:

```bash
defang config set DJANGO_SECRET_KEY
defang config set POSTGRES_PASSWORD
```

2. Deploy:

```bash
defang compose up
```

Defang handles provisioning managed services (RDS for Postgres, ElastiCache for Redis), container builds, and networking setup. Note: Initial provisioning for managed data stores might take a few minutes.

## Cloud Deployment Results

Post-deployment, your Django app infrastructure includes (among other things):
- **Managed Postgres**: AWS RDS instance.
- **Managed Redis**: AWS ElastiCache instance.
- **Containers**: ECS services with load balancers and DNS configured.

## Why Use Defang?

Defang simplifies complex cloud deployments by:
- Automatically provisioning managed cloud resources.
- Securely handling sensitive configurations.
- Providing seamless container orchestration without manual infrastructure setup.

## Try It Yourself

Explore deploying your Django applications effortlessly with Defang. The full source code for this example is available on [GitHub](https://github.com/DefangLabs/django-chat-demo). Feel free to give it a try, and let us know how it goes!

Happy deploying!
