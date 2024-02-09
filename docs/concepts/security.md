---
title: Security    
description: Defang configures your cloud applications and services with security best practices.
sidebar_position: 600
---

# Security

Defang's philosophy is to operate on a principle of "least-privilege". This means that we only give your services the permissions they need to operate.

Because Defang creates roles, you need to have the appropriate permissions to create roles in your cloud provider account, typically the `AdministratorAccess` policy in AWS.

:::tip
Best practice is to run the Defang CLI in a CI/CD environment and to restrict deployment permissions at that level.
:::

## Roles & Permissions

Defang creates roles for your services to use, and attaches policies to those roles. This means that your services only have the permissions they need to operate, and nothing more.

## Networking

Defang configures Security Groups, deploys applictions to a private subnet and uses an Application Load Balancer to route traffic to your services from the public internet only when required. 

## TLS

Defang automates the process of obtaining and renewing TLS certificates for your services using AWS Certificate Manager.

## Secrets

Secrets are stored in AWS Systems Manager Parameter Store, and are encrypted using a key stored in AWS Key Management Service (KMS).