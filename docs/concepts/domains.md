# Domains

Defang helps you provision SSL certificates and expose your services to the internet. You can expose your services using Defang-hosted domains or bring your own custom domain with [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc.md). This page explains how to configure your services to be accessible from the public internet.

## Defang-hosted Domains[​](#defang-hosted-domains "Direct link to Defang-hosted Domains")

To make your service accessible from the public internet with Defang-hosted domains (under `defang.app`), you simply expose ports in your service definition.

### Structure[​](#structure "Direct link to Structure")

When you deploy a publicly accessible service, Defang automatically provides you with domain names to access it.

* Playground
* BYOC

If you're deploying to the [Defang Playground](https://docs.defang.io/docs/concepts/defang-playground.md), you will receive:

**Defang-hosted domain:**

```
https://<username>-<service-name>--<port>.defang.dev
```

If you're using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc.md), you will receive **both**:

**Defang-hosted domain:**

```
https://<service-name>--<port>.<project-name>.<username>.defang.app
```

**Cloud provider load balancer domain** (AWS example):

```
https://defang-xyz-b0f79bb-123456789012.ca-central-1.elb.amazonaws.com
```

:::tip Choosing Between Domains

* Use the **Defang-hosted domain** (`defang.app`) for convenience and simplicity
* Use the **cloud provider domain** (e.g., AWS ELB) if you want to avoid dependency on Defang infrastructure
* Both domains point to the same service and work identically

:::

### Sample Configuration[​](#sample-configuration "Direct link to Sample Configuration")

* Compose
* Pulumi

```
services:
    # [...]
    serviceName:
        ports:
        - mode: ingress
          target: 3000
          protocol: http
```

See the [Defang Pulumi provider documentation](https://docs.defang.io/docs/concepts/pulumi.md) for links to the API reference for your cloud.

## Bring Your Own Domain[​](#bring-your-own-domain "Direct link to Bring Your Own Domain")

You can also bring your own domain to a Defang project. This allows you to use your own domain name to access your services, and varies a little bit depending on your setup.

## DNS Management Options[​](#dns-management-options "Direct link to DNS Management Options")

When bringing your own domain, you have two main approaches:

### Option 1: Using Your Existing DNS Provider (CloudFlare, Namecheap, etc.)[​](#option-1-using-your-existing-dns-provider-cloudflare-namecheap-etc "Direct link to Option 1: Using Your Existing DNS Provider (CloudFlare, Namecheap, etc.)")

If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc.md) and *do not* have your domain's DNS hosted with your cloud provider, or if you are using the [Defang Playground](https://docs.defang.io/docs/concepts/defang-playground.md), you have two choices:

**A. Point directly to your custom domain:**

1. Add the `domainname` to your service definition.
2. Run `defang compose up` to deploy your project.
3. Run `defang cert generate` to generate an SSL certificate. This command will provide instructions for where to point your domain's DNS before the certificate can be issued.
4. **Note:** The infrastructure behind your domain (e.g., the load balancer) is recreated on every `defang compose down` + `defang compose up`, so you will need to update your DNS record and run `defang cert generate` again after each redeploy.

**B. CNAME to your Defang-hosted domain (Recommended for frequent deployments):**

If you frequently deploy and tear down your services (e.g., for staging environments), you can avoid reconfiguring your external DNS record each time:

1. Keep the `domainname` set to your custom domain in your service definition — `defang cert generate` needs it to know which hostname to issue a certificate for.
2. Run `defang compose up` to deploy your project.
3. In your DNS provider, create a CNAME record pointing your custom domain to the `defang.app` domain Defang provides (e.g., `service-name--port.project-name.username.defang.app`). Unlike the load balancer's domain, this one stays the same across redeploys.
4. Run `defang cert generate` to create the SSL certificate. **Note:** you'll still need to run this again after each `defang compose up` to recreate the certificate — but your CNAME record won't need to change.

:::tip Managing Multiple Environments Use the `--project-name` flag or the `name:` field in your Compose file to create separate environments. For example, a project named "hello" with `--project-name hello-staging` would create a separate deployment, allowing you to maintain both production and staging environments simultaneously. :::

### Option 2: Using Route 53 (AWS) - Automatic DNS Management[​](#option-2-using-route-53-aws---automatic-dns-management "Direct link to Option 2: Using Route 53 (AWS) - Automatic DNS Management")

If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc.md) *and the DNS for your domain is hosted with your cloud provider* (i.e. a Hosted Zone in Route 53, if you're using AWS), all you need to do is specify the `domainname` in your service definition, as in the example below.

**Benefits of Route 53:**

* DNS records are automatically created and updated
* SSL certificates are automatically provisioned and renewed
* No need to run `defang cert generate` after each deployment
* Ideal for environments that are frequently deployed and torn down

warning

For the time being, you can only use one domain per service. If you need to use multiple domains, please vote on this [issue](https://github.com/DefangLabs/defang/issues/247).

### Sample Configuration[​](#sample-configuration-1 "Direct link to Sample Configuration")

* Compose
* Pulumi

```
services:
    # [...]
    serviceName:
        domainname: example.com
        ports:
        - mode: ingress
          target: 3000
          protocol: http
```

This AWS example configures an ingress port and a custom domain:

```
import * as defangAws from "@defang-io/pulumi-defang-aws";

const project = new defangAws.Project("aws-demo", {
    services: {
        app: {
            image: "nginx",
            domainName: "example.com",
            ports: [{ target: 80, mode: "ingress", appProtocol: "http" }],
        },
    },
});
```

See the [Defang Pulumi provider documentation](https://docs.defang.io/docs/concepts/pulumi.md) for links to the API reference for your cloud.

## Current Support[​](#current-support "Direct link to Current Support")

| Provider                                                              | BYOD |
| --------------------------------------------------------------------- | ---- |
| [AWS](https://docs.defang.io/docs/providers/aws.md)                   | ✅   |
| [Azure](https://docs.defang.io/docs/providers/azure.md)               | ✅   |
| [DigitalOcean](https://docs.defang.io/docs/providers/digitalocean.md) | ❌   |
| [GCP](https://docs.defang.io/docs/providers/gcp.md)                   | ✅   |
