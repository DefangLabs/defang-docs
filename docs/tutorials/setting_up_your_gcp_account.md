---
title: Setting Up Your GCP Account
description: Follow these steps to set up your Google Cloud Platform (GCP) account for deploying applications with Defang.
---

# Setting Up Your GCP Account

 Follow these steps to set up your Google Cloud Platform (GCP) account for deploying applications with Defang.

---

### Step 1: Create Your GCP Account

Start by creating a Google Cloud account using the [GCP account creation flow](https://cloud.google.com/). If you already have an account skip to the next step.

<figure>
  <img src="/img/setting-up-your-gcp-account/google-sign-up.png" alt="Google GCP sign up page" style={{ width: 300 }} />
  <figcaption>Google GCP sign up page</figcaption>
</figure>

---

### Step 2: Create a GCP Project

To deploy apps using Defang, you need a GCP project. Projects help organize related resources such as services, IAM policies, quotas, and billing.

If you already have a project, skip to [Step 3](#step-3-create-your-billing-account).

To create a new project:

1. Visit the [GCP Console](https://console.cloud.google.com/).
2. Click the project selector button (it may say **"Select a project"** or display a previous project name).
<figure>
  <img src="/img/setting-up-your-gcp-account/select-project.png" alt="GCP console with the project select button highlighted" style={{ width: 300 }} />
  <figcaption><strong>Select project button to open the project dialog</strong></figcaption>
</figure>

3. Follow the prompts to create a new project.

:::info
Take note of your **Project ID** — you’ll need it later when setting the `GCP_PROJECT_ID` environment variable.
:::

<figure>
  <img src="/img/setting-up-your-gcp-account/new-project.png" alt="GCP project creation dialog" style={{ width: 300 }} />
  <figcaption>Create a new project in the dialog</figcaption>
</figure>

---

### Step 3: Create Your Billing Account

Billing accounts let Google allocate costs to specific entities or users. You’ll need one to deploy services.

1. In the [GCP Console](https://console.cloud.google.com/), open the navigation menu.
2. Select **Billing**.

<figure>
  <img src="/img/setting-up-your-gcp-account/billing-menu-option.png" alt="Billing option in GCP menu" style={{ width: 300 }} />
  <figcaption>Billing menu option</figcaption>
</figure>

1. In the billing side panel, select **Manage billing accounts**, then click **Create account**.
2. Follow the steps to create a billing account. A credit card is required.

<figure>
  <img src="/img/setting-up-your-gcp-account/create-billing-account.png" alt="Create billing account page" style={{ width: 300 }} />
  <figcaption>Billing management page</figcaption>
</figure>

---

### Step 4: Link Your Project to the Billing Account

Once your project and billing account are created, link them together:

1. In the GCP Console, select your project from the project selector.
2. Open the **Billing** section again from the left sidebar.
3. Click **Link a billing account**.

<figure>
  <img src="/img/setting-up-your-gcp-account/link-billing-account.png" alt="Link billing account dialog" style={{ width: 300 }} />
  <figcaption>Link billing account dialog</figcaption>
</figure>

1. Choose the billing account to link.

<figure>
  <img src="/img/setting-up-your-gcp-account/link-billing-select-account-dialog.png" alt="Billing account selection dialog" style={{ width: 300 }} />
  <figcaption>Select a billing account to link</figcaption>
</figure>

---

### Step 5: Set Up Your GCP CLI

To complete your setup, install the **gcloud CLI** by following the [installation guide](https://cloud.google.com/sdk/docs/install).

After installation, authenticate with:

```
gcloud auth application-default login
```

This will generate your **application default credentials** used during deployment.

---

Now you're ready to deploy! See the [Deploy to GCP tutorial](/docs/tutorials/deploy-to-gcp.mdx) for next steps.
