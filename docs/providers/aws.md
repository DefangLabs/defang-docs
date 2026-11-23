# Amazon Web Services (AWS)

Why should you use Defang with AWS? Defang allows you to easily create and manage full, scalable applications with AWS. Defang aims to make it easier to deploy your services to the cloud. Don't waste your time learning the ins and outs of AWS, deciding which of the 200+ services to use, and then writing the infrastructure code to deploy your services, and making sure they are properly secured. Defang does all of that for you.

AWS Free Tier & Credits

You can use the AWS Free Tier to try out Defang. Learn more about it [here](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank\&all-free-tier.sort-order=asc\&awsf.Free%20Tier%20Types=*all\&awsf.Free%20Tier%20Categories=*all). If you're an eligible startup, you can sign up for credits [here](https://aws.amazon.com/startups/sign-up?referrer_url_path=%2Fstartups).

## Getting Started[​](#getting-started "Direct link to Getting Started")

If you don't yet have an AWS account, check out our guide on (setting up an AWS account for the first time]\(/docs/tutorials/setting\_up\_your\_aws\_account)

If you already have an AWS account set up, getting started with the Defang BYOC AWS Provider is easy. The first step is to [authenticate your shell](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) with AWS as an admin user. The authenticated user should be an IAM admin because Defang will need permission to create resources and IAM roles in your account.

info

