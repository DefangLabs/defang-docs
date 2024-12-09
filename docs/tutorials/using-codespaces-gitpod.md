---
title: Using Codespaces and Gitpod
sidebar_position: 700
---

# Using Codespaces and GitPod

This tutorial will guide you to set up Defang in both GitHub Codespaces and Gitpod.

<iframe width="560" height="315" src="https://www.youtube.com/embed/71pmCfLdxTg?si=Q9YIESYEUNTBFBIy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Using Codespaces With Defang

### Step 1 - Clone the Defang Codespace Project
Start by cloning the [Defang GitHub-Codespace](https://github.com/DefangLabs/github-codespace) repo and pushing it to your own account. This repository is configured with a Codespace that has Defang pre-installed.


### Step 2 - Create a Codespace
Once you've pushed to your own GitHub repo, you'll be able to create a Codespace by clicking the Code button, selecting the Codespaces tab, and clicking the + icon. This will set up a development environment with Defang already installed, which might take a few minutes.

![Create Codespace button screenshot](/img/codespace-tutorial/new-codespace.png)


### Step 3 - Open in VS Code Desktop
For the `defang login` command to work correctly, you must open the Codespace in VS Code desktop. This is required because the login process is designed to run on localhost.


![Open in vs code desktop button screenshot](/img/codespace-tutorial/desktop.png)


### Step 4 - Run Defang Login
Within a VS Code desktop terminal, execute the following command.
```bash
defang login
```
Although it may initially refuse to connect on your localhost, going back will show a "successfully logged in" message, confirming that you're logged into Defang.


### Step 5 - Verify Running Services
Now that you're logged in, you can use Defang commands. You can test that everything is working properly by running `defang ls` to list your running services.


## Using GitPod With Defang

### Step 1 - Clone the Defang GitPod Workspace Project
Start by cloning the [Defang Gitpod-Workspace](https://github.com/DefangLabs/gitpod-workspace) repo and pushing it to your own GitHub, GitLab, or BitBucket account. This repository includes a Workspace configuration that pre-installs Defang.


### Step 2 - Initialize GitPod Workspace
Navigate `https://gitpod.io/#<your-repo-url>` to create your new workspace.
In the repository, we have a yaml file indicating that we are using a pre-built Dockerfile which installs Defang CLI for you.


### Step 3 - Lauch VS Code from GitPod
Open VS Code from GitPod, you will likely need to have the GitPod VS Code extension installed.

![Open in vs code desktop button screenshot](/img/codespace-tutorial/gitpod-desktop.png)

![Screenshot of GitPod extension](/img/codespace-tutorial/gitpod-ext.png)


### Step 4 - Run Defang Login
Within a VS Code desktop terminal, execute the following command.

```bash
defang login
```


### Step 5 - Verify Running Services
Now that you're logged in, you can use Defang commands. You can test that everything is working properly by running `defang ls` to list your running services.