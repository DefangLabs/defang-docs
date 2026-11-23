# Accounts

Below, we will cover account creation with Defang, and how resources are organized within a cloud environment using your account info.

Defang requires an account so we can organize your resources and provide you with a way to manage them. We also use your account to authenticate you when you interact with the [Defang Portal](https://docs.defang.io/docs/concepts/portal.md). Billing and payment information is also associated with your account.

## Creating an Account[​](#creating-an-account "Direct link to Creating an Account")

To create an account, log in to Defang and accept the [Terms of Service](https://defang.io/policies/terms-service/) using the [CLI](https://docs.defang.io/docs/concepts/authentication.md).

```
$ defang login
```

At the moment, the only way to authenticate with Defang is through GitHub. We plan to offer other [authentication](https://docs.defang.io/docs/concepts/authentication.md) providers in the future.

tip

Keep in mind that your Defang account is separate from your [cloud provider account](https://docs.defang.io/docs/concepts/defang-byoc.md). You will need to authenticate with your cloud provider account separately to deploy services to your own cloud account.

## Workspaces[​](#workspaces "Direct link to Workspaces")

When you create an account, a personal [workspace](https://docs.defang.io/docs/concepts/workspaces.md) is automatically created for you. Workspaces are how Defang organizes teams and manages billing. You can create additional workspaces or use workspaces linked to your GitHub or GitLab organizations. Your personal workspace cannot have any additional members.

For more information, see [Workspaces](https://docs.defang.io/docs/concepts/workspaces.md).

## Structure[​](#structure "Direct link to Structure")

Your GitHub username will be used as your Defang username. Your Defang username is used to group all your [services](https://docs.defang.io/docs/concepts/services.md) and generate domains for your services with the following structure:

```
<username>-<servicename>--<port>.prod1.defang.dev
```

For more about domain structures, see our [Domains](https://docs.defang.io/docs/concepts/domains.md#structure) page.
