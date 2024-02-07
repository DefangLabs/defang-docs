---
title: Pulumi
description: Define your Defang services with Pulumi to integrate with other cloud resources.
sidebar_position: 400
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Pulumi

:::warning
Pulumi support is currently only available for Defang Playground. We are working on support for Defang BYOC.
:::

You can use Pulumi to define your Defang services. This allows you to integrate your Defang services with other cloud resources.

For example, you might define an Aiven PostgreSQL database in your Pulumi code and then use the outputs of that resource to configure the secrets to connect to the database in your Defang service.

It also allows you to manage configuration for different environments using Pulumi's config system.

## Defang Pulumi Provider

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


## Sample

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