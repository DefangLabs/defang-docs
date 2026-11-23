# Compose

Defang allows you to use `compose.yaml` files to deploy your application to the cloud. The `compose.yaml` file is a simple way to define and run multi-container applications. This file format may look familiar to you if you've used [Docker](https://docker.com).

The [Compose Specification](https://github.com/compose-spec/compose-spec/blob/main/spec.md#compose-file) lets you define a platform-agnostic application designed as a set of containers which are configured to run together with shared resources. These applications may be destined for any [OCI](https://opencontainers.org/) Container Runtime. Defang does the heavy lifting to deploy to your favourite cloud platform using this file.

## How It Works[​](#how-it-works "Direct link to How It Works")

You can create a `compose.yaml` file in the root of your project, or use the [`defang generate`](https://docs.defang.io/docs/tutorials/generate-new-code-using-ai.md) command to create one for you (along with other resources). This file is used to define your application's [services](https://docs.defang.io/docs/concepts/services.md) and how they run. You can edit this file to add more services or change the configuration of services.

When you run `defang compose up`, Defang will read your `compose.yaml` file and [deploy](https://docs.defang.io/docs/concepts/deployments.md) the services named in that file to the cloud.

## Example of a Compose File[​](#example-of-a-compose-file "Direct link to Example of a Compose File")

Here is a basic `compose.yaml` file that contains all the required properties for deployment in Defang.

```
services:
  service-example:
    image: nginx:latest # use one of: image (shown on this line) or build (shown below)
    # build:
    #   context: .
    #   dockerfile: Dockerfile
    ports:
      - mode: ingress # specify ports to expose
        target: 8080
        published: 8080 # this is useful for running locally
```

## Compose Top-level Properties[​](#compose-top-level-properties "Direct link to Compose Top-level Properties")

Here are a list of top-level properties of the [Compose specification](https://docs.docker.com/compose/compose-file/) that Defang supports when writing a `compose.yaml` file.

### `services`[​](#services "Direct link to services")

(Required)

The services defined in your application.

```
services:
  service:
    # add service-level properties here
```

info

Defang identifies a service based on your username, project name, and the service name you've defined under the `services` property. See our [Services](https://docs.defang.io/docs/concepts/services.md) page for more about how Defang resolves service names.

### `networks`[​](#networks "Direct link to networks")

(Optional)

The networks defined in your application. This is commonly added together with a [service-level `networks`](#networks-1) property.

```
networks:
  default: # the "default" network is always created even if not specified
```

See our [Networking](https://docs.defang.io/docs/concepts/networking.md) page for more.

### `volumes`[​](#volumes "Direct link to volumes")

(Not yet supported)

The volume mounts for a container, reusable across services. This feature is not currently supported by Defang.

```
# volumes:
#   db-data:
```

warning

Defang does not support the `secrets` top-level property. Please read our [Configuration](https://docs.defang.io/docs/concepts/configuration.md) page for more.

## Compose Service-level Properties[​](#compose-service-level-properties "Direct link to Compose Service-level Properties")

Here are a list of service-level properties of the [Compose specification](https://docs.docker.com/compose/compose-file/) that Defang supports when writing a `compose.yaml` file.

tip

Service-level means inside your `service`. A service-level property called `build` would look like:

```
service:
  build: …
```

Note that in your Compose file, you will need a top-level property called `services` to contain all of your services. For example:

```
services:
  service:
    build: …
```

### `build`[​](#build "Direct link to build")

(Required, unless `image` is defined)

The [build configuration](https://github.com/compose-spec/compose-spec/blob/main/build.md). This property describes how to create an OCI container for this service.

```
    build:
      context: .
      dockerfile: ./Dockerfile
      args:
        NEXT_PUBLIC_VERSION: "1.2.3"
```

### `image`[​](#image "Direct link to image")

(Required, unless `build` is defined)

[This property](https://github.com/compose-spec/compose-spec/blob/main/05-services.md#image) describes the image from which your container should start.

```
    image: nginx:latest
```

### `ports`[​](#ports "Direct link to ports")

(Optional, but required if you want to access the service from outside the container)

The ports to expose. The default port mode is `ingress`.

```
    ports:
      - mode: ingress
        target: 80
        published: 80
```

info

Defang ignores `published` ports in production. As such, it is common to make `target` and `published` ports the same when using Defang. However, it can be useful to include a `published` port for local development, such as Docker.

### `command`[​](#command "Direct link to command")

(Optional)

The command which will be run to start your service. If left out, the command from the Docker image will be used.

```
    command: nginx -g 'daemon off;'
```

### `deploy`[​](#deploy "Direct link to deploy")

(Optional)

The [Deploy Specification](https://github.com/compose-spec/compose-spec/blob/main/deploy.md) describes the runtime constraints and requirements for how your services will be deployed and managed across different environments (e.g. memory reservations, replicas, number of CPUs, etc.).

```
    deploy:
      replicas: 1
      reservations:
        cpus: '0.5'
        memory: 256M
```

### `depends_on`[​](#depends_on "Direct link to depends_on")

(Limited support)

This property describes startup dependencies between services. This feature currently has limited supported by Defang: dependency on a managed service does not wait for the managed service provisioning to complete.

```
    # depends_on:
    #   - db
```

### `environment`[​](#environment "Direct link to environment")

(Optional)

The environment variables to set.

```
    environment:
      DATABASE_USER: someuser
```

info

For sensitive environment variables (or secret values), you should list the variable's name with a blank or `null` value, and then securely set their actual value with `defang config` in the CLI. See our [Configuration page](https://docs.defang.io/docs/concepts/configuration.md) for more.

For example:

```
  - DATABASE_USER=someuser # env var loaded with this literal value
  - DATABASE_PASSWORD # env var loaded using defang config
```

### `healthcheck`[​](#healthcheck "Direct link to healthcheck")

(Optional, but required for healthchecks on services with a published port)

[This property](https://github.com/compose-spec/compose-spec/blob/main/05-services.md#healthcheck) describes a check that will be run to determine whether or not a service's containers are "healthy". It works in the same way, and has the same default values, as the [HEALTHCHECK Dockerfile instruction](https://docs.docker.com/engine/reference/builder/#healthcheck) set by the service's Docker image. Your Compose file can override the values set in the Dockerfile.

When using Defang, your Compose file must have a healthcheck if you want to expose an `ingress` port—even if your Dockerfile already contains one.

note

`curl` is commonly used for containers with an Ubuntu-based image, and `wget` is used for containers with an `alpine`-based image.

```
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/"]
      interval: 30s
      timeout: 90s
      retries: 3
```

or

```
    healthcheck:
      test: ["CMD", "wget", "--spider", "http://localhost:8080/"]
      interval: 30s
      timeout: 90s
      retries: 3
```

### `networks`[​](#networks-1 "Direct link to networks-1")

(Optional)

The service network configuration. By default, Compose will add services to the `default` network, which has external connectivity. You can also add services to private networks. To avoid warnings, you should add them to the [top-level `networks`](#networks) property as well.

```
    networks:
      default: # when not specified, services are assigned to the "default" network
```

You can also assign an alias for a network by using `aliases`, as seen below:

```
    networks:
      default:
        aliases:
          - app
```

See our [Networking](https://docs.defang.io/docs/concepts/networking.md) page for more.

### `restart`[​](#restart "Direct link to restart")

(Optional, but highly recommended)

The restart mode for a container. Defaults to `unless-stopped` unless otherwise specified.

```
    restart: unless-stopped
```

### `volumes`[​](#volumes-1 "Direct link to volumes-1")

(Not yet supported)

The volume mounts for a container, specific to a service. This feature is not currently supported by Defang.

```
    # volumes:
    #  - "./backend:/app"
```
