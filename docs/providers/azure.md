---
title: Azure
description: Defang allows you to easily create and manage scalable applications with Microsoft Azure.
sidebar_position: 4
---

# Microsoft Azure

:::warning[Beta]
The Defang Azure Provider is currently in **beta** and supports only a subset of Defang's features. The supported surface is described on this page. For everything else, check back as we expand coverage — or vote on [this issue](https://github.com/DefangLabs/defang/issues/57) to help us prioritize.
:::

:::tip[Azure Free Account & Credits]
You can use the Azure free account to try out Defang. Learn more about it [here](https://azure.microsoft.com/en-us/free/). If you're an eligible startup, you can apply for credits through [Microsoft for Startups](https://www.microsoft.com/en-us/startups).
:::

Defang enables you to develop and deploy applications to Azure without having to learn the ins and outs of the Azure platform, pick among its many services, or hand-write the infrastructure to wire them together. Defang provisions the underlying Azure resources from your Compose file so you can focus on your application.

## Getting Started

### Install Defang

[Install the latest version of the Defang CLI](/docs/intro/getting-started).

### Sign up for Azure

Make sure you have an [Azure account](https://azure.microsoft.com/en-us/free/) with an active subscription and billing enabled. Note down your subscription ID.

### Authenticate with Azure

The Defang CLI uses the [Azure SDK for Go](https://learn.microsoft.com/en-us/azure/developer/go/), which picks up credentials from your environment the same way the Azure CLI does. The easiest way to authenticate your local environment is with the [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli):

```bash
az login
```

Alternatively, you can authenticate with a service principal by setting the following environment variables:

```bash
export AZURE_TENANT_ID=<your-tenant-id>
export AZURE_CLIENT_ID=<your-client-id>
export AZURE_CLIENT_SECRET=<your-client-secret>
```

:::warning
Because Defang creates roles and resources across a number of Azure resource providers, the authenticated identity must have sufficient permissions in the target subscription — typically the `Owner` or `Contributor` role, along with permission to register resource providers.
:::

### Configure your shell environment

Defang requires your Azure subscription ID and the target region (location):

```bash
export AZURE_SUBSCRIPTION_ID=<your-subscription-id>
export AZURE_LOCATION=westus3
```

### Deploy your project to Azure

Use the `--provider=azure` flag to tell the Defang CLI to use the Azure Provider, or set the `DEFANG_PROVIDER` environment variable to `azure`:

```bash
$ defang compose up --provider=azure
# or
$ export DEFANG_PROVIDER=azure
```

## Location

The Defang BYOC Azure Provider uses the region specified in the `AZURE_LOCATION` environment variable. For a list of Azure regions, see the [Azure region documentation](https://azure.microsoft.com/en-us/explore/global-infrastructure/geographies/). Not every Azure service used by Defang (for example, Azure OpenAI model SKUs) is available in every region — `westus3` is a good default during the beta.

## Architecture

Defang uses resources that are native to the cloud provider you are using. The following describes the current state of Defang's support for Azure, the specific resources that Defang uses, and the roadmap for future support.

### Deployment

To deploy your services, the Defang CLI packages your code and uploads it to an Azure Storage blob container in your subscription. The CLI then runs an Azure container app job Azure resources, build your container images using container registry task, and run your services in container apps. Defang creates a dedicated resource group per project and stack, named `defang-{project}-{stack}-{location}` (for example, `defang-myapp-test-westus3`).

### Runtime

The Provider runs your workloads on [Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/). Each Defang service maps to a Container App running in a shared Container Apps environment within a project-scoped VNet.

### Building Container Images

When a service has a `build` directive, Defang builds the container image using [Azure Container Registry Tasks](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-tasks-overview) (ACR Tasks). Built images are pushed to an [Azure Container Registry](https://learn.microsoft.com/en-us/azure/container-registry/) in the project resource group, which the Container Apps runtime pulls from.

### Networking & Service Discovery

Defang provisions a VNet with subnets for Container Apps, databases, and private endpoints. Services running as container apps discover each other using container apps built-in service discovery, and managed services such as Postgres and Redis are reached over private endpoints that stay within the VNet, and services depending on them would have theire enviroment variables containing the managed service name automatcially replaced to the private endpoint FQDN.

### Secrets

Defang allows you to configure your services with sensitive config values. Sensitive values are stored in [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/) within your subscription and injected into your Container Apps at runtime.

## Managed Storage

Defang can help you provision [managed storage](/docs/concepts/managed-storage/managed-storage.md) services. The following managed storage services are supported on Azure:

### Managed Postgres

When using [Managed Postgres](/docs/concepts/managed-storage/managed-postgres.mdx), the Defang CLI provisions an [Azure Database for PostgreSQL Flexible Server](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/) in your subscription. The server is attached to a delegated subnet in the project VNet, so your services connect to it over a private IP.

### Managed Redis

When using [Managed Redis](/docs/concepts/managed-storage/managed-redis.md), the Defang CLI provisions an [Azure Managed Redis](https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/managed-redis/managed-redis-overview) cluster exposed through a private endpoint in the project VNet. Defang rewrites your service's Redis connection URL to the Azure cluster FQDN (over TLS) so connections stay inside the VNet while still passing TLS certificate validation.

## Managed LLMs

Defang offers integration with managed, cloud-native large language model services via the `x-defang-llm` service extension. Add this extension to any service that uses the [OpenAI SDKs](https://github.com/openai/openai-python) or the [Azure OpenAI SDKs](https://learn.microsoft.com/en-us/azure/ai-services/openai/).

When using [Managed LLMs](/docs/concepts/managed-llms/managed-language-models.md) on Azure, Defang provisions an [Azure AI Foundry](https://learn.microsoft.com/en-us/azure/ai-foundry/) (Cognitive Services) account in your subscription and creates a [model deployment](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource) for each LLM-enabled service. Defang rewrites the relevant environment variables (for example, the OpenAI base URL and API key) so your service talks to the managed Azure OpenAI endpoint without code changes.

## Custom Domains (BYOD)

Defang supports [bringing your own domain](/docs/concepts/domains#bring-your-own-domain) on Azure. To attach a custom domain to a service, set `domainname` in your compose file, deploy with `defang compose up`, then run `defang cert generate` to issue a TLS certificate.

Under the hood, Defang uses [Azure Container Apps managed certificates](https://learn.microsoft.com/en-us/azure/container-apps/custom-domains-managed-certificates), which are free, auto-renewing, and validated by Azure. Because the Azure provider does not yet manage Azure DNS zones on your behalf, you provide the DNS records yourself. `defang cert generate` prints the exact values to add at each step, waits for them to propagate, and the command is idempotent — re-running it after a partial failure picks up where it left off.

#### Subdomains (e.g. `app.example.com`)

You'll be prompted for two records up front:

- A `CNAME` for your hostname pointing at the Container App FQDN
- A `TXT` record at `asuid.<hostname>` containing the Container App's custom-domain verification ID

Once both resolve, Defang registers the hostname on the Container App, issues the managed certificate via CNAME validation, and binds it with SNI enabled.

#### Apex domains (e.g. `example.com`)

Apex (root) domains can't have a CNAME ([RFC 1034](https://www.rfc-editor.org/rfc/rfc1034)), so Azure rejects CNAME validation and Defang falls back to TXT validation. This means a **second DNS prompt** after the initial CNAME + `asuid` records are in place:

- A `TXT` record at `_dnsauth.<hostname>` containing a validation token that Azure only generates after the certificate request is submitted

Defang prints this second record once Azure returns the token, then waits for it to propagate before completing cert issuance and binding.

## Future Improvements

The Azure provider is in beta and is actively being expanded. Features not yet supported on Azure — including managed object storage and managed MongoDB — are tracked for future releases. Stay tuned for updates, and please file issues or feature requests on [GitHub](https://github.com/DefangLabs/defang/issues) to help us prioritize.
