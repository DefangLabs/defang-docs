---
title: Compose
description: Defang allows you to use the docker-compose.yml specification to deploy your application to the cloud.
sidebar_position: 400
---

# Compose

You might be familiar with the [docker-compose.yml](https://docs.docker.com/compose/compose-file/) specification. It's a simple way to define and run multi-container Docker applications. Defang allows you to use the `docker-compose.yml` specification to deploy your application to the cloud.

## How it works

When you bootstrap a project with the `defang generate` command, it will generate a `docker-compose.yml` file in the root of your project. This file is used to define your application's services and how they run. You can edit this file to add more services or change the configuration of existing services.

When you run `defang up`, Defang will read your `docker-compose.yml` file and deploy the services named in that file to the cloud.

## Service Name Resolution

One thing to keep in mind is that, at the time of this writing, Defang identifies services by the [user/account name](./accounts.md) and the service name (as defined in the `docker-compose.yml` file). This means that if you have multiple Defang projects with the same service name, they will conflict with each other. We plan to provide a more robust system for managing service names and protecting against conflicts in the future.

## Configuration

If you have a service that depends on a secret like an api key, you can set that secret using the CLI:

```
defang secret set --name MY_API_KEY
```

and then connect it to the service by specifying it in the `docker-compose.yml`:

```
services:
  my-service:
    secrets:
      - MY_API_KEY
```