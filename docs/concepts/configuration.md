---
title: Configuration
description: Configuring your Defang application.
sidebar_position: 350
---

# Configuration

Defang allows you to configure your application using environment variables. You can set environment variables in your `docker-compose.yml` file, or in your Pulumi program. Using Pulumi gives you the advantage of being able to manage your environment variables across different environments using Pulumi stacks.

You can also use [secrets](./secrets.md) to store sensitive information like API keys and database passwords.