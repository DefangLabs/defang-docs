---
title: Use Defang to Deploy Mistral to AWS with GPUs
sidebar_position: 500
---

# Deploy Mistral with Defang

This tutorial guides you to create and deploy a GPU-powered application on AWS using Defang and Mistral. We will walk you through the whole deployment process based on this <a href="https://github.com/defang-io/defang/tree/main/samples/other/vllm">"Deploying Mistral with vLLM"</a> sample.
<iframe width="560" height="315" src="https://www.youtube.com/embed/kynFa2zU7hQ?si=qdV0xa6vkhMFJ6qv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Step 1 : Check your <a href="https://docs.defang.io/docs/concepts/defang-byoc" >Defang BYOC</a> settings
Before you get started, make sure you <a href="https://docs.defang.io/docs/getting-started#authenticate-with-defang">install the latest version of the Defang CLI</a>
Then, make sure you properly <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html">authenticate your AWS account</a>
Plus, make sure that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
To verify that BYOC is properly set, run the following command:
```bash
aws sts get-caller-identity
```
If this command can run, you are ready to go.


## Step 2: Prepare your Environment
* Log into your Defang account
```bash
defang login
```

* Set the HuggingFace token using the `defang secrets` command
```bash
defang secrets set --name HF_TOKEN
```
<a href="https://docs.defang.io/docs/concepts/secrets">Defang Secrets</a> stores your sensitive information such as API keys, passwords, and other credentials for you. 


## Step 3: Activate your GPU through AWS
* Go to your "Service Quotas" area in your AWS account. 
* Request access to spot GPU instances


## Step 4: Explore the Compose File
Open or create your compose file. Include configuration for using Mistral, and ensure your service is set up with GPU support.
```bash
services:
    mistral:
        image: ghcr.io/mistralai/mistral-src/vllm:latest
        ports:
            - mode: host
            - target: 8000
        command: ["--host","0.0.0.0","--model","TheBloke/Mistral-7B-Instruct-v0.2-AWQ","--quantization","awq","--dtype","auto","--tensor-parallel-size","1","--gpu-memory-utilization",".95","--max-model-len","8000"]
        deploy:
            resources:
                reservations:
                    cpus: '2.0'
                    memory: 8192M
                    devices:
                        - capabilities: ["gpu"]
            healthcheck:
                test: ["CMD","curl","http://localhost:8000/v1/models"]
                interval: 5m
                timeout: 30s
                retries: 10
            secrets:
                - HF_TOKEN
    secrets:
        HF_TOKEN:
            external: true
```
Let's break it down:
We extract the basic docker image from <a href="https://docs.mistral.ai/self-deployment/vllm/">Mistral AI</a>. We specify that we are going to use the latest version of Mistral.
```bash
mistral:
    image: ghcr.io/mistralai/mistral-src/vllm:latest
```

We specifies that we require GPU for our vLLM model.
```bash
deploy:
    resources:
        reservations:
            cpus: '2.0'
            memory: 8192M
            devices:
                - capabilities: ["gpu"]
```

The vLLM model will be downloaded from HuggingFace. We need to have a HuggingFace Token to enable the installation.
Under Mistral, we specifies that we need to get the `HF_TOKEN`.
```bash
secrets:
    - HF_TOKEN
```
Then we instruct Docker to find the token from the machine.
```bash
secrets:
    HF_TOKEN:
        external: true
```

Add more content if necessary; for example, you might need to include instructions to set up your user interface, like what we do in the sample.

```bash
  ui:
    restart: unless-stopped
    build:
      context: ui
      dockerfile: Dockerfile
    ports:
      - mode: ingress
        target: 3000
    deploy:
      resources:
        reservations:
          memory: 256M
    healthcheck:
      test: ["CMD","wget","--spider","http://localhost:3000"]
      interval: 10s
      timeout: 2s
      retries: 10
    environment:
      - OPENAI_BASE_URL=http://mistral:8000/v1/

```


## Step 5: Deploy to Your Own AWS Account with Defang
Run the following command to deploy your service:
```bash
defang compose up
```