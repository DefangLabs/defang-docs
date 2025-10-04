---
title: Deploy a Go-powered slackbot with Defang
tags: [Cloud, NoDevOps, BYOC, AWS ECS, defang compose up, Slack API]
author: Raphaël Titsworth-Morin
---

Hey folks! Today, I'm going to share one of our code samples that will show you how to deploy a simple Slack bot. If you're looking to connect a cloud service to Slack to publish status updates, or something else like that, this should help you get started. We'll walk through a step-by-step process of writing a Go program using the [github.com/slack-go/slack](https://github.com/slack-go/slack) library to interact with the Slack API and easily deploy it using Defang.

n{/* truncate */}
## Prerequisites

Before we dive into the details, let's make sure you have everything you need to get started:

1.  **Install Defang CLI:** Simplify your deployment process by installing the Defang CLI tool. Follow the instructions [here](/docs/getting-started#install-the-defang-cli) to get it up and running quickly.

2.  **Slack API Token:** Create a Slack App at https://api.slack.com/apps, granting it the necessary permissions, including the bot `chat:write` scope.
![screenshot of the slack admin UI showing the bot scopes](/img/slackbot-sample/scopes.png)

3. **Install the app in your workspace:** You'll need to install the app in your workspace for it to work. Click the "Install to Workspace" button in the Slack admin UI to do this. Mine says "Reinstall" because I've already installed it.
![screenshot of the slack admin UI showing the install button](/img/slackbot-sample/install-app.png)

4. **Copy the Bot User OAuth Access Token:** This token will authenticate your Slackbot with the Slack API.
![screenshot of the slack admin UI showing the auth token field](/img/slackbot-sample/token.png)

5. **Invite the Bot to a Channel:** To enable your Slackbot, invite it to the desired channel using the `@<botname>` command. In the screenshot below, my bot's name actually starts with the word invite, but if your bot is called `mycoolbot` you would invite it with `@mycoolbot`. This ensures your Slackbot has the required permissions to interact with the channel.
![screenshot of the slack chat UI showing me inviting my bot](/img/slackbot-sample/invite.png)

6. **Clone the Sample Code:** Clone the Defang repository and navigate to the `samples/golang/slackbot` directory. This directory contains the sample code for the Slackbot.

```bash
git clone https://github.com/DefangLabs/defang
cd defang/samples/golang/slackbot
```

## Deployment Steps

Now that we have everything set up, let's dive into the deployment process. Follow these steps to deploy your Slackbot effortlessly:

1.  **Set Up Secrets:** Prioritize security by configuring environment variables as sensitive config. Use the Defang CLI's `defang config set` command to set the `SLACK_TOKEN` and `SLACK_CHANNEL_ID` configs.
    Replace `your_slack_token` and `your_slack_channel_id` with the respective values:

    ```bash
    defang config set --name SLACK_TOKEN --value your_slack_token
    defang config set --name SLACK_CHANNEL_ID --value your_slack_channel_id
    ```

2.  **Deploy the Slackbot:**  Use the Defang CLI's `defang compose up` command to deploy.

## Usage
With your Slackbot up and running, let's explore how to make the most of it. Let's send a POST request to the `/` endpoint with a JSON body containing the message you want to post to the Slack channel. Popular tools like cURL or Postman can help you send the request:

```bash
curl 'https://raphaeltm-bot--8080.prod1.defang.dev/' \
  -H 'content-type: application/json' \
  --data-raw $'{"message":"This is your bot speaking. We\'ll be landing in 10 minutes. Please fasten your seatbelts."}'
```

## Takeaways
Congratulations! You've successfully deployed a Slackbot using Defang. If you deployed this as an internal service, you could use it to send status updates, alerts, or other important messages to your team. The possibilities are endless!
