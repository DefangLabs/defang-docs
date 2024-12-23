---
title: Compose Support
description: Defang supports many of the properties of the Compose specification.
sidebar_position: 160
---

# Compose Support

This page outlines what properties of the [Compose specification](https://docs.docker.com/compose/compose-file/) Defang supports when writing a `compose.yaml` file.
For a more general overview of how Defang works with Compose, please see our [Compose](/docs/concepts/compose) page.

### Supported Compose Properties
|Property | Details
|-|-
|`image` | 

### Optional Compose Properties
|Property | Details
|-|-
|`ports` | If left unspecified, a random port will be chosen. 
|`memory` | If left unspecified, will resort to default. 
|`environment` | 

### Depreciated Compose Properties
|Property | Details
|-|-
|`version` | This top-level element is no longer needed in the Compose file. Instead, Defang uses the most recent schema supported for parsing the file.

### Unsupported Compose Properties
|Property | Details
|-|-
|`volume` | Volume mounts are not currently supported by Defang, but will not break the file if included. 



### Configuration
You can define sensitive environment variables/configuration for Defang by writing out the variable name and leaving it in as a blank or `null` value in the Compose file. See our [Configuration](/docs/concepts/configuration) page for more.