# Frequently Asked Questions (FAQ)

## Deployment and Infrastructure[​](#deployment-and-infrastructure "Direct link to Deployment and Infrastructure")

### Which cloud/region is the app being deployed to?[​](#which-cloudregion-is-the-app-being-deployed-to "Direct link to Which cloud/region is the app being deployed to?")

* In the [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc.md) model, the region is determined by your Defang BYOC [Provider](https://docs.defang.io/docs/providers.md) settings.

### Can I bring my own AWS or other cloud account?[​](#can-i-bring-my-own-aws-or-other-cloud-account "Direct link to Can I bring my own AWS or other cloud account?")

* Yes! Defang Deploy makes it easy to deploy your application to your own cloud account. Please check out the [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc.md) documentation for more information.

### On AWS, can I deploy to services such as EC2, EKS, or Lambda?[​](#on-aws-can-i-deploy-to-services-such-as-ec2-eks-or-lambda "Direct link to On AWS, can I deploy to services such as EC2, EKS, or Lambda?")

* The current release includes support for containers only, deployed to ECS. We are still exploring how to support additional execution models such as VMs and functions-as-a-service. However, using our Pulumi provider, it is possible to combine Defang services with other native AWS resources.

### Can I access AWS storage services such as S3 or database services such as RDS? How?[​](#can-i-access-aws-storage-services-such-as-s3-or-database-services-such-as-rds-how "Direct link to Can I access AWS storage services such as S3 or database services such as RDS? How?")

* Yes! You can access AWS services in the AWS Dashboard as you normally would when you are [deploying to your AWS account](https://docs.defang.io/docs/providers/aws.md) using Defang Deploy. In fact, you can access whatever other resources exist in the cloud account you are using for [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc.md).

### Do you plan to support other clouds?[​](#do-you-plan-to-support-other-clouds "Direct link to Do you plan to support other clouds?")

* We support [AWS](https://docs.defang.io/docs/providers/aws.md), [GCP](https://docs.defang.io/docs/providers/gcp.md) and [Azure](https://docs.defang.io/docs/providers/azure.md). [DigitalOcean](https://docs.defang.io/docs/providers/digitalocean.md) is deprecated. We plan to continue expanding cloud provider support in future releases.

## Deployment Process[​](#deployment-process "Direct link to Deployment Process")

[]()

### Can I run production apps with Defang Deploy?[​](#can-i-run-production-apps-with-defang-deploy "Direct link to Can I run production apps with Defang Deploy?")

* Yes! Defang Deploy makes it easy to deploy your app on production-ready infrastructure in your own cloud account. For example, you can deploy your app to AWS with `defang compose up --provider=aws --mode=production`. Check out your preferred cloud provider on [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc.md) and see our [Deployment Modes](https://docs.defang.io/docs/concepts/deployment-modes.md) documentation for more information.

[]()

### Does Defang Deploy support blue/green deployments?[​](#does-defang-deploy-support-bluegreen-deployments "Direct link to Does Defang Deploy support blue/green deployments?")

* Defang Deploy does not currently support blue/green deployments, but it does support rolling updates with the `--mode=production` flag. See the [Deployment Modes](https://docs.defang.io/docs/concepts/deployment-modes.md) documentation for more information.

[]()

### Does Defang Deploy support rolling deployments?[​](#does-defang-deploy-support-rolling-deployments "Direct link to Does Defang Deploy support rolling deployments?")

* Yes! Defang Deploy supports rolling updates with the `--mode=production` flag. See the [Deployment Modes](https://docs.defang.io/docs/concepts/deployment-modes.md) documentation for more information.

[]()

### Does Defang Deploy support auto-scaling?[​](#does-defang-deploy-support-auto-scaling "Direct link to Does Defang Deploy support auto-scaling?")

* No. Defang Deploy does not currently support auto-scaling. However, you can check out the [Scaling Your Services](https://docs.defang.io/docs/tutorials/scaling-your-services.md) tutorial to see how you can scale your services manually with Defang Deploy.

### Can I cancel a deployment once it has started?[​](#can-i-cancel-a-deployment-once-it-has-started "Direct link to Can I cancel a deployment once it has started?")

* No. Once a deployment has started, it cannot be canceled. However, you can always deploy a new version of your app which will replace the current deployment.

### Will deploying a new version of my app cause downtime?[​](#will-deploying-a-new-version-of-my-app-cause-downtime "Direct link to Will deploying a new version of my app cause downtime?")

* If you have deployed your application with the `--mode=production` flag, Defang Deploy will use the *production* deployment mode. This mode will perform a rolling update to ensure zero downtime. If you use another deployment mode, you may experience downtime during the deployment, as Defang Deploy will not provision multiple replicas to save cost. See the [Deployment Modes](https://docs.defang.io/docs/concepts/deployment-modes.md) documentation for more information.

### Can I deploy multiple services at once?[​](#can-i-deploy-multiple-services-at-once "Direct link to Can I deploy multiple services at once?")

* Yes! You can deploy multiple services at once by defining them in a single compose.yaml file. When you run `defang compose up`, Defang Deploy will deploy all the services defined in the file at once.

### Can I deploy a service that depends on another service?[​](#can-i-deploy-a-service-that-depends-on-another-service "Direct link to Can I deploy a service that depends on another service?")

* Defang Deploy does not currently support service dependencies. All services will be deployed simultaneously. Defang Deploy will however run multiple healthchecks before marking a service as healthy and spinning down any previously deployed services when using the `production` deployment mode. See the [Deployment Modes](https://docs.defang.io/docs/concepts/deployment-modes.md) documentation for more information.

## Feature Comparisons[​](#feature-comparisons "Direct link to Feature Comparisons")

[]()

### Is Defang Deploy a run-time platform?[​](#is-defang-deploy-a-run-time-platform "Direct link to Is Defang Deploy a run-time platform?")

* No. Defang Deploy is not a run-time platform. Instead, it lets you host and run your application on a [cloud provider](https://docs.defang.io/docs/providers.md) of your choice. You can think of it as a tool that makes it way easier to deploy to that cloud provider.

[]()

### What is the difference between Defang Deploy and platforms such as Vercel, fly.io, Railway, Render, or Heroku?[​](#what-is-the-difference-between-defang-deploy-and-platforms-such-as-vercel-flyio-railway-render-or-heroku "Direct link to What is the difference between Defang Deploy and platforms such as Vercel, fly.io, Railway, Render, or Heroku?")

* Defang Deploy is a tool that helps you get your application deployed to a [cloud provider](https://docs.defang.io/docs/providers.md) of your choice, and it is not a platform. Unlike platforms, Defang Deploy does not host your application.

[]()

### What is the difference between Defang Deploy and tools such as SST?[​](#what-is-the-difference-between-defang-deploy-and-tools-such-as-sst "Direct link to What is the difference between Defang Deploy and tools such as SST?")

* Defang Deploy is cloud-agnostic and language-agnostic, meaning that it is designed to work with different [cloud providers](https://docs.defang.io/docs/providers.md), and programming languages. Since Defang Deploy is not tied to just one cloud or language, this allows for greater flexibility in a wide range of cases. Another difference is that Defang Deploy follows the [Compose specification](https://docs.docker.com/compose/compose-file/), allowing it to work smoothly with various container platforms such as Docker.

## Troubleshooting[​](#troubleshooting "Direct link to Troubleshooting")

### I'm having trouble running the binary on my Mac. What should I do?[​](#im-having-trouble-running-the-binary-on-my-mac-what-should-i-do "Direct link to I'm having trouble running the binary on my Mac. What should I do?")

* MacOS users will need to allow the binary to run due to security settings:

  <!-- -->

  1. Attempt to run the binary. You'll see a security prompt preventing you from running it.
  2. Go to System Preferences > Privacy & Security > General.
  3. In the 'Allow applications downloaded from:' section, you should see a message about Defang being blocked. Click 'Open Anyway'.
  4. Alternatively, select the option "App Store and identified developers" to allow all applications from the App Store and identified developers to run.

### I'm getting a warning/error. What does it mean?[​](#im-getting-a-warningerror-what-does-it-mean "Direct link to I'm getting a warning/error. What does it mean?")

* Please see the [Common Error Messages](https://docs.defang.io/docs/faq/warnings-errors) page.
