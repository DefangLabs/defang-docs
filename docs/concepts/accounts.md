---
title: Accounts
description: How accounts are organized in Defang.
sidebar_position: 100
---

# Accounts

At the moment, Defang only allows authentication through GitHub. This means that you will need to have a GitHub account to use the system, but it also means that your GitHub username will be used as your Defang username. Your Defang username is used to group all your services and to generate domains for your services with the following structure:

```
<username>-<servicename>--<port>.prod1.defang.dev
```

:::info
We plan to introduce a more robust system for managing accounts, permissions, service groups, etc. in the future.
:::