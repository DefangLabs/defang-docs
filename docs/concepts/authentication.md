---
sidebar_position: 200
title: Authentication
description: Authenticating with Defang.
---

# Authentication

To do pretty much anything with Defang, you'll need to authenticate with the system. You can do this by running the following command:

```bash
defang login
```

This will prompt you to open a browser and log into your Defang account. For now, the only way to login is with GitHub, though we will offer other providers to authenticate in the future. Once you've logged in, you can close the browser and return to the terminal. You should see a message that you've successfully logged in.

:::warning
Keep in mind that your Defang account is separate from your [cloud provider account](/docs/concepts/defang-byoc). You will need to authenticate with your cloud provider account separately to deploy services to your own cloud account.
:::
