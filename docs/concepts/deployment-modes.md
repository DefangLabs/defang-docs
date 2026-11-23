# Deployment Modes

info

Deployment modes are now part of the broader [Recipe](https://docs.defang.io/docs/concepts/recipe.md) concept. See [Recipe](https://docs.defang.io/docs/concepts/recipe.md) for the full details, including a comparison of what each built-in recipe configures.

`affordable`, `balanced`, and `high_availability` are Defang's three built-in [recipes](https://docs.defang.io/docs/concepts/recipe.md) — presets of infrastructure-as-code parameters that trade off cost against resiliency. You choose one when you create a [stack](https://docs.defang.io/docs/concepts/stacks.md), and every deployment to that stack uses it. The default is `affordable`:

```
defang stack new --recipe high_availability
defang compose up
```

## Tier Requirements[​](#tier-requirements "Direct link to Tier Requirements")

| Mode              | Required Plan                                     |
| ----------------- | ------------------------------------------------- |
| Affordable        | Available on all tiers (Starter, Pro, Enterprise) |
| Balanced          | Requires Pro ($49/mo) or Enterprise               |
| High Availability | Requires Enterprise ($499/mo)                     |

tip

A [stack](https://docs.defang.io/docs/concepts/stacks.md) records the provider, region, and mode for a deployment, so you don't have to pass these flags on every command. `defang compose up` no longer accepts a `--mode` flag.

Recipes generalize and supersede this fixed set of modes by letting you set the underlying infrastructure parameters directly. See the [Recipe](https://docs.defang.io/docs/concepts/recipe.md) concept for more information.
