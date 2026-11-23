# Observability

You can easily monitor and debug your Defang services at build and runtime using the Defang CLI and Portal.

When you deploy a service using the `defang compose up`, the CLI will automatically start tailing the build and runtime logs for your service. You can also view the logs for your service in the Portal, or by using the `defang tail` command.

tip

Defang has a tutorial on how you can [monitor your services' status and logs](https://docs.defang.io/docs/tutorials/monitoring-your-services.md).

## Tail[​](#tail "Direct link to Tail")

The `defang tail` command will tail the logs for all your services by default. You can also specify a service `--name` to tail the logs for a specific service. If you specify the `--etag` the CLI will only tail the logs for a specific build of a service.

```
defang tail --name my-service
defang tail --etag ua119053ehi2
```

## Architecture[​](#architecture "Direct link to Architecture")

In [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc.md), output is logged to the native logging tools within your cloud provider. The CLI then tails the output as needed.
