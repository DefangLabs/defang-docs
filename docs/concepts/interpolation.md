---
title: Interpolation
description: Construct environment variable values in `compose.yml` file by referencing other configuration variables.
sidebar_position: 200
---

# Interpolation

Environment variables are set within the *environment* section of a service in a `compose.yaml` file. Any variables declared here will become available within the service container.

Variables can be set by assigning a literal value, a reference to a [configuration value](./configuration.md), or a mix of literal and variable references. Variable references are declared using either **\$\{variable_name\}** or **$variable_name** forms. It is recommended to use the bracketed form. By interpolating over variable references within a string we can construct complex strings. Interpolation may be particularly useful when constructing connection strings to other services.

```
service:
    environment:
        - USER_PASSWORD // configuration variable
        - USER_NAME     // configuration variable
        - CONNECT=dbservice:${USER_NAME}:${USER_PASSWORD}@$example.com:9876       
```
In the example, if we assume the value of the configuration variable ***USER_PASSWORD*** is *password* then the value assigned to ***CONNECT*** will be *dbservice:alice:password@example.com:9876*


During `defang compose up` all variable references will be replaced with the actual value and made available in the container. If any referenced variable is not found the `defang compose up` command will be canceled.