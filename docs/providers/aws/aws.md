---
title: AWS
description: Defang allows you to easily create and manage full, scalable applications with AWS.
sidebar_position: 000
---

# AWS

:::info
Public Beta of the v1 Defang BYOC AWS Provider is released as of Feb 1 2024.
:::

Why should you use Defang with AWS? Defang allows you to easily create and manage full, scalable applications with AWS. Defang aims to make it easier to deploy your services to the cloud. Don't waste your time learning the ins and outs of AWS, deciding which of the 200+ services to use, and then writing the infrastructure code to deploy your services, and making sure they are properly secured. Defang does all of that for you.

## Getting Started

Getting started with the Defang BYOC AWS Provider is easy. The first step is to [authenticate your shell](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) with AWS as an admin user. The authenticated user should be an IAM admin because Defang will need permission to create resources and IAM roles in your account.

:::tip
If you have the AWS CLI installed, you should be able to successfully run `aws sts get-caller-identity` and see your account ID.
:::

Use the `--provider=aws` flag to tell the Defang CLI to use the AWS Provider or set the `DEFANG_PROVIDER` environment variable to `aws`.

```bash
$ defang up --provider=aws
# or
$ export DEFANG_PROVIDER=aws
```

:::warning
Because Defang creates roles, you need to have the appropriate permissions to create roles in your cloud provider account, typically the `AdministratorAccess` policy in AWS.
:::

:::tip
The Defang CLI does not depend on the AWS CLI. It uses the [AWS SDK for Go](https://aws.amazon.com/sdk-for-go/) to interact with your AWS account. In most cases, if you can run the `aws sts get-caller-identity` from the tip above, you should be good to go. However, due to a difference between the AWS CLI and the AWS SDK for Go, there is at least one case where they behave differently: if you are using `aws sso login` and have clashing profiles in your `.aws/config` and `.aws/credentials` files, the AWS CLI will prioritize SSO profiles and caches over regular profiles, but the AWS SDK for Go will prioritize the credentials file, and it may fail.
:::

## Region

The Defang BYOC AWS Provider will use the region specified in the `AWS_REGION` environment variable, or a profile in the `~/.aws/config` file exactly as the AWS CLI would.

## Architecture

Defang uses resources that are native to the cloud provider you are using. The following describes the current state of Defang's support for AWS, the specific resources that Defang uses, and the roadmap for future support.

### Secrets

Defang allows you to configure your services with sensitive config values. Sensitive values are stored in AWS Systems Manager Parameter Store, and are encrypted.

### Deployment

To deploy your services, the Defang CLI packages your code and uploads it to an S3 bucket in your account. The CLI then deploys an ECS task that uses Pulumi to build your container image and run your service.

### Runtime

The provider runs your workloads using ECS using Fargate. It provisions a VPC with public and private subnets, and deploys your services to the private subnets. It then provisions an Application Load Balancer (ALB) and routes traffic to your services.

## Managed Storage

Defang can help you provision [managed storage](/docs/concepts/managed-storage/managed-storage.md) services. The following managed storage services are supported on AWS:

### Managed Postgres

When using [Managed Postgres](/docs/concepts/managed-storage/managed-postgres.md), the Defang CLI provisions an RDS Postgres instance in your account.

### Managed Redis

When using [Managed Redis](/docs/concepts/managed-storage/managed-redis.md), the Defang CLI provisions an ElastiCache Redis cluster in your account.

### Managed Resources

Defang will create and manage the following resources in your AWS account from its bootstrap CloudFormation template:

| Resource Type | Example Resource Name |
|---------------|------------------------|
| s3/Bucket | defang-cd-bucket-cbpbzz8hzm7  |
| ecs/ClusterCapacityProviderAssociations | defang-cd-Cluster-pqFhjwuklvm |
| ecs/Cluster | defang-cd-ClusterpJqFhjwuklvm  |
| iam/Role | defang-cd-ExeutionRole-XE7RbQDfeEwx  |
| ec2/InternetGateway | igw-05bd7adc92541ec3  |
| ec2/VPCGatewayAttachment | IGW|vpc-0cbca64f13435695 |
| logs/LogGroup | defang-cd-Logroup-6LSZet3tFnEy  |
| ecr/PullThroughCacheRule | defang-cd-ecrpublic |
| ec2/Route | rtb-08f3f5afc9e6c8c8|0.0.0.0/0 |
| ec2/RouteTable | rtb-08f3f5ffc9e6c8c8 |
| ec2/VPCEndpoint | vpce-02175d8d4f47d0c9  |
| ec2/SecurityGroup | sg-032b839c63e70e49  |
| ec2/Subnet | subnet-086bead399ddc8a0  |
| ec2/SubnetRouteTableAssociation | rtbassoc-02e200d45e7227fe |
| ecs/TaskDefinition | arn:aws:ecsus-west-2:381492210770:task-definition/defang-cd-TaskDefinition-RXd5tf9TaN38:1 |
| iam/Role | defang-cd-askRole-gsEeDPd6sPQY  |
| ec2/VPC | vpc-0cbca64f13435695  |

Then, for each project you deploy, defang will create and manage the following resources:

| Resource Type | Example Resource Name |
|---------------|------------------------|
| ecr/Repository | project1/kaniko-build |
| ecr/LifecyclePolicy | project1/kaniko-build |
| acm/Certificate | *.project1.tenant1.defang.app |
| ecr/Repository | project1/kaniko-build/cache |
| ecr/LifecyclePolicy | project1/kaniko-build/cache |
| iam/InstanceProfile | ecs-agent-profile |
| iam/Role | ecs-task-execution-role |
| cloudwatch/EventRule | project1-ecs-lifecycle-rule |
| cloudwatch/EventTarget | project1-ecs-event-cw-target |
| route53/Record | validation-project1.tenant1.defang.app |
| acm/CertificateValidation | *.project1.tenant1.defang.appValidation |
| ec2/VpcDhcpOptionsAssociation | dhcp-options-association |
| cloudwatch/LogGroup | builds |
| iam/Role | kaniko-task-role |
| ecs/TaskDefinition | kanikoTaskDefArm64 |
| ecs/TaskDefinition | kanikoTaskDefAmd64 |
| s3/Bucket | defang-build |
| s3/BucketPublicAccessBlock | defang-build-block |
| ecs/Cluster | cluster |
| ecs/ClusterCapacityProviders | cluster-capacity-providers |
| ec2/SecurityGroup | project1_app-sg |
| ec2/SecurityGroup | bootstrap |
| ec2/VpcDhcpOptions | dhcp-options |
| cloudwatch/LogGroup | logs |
