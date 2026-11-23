# Generate Project Outlines With AI

This tutorial will show you how to use Defang's AI agent to [generate](https://docs.defang.io/docs/concepts/generate.md) a project outline, and then deploy that project to the cloud using Defang.

[YouTube video player](https://www.youtube.com/embed/afglsBYieuc?si=GCvHhBu3H9ktMDHA)

## Step 1 - Use the `defang generate` command in the CLI[​](#step-1---use-the-defang-generate-command-in-the-cli "Direct link to step-1---use-the-defang-generate-command-in-the-cli")

Here you can describe what you would like the service to do and the [CLI](https://docs.defang.io/docs/intro/getting-started.md#install-the-defang-cli) will then [generate](https://docs.defang.io/docs/concepts/generate.md) a project outline with all the files required to make it deployable with Defang.

In this tutorial, we'll use the following prompt to describe our service:

"A basic service with 2 REST endpoints. The default endpoint will be for health check and should return a JSON object like this: `{ "status": "OK" }`. The /echo endpoint will echo back all request parameters in the response."

```
defang generate

? Choose the language you'd like to use:  [Use arrows to move, type to filter, ? for more help]
> Nodejs
  Golang
  Python

? Choose a sample service:
Generate with AI

? Please describe the service you'd like to build: [? for help]
A basic service with 2 REST endpoints. The default endpoint will be for health check and should return a JSON object like this: { "status": "OK" }. The /echo endpoint will echo back all request parameters in the response.

? What folder would you like to create the service in? [? for help] (service1)
project1
```

This will [generate](https://docs.defang.io/docs/concepts/generate.md) the different files required to start your project based on your prompt and the language selected.

## Step 2 - Review the Code[​](#step-2---review-the-code "Direct link to Step 2 - Review the Code")

Change into the new project folder:

```
cd project1
```

You can open the files in a code editor to review or make changes as needed before deploying the service.

## Step 3 - Build and Deploy[​](#step-3---build-and-deploy "Direct link to Step 3 - Build and Deploy")

```
defang compose up
```
