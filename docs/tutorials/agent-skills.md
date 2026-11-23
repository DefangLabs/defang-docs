# Deploy with Agent Skills

Defang provides skills for safe, deterministic deployments to AWS, GCP, and Azure.

## Add the Skills[​](#add-the-skills "Direct link to Add the Skills")

* npx
* Claude Code
* Codex

```
npx skills add DefangLabs/defang
```

Add the Defang marketplace, then install the plugin:

```
/plugin marketplace add DefangLabs/defang
/plugin install defang@defang-skills
```

Then reload plugins to activate everything:

```
/reload-plugins
```

Add the Defang marketplace entry to your personal marketplace file at `~/.agents/plugins/marketplace.json`:

```
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

```
/plugin install defang@defang-skills
```

note

Codex's public plugin registry is not yet available. Until it launches, installation requires adding the marketplace entry manually as shown above.

## What you get[​](#what-you-get "Direct link to What you get")

The Claude Code and Codex plugins add one skill, `/defang:deploy`, and register the [Defang MCP server](https://docs.defang.io/docs/concepts/mcp.md). `npx skills add` installs the skill files from the Defang repository, which also include skills for preparing a project, checking deployment status and estimating cost (cost estimation is currently unavailable; see below).

## Deploy your project[​](#deploy-your-project "Direct link to Deploy your project")

In Claude Code or Codex, navigate to your project directory and run:

```
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

tip

If the agent installs the Defang CLI for the first time, reload your plugins afterward to activate the Defang MCP server without restarting your agent.

## Check status and estimate cost[​](#check-status-and-estimate-cost "Direct link to Check status and estimate cost")

The plugins don't have separate status or estimate commands. To check a deployment, ask your agent in plain language and it will use the MCP server's `services` and `logs` tools, as in the examples below.

warning

Cost estimation is temporarily unavailable, which affects the MCP server's `estimate` tool and the `defang estimate` command. Follow [issue #2316](https://github.com/DefangLabs/defang/issues/2316) for the fix and its release.

## Use the Defang MCP server[​](#use-the-defang-mcp-server "Direct link to Use the Defang MCP server")

Once the Defang CLI is installed, the plugin also registers the Defang MCP server. This gives your agent direct access to Defang tools — so instead of running skill steps, you can ask things like:

* *"What services are currently running?"*
* *"Show me the logs for my api service."*
* *"What stacks do I have?"*

note

If the MCP server fails to start, this usually means the Defang CLI is not installed or not in your `$PATH`.

***

For a deeper discussion of how Defang deployments work, see our [Getting Started](https://docs.defang.io/docs/intro/getting-started.md) guide and [Stacks](https://docs.defang.io/docs/concepts/stacks.md) docs.
