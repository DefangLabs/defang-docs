# Google Cloud Platform (GCP)

info

The Defang GCP Provider is available for Public Preview as of December 2024.

GCP Free Tier & Credits

You can use the GCP Free Tier to try out Defang. Learn more about it [here](https://cloud.google.com/free). If you're an eligible startup, you can sign up for credits [here](https://cloud.google.com/developers/startups).

Defang enables you to effortlessly develop and deploy full, scalable applications with GCP. It is designed to simplify deploying your services to the cloud. As one of the leading cloud providers globally, GCP offers powerful tools and resources, and with Defang, you can bypass the complexities of the GCP platform. Let Defang handle the heavy lifting so you can focus on what matters most to you!

## Getting Started[​](#getting-started "Direct link to Getting Started")

After signing in to your GCP account, select an existing project or [create a new project](https://developers.google.com/workspace/guides/create-project), make sure [billing is enabled](https://cloud.google.com/billing/docs/how-to/modify-project), and note down the project ID and set it as environment variable `GCP_PROJECT_ID`.

```
export GCP_PROJECT_ID=<your-project-id>
```

Next step is to [authenticate your local environment with GCP](https://cloud.google.com/docs/authentication). Our preferred method is to set up [Application Default Credentials](https://cloud.google.com/docs/authentication/provide-credentials-adc) with the Google Cloud CLI. Once the [Google Cloud CLI is installed](https://cloud.google.com/sdk/docs/install), run the following command to authenticate:

```
gcloud init
gcloud auth application-default login
```

The Defang CLI will automatically check if `GCP_PROJECT_ID` OR `CLOUDSDK_CORE_PROJECT` environment variable is set and correctly authenticated with GCP before running. Once you are ready to go, add the `--provider=gcp` flag to your command to tell the Defang CLI to use the GCP provider, or set the `DEFANG_PROVIDER` environment variable to `gcp`.

```
$ defang compose up --provider=gcp
# or
$ export DEFANG_PROVIDER=gcp
```

## Location[​](#location "Direct link to Location")

The Defang BYOC GCP Provider will use the location specified in the `GCP_LOCATION` environment variable. For a list of locations available in GCP, see the [location documentation](https://cloud.google.com/about/locations). If the `GCP_LOCATION` environment variable is not set, the default location `us-central1` (Iowa) will be used.

## Architecture[​](#architecture "Direct link to Architecture")

Defang uses Google Cloud Build to build and deploy your services, and runs them on Google Cloud Run or Compute Engine. The following describes the current state of Defang's support for GCP, the specific resources that Defang uses, and the roadmap for future support.

### Deployment[​](#deployment "Direct link to Deployment")

To deploy your services, the Defang CLI sets up some basic resources needed, including enabling required APIs in the project, creating service accounts used to build and deploy your service with the required permissions, and creating a [Google Cloud Storage](https://cloud.google.com/storage) bucket where the Defang CLI uploads your source code to. The CLI then starts a Google Cloud Build build in your project that runs Pulumi. Your container images are built with Cloud Build.

### Runtime[​](#runtime "Direct link to Runtime")

A service with exactly one ingress port runs as a [Google Cloud Run](https://cloud.google.com/run) service. A service with `restart: "no"` runs as a Cloud Run job. Other services can run on [Compute Engine](https://cloud.google.com/compute) managed instance groups.

### Secrets[​](#secrets "Direct link to Secrets")

Defang stores sensitive config values in [Google Secret Manager](https://cloud.google.com/secret-manager) in your project.

## Managed Storage[​](#managed-storage "Direct link to Managed Storage")

Defang can help you provision [managed storage](https://docs.defang.io/docs/concepts/managed-storage.md) services. The following managed storage services are supported on GCP:

### Managed Postgres[​](#managed-postgres "Direct link to Managed Postgres")

When using [Managed Postgres](https://docs.defang.io/docs/concepts/managed-storage/managed-postgres.md), the Defang CLI provisions a Cloud SQL instance in your account.

Cloud SQL is available in all Google Cloud regions, so there's no region planning needed for managed Postgres. See the [Cloud SQL locations documentation](https://cloud.google.com/sql/docs/postgres/locations) for the full list.

### Managed Redis[​](#managed-redis "Direct link to Managed Redis")

When using [Managed Redis](https://docs.defang.io/docs/concepts/managed-storage/managed-redis.md), the Defang CLI provisions a Memorystore for Redis cluster in your account.

Memorystore for Redis is available in 40+ Google Cloud regions. See the [Memorystore for Redis regions documentation](https://cloud.google.com/memorystore/docs/redis/regions) if your target `GCP_LOCATION` isn't listed.

### Managed LLMs[​](#managed-llms "Direct link to Managed LLMs")

Defang offers integration with managed, cloud-native large language model services with the x-defang-llm service extension. Add this extension to any services which use the [Google Vertex AI SDKs](https://cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-sdk).

### Future Improvements[​](#future-improvements "Direct link to Future Improvements")

The following features are in active development for GCP:

* [Managed Object Storage](https://docs.defang.io/docs/concepts/managed-storage/managed-object-storage.md)

Stayed tuned for future updates!
