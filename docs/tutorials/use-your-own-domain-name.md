---
title: How to bring your own domain
sidebar_position: 600
---

# How to Use Your Own Domain

In our latest version of <a href="https://docs.defang.io/docs/concepts/defang-byoc" >Defang BYOC</a> (Bring Your Own Cloud), you can now use your own domain name. (Currently, this new feature is not applicable to <a href="https://docs.defang.io/docs/concepts/defang-playground">Defang Playground</a>)

<iframe width="560" height="315" src="https://www.youtube.com/embed/n4RlMpsdTbs?si=_Ru6tobSbi9LT4Q1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Step 1 : Check your <a href="https://docs.defang.io/docs/concepts/defang-byoc" >Defang BYOC</a> settings
Before you get started, make sure you <a href="https://docs.defang.io/docs/getting-started#authenticate-with-defang">install the latest version of the Defang CLI</a>
Then, make sure you have properly <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html">authenticated your AWS account</a>
Plus, make sure that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
To verify that BYOC is properly set, run the following command:
```bash
aws sts get-caller-identity
```
If this command can run, you are ready to go.


## Step 2: Manage Your Domain with CloudFlare
* Log into <a href="https://www.cloudflare.com/en-ca/">Cloudflare</a> and select your domain


## Step 3: Configure DNS Setting in CloudFlare
- Create a CNAME Record
Navigate to the DNS settings of your selected domain in CloudFlare. Add a CNAME record pointing to your chosen subdomain (e.g  "yourdomainname") to the AWS target
- DNS Propagation
Allow some time for DNS changes to propagate across the internet.


## Step 4: Set up Your Compose File
In your compose file, specify the domain name you want to use.
```bash
services:
    web:
        domainname: nextjs.defang.chewydemos.com
        build:
            context: ./web
            dockerfile: Dockerfile
        ports:
            target: 3000
            mode: ingress
```


## Step 5: Deploy with Your Own Domain Name with Defang
Run the following command to deploy your service:
```bash
defang compose up
```