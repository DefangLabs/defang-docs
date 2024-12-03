---
title: GCP
description: Defang will allow you to easily create and manage full, scalable applications with GCP.
sidebar_position: 3000
---

# Google Cloud Platform (GCP)

:::info
This feature is available for Public Preview as of December 2024. This page will be updated when it is GA.
:::

Why should you use Defang with Google Cloud Platform (GCP)? Defang enables you to effortlessly create and manage full, scalable applications with GCP. It is designed to simplify deploying your services to the cloud. As one of the leading cloud providers globally, GCP offers powerful tools and resources, and with Defang, you can bypass the complexities and challenges of the GCP platform. Let Defang handle the heavy lifting so you can focus on what matters most to you!

## Getting Started
To get started with the Defang BYOC GCP Provider, first [install the latest version of the Defang CLI](../getting-started#authenticate-with-defang). Next make sure you have signed up for a [Google Cloud Platform](https://cloud.google.com/).

After signing up for your GCP account, select an existing project or [create a new project](https://developers.google.com/workspace/guides/create-project), make sure [billing is enabled](https://cloud.google.com/billing/docs/how-to/modify-project) and note down the project ID and set it as environment variable `GCP_PROJECT_ID`.

```bash
export GCP_PROJECT_ID=<your-project-id>
```

Next step is to [authenticate your local environment with GCP](https://cloud.google.com/docs/authentication), our preferred method is to setup [Application Default Credentials](https://cloud.google.com/docs/authentication/provide-credentials-adc) with the google cloud CLI. Once the [google cloud CLI is installed](https://cloud.google.com/sdk/docs/install), run the following command to authenticate:

```bash
gcloud init
gcloud auth application-default login
```

The Defang CLI will automatically check if they are set before running. Once you are ready to go, add the `--provider=gcp` to your command to tell the Defang CLI to use the GCP provider.

```bash
$ defang up --provider=gcp
# or
$ export DEFANG_PROVIDER=gcp
```

## Location

The Defang BYOC GCP Provider will use the location specified in the `GCP_LOCATION` environment variable. For a list of locations available in GCP, see the [location documentation](https://cloud.google.com/about/locations). If the `GCP_LOCATION` environment variable is not set, the default location `us-central1` (Iowa) will be used.

## Architecture

Defang uses GCP cloud run to build, deploy and run your services. The following describes the current state of Defang's support for GCP, the specific resources that Defang uses, and the roadmap for future support.

### Deployment

To deploy your services, the Defang CLI will setup some basic resources needed, including enabled required APIs in the project, create service accounts used to build and deploy your service with required permissions, and a [Google Cloud Storage](https://cloud.google.com/storage) bucket where Defang CLI packages your code and uploads it to. The CLI then deploys a Cloud Run Job that uses Pulumi to build your container image and run your services.

### Runtime

The Provider build and deploy your services using the [Google Cloud Run](https://cloud.google.com/run) jobs, and runs your workloads using the [Google Cloud Run](https://cloud.google.com/run) service.

### Secrets

The GCP provider does not currently support storing sensitive config values.

### Future Improvements

THe following features are in active development for GCP:
- [Configuration and management of secrets](/docs/concepts//configuration.md)
- [Networking and Load Balancing](/docs/concepts//networking.mdx)
- [Custom Domains](/docs/concepts//domains.mdx)
- [Managed Redis](/docs/concepts//managed-storage/managed-redis.md)
- [Managed Postgres](/docs/concepts/managed-storage/managed-postgres.md)

Stayed tuned for future updates!
