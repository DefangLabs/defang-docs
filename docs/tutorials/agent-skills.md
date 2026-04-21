---
title: Deploy with Agent Skills
description: Install the Defang plugin for Claude Code or Codex to deploy your project to the cloud directly from your agent.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy with Agent Skills

Defang provides skills for safe, deterministic deployments to AWS, GCP, and Azure.

## Add the Skills

<Tabs>
<TabItem value="npx" label="npx">

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

## Estimate deployment cost

Before deploying, you can ask your agent to estimate the cost of your deployment:

```shell
/defang:estimate
```

Your agent will analyze your `compose.yaml` and provide a cost estimate based on the services you're deploying, their resource requirements, and the current pricing for the cloud resources which will be used. This can help you identify expensive services or configurations before you deploy.

### How the estimate works

1. **Validate the CLI** — checks if the Defang CLI is installed, and provides install instructions if not
2. **Authenticate** — verifies you're logged in to Defang, or runs `defang login`
3. **Find your `compose.yaml`** — locates your Compose file
4. **Determine target stack** — identifies the cloud provider, region, and deployment mode to base the estimate on (or asks you to specify them)
5. **Run the estimate** — executes `defang compose estimate` with the appropriate flags
6. **Explain the results** — summarizes cost breakdowns and suggests lower-cost alternatives if needed

### Estimate flags

- `--provider aws|gcp|azure`: override the provider
- `--region REGION`: override the region
- `--mode affordable|balanced|high_availability`: override the deployment mode

## Deploy your project

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
If the agent installs the Defang CLI for the first time, reload your plugins afterward to activate the Defang MCP server without restarting your agent.
:::

## Check deployment status

If your deployment fails or you want to check the status of your services, you can ask your agent for updates:

```shell
/defang:status
```

### How status checks work

1. **Validate the CLI** — checks if the Defang CLI is installed, and provides install instructions if not
2. **Authenticate** — verifies you're logged in to Defang, or runs `defang login`
3. **Find your `compose.yaml`** — locates your Compose file to identify services
4. **Check the current stack** — runs `defang stack ls` to determine active stack
5. **Check deployment status** — runs `defang compose ps` to see service health
6. **Fetch recent logs** — retrieves logs with `defang logs --since 15m` and scans for errors
7. **Summarize and recommend** — diagnoses issues with root cause analysis and actionable next steps

## - Use the Defang MCP server

Once the Defang CLI is installed, the plugin also registers the Defang MCP server. This gives your agent direct access to Defang tools — so instead of running skill steps, you can ask things like:

- _"What services are currently running?"_
- _"Show me the logs for my api service."_
- _"How much will this deployment cost?"_

:::note
If the MCP server fails to start, this usually means the Defang CLI is not installed or not in your `$PATH`.
:::

---

For a deeper discussion of how Defang deployments work, see our [Getting Started](/docs/intro/getting-started) guide and [Stacks](/docs/concepts/stacks) docs.
