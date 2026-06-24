---
title: Recipe
description: A recipe holds the infrastructure-as-code parameters for a deployment that aren't derived from your Compose file.
---

# Recipe

A _recipe_ is the set of infrastructure-as-code parameters that Defang applies to a deployment but that are **not** derived from your [Compose file(s)](./compose.md). Your Compose file describes _what_ your application is: its [services](/docs/concepts/services), images, ports, and environment. A recipe describes _how_ the surrounding cloud infrastructure should be provisioned: log retention, database tiers, availability zones, NAT gateways, deletion protection, health-check cadence, and similar knobs.

## Recipes and Deployment Modes

Defang has historically offered three fixed [deployment modes](./deployment-modes.md) — `affordable`, `balanced`, and `high_availability` — to let you trade off cost against resiliency. A recipe generalizes this idea: each of those modes is simply a built-in recipe, and recipes let you set the underlying infrastructure parameters directly instead of choosing from a fixed list. This means recipes supersede the enumerable deployment modes, while the three named modes remain available as convenient starting points.

For example, on AWS, the built-in recipes set values like log retention (1 day for `affordable`, 7 for `balanced`, 30 for `high_availability`), the Fargate capacity provider (spot vs. on-demand), the number of availability zones, the NAT gateway strategy, and whether managed databases use burstable or memory-optimized classes.

## Managing Recipes

Recipes are managed in the [Defang Portal](./portal.md). You can start from one of the built-in recipes and adjust the parameters to suit a particular [stack](./stacks.md) — for instance, a development stack and a production stack of the same [project](./projects.md) can use different recipes.

## How Recipes Are Used

When you run a deployment with `defang up`, Defang sends two things to the Defang [`CD` task](/docs/intro/how-it-works) in your cloud:

1. Your **project** — the Compose file(s) and uploaded sources.
2. The **recipe** — the infrastructure parameters described above.

The `CD` task passes the recipe to [Pulumi](./pulumi.md), which provisions and updates your cloud resources accordingly. In Pulumi terms, a recipe _is_ [Pulumi config](https://www.pulumi.com/docs/iac/concepts/config/): the configuration values consumed by the Defang Pulumi providers when they reconcile your deployment. Any parameter you omit from a recipe falls back to its built-in default at deployment time.
