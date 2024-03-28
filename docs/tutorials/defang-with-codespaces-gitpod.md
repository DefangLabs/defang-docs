---
title: Defang with Codespaces and Gitpod
sidebar_position: 700
---

# Defang with Codespaces and GitPod

<iframe width="560" height="315" src="https://www.youtube.com/embed/71pmCfLdxTg?si=Q9YIESYEUNTBFBIy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

This tutorial will guide you to set up Defang in both Codespaces and Gitpod.

## Getting Started with Github Codespaces and Defang

### Step 1: Clone the Defang Codespace Project
Start by cloning <a href="https://github.com/defang-io/github-codespace">"Defang Github-Codespace"</a>. This repository is configured with a Codespace that has Defang pre-installed.


### Step 2: Create a Codespace
After cloning, create a new Codespace from the GitHub repository. This will set up a development environment with Defang already installed, which might take a few minutes.


### Step 3: Open in VS Code Desktop
For the `defang login` command to work correctly, you must open the Codespace in VS Code desktop. This is crucial because the login process is designed to run on localhost.


### Step 4: Run Defang Login
Within the VS Code desktop, execute the following command.
```bash
defang login
```
Although it may initially refuse to connect on you localhost, going back will show a "successfully logged in" message, confirming that you're logged into Defang.


### Step 5: Verify Defang Services
Now that you're logged in, you can use Defang commands to see your running services from within the GitHub Codespace.


## Getting Started with GitPod Workspace with Defang

### Step 1: Clone the Defang Codespace Project
Start by cloning <a href="https://github.com/defang-io/gitpod-workspace">"Defang Gitpod-Workspace"</a>. This repository is configured with a Codespace that has Defang pre-installed.


### Step 2: Initialize GitPod Workspace
Navigate to gitpod.io, append `/#` and your repository's URL to it, and initiate the workspace creation.
In the repository, we have a yaml file indicating that we are using a pre-built dockerfile which installs Defang CLI for you.


### Step 3: Lauch VS Code from GitPod
Navigate to your gitpod, and execute `defang ls` to ensure that Defang.
Open VS Code from GitPod, you will likely need to have the GitPod VS Code extension installed.


### Step 4: Run Defang Login
Within the VS Code desktop, execute the following command.
```bash
defang login
```