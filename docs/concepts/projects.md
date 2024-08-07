---
title: Projects
description: A _project_ refers to a cohesive collection of services, networks, and volumes which are defined and managed using a `compose.yml` file.
sidebar_position: 200
---

# Projects

A _project_ refers to a cohesive collection of services, networks, and volumes which are defined and managed using a `compose.yaml` file. These are the components of your cloud application.

## Project Names

The _project name_ can be defined in the compose file with [the `name` property](https://docs.docker.com/compose/compose-file/04-version-and-name/#name-top-level-element), otherwise the base name of the project directory will be used.

The [`--project-name` CLI flag](/docs/cli/defang) can be used to specify the target project name when the `compose.yaml` file is not present.
