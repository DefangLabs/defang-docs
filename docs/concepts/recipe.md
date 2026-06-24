---
title: Recipe
description: A recipe holds the infrastructure-as-code parameters for a deployment that aren't derived from your Compose file.
---

# Recipe

A _recipe_ is the set of infrastructure-as-code parameters that Defang applies to a deployment but that are **not** derived from your [Compose file(s)](./compose.md). Your Compose file describes _what_ your application is: its [services](/docs/concepts/services), images, ports, and environment. A recipe describes _how_ the surrounding cloud infrastructure should be provisioned: log retention, database tiers, availability zones, NAT gateways, deletion protection, health-check cadence, and similar knobs.

## Recipes and Deployment Modes

Defang has historically offered three fixed [deployment modes](./deployment-modes.md) — `affordable`, `balanced`, and `high_availability` — to let you trade off cost against resiliency. A recipe generalizes this idea: each of those modes is simply a built-in recipe, and recipes let you set the underlying infrastructure parameters directly instead of choosing from a fixed list. This means recipes supersede the enumerable deployment modes, while the three named modes remain available as convenient starting points.

You can select a built-in recipe with the `--mode` CLI flag, which defaults to `affordable`:

```bash
defang compose up --mode=high_availability
```

For example, on AWS, the built-in recipes set values like log retention (1 day for `affordable`, 7 for `balanced`, 30 for `high_availability`), the Fargate capacity provider (spot vs. on-demand), the number of availability zones, the NAT gateway strategy, and whether managed databases use burstable or memory-optimized classes.

## Built-in Recipes

The three built-in recipes balance cost and resiliency:

* **Affordable**: Used for development and testing purposes. It typically involves less stringent resource allocations and may include debugging tools and verbose logging to aid in development.
* **Balanced**: Serves as a pre-production environment where applications are tested in conditions that closely mimic production. It helps in identifying issues that might not be apparent in the development environment.
* **High Availability**: Used for live deployments. It involves optimized configurations for performance, security, and reliability. Resource allocations are typically higher, and debugging tools are minimized to ensure stability.

The following table compares what each built-in recipe configures:

| Feature | Affordable | Balanced | High Availability |
|-|-|-|-|
| Build Resources | Builds will be run with 2x vCPUs |  (like `affordable`) | Builds will be run with 4x vCPUs |
| Compute | Using spot instances | (like `affordable`) | On-demand instances |
| Databases | Defang will provision resources optimized for burstable memory | (like `high_availability`) | Defang will provision resources optimized for production |
| Deployment | Previous deployments will be spun down before new deployments are spun up. Stopped tasks will not restart. | (like `high_availability`) | Rolling updates will be used to deploy new versions. Defang will gradually replace services while maintaining at least [the original number of replicas](/docs/tutorials/scaling-your-services). |
| Logs | Logs retained for 1 day to save costs. | Logs retained for 7 days to balance cost and access. | Logs retained for 30 days for compliance. |
| Networking | Only public IPs | Defang will provision a single NAT gateway | Defang will provision multiple NAT gateways. |
| Load Balancing | HTTP redirect to HTTPS using `302 Found` | | Termination Protection will be enabled; logs are retained on "down" |
| DNS | Defang will provision shorter TTLs; zones will be forcefully destroyed | | Defang will provision longer TTLs; records can be overwritten for ZDT |
| Managed Storage | Operations that cause downtime are allowed | | Encryption at rest; Final snapshot created on "down" |

## Managing Recipes

Recipes are managed in the [Defang Portal](./portal.md). You can start from one of the built-in recipes and adjust the parameters to suit a particular [stack](./stacks.md) — for instance, a development stack and a production stack of the same [project](./projects.md) can use different recipes.

## How Recipes Are Used

When you run a deployment with `defang up`, Defang sends two things to the Defang [`CD` task](/docs/intro/how-it-works) in your cloud:

1. Your **project** — the Compose file(s) and uploaded sources.
2. The **recipe** — the infrastructure parameters described above.

The `CD` task passes the recipe to [Pulumi](./pulumi.md), which provisions and updates your cloud resources accordingly. In Pulumi terms, a recipe _is_ [Pulumi config](https://www.pulumi.com/docs/iac/concepts/config/): the configuration values consumed by the Defang Pulumi providers when they reconcile your deployment. Any parameter you omit from a recipe falls back to its built-in default at deployment time.
