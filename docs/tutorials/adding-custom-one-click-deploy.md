---
title: Adding a Custom 1-Click Deploy
sidebar_position: 800
description: Add a custom 1-Click Deploy button to deploy your own app. 
---

import {OriginalRepoUrl, TemplateUrl, EncodedTemplateUrl, OneClickUrl} from '../../src/components/URLEncoder';

# Adding a Custom 1-Click Deploy

This tutorial will show you how to add a custom Defang 1-Click Deploy button to deploy your own app to Defang Playground. 

:::info
This page focuses on adding 1-Click Deploy to any app that is not from [our list of samples](https://defang.io/#samples). We have a separate tutorial on [how to use 1-Click Deploy](/docs/tutorials/using-one-click-deploy) for Defang's pre-made samples, which is meant for new users. 
:::

## Step 1 - Have an App Ready

The button we will be creating in this tutorial will allow any user to deploy your app to their Defang account. If your app is ready to be deployed with Defang (i.e. has a valid `compose.yaml` file), you can skip this step. 

If not, you can either [manually write one](/docs/concepts/compose):
```yaml
services:
  service-example:
    image: nginx:latest # replace with the image or build for your app
  ports: 
    - mode: ingress # specify ports to expose
      target: 8080
      published: 8080
        
```

Or, you can generate a new app using the command:

```
defang generate
```

:::info
Make sure your `compose.yaml` file is in the root folder of your project.
:::

It may be helpful to have a `README.md` file, or a location to paste your 1-Click Deploy link. 

## Step 2 - Copy the GitHub Workflow
 
In your project, add a new folder named `.github`, then add a folder `workflows` inside it, and copy the entire GitHub Workflow `deploy.yaml` file from [here](https://github.com/DefangLabs/samples/blob/main/starter-sample/.github/workflows/deploy.yaml) into the `workflows` folder. 
 
If your app does not have any [configuration](/docs/concepts/configuration) needed (e.g. API keys, passwords, etc.), you can remove the corresponding lines as indicated in the file. 

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


## Step 3 - Use a Template GitHub Repository

You have the option of using Defang's template repo or your own template GitHub repo for this step. There is no difference in end result, but it may be easier to use Defang's template repo so that you do not have to create your own.

### Option 1 - Use an Existing Template Repo

1. Click the link to [Defang's 1-Click template repo](https://github.com/DefangLabs/1-click-template), or open an existing template repo if you have one.  
2. Click the dropdown menu next to the green "Use this template" button near the top right corner, then click "Create a new repository":

![use-this-template](/img/custom-one-click-tutorial/use-this-template.png)

3. You will be taken to a page similar to the one shown below. Then, enter a name for your repository and click the green "Create repository" button at the bottom.

![create-a-new-repo](/img/custom-one-click-tutorial/create-a-new-repo.png)

4. Now that you've created a new repository from a template repo, you can move onto the next step, which is getting the encoded URL.

### Option 2 - Manually Set Up a Template Repo

1. Create a new repository on GitHub. 
2. Go to the repository's "Settings", seen near the right on the top bar. 
3. Select the "Template repository" box to turn your repo into a template repo, as seen below:

![select-template-repo-box](/img/custom-one-click-tutorial/select-template-repo-box.png)

4. Go back to this repository's home page and follow the instructions in Option 1, skipping the first step.

## Step 4 - Get the Encoded URL

Now that you've created a new repository from a template repo, you will need the encoded version of the URL. This is necessary because it is used as a redirect for the 1-Click Deploy link. 

1. Copy the URL of your new repository's homepage (not the template repository's homepage). It should look something like the following:
```
https://github.com/<your-github-username>/<your-project-here>
```
2. You can go online and paste the URL from the step above into a URL encoder tool of your choice. You should end up with an encoded URL, similar to the one shown below:

```
https%3A%2F%2Fgithub.com%2F<your-github-username>%2F<your-project-here>
```

<OriginalRepoUrl/>
<TemplateUrl/>
<EncodedTemplateUrl/>
<OneClickUrl/>

## Step 5 - Create the 1-Click Deploy Link

Finally, you will need to format the 1-Click Deploy Link as `https://portal.defang.dev/redirect?url=` + your encoded URL. This ensures that the user can get [logged in](/docs/concepts/authentication/) to Defang before they get redirected to clone your app for deployment. 


:::tip
Optionally, you can add `&name=<your-project-here>` to the end of the link if you'd like to suggest a name for the user to use for their deployment.
:::

The finished link should look similar to the one below:
```
https://portal.defang.dev/redirect?url=https%3A%2F%2Fgithub.com%2F<your-github-username>%2F<your-project-here>&name=<your-project-here>
```

Now you have a link for anyone to deploy your app to Defang, with just 1 click! 

### Examples
For example, you can add it as a link in a Markdown file:
```
[1-Click Deploy Link](https://portal.defang.dev/redirect?url=<your-encoded-url>&name=<your-project-here>)
```
Or perhaps you can add it to a button with your own styling:
```
[![1-click-deploy-button](https://defang.io/deploy-with-defang.png)](https://portal.defang.dev/redirect?url=<your-encoded-url>&name=<your-project-here>)
```
