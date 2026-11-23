# Deploying to Azure from GitHub Actions

This tutorial will show you how to use the [Defang GitHub Action](https://github.com/DefangLabs/defang-github-action) to deploy your project to Azure from your GitHub Actions workflow.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

* [A Defang Account](https://docs.defang.io/docs/concepts/authentication.md)
* [A Github Repo](https://docs.github.com/en/get-started/quickstart/create-a-repo)
* [An Azure Account](https://azure.microsoft.com/en-us/free/)
* [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)

The following steps will guide you through setting up a GitHub Actions workflow that can authenticate to your Azure subscription using OpenID Connect (OIDC) and deploy your project using the Defang GitHub Action. This allows the GitHub Actions workflow to securely access your Azure resources without needing to store long-lived credentials in your repository.

## Step 1 - Identify your Azure Subscription ID[​](#step-1---identify-your-azure-subscription-id "Direct link to Step 1 - Identify your Azure Subscription ID")

* Azure CLI
* Azure Portal

You can list all of the subscriptions you have access to with the following command:

```
az account list --output table
export SUBSCRIPTION_ID="your-subscription-id" # export the subscription ID you want to use
```

1. Go to the [Azure Portal](https://portal.azure.com/).
2. Navigate to **Subscriptions**.
3. Identify the appropriate subscription from the list.
4. Your Subscription ID will be listed next to the subscription name.

## Step 2 - Create a Service Principal[​](#step-2---create-a-service-principal "Direct link to Step 2 - Create a Service Principal")

* Azure CLI
* Azure Portal

```
az ad sp create-for-rbac \
  --name "defang-deployer" \
  --role "Contributor" \
  --scopes "/subscriptions/${SUBSCRIPTION_ID}" \
  --sdk-auth
```

Note the `clientId` and `tenantId` from the output — you'll need them in the next step.

1. Go to **Microsoft Entra ID** > **App registrations** > **New registration**.
2. Enter "defang-deployer" as the name and click **Register**.
3. Note the **Application (client) ID** and **Directory (tenant) ID**.
4. Go to **Subscriptions** > your subscription > **Access control (IAM)** > **Add role assignment**.
5. Assign the **Contributor** role to the service principal you just created.

## Step 3 - Configure Federated Identity Credentials[​](#step-3---configure-federated-identity-credentials "Direct link to Step 3 - Configure Federated Identity Credentials")

To allow GitHub Actions to authenticate without storing secrets, configure a federated identity credential on your service principal.

* Azure CLI
* Azure Portal

```
CLIENT_ID="your-client-id" # from Step 2
az ad app federated-credential create \
  --id "${CLIENT_ID}" \
  --parameters '{
    "name": "defang-github-actions",
    "issuer": "https://token.actions.githubusercontent.com",
    "subject": "repo:YOUR_REPOSITORY_OWNER/YOUR_REPOSITORY_NAME:ref:refs/heads/main",
    "audiences": ["api://AzureADTokenExchange"]
  }'
```

1. Go to **Microsoft Entra ID** > **App registrations** > select your "defang-deployer" app.
2. Go to **Certificates & secrets** > **Federated credentials** > **Add credential**.
3. Select **GitHub Actions deploying Azure resources** as the scenario.
4. Enter your GitHub organization, repository, and branch.
5. Click **Add**.

## Step 4 - Create a new GitHub Actions workflow[​](#step-4---create-a-new-github-actions-workflow "Direct link to Step 4 - Create a new GitHub Actions workflow")

In your GitHub repository, create a new file at `.github/workflows/deploy.yml` with the following content:

```
name: Deploy with Defang
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
    env:
      AZURE_CLIENT_ID: # Provide your Azure Client ID
      AZURE_TENANT_ID: # Provide your Azure Tenant ID
      AZURE_SUBSCRIPTION_ID: # Provide your Azure Subscription ID

    steps:
      - name: Checkout Repo
        uses: actions/checkout@v4

      - name: Azure Login
        uses: azure/login@v2
        with:
          client-id: ${{ env.AZURE_CLIENT_ID }}
          tenant-id: ${{ env.AZURE_TENANT_ID }}
          subscription-id: ${{ env.AZURE_SUBSCRIPTION_ID }}

      - name: Deploy
        uses: DefangLabs/defang-github-action@v1
        with:
          stack: "mystack"
          provider: "azure"
          mode: "affordable"
```

Full documentation for configuring Azure credentials can be found in the [Defang GitHub Action repository](https://github.com/DefangLabs/defang-github-action).
