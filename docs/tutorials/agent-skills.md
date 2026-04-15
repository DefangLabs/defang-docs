---
title: Deploy with Agent Skills
description: Install the Defang plugin for Claude Code or Codex to deploy your project to the cloud directly from your agent.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy with Agent Skills

Defang provides agent skills for [Claude Code](https://claude.ai/code) and [OpenAI Codex](https://openai.com/codex) that guide you through deploying your project to AWS, GCP, or DigitalOcean — without leaving your editor.

Each plugin includes a `/defang:deploy` skill that walks you through the entire deployment workflow, and registers the Defang MCP server so your agent can interact with your deployment directly once the CLI is installed.

## Prerequisites

- The Defang CLI does not need to be installed upfront — the `/defang:deploy` skill will guide you through installing it if needed.

<Tabs>
<TabItem value="npx" label="npx">

- Node.js 18+ installed

</TabItem>
<TabItem value="claude" label="Claude Code">

- [Claude Code](https://claude.ai/code) installed and authenticated

</TabItem>
<TabItem value="codex" label="Codex">

- [Codex CLI](https://openai.com/codex) installed and authenticated

</TabItem>
</Tabs>

## Step 1 - Install the Defang plugin

<Tabs>
<TabItem value="npx" label="npx">

Install the Defang skill directly:

```shell
npx skills add DefangLabs/defang
```

</TabItem>
<TabItem value="claude" label="Claude Code">

Add the Defang marketplace, then install the plugin:

```shell
/plugin marketplace add DefangLabs/defang
/plugin install defang@defang-skills
```

Then reload plugins to activate everything:

```shell
/reload-plugins
```

</TabItem>
<TabItem value="codex" label="Codex">

Add the Defang marketplace entry to your personal marketplace file at `~/.agents/plugins/marketplace.json`:

```json
{
  "name": "defang-skills",
  "owner": {
    "name": "DefangLabs"
  },
  "plugins": [
    {
      "name": "defang",
      "source": {
        "source": "github",
        "repo": "DefangLabs/defang",
        "path": "codex-plugin"
      },
      "category": "Infrastructure"
    }
  ]
}
```

Then install the plugin from within Codex:

```shell
/plugin install defang@defang-skills
```

:::note
Codex's public plugin registry is not yet available. Until it launches, installation requires adding the marketplace entry manually as shown above.
:::

</TabItem>
</Tabs>

## Step 2 - Deploy your project

Navigate to your project directory and run:

```shell
/defang:deploy
```

Your agent will guide you through each step of the deployment:

1. **Validate the CLI** — checks if the Defang CLI is installed, and provides install instructions if not
2. **Authenticate** — verifies you're logged in to Defang, or runs `defang login`
3. **Find or create a `compose.yaml`** — locates your Compose file or helps you create one
4. **Select or create a stack** — lists existing stacks or creates a new one for your target cloud and region
5. **Set required configs** — identifies unset environment variables in your Compose file and prompts you to provide values
6. **Deploy** — runs `defang compose up` and streams logs
7. **Verify** — checks service status and surfaces endpoints

:::tip
If you install the Defang CLI for the first time during Step 2, reload your plugins afterward to activate the Defang MCP server without restarting your agent.
:::

## Step 3 - Use the Defang MCP server (optional)

Once the Defang CLI is installed, the plugin also registers the Defang MCP server. This gives your agent direct access to Defang tools — so instead of running skill steps, you can ask things like:

- _"What services are currently running?"_
- _"Show me the logs for my api service."_
- _"How much will this deployment cost?"_

:::note
If the MCP server fails to start, this usually means the Defang CLI is not installed or not in your `$PATH`.
:::

---

For a deeper discussion of how Defang deployments work, see our [Getting Started](/docs/intro/getting-started) guide and [Stacks](/docs/concepts/stacks) docs.
