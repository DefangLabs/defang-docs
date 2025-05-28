---
title: GCP
description: Defang will allow you to easily create and manage full, scalable applications with GCP.
sidebar_position: 3000
---

# Google Cloud Platform (GCP)

:::info
The Defang GCP Provider is available for Public Preview as of December 2024.
:::

:::tip[GCP Free Tier & Credits]
You can use the GCP Free Tier to try out Defang. Learn more about it [here](https://cloud.google.com/free). If you're an eligible startup, you can sign up for credits [here](https://cloud.google.com/developers/startups).
:::

Defang enables you to effortlessly develop and deploy full, scalable applications with GCP. It is designed to simplify deploying your services to the cloud. As one of the leading cloud providers globally, GCP offers powerful tools and resources, and with Defang, you can bypass the complexities of the GCP platform. Let Defang handle the heavy lifting so you can focus on what matters most to you!

## Getting Started

After signing in to your GCP account, select an existing project or [create a new project](https://developers.google.com/workspace/guides/create-project), make sure [billing is enabled](https://cloud.google.com/billing/docs/how-to/modify-project), and note down the project ID and set it as environment variable `GCP_PROJECT_ID`.

```bash
export GCP_PROJECT_ID=<your-project-id>
```

Next step is to [authenticate your local environment with GCP](https://cloud.google.com/docs/authentication). Our preferred method is to set up [Application Default Credentials](https://cloud.google.com/docs/authentication/provide-credentials-adc) with the Google Cloud CLI. Once the [Google Cloud CLI is installed](https://cloud.google.com/sdk/docs/install), run the following command to authenticate:

```bash
gcloud init
gcloud auth application-default login
```

The Defang CLI will automatically check if `GCP_PROJECT_ID` OR `CLOUDSDK_CORE_PROJECT` environment variable is set and correctly authenticated with GCP before running. Once you are ready to go, add the `--provider=gcp` flag to your command to tell the Defang CLI to use the GCP provider, or set the `DEFANG_PROVIDER` environment variable to `gcp`.

```bash
$ defang compose up --provider=gcp
# or
$ export DEFANG_PROVIDER=gcp
```

## Location

The Defang BYOC GCP Provider will use the location specified in the `GCP_LOCATION` environment variable. For a list of locations available in GCP, see the [location documentation](https://cloud.google.com/about/locations). If the `GCP_LOCATION` environment variable is not set, the default location `us-central1` (Iowa) will be used.

## Architecture

Defang uses GCP cloud run to build, deploy, and run your services. The following describes the current state of Defang's support for GCP, the specific resources that Defang uses, and the roadmap for future support.

### Deployment

To deploy your services, the Defang CLI sets up some basic resources needed, including enabling required APIs in the project, creating service accounts used to build and deploy your service with the required permissions, and creating a [Google Cloud Storage](https://cloud.google.com/storage) bucket where the Defang CLI uploads your source code to. The CLI then deploys a GCP Cloud Run Job that uses Pulumi to build your container image and run your services.

### Runtime

The Provider builds and deploys your services using [Google Cloud Run](https://cloud.google.com/run) jobs, and runs your workloads using the [Google Cloud Run](https://cloud.google.com/run) service.

### Secrets

The GCP provider does not currently support storing sensitive config values.

### Managed LLMs

Defang offers integration with managed, cloud-native large language model services with the x-defang-llm service extension. Add this extension to any services which use the [Google Vertex AI SDKs](https://cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-sdk).

### Future Improvements

The following features are in active development for GCP:
- [Managed Object Storage](/docs/concepts//managed-storage/managed-object-storage.md)

Stayed tuned for future updates!
