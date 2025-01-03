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
        restart: unless-stopped # specify a restart mode
        image: nginx:latest # specify an image (or a build, as shown below)
        # build: 
        #     context: .
        #     dockerfile: Dockerfile
        ports: 
            - "8080:80" # specify ports to expose
        
```

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
    another-service:
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

### `environment`
(Optional)

The environment variables to set.

```yaml
environment:
  MYSQL_ROOT_PASSWORD: example
```

### `image`
(Required, unless `build` is defined)

The image to run.

```yaml
image: nginx:latest
```

### `ports`
(Optional, but required if you want to access the service from outside the container)

The ports to expose. Can be formatted as `"published:target"`. 

```yaml
ports:
  - "8080:80"
```

Alternatively, you can use this notation:
```yaml
ports:
  - target: 80
    published: 8080
    mode: ingress
```

:::info
Defang ignores `published` ports in production. As such, it is common to make `target` and `published` ports the same when using Defang. However, it can be useful to include a `published` port for local development, such as Docker.  
:::

### `restart`
(Required)

The restart mode for a container. 

```yaml
restart: unless-stopped
```

### `version`
(Deprecated)

The version of the Compose file format being used. This feature is no longer supported and will be ignored by Defang.

### `volumes`
(Unsupported)

The volume for a container. This feature is not currently supported by Defang.


### Configuration
You can define sensitive environment variables/configuration for Defang by writing out the variable name and leaving it in as a blank or `null` value in the Compose file. See our [Configuration](/docs/concepts/configuration) page for more.
