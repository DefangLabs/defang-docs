# Overview

**What is the Defang Opinionated Platform (DOP)?**

The Defang Opinionated Platform (DOP) is a radically simpler way to build and deploy production-ready cloud apps. The DOP is a serverless platform that lets you quickly build your application in the language of your choice and deploy to the cloud with a single command. The DOP CLI includes an AI-assisted co-pilot that translates natural language commands to a starting point in code for your services that you can then refine. Once you merge the code to your Github repository, the DOP automatically builds your project and deploys it to the cloud, taking care of all the heavy lifting such as configuring the networking, auto-scaling, security, observability and all the other details that usually trip up the average cloud developer. 

**The Details** 

The DOP provides a unified experience to develop, deploy, run, and observe your cloud applications. It supports the following features:

- Types of applications - web applications, APIs, ML applications, ???
- Support for Node.js, Python, and Go
- AI-assisted co-pilot to go from natural language prompt to code skeleton
- Support for Docker containers, ???
- Support for Docker Compose
- APIs - support for REST?, gRPC?,???
- Support for CPUs and GPUs
- Ability to deploy to SPOT instances
- Pre-configured staging and production environments, with built-in networking, auto-scaling, security, and observability
- Automated build of your source directly from your Github repository to your staging or production environments
- Pulumi integration
- Storage - databases, object stores etc.?
- Queues - ?
- Observability via tail of logs?
  

**Can I access AWS storage services such as S3 or database services such as RDS ? How?**

**Do you plan to support other clouds?**

While we currently deploy to AWS, the Defang model is designed to be inherently portable. We plan to support other clouds in future releases.
