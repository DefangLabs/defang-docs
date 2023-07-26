# Getting Started


### **Install the CLI**

Download the CLI appropriate for your system from https://github.com/defang-io/defang/releases/latest

### **Authenticate with Defang**

```bash
defang login
```

### Build and Deploy a Service

Defang supports various ways of creating and deploying services to the cloud. The following tutorials dive into each one in more details:

1. [Generate new code using AI](./03-Tutorials/01-Generate%20new%20code%20using%20AI.mdx)
2. [Deploy code using the CLI](./03-Tutorials/02-Deploy%20code%20using%20the%20CLI.mdx)
3. [Deploy container using the CLI](./03-Tutorials/03-Deploy%20container%20using%20the%20CLI.mdx)
4. [Deploy using Pulumi](./03-Tutorials/04-Deploy%20using%20Pulumi.mdx)


### **Monitor a Service**

By default, all the output (stdout and stderr) from your app is routed through the Defang log cluster. You can view these logs in real-time. You can view logs for all your services, one service, or even one specific deployment of a service.

- From the CLI:
    
    ```tsx
    defang tail --name service1
    ```
    
- From the Defang portal:
    
    [https://portal.defang.io/](https://portal.defang.io/) 
    

### **Upgrade a Service**

To upgrade your app (for example, updating the base image of your container) you can run the same update command as before and it will build and deploy the latest version. Your current version of the service will keep running and handling traffic while the new version is being built and deployed. Only after the new version passes the health checks and accepts traffic will the older version be stopped.

