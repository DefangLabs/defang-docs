---
title: Stacks
description: Defang supports deploying multiple instances of a project as separate stacks.
---


# Stacks

Defang supports deploying multiple instances of a project as separate stacks. Each stack represents an isolated deployment of your project, allowing you to manage different environments (e.g., development, staging, production) or configurations within the same project.

:::info
Stacks is a new feature introduced in Defang CLI v2.4.0 and is currently in preview. We welcome your feedback! Please open an issue on [GitHub](https://github.com/DefangLabs/defang/issues) if you encounter any problems or have suggestions.
:::

### Stack creation

You can create a new stack using the Defang CLI:

```bash
defang stack new [optional-stack-name]
```

This command initializes a new stack with the specified name. If you don't specify a name, Defang will prompt you to enter one.

### Stack deployment

 You can then deploy this stack independently of others:

```bash
defang up --stack=<stack-name>
```

### Logging

To view logs for a specific stack, use the following command:

```bash
defang logs --stack=<stack-name>
```

or to tail the logs in real-time:

```bash
defang tail --stack=<stack-name>
```

## Internals

When you create a new stack, Defang creates a new file for that stack in the `.defang` subfolder of your project directory. This file contains all the configuration and state information specific to that stack. Here's an example:

```dotenv
DEFANG_PROVIDER=aws
AWS_PROFILE=defang
AWS_REGION=us-west-2
DEFANG_MODE=balanced
```

This file is very similar to `.env` files, but are specific to deployments of your project. This ensures that the values are
not leaked into your runtime environment.
