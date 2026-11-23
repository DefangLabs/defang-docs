# Projects

A *project* refers to a cohesive collection of services which are defined and managed using a [`compose.yaml` file](https://docs.defang.io/docs/concepts/compose.md).

## Project Names[​](#project-names "Direct link to Project Names")

The *project name* can be defined in the Compose file with the [`name` property](https://docs.docker.com/compose/compose-file/04-version-and-name/#name-top-level-element), otherwise the base name of the project directory will be used.

The project name may then be used when performing project-wide operations such as listing services, tailing logs, or deprovisioning. For example:

```
defang services --project-name <project-name>
defang tail --project-name <project-name>
defang compose down --project-name <project-name>
```

By default `defang` will use the project name from the `compose.yaml` file in the working directory. The [`--project-name` CLI flag](https://docs.defang.io/docs/cli/defang.md) may be used when running `defang` from outside the working directory.
