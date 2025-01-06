---
title: Compose Support
description: Defang supports many of the properties of the Compose specification.
sidebar_position: 160
---

# Compose Support

## Required Compose File 
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

### `version`
(Deprecated)

The version of the Compose file format being used. This feature is no longer supported and will be ignored by Defang.

### `volumes`
(Unsupported)

The volume mounts for a container, reusable across services. This feature is not currently supported by Defang.

## Compose Service Properties
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

The build configuration.

```yaml
build:
  context: .
  dockerfile: ./Dockerfile
```

### `command`
(Optional)

The command which will be run to start your service. If left out, the command from the docker image will be used.  

```yaml
command: nginx -g 'daemon off;'
```

### `deploy`
(Optional)

The runtime constraints or reuqirements for how your services will be deployed and managed across different environments (e.g. memory reservations, replicas, number of CPUs, etc.).

```yaml
deploy:
  replicas: 1
  reservations:
    cpus: '0.5'
    memory: 256M
```

### `environment`
(Optional)

The environment variables to set.

```yaml
environment:
  MYSQL_ROOT_PASSWORD: example
```

### `healthcheck`
(Optional, but required for healthchecks on services with a published port)

The healthcheck endpoints for the container. Note that `curl` is commonly used for containers with a `slim` based image, and `wget` is used for containers with an `alpine` based image. 

```yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost:8080/"]
```

or

```yaml
healthcheck:
  test: ["CMD", "wget", "--spider", "http://localhost:3000"]
```

### `image`
(Required, unless `build` is defined)

The image to run.

```yaml
image: nginx:latest
```

### `ports`
(Optional, but required if you want to access the service from outside the container)

The ports to expose. Mode should be specified as `ingress`.

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


### Configuration
You can define sensitive environment variables/configuration for Defang by writing out the variable name and leaving it in as a blank or `null` value in the Compose file. See our [Configuration](/docs/concepts/configuration) page for more.
