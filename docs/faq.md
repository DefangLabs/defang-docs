---
sidebar_position: 500
title: FAQ
description: Frequently asked questions about Defang.
---


# FAQ

### **Which cloud/region is the app being deployed to?**

- Currently we are deploying to AWS us-west-2.

### **Can I bring my own AWS or other cloud account?**

- With the current release, which is designed for customers to try out the Defang model with non-production apps, your apps are deployed to Defang’s AWS account. We are working on bring-your-own-account for an upcoming release.

### **On AWS, can I deploy to services such as EC2, EKS, or Lambda?**

- The current release includes support for containers only, deployed to ECS. Future releases shall include support for Lambda, EC2 etc. Using our Pulumi provider, it is possible to combine Defang services with other native AWS resources.

### **Can I access AWS storage services such as S3 or database services such as RDS ? How?**

- Yes, you can access any storage service from the underlying cloud platform (AWS) or from a remote database service. To secure access from your Defang services, you should use our published public IPs in your AWS security group or IP allow list.

### **Do you plan to support other clouds?**

- While we currently deploy to AWS, the Defang model is designed to be inherently portable. We plan to support other clouds in future releases.

### **Can I run production apps on DOP?**

- The current release of DOP is meant for testing and trial purposes only. Deployment of productions apps is not supported and explicitly disallowed by the [Terms and Conditions](https://defang.io/terms-conditions.html).
