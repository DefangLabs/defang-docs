---
title: Estimating GCP Deployment Costs
description: Defang enables you to estimate the cost of deploying and running your project before you even create a cloud account.
---

# Estimating GCP Deployment Costs

Defang enables you to estimate the cost of deploying and running your project without needing to create an account with your cloud provider. This tutorial will walk through estimating the costs of deploying the [django-postgres](https://github.com/DefangLabs/samples/tree/main/samples/django-postgres) to GCP.

## Clone the sample

```
defang generate       # select `django-postgres` (or any other sample) from the list
cd django-postgres    # or the name of your project's working directory
```

## Open the compose file

Let's take a quick look at the compose file. There are two services: `db` and `django`. Defang can generate a cost estimate of running the project described by this compose file in the cloud.

Notice that each service has a [`deploy.resources.reservations`](/docs/concepts/compose#deploy) property which describes the service's resource requirements. These numbers will have a significant impact on the cost of running these services in the cloud. The estimation defang generates for you will be sensitive to these numbers.

```yaml
services:
  db:
    restart: unless-stopped
    image: postgres:16
    x-defang-postgres: true
    environment:
      - POSTGRES_DB=django
      - POSTGRES_USER=django
      - POSTGRES_PASSWORD
    ports:
      - mode: host
        target: 5432
        published: 5432
    healthcheck:
      test: ["CMD", "python3", "-c", "import sys, urllib.request; urllib.request.urlopen(sys.argv[1]).read()", "http://localhost:8000/"]
    deploy:
      resources:
        reservations:
          cpus: '0.5'
          memory: 256M

  django:
    restart: unless-stopped
    build: ./app
    ports:
      - mode: ingress
        target: 8000
        published: 8000
    environment:
      - DB_HOST=db
      - DEBUG=False
      - POSTGRES_USER=django
      - POSTGRES_DB=django
      - POSTGRES_PASSWORD
      - SECRET_KEY
      - ALLOWED_HOSTS
    depends_on:
      - db
    deploy:
      resources:
        reservations:
          cpus: '0.5'
          memory: 256M
```

## Generate an estimate

Generating an estimate is easy. All you need to do is run

```
defang estimate
```

Defang can deploy a project according to different [deployment modes](/docs/concepts/deployment-modes). By default, defang will estimate the cost deploying with the `affordable` mode. If you would like to increase your application's resiliency, you can deploy will the `balanced` or `high_availability` modes. Defang can estimate the cost of deploying using any of these modes.

```
defang estimate --provider=gcp [--mode affordable|balanced|high_availability]
```

Here is an example of the output you would see if you estimated the cost deploying the [django-postgres](https://github.com/DefangLabs/samples/tree/main/samples/django-postgres) sample using the `balanced` [deployment mode](/docs/concepts/deployment-modes).

```
defang estimate --provider=gcp --mode=balanced
 * Packaging the project files for django at /Users/defang/samples/samples/django-postgres/app
 * Generating deployment preview
 * Preparing estimate

Estimate for Deployment Mode: BALANCED

This mode strikes a balance between cost and availability. Your application
will be deployed with spot instances. Databases will be provisioned using
resources optimized for production. Services in the "internal" network will
be deployed to a private subnet with a NAT gateway for outbound internet access.

COST    QUANTITY        SERVICE     DESCRIPTION
$18.00  720 Hours       (shared)    Global Cloud Load Balancer Forwarding Rule (720 hours)
$7.56   720 vCPU-Hours  db          CloudSQL for PostgreSQL (1 vCPU * 720 Hours)
$18.00  720 Hours       private-lb  Cloud Load Balancer Forwarding Rule (720 hours)
$0.00   0 GB-second     django      Cloud Run Active Time Memory ((first 360,000 GB-seconds free per month))
$0.00   0 vCPU-second   django      Cloud Run Active Time vCPU ((first 180,000 vCPU-seconds free per month))
$0.00   0 Requests      django      Cloud Run Requests ((first 2 million requests free per month))
Estimated Monthly Cost: $43.56 (+ usage)

Estimate does not include taxes or Discount Programs.
To estimate other modes, use defang estimate --mode=affordable|balanced|high_availability
For help with warnings, check our FAQ at https://s.defang.io/warnings
```

This estimate will include a line item for the most significant monthly costs associated with your deployment. Each line item will be associated with a compose service if possible. Some resources will be shared between multiple compose services.

:::note
GCP Cloud Run is billed based on usage, so Cloud Run line items will show as $0.00 in the estimate.
:::

## Deploying your project

Now that you have estimated the costs associated with your project. You are ready to deploy to GCP.

```
defang compose up --provider gcp --mode affordable|balanced|high_availability
```

