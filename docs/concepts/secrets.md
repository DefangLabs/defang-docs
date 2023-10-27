---
title: Secrets
description: Secrets are a way to securely store sensitive information such as API keys, passwords, and other credentials.
sidebar_position: 300
---

# Secrets

The Defang CLI allows you to securely store sensitive information such as API keys, passwords, and other credentials. This information is stored securely, encrypted in AWS Systems Manager parameter store.

You can use secrets by specifying them in the `secrets` section of a service in a `docker-compose.yml` file, or by specifying a secret in your Pulumi code.

## Connecting Services

If you have created a service before a secret you can connect it by running the `defang compose start` command if using the `defang compose` workflow. If you are using the Pulumi-based workflow you will need to redeploy using Pulumi.