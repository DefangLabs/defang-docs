---
title: Samples
description: Sample projects to help you launch services faster with Defang.
sidebar_position: 500
---

import {Button, ButtonGroup, FormGroup, FormLabel} from "@mui/material"

# Samples

Check out our sample projects here to get some inspiration and get a sense of how defang works.


## Basic Service

<FormGroup sx={{pb: 2}}>
    <FormLabel>Try it in: </FormLabel>
    <ButtonGroup variant="outlined">
        <Button href="https://github.com/defang-io/defang/tree/main/samples/python/Basic%20Service">Python</Button>
        <Button href="https://github.com/defang-io/defang/tree/main/samples/nodejs/Basic%20Service">Node.js</Button>
        <Button href="https://github.com/defang-io/defang/tree/main/samples/golang/Basic%20Service">Golang</Button>
    </ButtonGroup>
</FormGroup>

This sample shows you how to get started with Defang. It demonstrates how to deploy one of the most basic type of services you can run on Defang: a simple web server that returns the contents of the request.


## AI-ML Music Recommendations

<FormGroup sx={{pb: 2}}>
    <FormLabel>Try it in: </FormLabel>
    <ButtonGroup variant="outlined">
        <Button href="https://github.com/defang-io/defang/tree/main/samples/python/AI-ML%20Music">Python</Button>
    </ButtonGroup>
</FormGroup>

An AI-driven music recommendation system. This example demonstrates how to request GPUs for your Defang services:

```yaml
services:
  service1:
    deploy:
      resources:
        reservations:
          devices:
            - capabilities: ["gpu"]
```


## AWS S3

<FormGroup sx={{pb: 2}}>
    <FormLabel>Try it in: </FormLabel>
    <ButtonGroup variant="outlined">
        <Button href="https://github.com/defang-io/defang/tree/main/samples/python/AWS%20S3">Python</Button>
        <Button href="https://github.com/defang-io/defang/tree/main/samples/nodejs/AWS%20S3">Node.js</Button>
        <Button href="https://github.com/defang-io/defang/tree/main/samples/golang/AWS%20S3">Golang</Button>
    </ButtonGroup>
</FormGroup>

This sample shows you how to upload and download files from AWS S3 using Defang. It demonstrates how to configure services that require secrets using the `defang secrets set` command.


## ChatGPT API

<FormGroup sx={{pb: 2}}>
    <FormLabel>Try it in: </FormLabel>
    <ButtonGroup variant="outlined">
        <Button href="https://github.com/defang-io/defang/tree/main/samples/python/ChatGPT%20API">Python</Button>
        <Button href="https://github.com/defang-io/defang/tree/main/samples/nodejs/ChatGPT%20API">Node.js</Button>
        <Button href="https://github.com/defang-io/defang/tree/main/samples/golang/ChatGPT%20API">Golang</Button>
    </ButtonGroup>
</FormGroup>

This sample shows you how to build a simple service using the OpenAI Chat Completions API. It also demonstrates how to configure services that require secrets using the `defang secrets set` command.


## Fetch and return JSON

<FormGroup sx={{pb: 2}}>
    <FormLabel>Try it in: </FormLabel>
    <ButtonGroup variant="outlined">
        <Button href="https://github.com/defang-io/defang/tree/main/samples/python/Fetch%20and%20Return%20JSON">Python</Button>
        <Button href="https://github.com/defang-io/defang/tree/main/samples/nodejs/Fetch%20and%20Return%20JSON">Node.js</Button>
        <Button href="https://github.com/defang-io/defang/tree/main/samples/golang/Fetch%20and%20Return%20JSON">Golang</Button>
    </ButtonGroup>
</FormGroup>

This sample shows you how to build a basic service that interacts with and api and returns some JSON. 


## Webpage and Form Post

<FormGroup sx={{pb: 2}}>
    <FormLabel>Try it in: </FormLabel>
    <ButtonGroup variant="outlined">
        <Button href="https://github.com/defang-io/defang/tree/main/samples/python/Web%20Page%20and%20Form%20Post">Python</Button>
        <Button href="https://github.com/defang-io/defang/tree/main/samples/nodejs/Web%20Page%20and%20Form%20Post">Node.js</Button>
        <Button href="https://github.com/defang-io/defang/tree/main/samples/golang/Web%20Page%20and%20Form%20Post">Golang</Button>
    </ButtonGroup>
</FormGroup>

This sample shows you how to build a simple website with a form that posts to a backend service. 
