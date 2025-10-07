---
title: Setting Up AWS users
description: Follow these instructions to create a user for deployment
sidebar_position: 100
---

# Create a user

 Follow these steps to set up a AWS user for deploying applications with Defang.

### Step 1: Create Your user

  1. Start by using the [AWS console](https://aws.amazon.com/console/) and go to the AIM (Amazon Identity and Management) console and under **Access Management** select **User**

<figure>
  <img src="/img/aws-user/side-panel.png" alt="AWS AIM side panel" style={{ width: 300 }} />
  <figcaption>Create a AWS user</figcaption>. 
</figure>
  
  2. Select the Create User button on the top right to start the create flow

<figure>
  <img src="/img/aws-user/create-user.png" alt="Create user button" style={{ width: 300 }} />
  <figcaption>Create user button</figcaption>
</figure>

  3. Provide user name and permission policy

<figure>
  <img src="/img/aws-user/create-user-1-name.png" alt="User name input" style={{ width: 300 }} />
  <figcaption>User name input</figcaption>  
</figure>

The policy we are add in this example is very permissive. You may wish to more selective of the policies you want your user to have.
<figure>
  <img src="/img/aws-user/create-user-2-add-policy.png" alt="Assign policies to user" style={{ width: 300 }} />
  <figcaption>Assign policies to user</figcaption> 
</figure>

Once this is done, review and confirm the creation.

---

### Step 2: Creating keys
  The next step is to create the action keys used to authenticate the user.
  
  1. Once the new user is create they will show up in the **Users** panel. Select that user.

   <figure>
  <img src="/img/aws-user/new-user-in-panel.png" alt="New user in panel" style={{ width: 300 }} />
  <figcaption>New user in panel</figcaption>  
</figure>

  2. This opens the **User Summary** panel. Select **Create access key** button to open the key creation flow.

   <figure>
  <img src="/img/aws-user/new-user-create-key-panel.png" alt="Key creation panel" style={{ width: 300 }} />
  <figcaption>Key creation panel</figcaption>  

</figure>

  3. Select the Use case for the key, for defang this will be the "Application running on AWS compute service"

   <figure>
  <img src="/img/aws-user/new-user-use-case.png" alt="Use case" style={{ width: 300 }} />
  <figcaption>Use case</figcaption>  
</figure>

  4. Provide a description of the key and press Next

   <figure>
  <img src="/img/aws-user/new-user-description.png" alt="Key description" style={{ width: 300 }} />
  <figcaption>Key description</figcaption>  
</figure>  

  5. A new key is generated for you. This is the Access Key Id and Secret Key for this user for authentication during deployment.

  <figure>
  <img src="/img/aws-user/new-user-keys.png" alt="Access keys" style={{ width: 300 }} />
  <figcaption>**Access keys**</figcaption>  
</figure>
