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
If you have the aws CLI installed, you should be able to successfully run `aws sts get-caller-identity` and see your account ID.
:::

Use the `--provider=aws` flag to tell the Defang CLI to use the AWS Provider or set the `DEFANG_PROVIDER` environment variable to `aws`.

```bash
$ defang up --provider=aws
# or
$ export DEFANG_PROVIDER=aws
```

:::warning
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

Defang will create and manage the following resources in your AWS account as part of its bootstrap procedure:

```
* aws:cloudwatch/logGroup:LogGroup                                 ecs
* aws:s3/bucket:Bucket                                             alb-logs
* aws:ecr/pullThroughCacheRule:PullThroughCacheRule                ecr-public
* aws:iam/role:Role                                                ecs-agent-profile
* aws:s3/bucketPolicy:BucketPolicy                                 alb-logs-policy
* aws:s3/bucketPublicAccessBlock:BucketPublicAccessBlock           alb-logs-block
* awsx:ec2:Vpc                                                     shared-vpc
* └─ aws:ec2/vpc:Vpc                                               shared-vpc
*    ├─ aws:ec2/internetGateway:InternetGateway                    shared-vpc
*    ├─ aws:ec2/subnet:Subnet                                      shared-vpc-private-3
*    │  └─ aws:ec2/routeTable:RouteTable                           shared-vpc-private-3
*    │     ├─ aws:ec2/routeTableAssociation:RouteTableAssociation  shared-vpc-private-3
*    │     └─ aws:ec2/route:Route                                  shared-vpc-private-3
*    ├─ aws:ec2/subnet:Subnet                                      shared-vpc-private-1
*    │  └─ aws:ec2/routeTable:RouteTable                           shared-vpc-private-1
*    │     ├─ aws:ec2/routeTableAssociation:RouteTableAssociation  shared-vpc-private-1
*    │     └─ aws:ec2/route:Route                                  shared-vpc-private-1
*    ├─ aws:ec2/subnet:Subnet                                      shared-vpc-private-2
*    │  └─ aws:ec2/routeTable:RouteTable                           shared-vpc-private-2
*    │     ├─ aws:ec2/routeTableAssociation:RouteTableAssociation  shared-vpc-private-2
*    │     └─ aws:ec2/route:Route                                  shared-vpc-private-2
*    ├─ aws:ec2/vpcEndpoint:VpcEndpoint                            com.amazonaws.us-west-2.s3
*    ├─ aws:ec2/subnet:Subnet                                      shared-vpc-public-1
*    │  ├─ aws:ec2/routeTable:RouteTable                           shared-vpc-public-1
*    │  │  ├─ aws:ec2/routeTableAssociation:RouteTableAssociation  shared-vpc-public-1
*    │  │  └─ aws:ec2/route:Route                                  shared-vpc-public-1
*    │  ├─ aws:ec2/eip:Eip                                         shared-vpc-1
*    │  └─ aws:ec2/natGateway:NatGateway                           shared-vpc-1
*    ├─ aws:ec2/subnet:Subnet                                      shared-vpc-public-2
*    │  └─ aws:ec2/routeTable:RouteTable                           shared-vpc-public-2
*    │     ├─ aws:ec2/routeTableAssociation:RouteTableAssociation  shared-vpc-public-2
*    │     └─ aws:ec2/route:Route                                  shared-vpc-public-2
*    └─ aws:ec2/subnet:Subnet                                      shared-vpc-public-3
*       └─ aws:ec2/routeTable:RouteTable                           shared-vpc-public-3
*          ├─ aws:ec2/routeTableAssociation:RouteTableAssociation  shared-vpc-public-3
*          └─ aws:ec2/route:Route                                  shared-vpc-public-3
* aws:iam/role:Role                                                ecs-task-role
* aws:ec2/networkAcl:NetworkAcl                                    shared-nacl
* aws:ec2/securityGroup:SecurityGroup                              sg443
```

Then, defang will manage the following resources for each project you deploy:

```
* awsx:ecr:Repository                                              project1/kaniko-build
* ├─ aws:ecr/repository:Repository                                 project1/kaniko-build
* └─ aws:ecr/lifecyclePolicy:LifecyclePolicy                       project1/kaniko-build
* aws:acm/certificate:Certificate                                  *.project1.tenant1.defang.app
* awsx:ecr:Repository                                              project1/kaniko-build/cache
* ├─ aws:ecr/repository:Repository                                 project1/kaniko-build/cache
* └─ aws:ecr/lifecyclePolicy:LifecyclePolicy                       project1/kaniko-build/cache
* aws:iam/instanceProfile:InstanceProfile                          ecs-agent-profile
* aws:iam/role:Role                                                ecs-task-execution-role
* aws:cloudwatch/eventRule:EventRule                               project1-ecs-lifecycle-rule
* aws:cloudwatch/eventTarget:EventTarget                           project1-ecs-event-cw-target
* aws:route53/record:Record                                        validation-project1.tenant1.defang.app
* aws:acm/certificateValidation:CertificateValidation              *.project1.tenant1.defang.appValidation
* aws:ec2/vpcDhcpOptionsAssociation:VpcDhcpOptionsAssociation      dhcp-options-association
* defang-mvp:shared/ecs/defang:Defang                              defang
* ├─ defang-mvp:shared/ecs/kaniko:Kaniko                           kaniko
* │  ├─ aws:cloudwatch/logGroup:LogGroup                           builds
* │  ├─ aws:iam/role:Role                                          kaniko-task-role
* │  ├─ aws:ecs/taskDefinition:TaskDefinition                      kanikoTaskDefArm64
* │  └─ aws:ecs/taskDefinition:TaskDefinition                      kanikoTaskDefAmd64
* ├─ aws:s3/bucket:Bucket                                          defang-build
* ├─ aws:s3/bucketPublicAccessBlock:BucketPublicAccessBlock        defang-build-block
* ├─ aws:ecs/cluster:Cluster                                       cluster
* └─ aws:ecs/clusterCapacityProviders:ClusterCapacityProviders     cluster-capacity-providers
* defang-mvp:cd/tenant_stack:TenantStack                           bootstrap
* ├─ defang-mvp:shared/fargate_service:FargateService              project1_app
* │  └─ aws:ec2/securityGroup:SecurityGroup                        project1_app-sg
* ├─ defang-mvp:shared/ecs/kaniko_image:KanikoImage                app-image
* └─ aws:ec2/securityGroup:SecurityGroup                           bootstrap
* aws:ec2/vpcDhcpOptions:VpcDhcpOptions                            dhcp-options
* aws:cloudwatch/logGroup:LogGroup                                 logs
```
