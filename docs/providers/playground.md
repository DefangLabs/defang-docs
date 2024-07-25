---
title: Playground
description: The Defang Playground is a free tier that allows you to experiment with Defang.
sidebar_position: 000
---

The Defang Playground is a free tier that allows you to experiment with Defang. The Playground is a shared that cannot be used to run production workloads. The Playground is a great way to get started with Defang and to experiment with the Defang CLI.

This page highlights architectural considerations when deploying to the playground and any differences you might encounter when deploying to the playground versus deploying to your own cloud account.

## Overview

Overall, the Defang Playground is very similar to deploying to your own cloud account. The Playground runs on a Defang-managed AWS account, so you can expect it to work similarly to deploying to [AWS](./aws.md).

## Managed Redis

The playground supports [Managed Redis](../concepts/managed-storage.md#managed-redis). Fundamentally, this works the same as it does in [AWS](./aws.md#managed-redis).

