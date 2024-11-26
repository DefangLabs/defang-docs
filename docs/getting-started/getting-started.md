---
sidebar_position: 200
title: Getting Started
description: Get started with Defang.
---

# Getting Started


## Install the CLI

First, you'll need to install the Defang CLI. The CLI is the primary way to interact with Defang. It allows you to create, deploy, and manage your services. You can find the [different installation methods here](./installing.md).

## Generate a project

```
$ defang generate nodejs-http
```

You should see the following prompt:
```
? What folder would you like to create the project in?
```
Type in the name of the folder you'd like to use for your new project and press ENTER.

I'll type `"welcome-to-defang"`. Now, you'll see the following output:

```
? What folder would you like to create the project in? welcome-to-defang
 * Fetching sample from the Defang repository...
 * Writing files to disk...
   - .github/
   - .github/workflows/
   - .github/workflows/deploy.yaml
   - README.md
   - app/
   - app/Dockerfile
   - app/main.js
   - compose.yaml
 * Code generated successfully in folder welcome-to-defang

Check the files in your favorite editor.
To deploy the service, do `cd welcome-to-defang` and

  defang compose up
```

Now, navigate to the folder you just created:

```
$ cd welcome-to-defang
```

You can open the folder in your favorite editor and see the files that were generated for you:
* The `app` folder contains the code for your service.
* The `Dockerfile` is used to build the container image for your service.
* The `compose.yaml` file is used to define the services you want to deploy.

## Deploy to the playground

Go back to your shell and type the following:

```
$ defang up
```

If you have not used defang before, you'll be prompted to log in.

```
 ! Please log in to continue.
Please visit http://127.0.0.1:49154 and log in. (Right click the URL or press ENTER to open browser)
```

:::info
To learn more about how authentication works in defang, check out the [authenticating page](/docs/getting-started/authenticating).
:::

When you do this, you should see something similar to the output below:

```
 * Uploading build context for app
 * Deploying service app
 * Monitor your services' status in the defang portal
   - https://portal.defang.dev/service/app
 * Tailing logs for deployment ID o59k89vk3qc8 ; press Ctrl+C to detach:
 * Press V to toggle verbose mode
2024-09-19T10:50:53.572443-07:00 cd Update started for stack jordanstephens-prod1
2024-09-19T10:51:05.536299-07:00 cd Update succeeded in 11.99769745s ; provisioning...
2024-09-19T10:51:39.419693-07:00 app Server running at http://0.0.0.0:3000/
 * Service app is in state DEPLOYMENT_COMPLETED and will be available at:
   - https://jordanstephens-app--3000.prod1.defang.dev
 * Done.
```

Now we can go to [https://portal.defang.dev/service/app](https://portal.defang.dev/service/app) to see our service listed in the defang portal.

![screenshot of the defang portal](/img/getting-started-portal.png)

## Next Steps

Congratulations! You've successfully deployed your first service with Defang. Now, where do you go from here?

Defang supports various ways of creating and deploying services to the cloud. The following tutorials dive into each one in more detail:

1. [Deploy to your own cloud](/docs/tutorials/deploy-to-your-cloud)
1. [Update the code and redeploy](/docs/getting-started/build-and-deploy)
1. [Monitor your services](/docs/getting-started/monitor)
1. [Deploy an outline using AI](/docs/tutorials/generate-new-code-using-ai)
1. [Deploy existing containers](/docs/tutorials/deploy-container-using-the-cli)
1. [Deploy using Pulumi](/docs/tutorials/deploy-using-pulumi)

Choose the direction that seems the most interesting. If you have any questions, join the [Defang Discord](https://discord.gg/defang) and we'll be happy to help you out.
