---
sidebar_position: 600
title: FAQ
description: Frequently asked questions about Defang.
---


# FAQ

### Which cloud/region is the app being deployed to?

- In the [Defang Playground](./concepts/defang-playground.md) the app is deployed to AWS `us-west-2`. In the [Defang BYOC](./concepts/defang-byoc.md) model, the region is determined by your [Defang BYOC Provider](/docs/category/providers) settings.

### Can I bring my own AWS or other cloud account?

- Yes! Please check out the [Defang BYOC](./concepts/defang-byoc.md) documentation for more information.

### On AWS, can I deploy to services such as EC2, EKS, or Lambda?

- The current release includes support for containers only, deployed to ECS. We are still exploring how to support additional execution models such as VMs and functions-as-a-service. However, using our Pulumi provider, it is possible to combine Defang services with other native AWS resources.

### Can I access AWS storage services such as S3 or database services such as RDS? How?

- Yes, you can access whatever other resources exist in the cloud account you are using as a [Defang BYOC](./concepts/defang-byoc.md) Provider.

### Do you plan to support other clouds?

- While we currently support AWS as a [Defang BYOC](./concepts/defang-byoc.md) Provider, we plan to support other clouds in future releases, such as [Azure](./providers/azure.md) and [GCP](./providers/gcp.md).

### Can I run production apps with Defang?

- The [Defang Playground](./concepts/defang-playground.md) is meant for testing and trial purposes only. Deployment of productions apps with [Defang BYOC](./concepts/defang-byoc.md) is not yet supported and disallowed by the [Terms of Service](https://defang.io/terms-service.html). If you are interested in running production apps, please [contact us](https://defang.io/#Contact-us).

### I'm having trouble running the binary on my Mac. What should I do?

- MacOS users will need to allow the binary to run due to security settings:
    1. Attempt to run the binary. You'll see a security prompt preventing you from running it.
    2. Go to System Preferences > Privacy & Security > General.
    3. In the 'Allow applications downloaded from:' section, you should see a message about Defang being blocked. Click 'Open Anyway'.
    4. Alternatively, select the option "App Store and identified developers" to allow all applications from the App Store and identified developers to run.

## Warnings

### "The folder is not empty. Files may be overwritten."
- This message is displayed when you run `defang generate` and the target folder is not empty. If you proceed, Defang will overwrite any existing files with the same name. If you want to keep the existing files, you should move them to a different folder before running `defang generate` or pick a different target folder.

### "environment variable not found"
- This message is displayed when you run `defang compose up` and the Compose file references an environment variable that is not set. If you proceed, the environment variable will be empty in the container. If you want to set the environment variable, you should set it in the environment where you run `defang compose up`.

### "Unsupported platform"
- This message is displayed when you run `defang compose up` and the Compose file references a platform that is not supported by Defang. Defang Beta only supports Linux operating systems.

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
- This message is displayed when you run `defang compose up` with the `--provider=aws` but none of the AWS environment variables were not set. If you proceed, the deployment might fail.

### "Using Defang provider, but AWS environment variables were detected"
- This message is displayed when you run `defang compose up` with the `--provider=defang` but AWS environment variables were detected. The AWS environment variables will be ignored.

### "secret … is not defined in the top-level secrets section"
- This message is displayed when you run `defang compose up` and the Compose file declares a `secret` that is not defined in the top-level `secrets` section. To silence the warning, define the secret in the top-level `secrets` section:
```
services:
  service1:
    …
    secrets:
      - my_secret
secrets:
  my_secret:
    external: true
```

### "unsupported secret …: not marked external:true"
- This message is displayed when you run `defang compose up` and the Compose file declares a `secret` that is not marked `external:true`. Defang only supports external secrets, managed by the `defang config` command. To silence the warning, mark the secret as `external:true` in the top-level `secrets` section:
```
…
secrets:
  my_secret:
    external: true
```

## Errors

### "Stack:… is in UPDATE_COMPLETE_CLEANUP_IN_PROGRESS state and cannot be updated"
- This happens if different version of the Defang CLI are used with the same AWS account. Each version one will try to update the CD stack to its version, back and forth. Make sure that all users have the same version of the CLI. Check the CLI version using `defang version`.

### "invalid healthcheck: ingress ports require an HTTP healthcheck on `localhost`.

- This message is displayed when `defang compose up` tries to deploy a service with an "ingress" port, if the service does not have a `healthcheck` which mentions `localhost`. Defang routes a load balancer to your service's ingress ports, and the loadbalancer needs to be able to check the health of the service. Two solve this issue, ask yourself these two questions:

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

    This healthcheck is not valid:

    ```yaml
     healthcheck:
       test: ["CMD", "./my-healthcheck"]
    ```
