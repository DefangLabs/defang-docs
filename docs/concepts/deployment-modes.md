---
title: Deployment Modes
description: Defang provides three deployment modes which allow you to balance cost and resiliency.
sidebar_position: 501
---

# Deployment Modes

Defang provides three deployment modes: development, staging, and production. These modes allow you to balance cost and resiliency according to your needs.

* **Development**: This mode is used for development and testing purposes. It typically involves less stringent resource allocations and may include debugging tools and verbose logging to aid in development.
* **Staging**: This mode serves as a pre-production environment where applications are tested in conditions that closely mimic production. It helps in identifying issues that might not be apparent in the development environment.
* **Production**: This mode is used for live deployments. It involves optimized configurations for performance, security, and reliability. Resource allocations are typically higher, and debugging tools are minimized to ensure stability.

## Deployment Mode Comparison

| Feature | Development | Staging | Production |
|-|-|-|-|
| Build Resources | Builds will be run with 2x vCPUs | Builds will be run with 2x vCPUs | Builds will be run with 4x vCPUs |
| Compute | Using spot instances | (like development) | On-demand instances |
| Databases | Defang will provision resources optimized for burstable memory | (like production) | Defang will provision resources optimized for production |
| Deployment | Previous deployments will be spun down before new deployments are spun up. | (like production) | Rolling updates will be used to deploy new versions. Defang will gradually replace services while maintaining at least [the original number of replicas](/docs/tutorials/scaling-your-services). |
| Logging | Logs retained for 1 day to save costs. | | Logs retained for 30 days for compliance. |
| Networking | | (like production) | Defang will provision a NAT gateway. |
| Load Balancing | HTTP redirect to HTTPS using `302 Found` | | Termindation Protection will be enabled; logs are retained on "down" |
| DNS | Defang will provision shorter TTLs; zones will be forcefully destroyed | | Defang will provision longer TTLs; records can be overwritten for ZDT |
| Managed storage | Operations that cause downtime are allowed | | Encryption at rest; Final snapshot created on "down" |
| Logs | 1 day retention | 7 days retention | 30 days retention |
