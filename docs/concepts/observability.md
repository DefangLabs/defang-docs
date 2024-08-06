---
title: Observability
description: Monitor and debug your Defang services with the Defang CLI and portal.
sidebar_position: 600
---

# Observability

You can easily monitor and debug your Defang services at build and runtime using the Defang CLI and portal.

When you deploy a service using the `defang compose up` the CLI will automatically start tailing the build and runtime logs for your service. You can also view the logs for your service in the portal, or by using the `defang tail` command.

:::warning
Keep in mind that the Defang Portal only displays services deployed to Defang Playground.
:::

## Tail

The `defang tail` command will tail the logs for all your services by default. You can also specify a service `--name` to tail the logs for a specific service. If you specify the `--etag` the CLI will only tail the logs for a specific build of a service.

```
defang tail --name my-service
defang tail --etag ua119053ehi2
```

## Architecture

In [BYOC](./defang-byoc.md), output is logged to the native logging tools within your cloud provider. The CLI then tails the output as needed.
