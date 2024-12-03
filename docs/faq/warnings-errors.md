---
sidebar_position: 700
title: Common Error Messages
description: Common warnings and error messages, and their meanings.
---

Here are the meanings of common [warning](#warnings) and [error](#errors) messages you may encounter in the Defang CLI. 

## Warnings

### "The folder is not empty. Files may be overwritten."
- This message is displayed when you run `defang generate` and the target folder is not empty. If you proceed, Defang will overwrite any existing files with the same name. If you want to keep the existing files, you should move them to a different folder before running `defang generate` or pick a different target folder.

### "environment variable not found"
- This message is displayed when you run `defang compose up` and the Compose file references an environment variable that is not set. If you proceed, the environment variable will be empty in the container. If you want to set the environment variable, you should set it in the environment where you run `defang compose up`.

### "Unsupported platform"
- This message is displayed when you run `defang compose up` and the Compose file references a platform that is not supported by Defang.

### "not logged in"
- This message is displayed when you run `defang compose config` but you are not logged in. The displayed configuration will be incomplete. If you want to see the complete configuration, you should log in first using `defang login`.

### "No port mode was specified; assuming 'host'"
- This message is displayed when you run `defang compose up` and the Compose file declares a `port` that does not specify a port `mode`. By default, Defang will keep the port private. If you want to expose the port to the public internet, you should specify the `mode` as `ingress`:
```
services:
  service1:
    …
    ports:
      - target: 80
        mode: ingress
```

### "Published ports are not supported in ingress mode; assuming 'host'"
- This message is displayed when you run `defang compose up` and the Compose file declares a `port` with `mode` set to `ingress` and `published` set to a port number. Defang does not support published ports in ingress mode. If you want to expose the port to the public internet, you should specify the `mode` as `ingress` and remove the `published` setting.

### "TCP ingress is not supported; assuming HTTP"
- This message is displayed when you run `defang compose up` and the Compose file declares a `port` with `mode` set to `ingress` and `protocol` set to `tcp`. Defang does not support arbitrary TCP ingress and will assume the port is used for HTTP traffic. To silence the warning, remove the `protocol` setting.

### "unsupported compose directive"
- This message is displayed when you run `defang compose up` and the Compose file declares a directive that is not supported by Defang. The deployment will continue, but the unsupported directive will be ignored, which may cause unexpected behavior.

### "no reservations specified; using limits as reservations"
- This message is displayed when you run `defang compose up` and the Compose file declares a `resource` with `limits` but no `reservations`. Defang will use the `limits` as `reservations` to ensure the container has enough resources. Specify `reservations` if you want to silence the warning or reserve a different amount of resources:
```
services:
  service1:
    …
    deploy:
      resources:
        reservations:
          cpus: 0.5
          memory: 512MB
```

### "ingress port without healthcheck defaults to GET / HTTP/1.1"
- This message is displayed when you run `defang compose up` and the Compose file declares an `ingress` with a `port` but no `healthcheck`. Defang will assume the default healthcheck of `GET / HTTP/1.1` to ensure the port is healthy. Specify a `healthcheck` if you want to silence the warning or use a different healthcheck:
```
services:
  service1:
    …
    deploy:
      healthcheck:
        test: ["CMD", "curl", "-f", "http://localhost:80/health"]
```

### "missing memory reservation; specify deploy.resources.reservations.memory to avoid out-of-memory errors"
- This message is displayed when you run `defang compose up` and the Compose file doesn't specify a `memory` reservation. If available, Defang will use the `memory` limit as the `memory` reservation. Specify a `memory` reservation if you want to silence the warning or reserve a different amount of memory:
```
services:
  service1:
    …
    deploy:
      resources:
        reservations:
          memory: 512MB
```

### "The build context contains more than 10 files"
- This message is displayed when you run `defang compose up` and the Compose file declares a `build` with a `context` that contains more than 10 files. Ensure the context refers to the correct folder. Defang will use the `context` as is, but you may experience slow build times. If you want to speed up the build, you should reduce the number of files in the `context`.

### "AWS provider was selected, but AWS environment variables are not set"
- This message is displayed when you run `defang compose up` with the `--provider=aws` but none of the AWS environment variables were set. If you proceed, the deployment might fail, unless you have defined defined `default` credentials in the AWS configuration files or are running on an AWS instance.

### "Using Defang provider, but AWS environment variables were detected"
- This message is displayed when you run `defang compose up` with the `--provider=defang` but AWS environment variables were detected. The AWS environment variables will be ignored.

## Errors

### "Stack:… is in UPDATE_COMPLETE_CLEANUP_IN_PROGRESS state and cannot be updated"
- This happens if different version of the Defang CLI are used with the same AWS account. Each version one will try to update the CD stack to its version, back and forth. Make sure that all users have the same version of the CLI. Check the CLI version using `defang version`.

### "invalid healthcheck: ingress ports require an HTTP healthcheck on `localhost`.

- This message is displayed when `defang compose up` tries to deploy a service with an "ingress" port, if the service does not have a `healthcheck` which mentions `localhost`. Defang routes a load balancer to your service's ingress ports, and the loadbalancer needs to be able to check the health of the service. To solve this issue, ask yourself these two questions:

1. Should my service be public? It's common to declare your container's ports using the Compose file "shorthand" syntax (`1234:1234`). This syntax can be understood as `[HOST:]CONTAINER`. If your service is not intended to be public, you do not need to declare a HOST port. For example:

    ```diff
       services:
         my-service:
           image: my-image
           ports:
    -       - "1234:1234"
    +       - "1234"
    ```
2. Does my healthcheck include the string `localhost`? It is very common to define a healthcheck by using `curl` or `wget` to make a request to `localhost`. So common, in fact, that defang will look for the string `localhost` in your healthcheck definition. For example, this healthcheck is valid:

    ```yaml
     healthcheck:
       test: ["CMD", "curl", "-f", "http://localhost:1234/health"]
    ```

    This healthcheck is not valid for `ingress` ports:

    ```yaml
     healthcheck:
       test: ["CMD", "./my-healthcheck"]
    ```

### The build aborted with OutOfMemoryError: Container killed due to memory usage

The image build might fail if the build process uses too much memory. The first thing to try is to limit the size of your project by excluding unnecessary files: the easiest way is to create a `.dockerignore` file that excludes irrelevatn files. Note that Defang will use a default `.dockerignore` file if you don't have one, but that default might not work for some projects and it's always better to make a `.dockerignore` file specific to your project.

If that doesn't work, you can try to increase the memory available to the build process by adding a field `shm_size` to the `build` section in your `compose.yaml` file:

```yaml
services:
  service1:
    build:
      context: .
      shm_size: 16g
```
