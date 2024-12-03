---
sidebar_position: 400
title: Monitoring Your Services
description: How to monitoring services deployed with Defang
---

# Monitoring Your Services

Monitoring your services with Defang.
By default, all the output (stdout and stderr) from your app is logged. You can view these logs in real-time. You can view logs for all your services, one service, or even one specific deployment of a service.

- From the CLI:

    ```tsx
    defang tail --name service1
    ```

- From the Defang Portal:

    [https://portal.defang.dev/](https://portal.defang.dev/)


:::info
* To learn more about observability in Defang, check out the [observability page](../concepts/observability.md).
* Note that the Defang Portal only displays services deployed to Defang Playground.
:::
