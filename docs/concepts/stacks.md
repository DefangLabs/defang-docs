# Stacks

Defang supports deploying multiple instances of a project as separate *stacks*. Each stack represents an isolated deployment of your project. Stacks allow you to manage different deployments of your project. For example, you can use stacks to support distinct development, staging, and production environments in the same cloud account. You can also use stacks to support deployments for different customers (e.g., Client A, Client B) or regions (e.g., North America, Europe) within the same project.

A stack records the cloud provider, region, and deployment mode (its [recipe](https://docs.defang.io/docs/concepts/recipe.md)) for a deployment. Instead of repeating flags on every command, you select a stack and Defang uses its recorded settings. `defang compose up` does not accept `--mode`; set the mode when you create the stack.

info

Stacks requires Defang CLI v2.4.0 or later.

## Stack creation[​](#stack-creation "Direct link to Stack creation")

You can create a new stack using the Defang CLI:

```
defang stack new [stack-name]
```

This command initializes a new stack. If you don't specify a name, Defang will prompt you to enter one.

After a stack is created, you will notice a new file in your working directory. If your stack was called `production`, you will see a file called `.defang/production`. Defang will never add secrets to this file. We recommend you add this file to your source code repository so you can share it with other contributors.

## Stack deployment[​](#stack-deployment "Direct link to Stack deployment")

After a stack has been created, you can deploy it independently of others:

```
defang up --stack=<stack-name>
```

## Logging[​](#logging "Direct link to Logging")

To view logs for a specific stack, use the following command:

```
defang logs --stack=<stack-name>
```

or to tail the logs in real-time:

```
defang tail --stack=<stack-name>
```

## Listing stacks[​](#listing-stacks "Direct link to Listing stacks")

This command shows all stacks in your project.

```
defang stack list

NAME        PROVIDER  REGION     MODE
production  aws       us-west-2  BALANCED  
```

## Internals[​](#internals "Direct link to Internals")

When you create a new stack, Defang creates a new file for that stack in the `.defang` subfolder of your project directory. This file contains all the configuration and state information specific to that stack. Here's an example:

```
DEFANG_PROVIDER=aws
AWS_REGION=us-west-2
DEFANG_MODE=balanced
```

This file is very similar to `.env` files, but is specific to deployments of your project. This ensures that the values are not leaked into your runtime environment.
