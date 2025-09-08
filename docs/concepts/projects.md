---
title: Projects
description: A _project_ refers to a cohesive collection of services which are defined and managed using a `compose.yml` file.
---

# Projects

A _project_ refers to a cohesive collection of services which are defined and managed using a [`compose.yaml` file](./compose.md).

## Project Names

The _project name_ can be defined in the Compose file with the [`name` property](https://docs.docker.com/compose/compose-file/04-version-and-name/#name-top-level-element), otherwise the base name of the project directory will be used.

The project name may then be used when performing project-wide operations such as listing services, tailing logs, or deprovisioning. For example:
```
defang services --project-name <project-name>
defang tail --project-name <project-name>
defang compose down --project-name <project-name>
```

By default `defang` will use the project name from the `compose.yaml` file in the working directory. The [`--project-name` CLI flag](/docs/cli/defang) may be used when running `defang` from outside the working directory.
