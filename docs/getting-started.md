---
sidebar_position: 200
title: Getting Started
description: Get started with Defang.
---


# Getting Started


### **Install the CLI**

Download the CLI appropriate for your system from https://github.com/defang-io/defang/releases/latest.

### **Authenticate with Defang**

```bash
defang login
```

### Build and Deploy a Service

Defang supports various ways of creating and deploying services to the cloud. The following tutorials dive into each one in more details:

1. [Generate new code using AI](./tutorials/generate-new-code-using-ai.mdx)
2. [Deploy code using the CLI](./tutorials/deploy-code-using-the-cli.mdx)
3. [Deploy container using the CLI](./tutorials/deploy-container-using-the-cli.mdx)
4. [Deploy using Pulumi](./tutorials/deploy-using-pulumi.mdx)


### **Monitor a Service**

By default, all the output (stdout and stderr) from your app is routed through the Defang log cluster. You can view these logs in real-time. You can view logs for all your services, one service, or even one specific deployment of a service.

- From the CLI:
    
    ```tsx
    defang tail --name service1
    ```
    
- From the Defang Portal:
    
    [https://portal.defang.dev/](https://portal.defang.dev/) 


:::info
Note that the Defang Portal only displays services deployed to Defang Cloud.
:::
    

### **Upgrade a Service**

To upgrade your app (for example, updating the base image of your container) you can run the update command and it will build and deploy the latest version with zero downtime. Your current version of the service will keep running and handling traffic while the new version is being built and deployed. Only after the new version passes the health checks and accepts traffic will the older version be stopped.

