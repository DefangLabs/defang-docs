---
sidebar_position: 600
title: Frequently Asked Questions
description: Frequently asked questions about Defang.
---
import {Button, ButtonGroup, FormGroup, FormLabel} from "@mui/material"

# Frequently Asked Questions (FAQ)

## Deployment and Infrastructure

### Which cloud/region is the app being deployed to?

- In the [Defang Playground](/docs/concepts/defang-playground), the app is deployed to AWS `us-west-2`. In the [Defang BYOC](/docs/concepts/defang-byoc) model, the region is determined by your [Defang BYOC Provider](/docs/category/providers) settings.

### Can I bring my own AWS or other cloud account?

- Yes! Defang makes it easy to deploy your application to your own cloud account. Please check out the [Defang BYOC](/docs/concepts/defang-byoc) documentation for more information.

### On AWS, can I deploy to services such as EC2, EKS, or Lambda?

- The current release includes support for containers only, deployed to ECS. We are still exploring how to support additional execution models such as VMs and functions-as-a-service. However, using our Pulumi provider, it is possible to combine Defang services with other native AWS resources.

### Can I access AWS storage services such as S3 or database services such as RDS? How?

- Yes! You can access AWS services in the AWS Dashboard as you normally would when you are [deploying to your AWS account](/docs/providers/aws) using Defang. In fact, you can access whatever other resources exist in the cloud account you are using for [Defang BYOC](/docs/concepts/defang-byoc).

### Do you plan to support other clouds?

- While we currently support [AWS](/docs/providers/aws) for production, [GCP](/docs/providers/gcp) and [DigitalOcean](/docs/providers/digitalocean) are in preview with [Defang V1](/blog/2024-12-04-launch-week). We plan to support other clouds, such as [Azure](/docs/providers/azure), in future releases.

## Deployment Process

### Can I run production apps with Defang?

- Yes! Defang makes it easy to deploy your app on production-ready infrastructure in your own cloud account. For example, you can deploy your app to AWS with `defang compose up --provider=aws --mode=production`. Check out your preferred cloud provider on [Defang BYOC](/docs/concepts/defang-byoc) and see our [Deployment Modes](/docs/concepts/deployment-modes) documentation for more information on that.

### Does Defang support blue/green deployments?

- Defang does not currently support Blue/Green deploys, but it does support rolling updates with the `--mode=production` flag. See the [Deployment Modes](/docs/concepts/deployment-modes) documentation for more information.

### Does Defang support rolling deployments?

- Yes! Defang supports rolling updates with the `--mode=production` flag. See the [Deployment Modes](/docs/concepts/deployment-modes) documentation for more information.

### Can I cancel a deployment once it has started?

- No. Once a deployment has started, it cannot be canceled. However, you can always deploy a new version of your app which will replace the current deployment.

### Will deploying a new version of my app cause downtime?

- If you have deployed your application with the `--mode=production` flag, Defang will use the _production_ deployment mode. This mode will provision your app with multiple replicas and will perform a rolling update to ensure zero downtime. If you use another deployment mode, you may experience downtime during the deployment, as Defang will not provision multiple replicas to save cost. See the [Deployment Modes](/docs/concepts/deployment-modes) documentation for more information.

### Can I deploy multiple services at once?

- Yes! You can deploy multiple services at once by defining them in a single compose.yaml file. When you run `defang compose up`, Defang will deploy all the services defined in the file at once.

### Can I deploy a service that depends on another service?

- Defang does not currently support service dependencies. All services will be deployed simultaneously. Defang will however run multiple healthchecks before marking a service as healthy and spinning down any previously deployed services when using the `production` deployment mode. See the [Deployment Modes](/docs/concepts/deployment-modes) documentation for more information.

## Feature Comparisons

### Is Defang a run-time platform?
- No. Defang is not a run-time platform. Instead, it lets you host and run your application on a [cloud provider](/docs/category/providers) of your choice. You can think of it as a tool that makes it way easier to deploy to that cloud provider. We do provide [Defang Playground](/docs/concepts/defang-playground), but it is meant to be used as a testing environment only.

### What is the difference between Defang and platforms such as Vercel, fly.io, and Railway?
- Defang is a tool that helps you get your application deployed to a [cloud provider](/docs/category/providers) of your choice, and it is not a platform. Unlike platforms, Defang does not host your application. We do provide [Defang Playground](/docs/concepts/defang-playground), but it is meant to be used as a testing environment only.

### What is the difference between Defang and tools such as SST?
- Defang is cloud-agnostic and language-agnostic, meaning that it is designed to work with different [cloud providers](/docs/category/providers), and programming languages. Since Defang is not tied to just one cloud or language, this allows for greater flexibility in a wide range of cases. Another difference is that Defang follows the [Compose specification](https://docs.docker.com/compose/compose-file/), allowing it to work smoothly with various container platforms such as Docker.

## Troubleshooting

### I'm having trouble running the binary on my Mac. What should I do?

- MacOS users will need to allow the binary to run due to security settings:
    1. Attempt to run the binary. You'll see a security prompt preventing you from running it.
    2. Go to System Preferences > Privacy & Security > General.
    3. In the 'Allow applications downloaded from:' section, you should see a message about Defang being blocked. Click 'Open Anyway'.
    4. Alternatively, select the option "App Store and identified developers" to allow all applications from the App Store and identified developers to run.

### I'm getting a warning/error. What does it mean?

- Please see the [Common Error Messages](/docs/faq/warnings-errors) page.
