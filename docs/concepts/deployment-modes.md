---
title: Deployment Modes
description: Defang provides three deployment modes which allow you to balance cost and resiliency.
sidebar_position: 501
---

# Deployment Modes

Defang provides three deployment modes: `affordable`, `balanced`, and `high_availability`. These modes allow you to balance cost and resiliency according to your needs.

* **Affordable**: This mode is used for development and testing purposes. It typically involves less stringent resource allocations and may include debugging tools and verbose logging to aid in development.
* **Balanced**: This mode serves as a pre-production environment where applications are tested in conditions that closely mimic production. It helps in identifying issues that might not be apparent in the development environment.
* **High Availability**: This mode is used for live deployments. It involves optimized configurations for performance, security, and reliability. Resource allocations are typically higher, and debugging tools are minimized to ensure stability.

## Deployment Mode Comparison

| Feature | Affordable | Balanced | High Availability |
|-|-|-|-|
| Build Resources | Builds will be run with 2x vCPUs |  (like `affordable`) | Builds will be run with 4x vCPUs |
| Compute | Using spot instances | (like `affordable`) | On-demand instances |
| Databases | Defang will provision resources optimized for burstable memory | (like `high_availability`) | Defang will provision resources optimized for production |
| Deployment | Previous deployments will be spun down before new deployments are spun up. | (like `high_availability`) | Rolling updates will be used to deploy new versions. Defang will gradually replace services while maintaining at least [the original number of replicas](/docs/tutorials/scaling-your-services). |
| Logs | Logs retained for 1 day to save costs. | Logs retained for 7 days to balance cost and access. | Logs retained for 30 days for compliance. |
| Networking | | (like `high_availability`) | Defang will provision a NAT gateway. |
| Load Balancing | HTTP redirect to HTTPS using `302 Found` | | Termination Protection will be enabled; logs are retained on "down" |
| DNS | Defang will provision shorter TTLs; zones will be forcefully destroyed | | Defang will provision longer TTLs; records can be overwritten for ZDT |
| Managed Storage | Operations that cause downtime are allowed | | Encryption at rest; Final snapshot created on "down" |
