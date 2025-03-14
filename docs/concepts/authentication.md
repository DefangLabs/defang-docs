---
sidebar_position: 200
title: Authentication
description: Authenticating with Defang.
---

# Authentication

To do pretty much anything with Defang, you'll need to authenticate with the system. You can do this by running the following command in the [CLI](/docs/getting-started):

```bash
defang login
```

This will prompt you to open a browser and log in to your [Defang account](/docs/concepts/accounts). For now, the only way to log in is with GitHub, though we will offer other providers to authenticate in the future. Once you've logged in, you can close the browser and return to the terminal. You should see a message that you've successfully logged in.

:::tip
Keep in mind that your Defang account is separate from your [cloud provider account](/docs/concepts/defang-byoc). You will need to authenticate with your cloud provider account separately to deploy services to your own cloud account.
:::
