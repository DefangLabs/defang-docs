---
title: Pulumi
description: Define your Defang services with Pulumi to integrate with other cloud resources.
sidebar_position: 400
---

# Pulumi

You can use Pulumi to define your Defang services. This allows you to integrate your Defang services with other cloud resources.

For example, you might define an Aiven PostgreSQL database in your Pulumi code and then use the outputs of that resource to configure the secrets to connect to the database in your Defang service.