---
title: Compose
description: Defang allows you to use the compose.yaml specification to deploy your application to the cloud.
sidebar_position: 150
---

# Compose

Defang allows you to use `compose.yaml` files to deploy your application to the cloud. 
The `compose.yaml` file is a simple way to define and run multi-container applications. 
This file format may look familiar to you if you've come across `docker-compose.yml` files, as both are based on the [Compose specification](https://docs.docker.com/compose/compose-file/). 

## How It Works

You can create a `compose.yaml` file in the root of your project, or use the [`defang generate`](../tutorials/generate-new-code-using-ai.mdx) command to create one for you (along with other resources). This file is used to define your application's [services](./services.md) and how they run. You can edit this file to add more services or change the configuration of existing services.

When you run `defang compose up`, Defang will read your `compose.yaml` file and [deploy](./deployments.md) the services named in that file to the cloud.

## Example of a Compose File
Here is a basic `compose.yaml` file that contains all the required properties for deployment in Defang. 

```yaml
services:
  service-example:
    image: nginx:latest # use one of: an image (shown on this line) or a build (shown below)
    # build: 
    #   context: .
    #   dockerfile: Dockerfile
  ports: 
    - mode: ingress # specify ports to expose
      target: 8080
      published: 80
        
```

## Compose Top-level Properties
Here are a list of top-level properties of the [Compose specification](https://docs.docker.com/compose/compose-file/) that Defang supports when writing a `compose.yaml` file.

### `networks`
(Optional)

The networks defined in your application. This is commonly added together with a [service-level `networks`](#networks-1) property. 

```yaml
networks:
  public: 
```

### `services`
(Required)

The services defined in your application. 

```yaml
services:
  service:
    # add service-level properties here
```

:::info 
Defang identifies services by the [account username](./accounts.md) and the service name (as defined in the `compose.yaml` file). This means that if you have multiple Defang projects with the same service name, they will conflict with each other. See our [Services](/docs/concepts/services) page for more.
:::

### `version`
(Deprecated)

The version of the Compose file format being used. This property is now obsolete, and will be ignored by Defang.

```yaml
# version: '3'
```

### `volumes`
(Unsupported)

The volume mounts for a container, reusable across services. This feature is not currently supported by Defang.

```yaml
# volumes:
#   db-data:
```

:::warning
Defang does not support the `secrets` top-level property. Please read our [Configuration](/docs/concepts/configuration) page for more. 
:::

## Compose Service-level Properties
Here are a list of service-level properties of the [Compose specification](https://docs.docker.com/compose/compose-file/) that Defang supports when writing a `compose.yaml` file.

:::tip
Service-level means inside your `service`. A service-level property called `build` would look like:
```yaml
service:
    build: ...
```

Note that in your Compose file, you will need a top-level property called `services` to contain all of your services. For example:
```yaml
services:
    service:
        build: ...
```
:::

### `build`
(Required, unless `image` is defined)

The [build configuration](https://github.com/compose-spec/compose-spec/blob/main/build.md). This property describes how to create an OCI container for this service.

```yaml
build:
  context: .
  dockerfile: ./Dockerfile
```

### `command`
(Optional)

The command which will be run to start your service. If left out, the command from the Docker image will be used.  

```yaml
command: nginx -g 'daemon off;'
```

### `deploy`
(Optional)

The [Deploy Specification](https://github.com/compose-spec/compose-spec/blob/main/deploy.md) describes the runtime constraints and requirements for how your services will be deployed and managed across different environments (e.g. memory reservations, replicas, number of CPUs, etc.).

```yaml
deploy:
  replicas: 1
  reservations:
    cpus: '0.5'
    memory: 256M
```

### `depends_on`
(Unsupported)

This property describes startup dependencies between services. This feature is currently unsupported by Defang, but can be useful in local developments such as Docker. 

```yaml
# depends_on: 
#   - db
```

### `environment`
(Optional)

The environment variables to set.
```yaml
environment:
  DATABASE_USER: someuser
  DATABASE_PASSWORD: # leave blank/null to set config
```

The above uses *map notation*. Defang also supports using *list notation*:
```yaml
environment:
  - DATABASE_USER=someuser
  - DATABASE_PASSWORD
```

:::info
After you set sensitive environment variables as blank or `null` values in the `compose.yaml` file, you can securely set their actual value in the Defang CLI. See our [Configuration page](/docs/concepts/configuration) for more.
:::

### `healthcheck`
(Optional, but required for healthchecks on services with a published port)

[This property](https://github.com/compose-spec/compose-spec/blob/main/05-services.md#healthcheck) describes a check that will be run to determine whether or not a service's containers are "healthy". It works in the same way, and has the same default values, as the [HEALTHCHECK Dockerfile instruction](https://docs.docker.com/engine/reference/builder/#healthcheck) set by the service's Docker image. Your Compose file can override the values set in the Dockerfile.

When using Defang, your compose file must have a healthcheck if you want to expose a port—even if your Dockerfile already contains one.

:::note
`curl` is commonly used for containers with a `slim`-based image, and `wget` is used for containers with an `alpine`-based image. 
:::

```yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost:8080/"]
  interval: 30s
  timeout: 90s
  retries: 3
```

or

```yaml
healthcheck:
  test: ["CMD", "wget", "--spider", "http://localhost:8080/"]
  interval: 30s
  timeout: 90s
  retries: 3
```

### `image`
(Required, unless `build` is defined)

[This property](https://github.com/compose-spec/compose-spec/blob/main/05-services.md#image) describes the image from which your container should start.

```yaml
image: nginx:latest
```

### `networks`
(Optional)

The network configuration. Can be `public`, where Defang will assign a public IP address, or `private`, in which Defang will not. To avoid warnings, add this to the [top-level `networks`](#networks) property as well. 

```yaml
networks:
  public: 
```

You can also assign an alias for a network by using `aliases`, as seen below:
```yaml
networks:
  public: 
    aliases:
      - app
```
 
See our [Networking](/docs/concepts/networking) page for more.
 
### `ports`
(Optional, but required if you want to access the service from outside the container)

The ports to expose. The default port mode is `ingress`.

```yaml
ports:
  - mode: ingress
    target: 80
    published: 8080
```

:::info
Defang ignores `published` ports in production. As such, it is common to make `target` and `published` ports the same when using Defang. However, it can be useful to include a `published` port for local development, such as Docker.  
:::

### `restart`
(Optional, but highly recommended)

The restart mode for a container. Defaults to `unless-stopped` unless otherwise specified. 

```yaml
restart: unless-stopped
```

### `volumes`
(Unsupported)

The volume mounts for a container, specific to a service. This feature is not currently supported by Defang.

```yaml
# volumes:
#  - "./backend:/app"
```
