---
title: Deployment Modes
description: Deployment modes are Defang's built-in recipes; they are now part of the broader Recipe concept.
---

# Deployment Modes

:::info
Deployment modes are now part of the broader [Recipe](/docs/concepts/recipe) concept. See [Recipe](/docs/concepts/recipe) for the full details, including a comparison of what each built-in recipe configures.
:::

`affordable`, `balanced`, and `high_availability` are Defang's three built-in [recipes](/docs/concepts/recipe) — presets of infrastructure-as-code parameters that trade off cost against resiliency. You can select one with the `--mode` CLI flag, which defaults to `affordable`:

```bash
defang compose up --mode=high_availability
```

:::tip
While the `--mode` flag still works, the recommended way to choose a mode is to configure a [stack](/docs/concepts/stacks), which records the provider, region, and mode for a deployment so you don't have to pass these flags on every command.
:::

Recipes generalize and supersede this fixed set of modes by letting you set the underlying infrastructure parameters directly. See the [Recipe](/docs/concepts/recipe) concept for more information.