You can create other [AWS users](https://docs.defang.io/docs/providers/aws.md#creating-an-aws-iam-user-for-defang) for deployment.

tip

If you have the AWS CLI installed, you should be able to successfully run `aws sts get-caller-identity` and see your account ID.

Use the `--provider=aws` flag to tell the Defang CLI to use the AWS Provider or set the `DEFANG_PROVIDER` environment variable to `aws`.

```
$ defang compose up --provider=aws
# or
$ export DEFANG_PROVIDER=aws
```

warning

Because Defang creates roles, you need to have the appropriate permissions to create roles in your cloud provider account, typically the `AdministratorAccess` policy in AWS.

tip

The Defang CLI does not depend on the AWS CLI. It uses the [AWS SDK for Go](https://aws.amazon.com/sdk-for-go/) to interact with your AWS account. In most cases, if you can run the `aws sts get-caller-identity` from the tip above, you should be good to go. However, due to a difference between the AWS CLI and the AWS SDK for Go, there is at least one case where they behave differently: if you are using `aws sso login` and have clashing profiles in your `.aws/config` and `.aws/credentials` files, the AWS CLI will prioritize SSO profiles and caches over regular profiles, but the AWS SDK for Go will prioritize the credentials file, and it may fail.

## Region[​](#region "Direct link to Region")

The Defang BYOC AWS Provider will use the region specified in the `AWS_REGION` environment variable, or a profile in the `~/.aws/config` file exactly as the AWS CLI would.

## Architecture[​](#architecture "Direct link to Architecture")

Defang uses resources that are native to the cloud provider you are using. The following describes the current state of Defang's support for AWS, the specific resources that Defang uses, and the roadmap for future support.

### Secrets[​](#secrets "Direct link to Secrets")

Defang allows you to configure your services with sensitive config values. Sensitive values are stored in AWS Systems Manager Parameter Store, and are encrypted.

### Deployment[​](#deployment "Direct link to Deployment")

To deploy your services, the Defang CLI packages your code and uploads it to an S3 bucket in your account. The CLI then starts an AWS CodeBuild build in your account that runs Pulumi. Your container images are built with CodeBuild and pushed to Amazon ECR, and Pulumi state is kept in the S3 bucket.

### Runtime[​](#runtime "Direct link to Runtime")

The provider runs your workloads using ECS using Fargate. It provisions a VPC with public and private subnets, and deploys your services to the private subnets. It then provisions an Application Load Balancer (ALB) and routes traffic to your services.

### Service Discovery[​](#service-discovery "Direct link to Service Discovery")

Defang uses a Route53 private hosted zone for service discovery. Each (private) service in the Compose file will get a CNAME or A record which resolves to the service's AWS domain name or IP, respectively. To update the A records for the dynamically assigned IP addresses, Defang will add a [Route53 sidecar](https://github.com/DefangLabs/route53-sidecar) alongside your container.

## Managed Storage[​](#managed-storage "Direct link to Managed Storage")

Defang can help you provision [managed storage](https://docs.defang.io/docs/concepts/managed-storage.md) services. The following managed storage services are supported on AWS:

### Managed Postgres[​](#managed-postgres "Direct link to Managed Postgres")

When using [Managed Postgres](https://docs.defang.io/docs/concepts/managed-storage/managed-postgres.md), the Defang CLI provisions an RDS Postgres instance in your account.

Amazon RDS is included in every AWS Region launch, so there's no region planning needed for managed Postgres.

### Managed Redis[​](#managed-redis "Direct link to Managed Redis")

When using [Managed Redis](https://docs.defang.io/docs/concepts/managed-storage/managed-redis.md), the Defang CLI provisions an ElastiCache cluster in your account. The cluster runs Valkey if your service's image is a Valkey image, and Redis otherwise.

Amazon ElastiCache is included in every AWS Region launch, so there's no region planning needed for managed Redis.

### Managed LLMs[​](#managed-llms "Direct link to Managed LLMs")

Defang offers integration with managed, cloud-native large language model services with the `x-defang-llm` service extension. Add this extension to any services which use the Bedrock SDKs.

When using [Managed LLMs](https://docs.defang.io/docs/concepts/managed-llms/managed-language-models.md), the Defang CLI gives your service permission to invoke Amazon Bedrock models. It does not provision a cache or a database.

### Managed MongoDB[​](#managed-mongodb "Direct link to Managed MongoDB")

Defang will provision a DocumentDB instance for services that use the `x-defang-mongodb` service extension. This allows you to use MongoDB as a managed service, rather than running it as a container.

### Managed Resources[​](#managed-resources "Direct link to Managed Resources")

Defang will create and manage the following resources in your AWS account from its bootstrap CloudFormation template:

| Resource Type              | Purpose                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------ |
| S3 bucket                  | Deployment state (Pulumi state)                                                                        |
| CloudWatch log group       | Logs from the deployment build                                                                         |
| IAM role                   | Role the deployment build runs as                                                                      |
| IAM managed policy         | Permissions for that role                                                                              |
| CodeBuild project          | Runs the deployment                                                                                    |
| IAM OIDC provider and role | Lets GitHub Actions deploy without stored credentials; created only when GitHub OIDC access is enabled |

Then, for each project you deploy, Defang will create and manage the following resources:

| Resource Type                 | Example Resource Name                    |
| ----------------------------- | ---------------------------------------- |
| ecr/Repository                | project1/kaniko-build                    |
| ecr/LifecyclePolicy           | project1/kaniko-build                    |
| acm/Certificate               | \*.project1.tenant1.defang.app           |
| ecr/Repository                | project1/kaniko-build/cache              |
| ecr/LifecyclePolicy           | project1/kaniko-build/cache              |
| iam/InstanceProfile           | ecs-agent-profile                        |
| iam/Role                      | ecs-task-execution-role                  |
| cloudwatch/EventRule          | project1-ecs-lifecycle-rule              |
| cloudwatch/EventTarget        | project1-ecs-event-cw-target             |
| route53/Record                | validation-project1.tenant1.defang.app   |
| acm/CertificateValidation     | \*.project1.tenant1.defang.appValidation |
| ec2/VpcDhcpOptionsAssociation | dhcp-options-association                 |
| cloudwatch/LogGroup           | builds                                   |
| iam/Role                      | kaniko-task-role                         |
| ecs/TaskDefinition            | kanikoTaskDefArm64                       |
| ecs/TaskDefinition            | kanikoTaskDefAmd64                       |
| s3/Bucket                     | defang-build                             |
| s3/BucketPublicAccessBlock    | defang-build-block                       |
| ecs/Cluster                   | cluster                                  |
| ecs/ClusterCapacityProviders  | cluster-capacity-providers               |
| ec2/SecurityGroup             | project1\_app-sg                         |
| ec2/SecurityGroup             | bootstrap                                |
| ec2/VpcDhcpOptions            | dhcp-options                             |
| cloudwatch/LogGroup           | logs                                     |
