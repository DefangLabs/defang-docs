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
| Databases | Defang will provision resources optimized for burstable memory | | Defang will provision resources optimized for production |
| Static Resources | | | Defang will provision a CDN |
| Deployment | Previous deployments will be spun down before new deployments are spun up. | | Rolling updates will be used to deploy new versions. Defang will gradually replace services while maintaining at least [the original number of replicas](/docs/tutorials/scaling-your-services). |
| Logging | Logs retained for 1 day to save costs. | | Logs retained for 30 days for compliance. |
| Networking | | | Defang will provision a NAT gateway. |
| DNS | Defang will provision shorter TTLs | | Defang will provision longer TTLs |
