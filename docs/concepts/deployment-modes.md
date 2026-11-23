---
title: Deployment Modes
description: Deployment modes are Defang's built-in recipes; they are now part of the broader Recipe concept.
---

# Deployment Modes

:::info
Deployment modes are now part of the broader [Recipe](/docs/concepts/recipe) concept. See [Recipe](/docs/concepts/recipe) for the full details, including a comparison of what each built-in recipe configures.
:::

`affordable`, `balanced`, and `high_availability` are Defang's three built-in [recipes](/docs/concepts/recipe) — presets of infrastructure-as-code parameters that trade off cost against resiliency. You choose one when you create a [stack](/docs/concepts/stacks), and every deployment to that stack uses it. The default is `affordable`:

```bash
defang stack new --recipe high_availability
defang compose up
```

## Tier Requirements

| Mode | Required Plan |
|-|-|
| Affordable | Available on all tiers (Starter, Pro, Enterprise) |
| Balanced | Requires Pro ($49/mo) or Enterprise |
| High Availability | Requires Enterprise ($499/mo) |

:::tip
A [stack](/docs/concepts/stacks) records the provider, region, and mode for a deployment, so you don't have to pass these flags on every command. `defang compose up` no longer accepts a `--mode` flag.
:::

Recipes generalize and supersede this fixed set of modes by letting you set the underlying infrastructure parameters directly. See the [Recipe](/docs/concepts/recipe) concept for more information.
