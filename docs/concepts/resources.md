---
title: Resources
description: Customize the resources your Defang services use.
sidebar_position: 350
---

# Resources

You can configure the resources available to your Defang services as required. You can configure the CPU, memory, and disk space allocated to your services as well as the number of replicas and whether or not your services requires access to GPUs.

## Examples

### Docker Compose

```yaml
services:
  gpu-service:
    deploy:
      replicas: 3
      resources:
        reservations:
          cpus: '1.0'
          memory: 2048M
          devices:
            - capabilities: ["gpu"]
```

### Pulumi

```typescript
const service = new defang.DefangService("gpu-service", {
  deploy: {
    replicas: 3,
    resources: {
        reservations: {
            cpu: 1.0,
            memory: 2048,
            devices: [{capabilities: ['gpu']}]
        }
    }
  }
});
```

:::info GPUs
If you require access to GPUs, you can specify this in the `deploy.resources.reservations.devices[0].capabilities` section of your service as in the examples above. You can learn more about this in the [Docker-Compose documentation](https://docs.docker.com/compose/gpu-support/). This is the only supported value in the `deploy.resources.reservations.devices` section.
:::

