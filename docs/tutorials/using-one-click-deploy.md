---
title: Using 1-Click Deploy
sidebar_position: 800
description: Use 1-Click Deploy to easily deploy a sample to the Defang Playground. 
---

# Using 1-Click Deploy

This tutorial will show you how to use Defang 1-Click Deploy to deploy a sample. 

The 1-Click Deploy button is intended to be a quickstart way for new users to deploy to the [Defang Playground](/docs/concepts/defang-playground) with no prior installation needed. 

:::info
If this is not your first time, we recommend using the [Defang CLI](/docs/getting-started) to get a full experience of deploying with Defang. 
:::

## Step 1 - Choose a Sample
Head to our [list of samples](https://defang.io/#samples) and click a sample you want to deploy. Then, click on the button that says "1-Click Deploy".

Alterntively, you can find the "1-Click Deploy" button located in the `README.md` file of each sample's repository. 

## Step 2 - Allow Permissions

After you've clicked, you will be prompted to use GitHub to log in. Once you see a "Create a Repository" page appear, allow the sample repository to get cloned into your GitHub account. 

## Step 3 - Wait for Deployment to Complete

A Github action workflow will automatically start running to install Defang and deploy the sample to the Defang Playground. If you wish to, you can see this by going into the "Actions" tab in your GitHub repository. 

You can view the status of your deployment in the [Defang Portal](https://portal.defang.dev/), or by downloading the [Defang CLI](/docs/getting-started).  

:::tip
Defang has a tutorial on how you can [monitor your services](/docs/tutorials/monitoring-your-services). 
:::

:::info
If you decide to make a commit later to a repository created from 1-Click Deploy, then the project will automatically get deployed again to Defang Playground.
:::

### Configuration in 1-Click Deploy

If the sample you chose requires setting configuration, such as API keys, you can set sensitive config values as secrets in your GitHub repository and the action will automatically deploy them for you. 
