---
title: Authentication
description: Authenticating with Defang.
---

# Authentication

To do pretty much anything with Defang, you'll need to authenticate with the system. You can do this by running the following command in the [CLI](/docs/intro/getting-started):

```bash
defang login
```

This will prompt you to open a browser and log in to your [Defang account](/docs/concepts/accounts). You can log in using [GitHub](https://github.com/) or [GitLab](https://gitlab.com/). We will offer other authentication providers in the future. Once you've logged in, you can close the browser and return to the terminal. You will see a message that you've successfully logged in.

If you authorize Defang to access your GitHub or GitLab organizations, [workspaces](/docs/concepts/workspaces) will be automatically created for each organization you have access to.

:::tip
Keep in mind that your Defang account is separate from your [cloud provider account](/docs/concepts/defang-byoc). You will need to authenticate with your cloud provider account separately to deploy services to your own cloud account.
:::
