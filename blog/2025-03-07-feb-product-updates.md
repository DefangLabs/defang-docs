---
title: February 2025 Defang Compose Update
tags:
  [
    Cloud,
    NoDevOps,
    BYOC,
    Postgres,
    GCP,
    DigitalOcean,
    AWS,
    CLI,
    AI,
    Debugging,
    Defang Compose Update,
  ]
author: Defang Team
draft: true
---

![Defang Compose Update](/img/defang-compose-update.webp)

1. **Unified auth between Portal and CLI:** As part of the work to Deploy Defang with Defang, we revamped and greatly simplified our identity and authentication implementation. One benefit of this work is that users won’t have to authorize 2 separate apps in GitHub (one for the CLI and another for the Portal), which provides a more streamlined experience. This work also enables us to add other identity providers in the future.
