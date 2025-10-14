---
title: Local Development
description: Deploying a different configuration than you develop with locally
sidebar-position: 800
---

# Local Development

While Defang encourages using a single compose file, there are times when it is more convenient to use different files for different environments. For example, if some services should be configured differently locally: maybe you want to mount your working directory as a volume for live-reloading, or you want to build a different container image for local development. Another reason may be that you have some local services, like an auth mock or a local webhook listener that you don't want to deploy to the cloud.

## `compose.local.yaml`

In these cases, Defang recommends creating a file like `compose.local.yaml` which extends service definitions from your primary `compose.yaml` file.

For example,

```yaml
# compose.yaml
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
```

```yaml
# compose.local.yaml
services:
  app:
    extends:
      file: compose.yaml
      service: app
    build:
      context: .
      dockerfile: local.Dockerfile
    volumes:
      - .:/web
  local_service:
    image: myservice:latest
 ```

This configuration can then be launched locally with

```
docker compose -f compose.local.yaml
```

And the primary compose file can be deployed to the cloud with

```
defang compose up
```

See our [blog post on Dev Containers and Codespaces](https://defang.io/blog/add-defang-to-your-developer-environments-instantly) for more information on getting set up in those environments.
