---
title: Adding Custom 1-Click Deploy to Your App
sidebar_position: 800
description: Add a custom 1-Click Deploy link to deploy your own app. 
---

import { URLProvider, URLEncode } from "../../src/components/OneClick";

<URLProvider>

# Adding Custom 1-Click Deploy to Your App

This tutorial will show you how to add a 1-Click Deploy link so other people can easily deploy your app to the Defang Playground and eventually to their own cloud accounts.

The link is often placed as a button in the `README.md` file of your project repository, and is the easiest way to allow anyone to deploy your app. 

:::info
If you are trying to use 1-Click Deploy with one of our [samples](https://defang.io/samples/), we have a separate tutorial on [how to use 1-Click Deploy](/docs/tutorials/using-one-click-deploy). 
:::

### How 1-Click Deploy Works
A 1-Click Deploy link points to a special URL. Clicking this link will prompt the user to create a new GitHub repo with a clone of your project. This new repo will contain a GitHub Actions workflow which will automatically deploy the project to Defang. 

## Pre-requisites

- A [GitHub](https://github.com/) repository for your project

## Step 1 - Prepare Your App

You will need a `compose.yaml` file in the root folder of your project repository to describe the services which will be deployed. Learn more about writing [Compose files](/docs/concepts/compose#example-of-a-compose-file).

## Step 2 - Copy the GitHub Workflow
 
In your project, add a new folder named `.github`, then add a folder named `workflows` inside it, and copy the entire GitHub Workflow `deploy.yaml` file from [here](https://github.com/DefangLabs/samples/blob/main/starter-sample/.github/workflows/deploy.yaml) into the `workflows` folder. 
 
If your app requires [configuration](/docs/concepts/configuration) (e.g. API keys, passwords, etc.), learn more about [managing config variables with the Defang GitHub Action](https://github.com/DefangLabs/defang-github-action?tab=readme-ov-file#managing-config-values). 

You should have a `.yaml` file similar to the one below:
```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    environment: playground
    runs-on: ubuntu-latest
    permissions:
      contents: read
      id-token: write

    steps:
    - name: Checkout Repo
      uses: actions/checkout@v4

    - name: Deploy
      uses: DefangLabs/defang-github-action@v1.1.3
```

## Step 3 - Prepare Your Repository

To support 1-Click Deploy, your repository must be a [Template Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template). In order to make your repository into a Template Repository, complete the following steps:
1. Go to the repository's "Settings" near the right on the top bar. 
2. Select the "Template repository" box to turn your repo into a template repo, as seen below:

![select-template-repo-box](/img/custom-one-click-tutorial/select-template-repo-box.png)

3. Go back to your repository's homepage.
4. Click the dropdown menu next to the green "Use this template" button near the top right corner, then click "Create a new repository":

![use-this-template](/img/custom-one-click-tutorial/use-this-template.png)

5. You will be taken to a page similar to the one shown below.

![create-repo](/img/custom-one-click-tutorial/create-repo.png)

Now stay on this page and continue to the next step.

## Step 4 - Get the Encoded URL

You will need the encoded version of the URL of the page from the previous step. This will be used as a redirect for the 1-Click Deploy link. 

1. Copy the URL of the page you are on ( "Create a new repository" page sourced from your template repository). It should look something like the following:
```
https://github.com/new?template_name=<your-repo-name>&template_owner=<your-github-username>
```
2. You need to URL encode your url for the next step. For example, the url above would be encoded as:

```
https%3A%2F%2Fgithub.com%2Fnew%3Ftemplate_name%3D<your-repo-name>%26template_owner%3D<your-github-username>
```

You can just paste your url in here to get the encoded version:

<URLEncode />

## Step 5 - Create the 1-Click Deploy Link

You will need to create a 1-Click Deploy link with the following format: `https://portal.defang.dev/redirect?url=` + your encoded URL. This ensures that the user can get [logged in](/docs/concepts/authentication/) to Defang before they get redirected to clone your app for deployment. 

:::tip
Optionally, you can add `&name=<your-suggested-name>` to the end of the link if you'd like to suggest a name for the user to use for their deployment.
:::

The finished link should look similar to the one below:
```
https://portal.defang.dev/redirect?url=https%3A%2F%2Fgithub.com%2Fnew%3Ftemplate_name%3D<your-repo-name>%26template_owner%3D<your-github-username>&name=<your-suggested-name>
```

Now you have a link for anyone to deploy your app to Defang, with just 1 click. 

## Step 6 - Use the Link
For example, you can add it as a link in a Markdown file:
```
[1-Click Deploy Link](https://portal.defang.dev/redirect?url=<your-encoded-url>&name=<your-project-here>)
```
Or perhaps you can add it to a button with your own styling:
```
[![1-click-deploy-button](https://defang.io/deploy-with-defang.png)](https://portal.defang.dev/redirect?url=<your-encoded-url>&name=<your-project-here>)
```

</URLProvider>