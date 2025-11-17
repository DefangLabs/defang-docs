---
title: Monitoring Your Services
description: How to monitor services deployed with Defang
---

# Monitoring Your Services

This tutorial will show you how to monitor your service status and logs in Defang.

## Status

When deploying to Playground, you can monitor your service status from the [Defang Portal](https://portal.defang.dev).

When deploying to your own cloud, the primary way to monitor your services is through your cloud provider's dashboard. However, Defang does provide some tools for monitoring your service logs.

## Logs

When deploying to Playground, your service's logs may be viewed in the [Defang Portal](https://portal.defang.dev).

By default when deploying, including to your own cloud, all output (stdout and stderr) from your app is logged and accessible via the [Defang CLI](/docs/intro/getting-started#install-the-defang-cli). You can view these logs in real-time or for a time in the past. You can view logs for all your services, one service, or even one specific deployment of a service.

### Tailing Live Logs For All Services

```bash
$ defang tail
```

### Tailing Logs Since a Specific Time

```bash
$ defang tail --since 1h
```

### Tailing Logs For a Service

```bash
$ defang tail --name service-name
```

### Build Time Logs

```bash
$ defang logs --type=build
```

All of the above flags can be combined to get the exact logs you need. See the CLI reference for [`defang tail`](/docs/cli/defang_tail) for more information.

:::info
* To learn more about observability in Defang, check out the [Observability page](../concepts/observability.md).
* Note that the Defang Portal only displays services deployed to Defang Playground.
:::
