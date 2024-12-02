---
sidebar_position: 600
title: Frequently Asked Questions
description: Frequently asked questions about Defang.
---
import {Button, ButtonGroup, FormGroup, FormLabel} from "@mui/material"

# Frequently Asked Questions (FAQ)

## Deployment and Infrastructure
### Which cloud/region is the app being deployed to?

- In the [Defang Playground](../concepts/defang-playground.md), the app is deployed to AWS `us-west-2`. In the [Defang BYOC](../concepts/defang-byoc.md) model, the region is determined by your [Defang BYOC Provider](/docs/category/providers) settings.

### Can I bring my own AWS or other cloud account?

- Yes! Defang makes it easy to deploy your application to your own cloud account. Please check out the [Defang BYOC](../concepts/defang-byoc.md) documentation for more information.

### On AWS, can I deploy to services such as EC2, EKS, or Lambda?

- The current release includes support for containers only, deployed to ECS. We are still exploring how to support additional execution models such as VMs and functions-as-a-service. However, using our Pulumi provider, it is possible to combine Defang services with other native AWS resources.

### Can I access AWS storage services such as S3 or database services such as RDS? How?

- Yes! You can access AWS services in the AWS Dashboard as you normally would when you are [deploying to your AWS account](../providers/aws) using Defang. In fact, you can access whatever other resources exist in the cloud account you are using for [Defang BYOC](../concepts/defang-byoc.md).

### Do you plan to support other clouds?

- While we currently support [AWS](../concepts/defang-byoc#aws) for production and [DigitalOcean](../concepts/defang-byoc#digitalocean) in preview, we plan to support other clouds in future releases, such as [GCP](../providers/gcp.md) and [Azure](../providers/azure.md).

## Deployment Process

### Can I run production apps with Defang?

- Yes! Defang makes it easy to deploy your app on production-ready infrastructure in your own cloud account. For example, you can deploy your app to AWS with `defang up --provider=aws --mode=production`. Check out your preferred cloud provider on [Defang BYOC](../concepts/defang-byoc.md).

### Does Defang support blue/green deployments?

- Defang does not currently support Blue/Green deploys, but it does support rolling updates with the `production` deployment mode. `defang up --mode=production`.

### Does Defang support rolling deployments?

- Yes! Defang supports rolling updates with the `production` deployment mode. `defang up --mode=production`.

### Can I cancel a deployment once it has started?

- No. Once a deployment has started, it cannot be canceled. However, you can always deploy a new version of your app which will replace the current deployment.

### Will deploying a new version of my app cause downtime?

- If you have deployed your application with the `--mode=production` flag, Defang will use the _production_ deployment mode. This mode will provision your app with multiple replicas and will perform a rolling update to ensure zero downtime. If you use another deployment mode, you may experience downtime during the deployment, as Defang will not provision multiple replicas to save cost.

### Can I deploy multiple services at once?

- Yes! You can deploy multiple services at once by defining them in a single compose.yaml file. When you run `defang compose up`, Defang will deploy all the services defined in the file at once.

### Can I deploy a service that depends on another service?

- Defang does not currently support service dependencies. All services will be deployed simultaneously. Defang will however run multiple healthchecks before marking a service as healthy and spinning down any previously deployed services when using the `production` deployment mode.

## Troubleshooting

### I'm having trouble running the binary on my Mac. What should I do?

- MacOS users will need to allow the binary to run due to security settings:
    1. Attempt to run the binary. You'll see a security prompt preventing you from running it.
    2. Go to System Preferences > Privacy & Security > General.
    3. In the 'Allow applications downloaded from:' section, you should see a message about Defang being blocked. Click 'Open Anyway'.
    4. Alternatively, select the option "App Store and identified developers" to allow all applications from the App Store and identified developers to run.

### I'm getting a warning/error. What does it mean?
- Please see the [Common Error Messages](./warnings-errors.md) page.

