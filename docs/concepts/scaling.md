---
title: Scaling
description: Defang can help you handle service irregular loads.
sidebar_position: 375
---

# Scaling

Scaling is the process of adjusting the number of instances (or replicas) of a service to meet the current demand. Services that receive requests—such as APIs, workers, or background jobs—can be scaled up or down to optimize performance, availability, and cost.

Scaling is a core concept in distributed systems and cloud-native applications. It ensures your system can handle varying workloads without degrading user experience or over-provisioning resources.

## Why Scale?

Scaling enables services to respond effectively under different conditions:

- **High Traffic**: When demand spikes, scaling up ensures your service can process more requests in parallel.
- **Cost Optimization**: Scaling down during periods of low demand helps reduce unnecessary resource usage and cloud costs.
- **Fault Tolerance**: Multiple instances of a service provide redundancy in case of instance failure.
- **Throughput & Latency**: Additional instances can reduce response times and increase the number of operations your service can perform per second.

## Types of Scaling

There are two main ways to scale a service:

- **Horizontal Scaling**: Adds or removes instances of a service. This is the most common approach for stateless services.
- **Vertical Scaling**: Increases or decreases the resources (CPU, memory) available to a single instance.

In most modern deployments, horizontal scaling is preferred because it aligns well with cloud-native principles and is easier to automate and distribute.

## Auto-Scaling

**Auto-scaling** refers to automatically adjusting the number of service instances based on defined policies or metrics.

Instead of manually adding more instances when traffic increases, an auto-scaling system watches key indicators (like CPU usage) and takes action in real time.

### How It Works

Auto-scaling systems typically rely on:

- **Metrics Collection**: Real-time monitoring of system metrics.
- **Scaling Policies**: Rules that define when to scale up or down. For example:
  - If average CPU > 85% for 5 minutes → scale up by 2 instances.
- **Cooldown Periods**: Delays between scaling events to prevent rapid, repeated changes (flapping).

### Supported Platforms

| Platform        | Auto-Scaling Support |
|----------------|----------------------|
| AWS            | ✅ Supported         |
| GCP            | ✅ Supported         |
| DigitalOcean   | ❌ Not yet supported |

> 💡 We're actively working on support for additional platforms. Let us know which ones you’d like to see next! 

### Benefits of Auto-Scaling

- **Elasticity**: Automatically adapts to changing workloads.
- **Resilience**: Helps maintain performance during traffic surges or partial outages.
- **Efficiency**: Reduces the need for manual intervention or over-provisioning.

### Considerations

- Ensure services are **stateless** or use **externalized state** (e.g., databases, caches) for smooth scaling. ([12 Factor App](https://12factor.net/processes))
- Test services under load to identify scaling bottlenecks.
  