---
title: Adding Custom 1-Click Deploy to Your App
sidebar_position: 800
description: Add a custom 1-Click Deploy link to deploy your own app. 
---

# Adding Custom 1-Click Deploy to Your App

This tutorial will show you how to add a 1-Click Deploy link to deploy your app to the Defang Playground. A 1-Click Deploy link points to a special Defang URL. Clicking this link will trigger a deployment of a project to Defang. The link is often placed as a button in the `README.md` file of your project repository, and is the easiest way to allow anyone to deploy your app. 

:::info
If you are trying to use 1-Click Deploy with one of our [samples](https://defang.io/samples/), we have a separate tutorial on [how to use 1-Click Deploy](/docs/tutorials/using-one-click-deploy). 
:::

## Pre-requisites

- A [GitHub](https://github.com/) repository for your project

## Step 1 - Prepare Your App

You will need a `compose.yaml` file in the root folder of your project to describe the services which will be deployed. Learn more about writing [Compose files](/docs/concepts/compose#example-of-a-compose-file).

## Step 2 - Copy the GitHub Workflow
 
In your project, add a new folder named `.github`, then add a folder `workflows` inside it, and copy the entire GitHub Workflow `deploy.yaml` file from [here](https://github.com/DefangLabs/samples/blob/main/starter-sample/.github/workflows/deploy.yaml) into the `workflows` folder. 
 
If your app requires [configuration](/docs/concepts/configuration) (e.g. API keys, passwords, etc.), learn more about [managing config variables with the Defang GitHub Action](https://github.com/DefangLabs/defang-github-action). 

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

## Step 3 - Get the Encoded URL

You will need the encoded version of your project repository's URL. This will be used as a redirect for the 1-Click Deploy link. 

1. Copy the URL of your repository's homepage. It should look something like the following:
```
https://github.com/<your-github-username>/<your-repo-name>
```
2. You can go online and paste the URL from the step above into a URL encoder tool of your choice. You should end up with an encoded URL, similar to the one shown below:

```
https%3A%2F%2Fgithub.com%2F<your-github-username>%2F<your-repo-name>
```

## Step 4 - Create the 1-Click Deploy Link

You will need to create a 1-Click Deploy link with the following format: `https://portal.defang.dev/redirect?url=` + your encoded URL. This ensures that the user can get [logged in](/docs/concepts/authentication/) to Defang before they get redirected to clone your app for deployment. 

:::tip
Optionally, you can add `&name=<your-project-here>` to the end of the link if you'd like to suggest a name for the user to use for their deployment.
:::

The finished link should look similar to the one below:
```
https://portal.defang.dev/redirect?url=https%3A%2F%2Fgithub.com%2F<your-github-username>%2F<your-project-here>&name=<your-project-here>
```

Now you have a link for anyone to deploy your app to Defang, with just 1 click. 

## Step 5 - Use the Link
For example, you can add it as a link in a Markdown file:
```
[1-Click Deploy Link](https://portal.defang.dev/redirect?url=<your-encoded-url>&name=<your-project-here>)
```
Or perhaps you can add it to a button with your own styling:
```
[![1-click-deploy-button](https://defang.io/deploy-with-defang.png)](https://portal.defang.dev/redirect?url=<your-encoded-url>&name=<your-project-here>)
```
