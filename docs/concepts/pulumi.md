---
title: Pulumi
description: Define your Defang services with Pulumi to integrate with other cloud resources.
sidebar_position: 175
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pulumi

:::warning
Pulumi support is currently only available for Defang Playground. We are working on support for Defang BYOC.
:::

[Pulumi](https://www.pulumi.com) is a modern infrastructure-as-code toolkit that allows developers to use a programming language like Typescript to provision and manage cloud resources.

Defang provides a Pulumi [_Provider_](https://www.pulumi.com/docs/iac/concepts/resources/providers/) written in Typescript which can be used to deploy Defang services alongside other Pulumi-managed infrastructure.

## Install the Defang Pulumi Provider

To get started with Pulumi and Defang you will need to install the Defang provider in [your Pulumi project](https://www.pulumi.com/learn/pulumi-fundamentals/create-a-pulumi-project/):

<Tabs>
  <TabItem value="npm" label="npm" default>

```bash
npm i @defang-io/pulumi-defang
```

  </TabItem>
  <TabItem value="pnpm" label="pnpm">

```bash
pnpm i @defang-io/pulumi-defang
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```bash
yarn add @defang-io/pulumi-defang
```

  </TabItem>
</Tabs>

## When to Use the Defang Pulumi Provider

The Defang Pulumi Provider is a good option for developers with more complex requirements than those supported by a [Compose File](/docs/concepts/compose).

One reason to use the Defang Pulumi provider is if you wish to integrate your services with other cloud resources. This is particularly true if you need to configure your services dynamically as other cloud resources are being provisioned.

Another reason would be if you want to deploy your services alongside cloud-specific resources, like a DynamoDB table, or an S3 bucket.

## Example

The following is a minimal example of a Pulumi program that defines a Defang service:

```typescript
import * as defang from "@defang-io/pulumi-defang/lib";

const service = new defang.DefangService("my-service", {
    image: "strm/helloworld-http:latest",
    ports: [{
        target: 80,
        mode: "ingress",
        protocol: "http",
    }],
});
```

:::info
See the [Deploy using Pulumi](/docs/tutorials/deploy-using-pulumi) tutorial for more information about how to use it.
:::

## API

### `DefangService`

```typescript
constructor(
    name: string,
    args: DefangServiceArgs,
    opts?: pulumi.CustomResourceOptions
)
```

### `DefangServiceArgs`

```typescript
interface DefangServiceArgs {
  /** the DNS name of the Defang Fabric service; defaults to the value of DEFANG_FABRIC or prod, if unset */
  fabricDNS?: pulumi.Input<string>;
  /** the name of the service; defaults to the name of the resource */
  name?: pulumi.Input<string>;
  /** the container image to deploy; required when no build configuration was provided */
  image?: pulumi.Input<string>;
  /** the platform to deploy to; defaults to "linux/amd64" */
  platform?: pulumi.Input<Platform>;
  /** which network the service is in, ie. whether the service requires a public IP or not; defaults to "private" (was: internal=true) */
  networks?: { [key in NetworkName]?: Network };
  /** the optional deployment configuration */
  deploy?: pulumi.Input<Deploy>;
  /** the ports to expose */
  ports?: pulumi.Input<pulumi.Input<Port>[]>;
  /** the environment variables to set; use `null` to mark at sensitive */
  environment?: pulumi.Input<{ [key: string]: pulumi.Input<string> | null }>;
  /** the secrets to expose as environment variables @deprecated use environment key with value `null` */
  secrets?: pulumi.Input<pulumi.Input<Secret>[]>;
  /** force deployment of the service even if nothing has changed */
  forceNewDeployment?: pulumi.Input<boolean>;
  /** the command to run; overrides the container image's CMD */
  command?: pulumi.Input<pulumi.Input<string>[]>;
  /** the optional build configuration; required when no image was provided */
  build?: pulumi.Input<Build>;
  /** the optional health-check test for the service */
  healthcheck?: pulumi.Input<HealthCheck>;
  /** the optional fully qualified domain name for the service; requires CNAME to the publicFqdn */
  domainname?: pulumi.Input<string>;
  /** experimental: mark this service as (managed) Redis */
  x_redis?: pulumi.Input<unknown>;
  /** experimental: mark this service as serving static files */
  x_static_files?: pulumi.Input<StaticFiles>;
  /** if true, this provider will wait for the service to reach a steady state before continuing */
  waitForSteadyState?: pulumi.Input<boolean>;
  /** the project to deploy the service to */
  project?: pulumi.Input<string>;
}
```

### `Platform`

```typescript
type Platform = "linux/arm64" | "linux/amd64" | "linux";
```

### `Protocol`
```typescript
type Protocol = "tcp" | "udp" | "http" | "http2" | "grpc";
```
### `DeviceCapability`
```typescript
type DeviceCapability = "gpu";
```
### `NetworkName`
```typescript
type NetworkName = "private" | "public";
```
### `Network`
```typescript
type Network = { aliases?: string[] } | null;
```
