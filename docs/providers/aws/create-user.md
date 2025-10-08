---
title: Creating an AWS IAM User
description: Step-by-step instructions for creating an IAM user and access keys for Defang deployments.
sidebar_position: 100
---

## Creating an AWS IAM User for Defang

To deploy applications with Defang on AWS, you need an IAM user with appropriate permissions and access keys. This guide walks you through the process step by step.

## Step 1: Create an IAM User

### a. Open the IAM Service
Go to the [AWS Console](https://aws.amazon.com/console/) and open the IAM (Identity and Access Management) service. Under **Access Management**, select **Users**.

<img src="/img/aws-user/side-panel.png" alt="AWS IAM side panel" width="250" />

### b. Click Create User
Click the **Create user** button at the top right.

<img src="/img/aws-user/create-user.png" alt="Create user button" width="470" />

### c. Enter User Name and Assign Permissions
Enter a user name and assign permissions. The `PowerUserAccess` policy is used in this example, but you may choose different or more restrictive policies depending on your organization's requirements.

<img src="/img/aws-user/create-user-1-name.png" alt="User name input" width="470" />

<img src="/img/aws-user/create-user-2-add-policy.png" alt="Assign policies to user" width="470" />

### d. Review and Confirm
Review your settings and confirm the creation of the user.

---

## Step 2: Create Access Keys

Access keys are required for programmatic access to AWS. Follow these steps to create them:

### a. Select the New User
After creating the user, locate them in the **Users** panel and select the user.

<img src="/img/aws-user/new-user-in-panel.png" alt="New user in panel" width="470" />

### b. Create Access Key
In the **User Summary** panel, click **Create access key**.

<img src="/img/aws-user/new-user-create-key-panel.png" alt="Key creation panel" width="470" />

### c. Select Use Case
For Defang, select the use case "Application running on AWS compute service".

<img src="/img/aws-user/new-user-use-case.png" alt="Use case" width="470" />

### d. Add Description and Continue
Optionally, provide a description for the key and click **Next**.

<img src="/img/aws-user/new-user-description.png" alt="Key description" width="470" />

### e. Save Your Access Keys
Your new access key will be generated. **Copy and save the Access Key ID and Secret Access Key**—you will need these for Defang deployments.

<img src="/img/aws-user/new-user-keys.png" alt="Access keys" width="470" />
