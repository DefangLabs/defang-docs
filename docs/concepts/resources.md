---
title: Resources
description: Customize the resources your Defang services use.
---

# Resources

Defang allows you to customize the resources allocated to your services both at build-time and at run-time.

## Run-time Resources

You can configure the resources available to your Defang services as required. You can configure the CPU, and memory allocated to your services as well as the number of replicas and whether or not your services requires access to GPUs.

### Examples

#### Docker Compose

```yaml
services:
  gpu-service:
    deploy:
      replicas: 3
      resources:
        reservations:
          cpus: "1.0"
          memory: 2048M
          devices:
            - capabilities: ["gpu"]
```

#### Pulumi

```typescript
const service = new defang.DefangService("gpu-service", {
  deploy: {
    replicas: 3,
    resources: {
      reservations: {
        cpu: 1.0,
        memory: 2048,
        devices: [{ capabilities: ["gpu"] }],
      },
    },
  },
});
```

:::info[GPUs]
If you require access to GPUs, you can specify this in the `deploy.resources.reservations.devices[0].capabilities` section of your service as in the examples above. You can learn more about this in the [Docker-Compose documentation](https://docs.docker.com/compose/gpu-support/). This is the only supported value in the `deploy.resources.reservations.devices` section.
:::

## Build-time Resources

You can configure the memory requirements and disk space requirements for your image builds by using the `shm_size` property of your service's [`build` specification](https://github.com/compose-spec/compose-spec/blob/main/build.md).

For example,

```yaml
services:
  my_service:
    build:
      context: .
      dockerfile: Dockerfile
      shm_size: 2G
```

:::info
Defang uses `shm_size` to configure both the memory and disk space available to your build process.
:::

The default `shm_size` values for each platform are as follows. More or less may be specified.

| Provider      | `shm_size` Minimum |
| ------------- | ------------------ |
| AWS           | 16G                |
| Digital Ocean | 8G                 |
| GCP           | 16G                |
