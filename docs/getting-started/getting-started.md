---
sidebar_position: 200
title: Getting Started
description: Get started with Defang.
---


# Getting Started


### **Install the CLI**

First, you'll need to install the Defang CLI. The CLI is the primary way to interact with Defang. It allows you to create, deploy, and manage your services. You can find the [different installation methods here](./getting-started/installing-the-cli).

### **Authenticate with Defang**

To do pretty much anything with Defang, you'll need to authenticate with the platform. You can do this by running the following command:

```bash
defang login
```

### Build and Deploy a Service

Defang supports various ways of creating and deploying services to the cloud. The following tutorials dive into each one in more detail:

1. [Generate new code using AI](../tutorials/generate-new-code-using-ai.mdx)
2. [Deploy an existing container using a docker-compose file](../tutorials/deploy-container-using-the-cli.mdx)
3. [Deploy your code using a docker-compose file](../tutorials/deploy-code-compose.mdx)
4. [Deploy using Pulumi](../tutorials/deploy-using-pulumi.mdx)


### Monitor a Service

By default, all the output (stdout and stderr) from your app is routed through the Defang log cluster. You can view these logs in real-time. You can view logs for all your services, one service, or even one specific deployment of a service.

- From the CLI:
    
    ```tsx
    defang tail --name service1
    ```
    
- From the Defang Portal:
    
    [https://portal.defang.dev/](https://portal.defang.dev/) 


:::info
Note that the Defang Portal only displays services deployed to Defang Hosted.
:::
    

### Upgrade a Service

To upgrade your app (for example, updating the base image of your container) you can run the `defang compose up` command and it will build and deploy the latest version with zero downtime. Your current version of the service will keep running and handling traffic while the new version is being built and deployed. Only after the new version passes the health checks and accepts traffic will the older version be stopped.

