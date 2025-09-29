---
title: Deploying from GitHub Actions
description: Using the Defang Github Action to deploy your project from your CI/CD pipeline.
---

# Deploying from GitHub Actions

This tutorial will show you how to use the [Defang GitHub Action](https://github.com/DefangLabs/defang-github-action) to deploy your project from your GitHub Actions workflow.

## Prerequisites

- [A Defang Account](/docs/concepts/authentication)
- [A Github Repo](https://docs.github.com/en/get-started/quickstart/create-a-repo)

## Step 1 - Create a new GitHub Actions workflow

### AWS

In your GitHub repository, create a new file at `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy to Defang
on:
  push:
    branches:
      - main  # Change this to your default branch if it's not 'main'
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      id-token: write

    steps:
      - name: Configure AWS Credentials for CI
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-region: us-west-2
          role-to-assume: arn:aws:iam::123456789012:role/ci-role

      - name: Checkout Repo
        uses: actions/checkout@v4

      - name: Deploy
        uses: DefangLabs/defang-github-action@v1.2.1
        with:
          mode: "balanced"
          provider: "aws"
```

### GCP

```yaml
name: Deploy to Defang
on:
  push:
    branches:
      - main  # Change this to your default branch if it's not 'main'
jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      id-token: write

    steps:
      - name: Configure GCP Credentials for Prod
        uses: "google-github-actions/auth@v2"
        with:
          workload_identity_provider: "projects/123456789012/locations/global/workloadIdentityPools/github-actions-pool/providers/my-project-repo-provider"

      - name: Checkout Repo
        uses: actions/checkout@v4

      - name: Deploy
        uses: DefangLabs/defang-github-action@v1.2.1
        with:
          mode: "balanced"
          provider: "gcp"
```

Full documentation for configuring AWS and GCP credentials can be found in the [Defang GitHub Action repository](https://github.com/DefangLabs/defang-github-action).


