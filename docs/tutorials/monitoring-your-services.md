# Monitoring Your Services

This tutorial will show you how to monitor your service status and logs in Defang.

## Status[​](#status "Direct link to Status")

When deploying to your own cloud, the primary way to monitor your services is through your cloud provider's dashboard. However, Defang does provide some tools for monitoring your service logs.

## Logs[​](#logs "Direct link to Logs")

By default when deploying, including to your own cloud, all output (stdout and stderr) from your app is logged and accessible via the [Defang CLI](https://docs.defang.io/docs/intro/getting-started.md#install-the-defang-cli). You can view these logs in real-time or for a time in the past. You can view logs for all your services, one service, or even one specific deployment of a service.

### Tailing Live Logs For All Services[​](#tailing-live-logs-for-all-services "Direct link to Tailing Live Logs For All Services")

```
$ defang tail
```

### Tailing Logs Since a Specific Time[​](#tailing-logs-since-a-specific-time "Direct link to Tailing Logs Since a Specific Time")

```
$ defang tail --since 1h
```

### Tailing Logs For a Service[​](#tailing-logs-for-a-service "Direct link to Tailing Logs For a Service")

```
$ defang tail --name service-name
```

### Build Time Logs[​](#build-time-logs "Direct link to Build Time Logs")

```
$ defang logs --type=build
```

All of the above flags can be combined to get the exact logs you need. See the CLI reference for [`defang tail`](https://docs.defang.io/docs/cli/defang_tail.md) for more information.

info

* To learn more about observability in Defang, check out the [Observability page](https://docs.defang.io/docs/concepts/observability.md).
