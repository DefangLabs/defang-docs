# Samples

## [Agentic Autogen](https://github.com/DefangLabs/samples/tree/main/samples/agentic-autogen)[​](#agentic-autogen "Direct link to agentic-autogen")

This sample shows an agentic Autogen application using Mistral and FastAPI, deployed with Defang. For demonstration purposes, it will require a [Mistral AI](https://mistral.ai/) API key (see [Configuration](#configuration) for more details). However, you are free to modify it to use a different LLM, say the [Defang OpenAI Access Gateway](https://github.com/DefangLabs/openai-access-gateway/) service, as an alternative. Note that the Vite React frontend is served through the FastAPI backend so that they can be treated as one service in production.

### Prerequisites[​](#prerequisites "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `MISTRAL_API_KEY`[​](#mistral_api_key "Direct link to mistral_api_key")

An API key to access the [Mistral AI API](https://mistral.ai/).

```
defang config set MISTRAL_API_KEY
```

### Deployment[​](#deployment "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC[​](#byoc "Direct link to BYOC")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

Title: Agentic Autogen

Short Description: An Autogen agent application using Mistral and FastAPI, deployed with Defang.

Tags: Agent, Autogen, Mistral, FastAPI, Vite, React, Python, JavaScript, AI, sample

Languages: Python, JavaScript

## [Agentic LangGraph](https://github.com/DefangLabs/samples/tree/main/samples/agentic-langgraph)[​](#agentic-langgraph "Direct link to agentic-langgraph")

This sample demonstrates a LangGraph Agent application deployed with Defang. You can customize the agent's tools as needed. For example, it includes a Tavily Search tool for performing search queries, which requires a `TAVILY_API_KEY` (see [Configuration](#configuration) for setup details).

### Prerequisites[​](#prerequisites-1 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-1 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f compose.dev.yaml up --build
```

### Configuration[​](#configuration-1 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `TAVILY_API_KEY`[​](#tavily_api_key "Direct link to tavily_api_key")

A Tavily API key for accessing [Tavily Search](https://www.tavily.com/).

```
defang config set TAVILY_API_KEY
```

### Deployment[​](#deployment-1 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-1 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC[​](#byoc-1 "Direct link to BYOC")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

Title: Agentic LangGraph

Short Description: A LangGraph Agent application that can use tools, deployed with Defang.

Tags: Agent, LangGraph, LangChain, AI, OpenAI, Tavily, sample

Languages: TypeScript

## [Agentic Strands](https://github.com/DefangLabs/samples/tree/main/samples/agentic-strands)[​](#agentic-strands "Direct link to agentic-strands")

This sample demonstrates a Strands Agent application, deployed with Defang. This [Strands](https://strandsagents.com/latest/) Agent can use tools, and is compatible with the [Defang OpenAI Access Gateway](https://github.com/DefangLabs/openai-access-gateway/).

### Prerequisites[​](#prerequisites-2 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-2 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f compose.dev.yaml up --build
```

### Configuration[​](#configuration-2 "Direct link to Configuration")

For this sample, you will not need to provide any [configuration](https://docs.defang.io/docs/concepts/configuration). However, if you ever need to, below is an example of how to do so in Defang:

```
defang config set API_KEY
```

### Deployment[​](#deployment-2 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-2 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC[​](#byoc-2 "Direct link to BYOC")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

Title: Agentic Strands

Short Description: A Strands Agent application, deployed with Defang.

Tags: Python, Flask, Strands, AI, Agent, sample

Languages: Python

## [Angular & Node.js](https://github.com/DefangLabs/samples/tree/main/samples/angular-express)[​](#angular--nodejs "Direct link to angular--nodejs")

This sample demonstrates how to deploy a full-stack Angular and Node.js application with Defang. It uses Socket.IO for real-time communication. The Docker setup ensures the app can be easily built and deployed.

### Prerequisites[​](#prerequisites-3 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)
4. Install [Node.js](https://nodejs.org/en/download/package-manager/)
5. Install [Angular CLI](https://angular.io/cli)

### Development[​](#development-3 "Direct link to Development")

For development, we use two local containers, one for the frontend Angular service and one for the backend service in Express. It also uses Caddy as a web server for serving static files.

To run the application locally, you can use the following command:

```
docker compose -f compose.dev.yaml up --build
```

### Configuration[​](#configuration-3 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-3 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-3 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Angular & Node.js

Short Description: A full-stack application using Angular for the frontend and Node.js with Socket.IO for the backend, containerized with Docker.

Tags: Angular, Node.js, Socket.IO, TypeScript, JavaScript, sample

Languages: nodejs

## [Arduino Flask Wifi Server](https://github.com/DefangLabs/samples/tree/main/samples/arduino-wifi)[​](#arduino-flask-wifi-server "Direct link to arduino-flask-wifi-server")

This sample contains an interactive wifi-connected UI program for a [SenseCAP Indicator Device](https://wiki.seeedstudio.com/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator/), built for an Embedded Systems project at Defang Software Labs.

The device has a square liquid-crystal touch screen display, and a ESP32-S3 chip that can be programmed in an Arduino environment.

The program `welcome.ino`, acting as a client, pings data every 5 seconds after it is connected to a wifi network. It uses a library called [ArduinoHTTPClient](https://github.com/arduino-libraries/ArduinoHttpClient). It is also recommended to use [Arduino IDE](https://www.arduino.cc/en/software) when coding with `.ino` files. The program UI will display a message that is randomized in color and location on the screen at the same time during pings (every 5 seconds).

The Flask server in `web_server.py` receives these pings when it is initialized and connected to the same wifi network as the client. To initalize it, run `python web_server.py`. To view it, open `localhost` with the port number used. To deploy it to the cloud, run `defang up` in the `\welcome` directory.

A helpful file called `serial_reader.py` decodes serial monitor readings to a readable format, allowing you to see `Serial.println()` messages in real time when running. To initalize it, run `python serial_reader.py` and see it show up in the terminal.

Here is a diagram showing the structure of the application.

### Prerequisites[​](#prerequisites-4 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-4 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-4 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-4 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-4 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC[​](#byoc-3 "Direct link to BYOC")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

Title: Arduino Flask Wifi Server

Short Description: An Arduino wifi server built with Flask.

Tags: Arduino, Flask, Python, IoT, Wifi, Serial, sample

Languages: python

## [BullMQ & BullBoard & Redis](https://github.com/DefangLabs/samples/tree/main/samples/bullmq-bullboard-redis)[​](#bullmq--bullboard--redis "Direct link to bullmq--bullboard--redis")

This sample demonstrates how to deploy a BullMQ message queue on top of managed Redis with a queue processor and a dashboard to monitor the queue.

Once your app is up and running you can go to the `/board` route for the `board` service to see the Bull Board dashboard and use the username `admin` and the board password you set to log in (see [Configuration](#configuration)).

To add a job to the queue, you can go to the `/add` route of the `api` service. This will use some default values so you can test things out. You can also see an example of a post request in the [sample HTTP request](https://docs.defang.io/docs/api/add.test.http) file.

The `worker` service is the queue processor that will process the jobs added to the queue. You can see in the `compose.yaml` file that the `worker` service is set to scale to 2 instances. This means that there will be 2 workers processing jobs from the queue. You can set this to your desired number of workers, but we wanted to show how you can increase the number of workers to handle more jobs.

### Prerequisites[​](#prerequisites-5 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-5 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f compose.dev.yaml up --build
```

### Configuration[​](#configuration-5 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `BOARD_PASSWORD`[​](#board_password "Direct link to board_password")

Set a board password and use together with the board username `admin` when signing in.

```
defang config set BOARD_PASSWORD
```

#### `QUEUE`[​](#queue "Direct link to queue")

```
defang config set QUEUE
```

### Deployment[​](#deployment-5 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-5 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-1 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: BullMQ & BullBoard & Redis

Short Description: A sample project with BullMQ, BullBoard, and Redis.

Tags: BullMQ, BullBoard, Redis, Express, Node.js, Message Queue, JavaScript, sample

Languages: nodejs

## [Crew.ai Django Sample](https://github.com/DefangLabs/samples/tree/main/samples/crewai)[​](#crewai-django-sample "Direct link to crewai-django-sample")

This sample shows how to use Crew\.ai with a Django application. It provides a simple web interface that allows users to input text and receive a summary of the text in real-time using Django Channels with a Redis broker. It uses Celery to handle the Crew\.ai tasks in the background with Redis as a broker. It uses Postgres as the database for Django.

### Prerequisites[​](#prerequisites-6 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-6 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f ./compose.local.yaml up --build
```

### Configuration[​](#configuration-6 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `POSTGRES_PASSWORD`[​](#postgres_password "Direct link to postgres_password")

The password for the Postgres database.

```
defang config set POSTGRES_PASSWORD
```

#### `DJANGO_SECRET_KEY`[​](#django_secret_key "Direct link to django_secret_key")

The secret key for the Django application.

```
defang config set DJANGO_SECRET_KEY
```

### Deployment[​](#deployment-6 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-6 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC[​](#byoc-4 "Direct link to BYOC")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

Title: Crew\.ai Django Sample

Short Description: A sample application that uses Crew\.ai to summarize text in a background task, streamed to the user in real-time.

Tags: Django, Celery, Redis, Postgres, AI, ML, sample

Languages: Python

## [C# & ASP.NET Core](https://github.com/DefangLabs/samples/tree/main/samples/csharp-dotnet)[​](#c--aspnet-core "Direct link to c--aspnet-core")

This sample project is a simple task manager application using ASP.NET Core for the backend and JavaScript for client-side component rendering.

It showcases how you could deploy a full-stack application with ASP.NET Core and JavaScript using Defang. The Docker setup ensures the app can be easily built and tested during development.

### Prerequisites[​](#prerequisites-7 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)
4. Install [ASP.NET Core](https://dotnet.microsoft.com/download/dotnet-core)

### Development[​](#development-7 "Direct link to Development")

For development, we use two local containers, one for the frontend service and one for the backend service in ASP.NET Core. It also uses Caddy as a web server for serving static files.

To run the application locally, you can use the following command:

```
docker compose -f compose.dev.yaml up --build
```

### Configuration[​](#configuration-7 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-7 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-7 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-2 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: C# & ASP.NET Core

Short Description: A simple task manager application using C# and ASP.NET Core.

Tags: ASP.NET Core, JavaScript, C#, sample

Languages: C#

## [Defang Provider Handoff Sample](https://github.com/DefangLabs/samples/tree/main/samples/defang-provider-handoff)[​](#defang-provider-handoff-sample "Direct link to defang-provider-handoff-sample")

If you are using Defang to deploy your application into your customer's cloud accounts, you may want to provide a white-labeled static site that your customers can use to configure their cloud account for your deployment. This sample demonstrates how to do that.

The `compose.yaml` file in this directory defines a single service, `app`, which serves a static site on port 80. The static site is built from the `./app` directory, which contains an `index.html` file that provides instructions for the customer on how to configure their cloud account for your deployment.

Title: Defang Provider Handoff Sample

Short Description: A sample application that demonstrates how to provide a white-labeled static site for customers to configure their cloud accounts for your deployment.

Tags: Defang, Cloud, Deployment, Static Site, sample Languages: HTML, CSS, JavaScript

## [Django](https://github.com/DefangLabs/samples/tree/main/samples/django)[​](#django "Direct link to django")

This sample is a simple Django to-do app that uses SQLite as the database, which will be reset every time you deploy. **It is not production-ready**. For production use cases, you should check out the Django + Postgres sample.

The app includes a management command which is run on startup to create a superuser with the username `admin` and password `admin`. This means you can login to the admin interface at `/admin/` and see the Django admin interface without any additional steps. The `example_app` is already registered and the `Todo` model is already set up to be managed in the admin interface.

The Dockerfile and compose files are already set up for you and are ready to be deployed. Serving is done using [Gunicorn](https://gunicorn.org/) and uses [WhiteNoise](https://whitenoise.readthedocs.io/en/latest/) for static files. The `CSRF_TRUSTED_ORIGINS` setting is configured to allow the app to run on a `defang.dev` subdomain.

### Prerequisites[​](#prerequisites-8 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-8 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-8 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-8 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-8 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-3 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Make sure to update the `CSRF_TRUSTED_ORIGINS` setting in the `settings.py` file to include an appropriate domain.
3. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Django

Short Description: A simple Django app that uses SQLite as the database.

Tags: Django, SQLite, Python, sample

Languages: python

## [Django Celery](https://github.com/DefangLabs/samples/tree/main/samples/django-celery)[​](#django-celery "Direct link to django-celery")

This is a sample Django application that uses Celery for background tasks. It uses Postgres as the database and Redis as the message broker.

### Prerequisites[​](#prerequisites-9 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-9 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f compose.dev.yaml up --build
```

### Configuration[​](#configuration-9 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `POSTGRES_PASSWORD`[​](#postgres_password-1 "Direct link to postgres_password-1")

The password for the Postgres database.

```
defang config set POSTGRES_PASSWORD
```

#### `SECRET_KEY`[​](#secret_key "Direct link to secret_key")

The [secret key](https://docs.djangoproject.com/en/5.1/ref/settings/#std-setting-SECRET_KEY) for the Django application.

```
defang config set SECRET_KEY
```

### Deployment[​](#deployment-9 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-9 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC[​](#byoc-5 "Direct link to BYOC")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

Title: Django Celery

Short Description: A Django application that uses Celery for background tasks, Postgres as the database, and Redis as the message broker.

Tags: Django, Celery, Postgres, Redis, sample

Languages: python, sql

## [Django & Postgres](https://github.com/DefangLabs/samples/tree/main/samples/django-postgres)[​](#django--postgres "Direct link to django--postgres")

This template is a customer relationship management list project developed using Python Django framework, offering a starting point to help you quickly build your customer management system. We use PostgreSQL as the database. We have prepared all the essential files for deployment. By spending less than 10 minutes setting up the environment, as detailed in the prerequisites, and executing the commands in our step-by-step guide, your website will be ready to go live to the world!

### Prerequisites[​](#prerequisites-10 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-10 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-10 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `POSTGRES_PASSWORD`[​](#postgres_password-2 "Direct link to postgres_password-2")

The password for the PostgreSQL database.

```
defang config set POSTGRES_PASSWORD
```

#### `SECRET_KEY`[​](#secret_key-1 "Direct link to secret_key-1")

The secret key is used to secure the Django application.

```
defang config set SECRET_KEY
```

#### `ALLOWED_HOSTS`[​](#allowed_hosts "Direct link to allowed_hosts")

The allowed hosts for the Django application. (i.e. the domain your app runs on)

```
defang config set ALLOWED_HOSTS
```

### Deployment[​](#deployment-10 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-10 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-4 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Django & PostgreSQL

Short Description: A customer relationship management list project developed using the Python Django framework, offering a starting point to help you quickly build your customer management system.

Tags: Django, PostgreSQL, Python, SQL, sample

Languages: python

## [Django-Railpack](https://github.com/DefangLabs/samples/tree/main/samples/django-railpack)[​](#django-railpack "Direct link to django-railpack")

This sample is a simple Django to-do app that uses SQLite as the database, which will be reset every time you deploy. **It is not production-ready**. For production use cases, you should check out the Django + Postgres sample.

The app includes a management command which is run on startup to create a superuser with the username `admin` and password `admin`. This means you can login to the admin interface at `/admin/` and see the Django admin interface without any additional steps. The `example_app` is already registered and the `Todo` model is already set up to be managed in the admin interface.

The compose files are already set up for you and are ready to be deployed and the image is built by [Railpack](https://railpack.com/). Serving is done using [Gunicorn](https://gunicorn.org/) and uses [WhiteNoise](https://whitenoise.readthedocs.io/en/latest/) for static files. The `CSRF_TRUSTED_ORIGINS` setting is configured to allow the app to run on a `defang.dev` subdomain.

### Prerequisites[​](#prerequisites-11 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account

### Configuration[​](#configuration-11 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-11 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-11 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-5 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Make sure to update the `CSRF_TRUSTED_ORIGINS` setting in the `settings.py` file to include an appropriate domain.
3. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Django

Short Description: A simple Django app that uses SQLite as the database.

Tags: Django, SQLite, Python, Railpack, sample

Languages: python

## [Django Channels & Redis & Postgres](https://github.com/DefangLabs/samples/tree/main/samples/django-redis-postgres)[​](#django-channels--redis--postgres "Direct link to django-channels--redis--postgres")

This sample demonstrates how to get Django Channels up and running with Redis and Postgres both managed by Defang. It demonstrates how to do this with a simple chat application.

### Prerequisites[​](#prerequisites-12 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) authenticated with your AWS account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-11 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f compose.dev.yaml up
```

This will start the Django server, Redis, and Postgres and mounts your Django app so you get live reloading. You can access the Django server at `http://localhost:8000`.

### Configuration[​](#configuration-12 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration). Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `SECRET_KEY`[​](#secret_key-2 "Direct link to secret_key-2")

The secret key for your Django application. You can generate a new one by running `python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'`. A default, insecure key is used if this is not set, but you should set it for a production deployment.

#### `POSTGRES_PASSWORD`[​](#postgres_password-3 "Direct link to postgres_password-3")

The password for your Postgres database. You need to set this before deploying for the first time.

### Deploying[​](#deploying "Direct link to Deploying")

1. Open the terminal and type `defang login`
2. Use the [`defang config`](https://docs.defang.io/docs/concepts/compose#configuration) command to setup environment variables.
3. Type `defang compose up` in the CLI.
4. Your app will be running within a few minutes.

Title: Django Channels & Redis & Postgres

Short Description: A basic configuration of Django Channels with Redis and Postgres demonstrating a simple chat application.

Tags: Django, Channels, Redis, Postgres, Chat, Application, sample

Languages: Python

## [Elysia & Bun](https://github.com/DefangLabs/samples/tree/main/samples/elysia)[​](#elysia--bun "Direct link to elysia--bun")

A basic [Elysia](https://elysiajs.com/) app running on [Bun](https://bun.sh/) with a Dockerfile and compose.yaml ready to deploy to AWS with [Defang](https://defang.io).

### Prerequisites[​](#prerequisites-13 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-12 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f compose.dev.yaml up --build
```

### Configuration[​](#configuration-13 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-12 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-12 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-6 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Elysia & Bun

Short Description: A basic Elysia app running on Bun with Defang.

Tags: Bun, Elysia, TypeScript, JavaScript, sample

Languages: nodejs

## [FastAPI](https://github.com/DefangLabs/samples/tree/main/samples/fastapi)[​](#fastapi "Direct link to fastapi")

This sample project demonstrates how to deploy FastAPI with Defang.

### Prerequisites[​](#prerequisites-14 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-13 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f compose.yaml -f compose.dev.yaml up --build
```

### Configuration[​](#configuration-14 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-13 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-13 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-7 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: FastAPI

Short Description: A sample project demonstrating how to deploy FastAPI with Defang.

Tags: FastAPI, OpenAPI, Python, sample

Languages: python

## [FastAPI & PostgreSQL](https://github.com/DefangLabs/samples/tree/main/samples/fastapi-postgres)[​](#fastapi--postgresql "Direct link to fastapi--postgresql")

This sample project demonstrates how to deploy FastAPI with PostgreSQL with Defang.

### Prerequisites[​](#prerequisites-15 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/defang-io/defang)
2. (optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc), make sure you have properly [authenticated your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html).

### Development[​](#development-14 "Direct link to Development")

To run the development container(s) locally, do:

```
docker compose -f compose.dev.yaml up --build
```

Or to run the production container(s) locally, do:

```
POSTGRES_PASSWORD=postgres docker compose up --build
```

### Configuration[​](#configuration-15 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `POSTGRES_PASSWORD`[​](#postgres_password-4 "Direct link to postgres_password-4")

```
defang config set POSTGRES_PASSWORD
```

### Deployment[​](#deployment-14 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-14 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-8 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: FastAPI & PostgreSQL

Short Description: A sample project with FastAPI and PostgreSQL.

Tags: FastAPI, PostgreSQL, Python, SQL, sample

Languages: python

## [FastAPI Postgres Pub/Sub Chat](https://github.com/DefangLabs/samples/tree/main/samples/fastapi-postgres-pubsub)[​](#fastapi-postgres-pubsub-chat "Direct link to fastapi-postgres-pubsub-chat")

This sample pairs FastAPI with PostgreSQL `LISTEN/NOTIFY` to demonstrate real-time updates between two application containers. A minimal chat UI sends messages with a REST request, and both FastAPI instances broadcast the new message over WebSockets after Postgres notifies them.

### Prerequisites[​](#prerequisites-16 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-15 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f compose.dev.yaml up --build
```

Once everything is running:

* Visit <http://localhost:8000> for the first FastAPI service.
* Visit <http://localhost:8001> for the second service.
* Send a chat message in either window. Both pages should update immediately, proving Postgres `LISTEN/NOTIFY` fans the event across containers.

Stop the stack with `Ctrl+C`, then run `docker compose -f compose.dev.yaml down`.

### Configuration[​](#configuration-16 "Direct link to Configuration")

For this sample, you can rely on the defaults. Override them with environment variables if needed:

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `POSTGRES_PASSWORD`[​](#postgres_password-5 "Direct link to postgres_password-5")

Database password (default `chat_password`).

```
defang config set POSTGRES_PASSWORD --random
```

#### `SSL_MODE`[​](#ssl_mode "Direct link to ssl_mode")

Postgres SSL mode (default `disable`, should set to `require` in production).

```
defang config set SSL_MODE=require
```

### Deployment[​](#deployment-15 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-15 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC[​](#byoc-6 "Direct link to BYOC")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

Title: FastAPI Postgres Pub/Sub

Short Description: FastAPI sample that stores messages in Postgres and streams them to two app instances via LISTEN/NOTIFY.

Tags: FastAPI, PostgreSQL, WebSockets, PubSub, sample

Languages: Python, SQL

## [Feathers.js ](https://github.com/DefangLabs/samples/tree/main/samples/feathersjs)[​](#feathersjs- "Direct link to feathersjs-")

This sample project demonstrates how to deploy a FeathersJS application on to AWS using Defang. We also demonstrate how to run the application in both development and production environments using Docker Compose.

### Prerequisites[​](#prerequisites-17 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)
4. (Optional - for local development) [Node.js](https://nodejs.org/en/download/)

### Development[​](#development-16 "Direct link to Development")

For development, we use Docker to containerize the FeathersJS application. The Docker Compose configuration is defined in the `compose.dev.yaml` file.

To run the application locally, you can use the following command:

```
docker compose -f compose.dev.yaml up --build
```

### Configuration[​](#configuration-17 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-16 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-16 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-9 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Feathers.js

Short Description: A sample project demonstrating how to deploy a Feathers.js application using Defang. The application displays "DefangxFeathersjs" on the webpage.

Tags: Feathers.js, Node.js, JavaScript, sample

Languages: nodejs

## [Flask](https://github.com/DefangLabs/samples/tree/main/samples/flask)[​](#flask "Direct link to flask")

This is a basic Flask to-do app that can be deployed with Defang. Note that alongside your `.py` file, include a `requirements.txt` so that the Dockerfile can install the necessary packages with pip.

This project is intended to provide a basic understanding of how to get started with Flask on Defang. The items are stored in memory and are lost when the server is restarted. **It is not intended for production use**. If you need something production ready, you should use a managed database like Postgres or MySQL.

### Prerequisites[​](#prerequisites-18 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-17 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-18 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-17 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-17 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-10 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Flask

Short Description: A basic Flask to-do app.

Tags: Flask, Python, sample

Languages: python

## [Flask-Railpack](https://github.com/DefangLabs/samples/tree/main/samples/flask-railpack)[​](#flask-railpack "Direct link to flask-railpack")

This is a basic Flask to-do app that can be deployed with Defang. Note that alongside your `.py` file, include a `requirements.txt` so that the [Railpack](https://railpack.com/) can install the necessary packages with pip.

This project is intended to provide a basic understanding of how to get started with Flask on Defang. The items are stored in memory and are lost when the server is restarted. **It is not intended for production use**. If you need something production ready, you should use a managed database like Postgres or MySQL.

### Prerequisites[​](#prerequisites-19 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account

### Configuration[​](#configuration-19 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-18 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-18 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-11 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Flask

Short Description: A basic Flask to-do app.

Tags: Flask, Python, Railpack, sample

Languages: python

## [Go HTTP Server](https://github.com/DefangLabs/samples/tree/main/samples/golang-http)[​](#go-http-server "Direct link to go-http-server")

A very simple example of a Go service that listens on a port and returns information about the request.

### Prerequisites[​](#prerequisites-20 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-18 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-20 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-19 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-19 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-12 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Go HTTP Server

Short Description: A simple Go application that echoes back the request.

Tags: Go, HTTP, sample

Languages: golang

## [Go HTTP Form](https://github.com/DefangLabs/samples/tree/main/samples/golang-http-form)[​](#go-http-form "Direct link to go-http-form")

This Go application demonstrates a simple form submission using the standard net/http library. Users can input their first name into a form, and upon submission, they will be greeted personally by the application.

### Prerequisites[​](#prerequisites-21 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-19 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-21 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-20 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-20 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-13 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Go HTTP Form

Short Description: A simple Go application that demonstrates form submission using the net/http library.

Tags: Go, HTTP, sample

Languages: golang

## [Go & MongoDB](https://github.com/DefangLabs/samples/tree/main/samples/golang-mongodb)[​](#go--mongodb "Direct link to go--mongodb")

This sample is a task manager application that uses Go and MongoDB, deployed with Defang.

HTML and JavaScript are used for the frontend to interact with the backend via API calls. There is a `go.mod` file that includes dependencies for the Dockerfile to install.

### Prerequisites[​](#prerequisites-22 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-20 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-22 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `MONGO_INITDB_ROOT_USERNAME`[​](#mongo_initdb_root_username "Direct link to mongo_initdb_root_username")

The username for the MongoDB database.

```
defang config set MONGO_INITDB_ROOT_USERNAME
```

#### `MONGO_INITDB_ROOT_PASSWORD`[​](#mongo_initdb_root_password "Direct link to mongo_initdb_root_password")

The password for the MongoDB database.

```
defang config set MONGO_INITDB_ROOT_PASSWORD
```

#### Using MongoDB Atlas[​](#using-mongodb-atlas "Direct link to Using MongoDB Atlas")

If you want to use MongoDB Atlas, you can set the URI with `defang config set MONGO_URI` and remove the value from the `MONGO_URI` environment variable so that it is read from defang config. For example, in your `compose.yaml` file:

```
services:
  app:
    environment:
      - MONGO_URI # empty values are read from defang config
```

#### Using DocumentDB in AWS[​](#using-documentdb-in-aws "Direct link to Using DocumentDB in AWS")

If you want to use DocumentDB in AWS, you can add the `x-defang-mongodb` extension to your `compose.yaml` file:

```
services:
  db:
    x-defang-mongodb: true
```

This will automatically provision a DocumentDB cluster in your AWS account.

### Deployment[​](#deployment-21 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-21 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-14 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Go & MongoDB

Short Description: A simple Go application that manages tasks with MongoDB.

Tags: Go, MongoDB, Atlas, Task Manager, sample

Languages: golang

## [Golang & OpenAI](https://github.com/DefangLabs/samples/tree/main/samples/golang-openai)[​](#golang--openai "Direct link to golang--openai")

This sample demonstrates how to deploy a Go project with OpenAI using Defang.

### Prerequisites[​](#prerequisites-23 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-21 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-23 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `OPENAI_KEY`[​](#openai_key "Direct link to openai_key")

An API key to access the OpenAI API.

```
defang config set --name OPENAI_KEY
```

### Testing[​](#testing "Direct link to Testing")

Below are some useful commands for testing.

```
echo "Hello" | curl -H "Content-Type: application/text" -d @- https://xxxxxxxx/prompt
```

or alternatively,

```
cat prompt.txt | curl -H "Content-Type: application/text" -d @- https://xxxxxxxx/prompt
```

### Deployment[​](#deployment-22 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-22 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-15 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Go & OpenAI

Short Description: A simple Go application that interacts with the OpenAI API.

Tags: Go, OpenAI, ChatGPT, sample

Languages: golang

## [Golang-Http-Form-Railpack](https://github.com/DefangLabs/samples/tree/main/samples/golang-railpack)[​](#golang-http-form-railpack "Direct link to golang-http-form-railpack")

This Go application demonstrates a simple form submission using the standard net/http library. Users can input their first name into a form, and upon submission, they will be greeted personally by the application.

### Prerequisites[​](#prerequisites-24 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account

### Configuration[​](#configuration-24 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-23 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-23 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-16 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Go HTTP Form

Short Description: A simple Go application that demonstrates form submission using the net/http library.

Tags: Go, HTTP, Railpack, sample

Languages: golang

## [Go & REST API](https://github.com/DefangLabs/samples/tree/main/samples/golang-rest-api)[​](#go--rest-api "Direct link to go--rest-api")

This sample shows a Go HTTP server that uses a REST API to fetch data, deployed using Defang.

It serves two endpoints: `/` and `/rates`. The `/` endpoint responds with a JSON object containing the status, while the `/rates` endpoint fetches data from the [Fiscal Data Treasury API](https://fiscaldata.treasury.gov/api-documentation/) and returns the response to the client.

### Prerequisites[​](#prerequisites-25 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-22 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-25 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-24 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-24 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-17 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Go & REST API

Short Description: A simple Go application that fetches fiscal data from an API.

Tags: Go, HTTP, Fiscal Data, REST API, sample

Languages: golang

## [Go & S3](https://github.com/DefangLabs/samples/tree/main/samples/golang-s3)[​](#go--s3 "Direct link to go--s3")

This sample shows a simple Go application that uploads and downloads files from AWS S3, deployed with Defang.

### Prerequisites[​](#prerequisites-26 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-23 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-26 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `AWS_ACCESS_KEY`[​](#aws_access_key "Direct link to aws_access_key")

An AWS access key to use S3.

```
defang config set --name AWS_ACCESS_KEY
```

#### `AWS_SECRET_KEY`[​](#aws_secret_key "Direct link to aws_secret_key")

An AWS secret key to use S3.

```
defang config set --name AWS_SECRET_KEY
```

### Testing[​](#testing-1 "Direct link to Testing")

Below is a useful command for testing.

```
curl -X POST -H 'Content-Type: application/json' -d '{ "first_name" : "jane", "last_name" : "doe" }' https://xxxxxx/upload
curl https://xxxxxx/download
```

### Deployment[​](#deployment-25 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-25 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-18 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Go & S3

Short Description: A simple Go application that uploads and downloads files from AWS S3.

Tags: Go, S3, AWS, sample

Languages: golang

## [Go & Slack API](https://github.com/DefangLabs/samples/tree/main/samples/golang-slackbot)[​](#go--slack-api "Direct link to go--slack-api")

This is a simple Slackbot that takes a request and posts the message from the body to a Slack channel.

### Prerequisites[​](#prerequisites-27 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

#### Slack API Token[​](#slack-api-token "Direct link to Slack API Token")

You'll need to head to <https://api.slack.com/apps> to create a Slack App.

Make sure to:

* Give it the bot `chat:write` scope
* Install the app to your workspace
* Copy the Bot User OAuth Access Token
* Invite your bot to the channel you want it to post to using the `@botname` command in the channel (this will allow you to invite it)

### Development[​](#development-24 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-27 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `SLACK_TOKEN`[​](#slack_token "Direct link to slack_token")

This is the token you've copied previously for the Slack API.

```
defang config set SLACK_TOKEN 
```

#### `SLACK_CHANNEL_ID`[​](#slack_channel_id "Direct link to slack_channel_id")

This is the ID of the Slack channel where the bot will post messages.

```
defang config set SLACK_CHANNEL_ID 
```

### Deployment[​](#deployment-26 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-26 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-19 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

### Usage[​](#usage "Direct link to Usage")

Once the Slackbot is deployed, you can send a POST request to the `/` endpoint with a JSON body containing the message you want to post to the Slack channel. Here's an example:

```
curl 'https://raphaeltm-bot--8080.prod1.defang.dev/' \
  -H 'content-type: application/json' \
  --data-raw $'{"message":"This is your bot speaking. We\'ll be landing in 10 minutes. Please fasten your seatbelts."}'
```

Title: Go & Slack API

Short Description: A simple Slackbot that posts messages to a Slack channel.

Tags: Go, Slack, Bot, sample

Languages: golang

## [Google ADK Sample](https://github.com/DefangLabs/samples/tree/main/samples/google-adk)[​](#google-adk-sample "Direct link to google-adk-sample")

This is a simple sample demonstrating how to deploy agents build with Google ADK to Defang.

### Prerequisites[​](#prerequisites-28 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-25 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Deployment[​](#deployment-27 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-27 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (GCP)[​](#byoc-gcp "Direct link to BYOC (GCP)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your GCP account](https://cloud.google.com/sdk/docs/quickstart).
2. Run in a terminal that has access to your GCP project id:
   <!-- -->
   ```
   GCP_PROJECT_ID=my-project-12345 defang --provider=gcp compose up
   ```

#### BYOC (AWS)[​](#byoc-aws-20 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Google ADK

Short Description: A simple sample demonstrating how to deploy agents build with Google ADK to Defang.

Tags: Google ADK, Python, Agents, sample

Languages: python

## [Hasura & PostgreSQL](https://github.com/DefangLabs/samples/tree/main/samples/hasura)[​](#hasura--postgresql "Direct link to hasura--postgresql")

This sample project demonstrates how to deploy Hasura with Defang and connect it to a Postgres database.

The sample populates the database with some sample data so you can quickly start playing with the Hasura console. It sets wide open permissions on the tables as well so you can start querying or mutating the data right away.

### Prerequisites[​](#prerequisites-29 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/) Comment view5. (Optional) Install the [Hasura CLI](https://hasura.io/docs/latest/hasura-cli/install-hasura-cli/) to create migrations and update metadata for your Hasura GraphQL API

### Development[​](#development-26 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f ./compose.yaml -f ./compose.dev.yaml up --build
```

This will start the Postgres container (from `compose.dev.yaml`) and the Hasura container (from `compose.yaml` with some overrides). The Hasura console will be available at `http://localhost:8080` with the password `password`.

> Note: If you want to make changes to your database, permissions, etc. see [Editing Hasura Settings](#editing-hasura-settings).

#### Editing Hasura Settings[​](#editing-hasura-settings "Direct link to Editing Hasura Settings")

To edit the database, permissions, or any other Hasura settings such that you can deploy them to production, you should install the [Hasura CLI](https://hasura.io/docs/latest/hasura-cli/install-hasura-cli/). Then, after starting the development environment, you can run `hasura console` *inside the `./hasura` directory*. This will open the Hasura console in your browser. Any changes you make in the console will be saved to the `migrations` and `metadata` directories. When you run `defang compose up`, these changes will be applied to the production environment.

### Configuration[​](#configuration-28 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `POSTGRES_PASSWORD`[​](#postgres_password-6 "Direct link to postgres_password-6")

A password for your database.

```
defang config set POSTGRES_PASSWORD
```

#### `SSL_MODE`[​](#ssl_mode-1 "Direct link to ssl_mode-1")

Either `disable` if you're using the Defang Playground or `require` if you're using BYOC.

```
defang config set SSL_MODE
```

#### `HASURA_GRAPHQL_ADMIN_SECRET`[​](#hasura_graphql_admin_secret "Direct link to hasura_graphql_admin_secret")

A password you would like to log into Hasura with.

```
defang config set HASURA_GRAPHQL_ADMIN_SECRET
```

### Deployment[​](#deployment-28 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-28 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-21 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Hasura & PostgreSQL

Short Description: A sample project demonstrating how to deploy Hasura with Defang and connect it to a PostgreSQL database.

Tags: Hasura, GraphQL, PostgreSQL, Database, sample

Languages: SQL, GraphQL

## [HTML & CSS & JavaScript](https://github.com/DefangLabs/samples/tree/main/samples/html-css-js)[​](#html--css--javascript "Direct link to html--css--javascript")

This sample shows how to get a static HTML, CSS and JavaScript website up and running with Defang.

### Prerequisites[​](#prerequisites-30 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) authenticated with your AWS account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-27 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-29 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-29 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-29 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-22 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: HTML & CSS & JavaScript

Short Description: A simple HTML, CSS and JavaScript website running on Defang.

Tags: HTML, CSS, JavaScript, Frontend, sample

Languages: nodejs

## [Huginn](https://github.com/DefangLabs/samples/tree/main/samples/huginn)[​](#huginn "Direct link to huginn")

This sample shows how to deploy Huginn with Defang.

Huginn is a system for building agents that perform automated tasks for you online. Huginn's Agents can monitor the web, respond to events, and act on your behalf. They propagate events along a directed graph. It's like a customizable IFTTT or Zapier on your own server, ensuring data privacy.

### Prerequisites[​](#prerequisites-31 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. Have a managed database service configured and ready, such as [Neon PostgreSQL](https://neon.tech/)
3. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
4. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-28 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f ./compose.yaml -f ./compose.dev.yaml up
```

This will start the Postgres container and the Huginn container. Huginn will be available at `http://localhost:3000` with the username `admin` and password `password`.

### Configuration[​](#configuration-30 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `DATABASE_NAME`[​](#database_name "Direct link to database_name")

The name of the database.

```
defang config set DATABASE_NAME
```

#### `DATABASE_USERNAME`[​](#database_username "Direct link to database_username")

The username used with the database.

```
defang config set DATABASE_USERNAME
```

#### `DATABASE_PASSWORD`[​](#database_password "Direct link to database_password")

The password used with the database.

```
defang config set DATABASE_PASSWORD
```

#### `DATABASE_HOST`[​](#database_host "Direct link to database_host")

The host of the database.

```
defang config set DATABASE_HOST
```

### Deployment[​](#deployment-30 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-30 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-23 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Huginn

Short Description: A system for building agents that perform automated tasks for you online.

Tags: Huginn, Agents, Automation, sample

Languages: Dockerfile

## [ImgProxy](https://github.com/DefangLabs/samples/tree/main/samples/imgproxy)[​](#imgproxy "Direct link to imgproxy")

This sample shows how to deploy ImgProxy with Defang. ImgProxy is a fast and secure standalone server for resizing and converting remote images. It can be deployed using the official Docker image, as documented [here](https://docs.imgproxy.net/installation#docker).

### Prerequisites[​](#prerequisites-32 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-29 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-31 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-31 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-31 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-24 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: ImgProxy

Short Description: A fast and secure standalone server for resizing and converting remote images

Tags: Imgproxy, Images, Server, sample

Languages: N/A

## [Javalin Sample](https://github.com/DefangLabs/samples/tree/main/samples/javalin)[​](#javalin-sample "Direct link to javalin-sample")

This sample demonstrates how to deploy a very basic Javalin sample with Defang. The sample simply outputs "Defang x Javalin" on the webpage.

### Prerequisites[​](#prerequisites-33 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) authenticated with your AWS account
3. (Optional - for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Deploying[​](#deploying-1 "Direct link to Deploying")

1. Open the terminal and type `defang login`
2. Type `defang compose up` in the CLI.
3. Your app will be running within a few minutes.

### Development[​](#development-30 "Direct link to Development")

For development, we use a local container. This can be seen in the compose.yaml file. To run the sample locally use the following command:

```
docker compose up --build
```

Title: Javalin

Short Description: A short hello world application demonstrating how to deploy Javalin onto Defang.

Tags: Javalin, Java, Maven, sample

Languages: java

## [Jupyter & Postgres](https://github.com/DefangLabs/samples/tree/main/samples/jupyter-postgres)[​](#jupyter--postgres "Direct link to jupyter--postgres")

This sample shows you how to spin up a postgres database and a Jupyter notebook server. This is useful if you need to use Jupyter notebooks to read data from or persist data to a database.

### Prerequisites[​](#prerequisites-34 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-31 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f compose.dev.yaml up --build
```

### Configuration[​](#configuration-32 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `POSTGRES_PASSWORD`[​](#postgres_password-7 "Direct link to postgres_password-7")

The password to use for the postgres database.

```
defang config set POSTGRES_PASSWORD
```

#### `JUPYTER_TOKEN`[​](#jupyter_token "Direct link to jupyter_token")

The token to access your Jupyter notebook server.

```
defang config set JUPYTER_TOKEN
```

### Deployment[​](#deployment-32 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-32 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-25 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Jupyter & Postgres

Short Description: This sample shows you how to spin up a postgres database and a Jupyter notebook server.

Tags: Jupyter, Postgres, Database, sample

Languages: Python, SQL

## [Langchain & Flask](https://github.com/DefangLabs/samples/tree/main/samples/langchain)[​](#langchain--flask "Direct link to langchain--flask")

This sample is an endpoint that tells programming jokes and shows how to deploy a flask app that uses Langchain on to AWS via Defang.

### Prerequisites[​](#prerequisites-35 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) authenticated with your AWS account
3. (Optional - for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Deploying[​](#deploying-2 "Direct link to Deploying")

1. Open the terminal and type `defang login`
2. Set the environment variable `OPENAI_KEY` by typing `defang config set OPENAI_KEY`.
3. Type `defang compose up` in the CLI.
4. Your app will be running within a few minutes.

### Development[​](#development-32 "Direct link to Development")

For development, first clone the project and navigate to its directory. After such, please run the command

```
docker compose up --build
```

This will start a Docker container with the flask app which will display the result of the langchain prompt.

Title: LangChain & Flask

Short Description: A sample project demonstrating how to deploy LangChain with Flask on Defang.

Tags: LangChain, Flask, AI, Python, sample

Languages: python

## [Managed LLM](https://github.com/DefangLabs/samples/tree/main/samples/managed-llm)[​](#managed-llm "Direct link to managed-llm")

This sample application demonstrates the use of OpenAI-compatible Managed LLMs (Large Language Models) with Defang.

> Note: Using Docker Model Provider? See our [*Managed LLM with Docker Model Provider*](https://github.com/DefangLabs/samples/tree/main/samples/managed-llm-provider) sample.

Using the [Defang OpenAI Access Gateway](#defang-openai-access-gateway), the feature `x-defang-llm: true` enables you to use Managed LLMs on the Defang Playground or on platforms offered by BYOC providers (such as AWS Bedrock or GCP Vertex AI) with an OpenAI-compatible SDK.

This allows switching from OpenAI to the Managed LLMs on supported cloud platforms without modifying your application code.

You can configure the `LLM_MODEL` and `LLM_URL` for the LLM separately for local development and production environments.

* The `LLM_MODEL` is the LLM Model ID you are using.
* The `LLM_URL` is the bridge that provides authenticated access to the LLM model.

Ensure you have enabled model access for the model you intend to use. To do this, you can check your [AWS Bedrock model access](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access-modify.html) or [GCP Vertex AI model access](https://cloud.google.com/vertex-ai/generative-ai/docs/control-model-access).

To learn about available LLM models in Defang, please see our [Model Mapping documentation](https://docs.defang.io/docs/concepts/managed-llms/openai-access-gateway#model-mapping).

For more about Managed LLMs in Defang, please see our [Managed LLMs documentation](https://docs.defang.io/docs/concepts/managed-llms/managed-language-models).

#### Defang OpenAI Access Gateway[​](#defang-openai-access-gateway "Direct link to Defang OpenAI Access Gateway")

In the `compose.yaml` file, the `llm` service is used to route requests to the LLM API model. This is known as the [Defang OpenAI Access Gateway](https://docs.defang.io/docs/concepts/managed-llms/openai-access-gateway).

The `x-defang-llm` property on the `llm` service must be set to `true` in order to use the OpenAI Access Gateway when deploying with Defang.

### Prerequisites[​](#prerequisites-36 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-33 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f compose.local.yaml up --build
```

### Deployment[​](#deployment-33 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-33 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC[​](#byoc-7 "Direct link to BYOC")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

Title: Managed LLM

Short Description: An app using Managed LLMs with Defang's OpenAI Access Gateway.

Tags: LLM, OpenAI, Python, Bedrock, Vertex, sample

Languages: Python

## [Managed LLM with Docker Model Provider](https://github.com/DefangLabs/samples/tree/main/samples/managed-llm-provider)[​](#managed-llm-with-docker-model-provider "Direct link to managed-llm-with-docker-model-provider")

This sample application demonstrates using Managed LLMs with a Docker Model Provider, deployed with Defang.

> Note: This version uses a [Docker Model Provider](https://docs.docker.com/compose/how-tos/model-runner/#provider-services) for managing LLMs. For the version with Defang's [OpenAI Access Gateway](https://docs.defang.io/docs/concepts/managed-llms/openai-access-gateway), please see our [*Managed LLM Sample*](https://github.com/DefangLabs/samples/tree/main/samples/managed-llm) instead.

The Docker Model Provider allows users to run LLMs locally using `docker compose`. It is a service with `provider:` in the `compose.yaml` file. Defang will transparently fixup your project to use AWS Bedrock or Google Cloud Vertex AI models during deployment.

You can configure the `LLM_MODEL` and `LLM_URL` for the LLM separately for local development and production environments.

* The `LLM_MODEL` is the LLM Model ID you are using.
* The `LLM_URL` will be set by Docker and during deployment Defang will provide authenticated access to the LLM model in the cloud.

Ensure you have enabled model access for the model you intend to use. To do this, you can check your [AWS Bedrock model access](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access-modify.html) or [GCP Vertex AI model access](https://cloud.google.com/vertex-ai/generative-ai/docs/control-model-access).

To learn about available LLM models in Defang, please see our [Model Mapping documentation](https://docs.defang.io/docs/concepts/managed-llms/openai-access-gateway#model-mapping).

For more about Managed LLMs in Defang, please see our [Managed LLMs documentation](https://docs.defang.io/docs/concepts/managed-llms/managed-language-models).

#### Docker Model Provider[​](#docker-model-provider "Direct link to Docker Model Provider")

In the `compose.yaml` file, the `llm` service will route requests to the LLM API model using a [Docker Model Provider](https://docs.defang.io/docs/concepts/managed-llms/openai-access-gateway#docker-model-provider-services).

The `x-defang-llm` property on the `llm` service must be set to `true` in order to use the Docker Model Provider when deploying with Defang.

### Prerequisites[​](#prerequisites-37 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-34 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f compose.local.yaml up --build
```

### Deployment[​](#deployment-34 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-34 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC[​](#byoc-8 "Direct link to BYOC")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

Title: Managed LLM with Docker Model Provider

Short Description: An app using Managed LLMs with a Docker Model Provider, deployed with Defang.

Tags: LLM, Python, Bedrock, Vertex, Docker Model Provider, sample

Languages: Python

## [Mastra Extended](https://github.com/DefangLabs/samples/tree/main/samples/mastra-extended)[​](#mastra-extended "Direct link to mastra-extended")

This sample shows a multi-service AI app built with [Mastra](https://mastra.ai/), Next.js, PostgreSQL (with pgvector), Redis, and BullMQ, deployed with Defang from a single Docker Compose file.

A background worker generates sample tasks and events with an LLM, pushes them to a queue, then they get classified and stored with vector embeddings in PostgreSQL for semantic search. A Mastra-powered chat agent uses tools to inspect the current state before answering questions.

### Prerequisites[​](#prerequisites-38 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-35 "Direct link to Development")

To run the application locally for development, use the development compose file:

```
docker compose -f compose.dev.yaml up --build
```

This will:

* Start the Next.js app on `http://localhost:3000`
* Start PostgreSQL on port 5432
* Start Redis on port 6379
* Start a background worker for item classification
* Start Docker model-provider services for chat + embeddings

Local development uses:

* `ai/qwen2.5:3B-Q4_K_M` for chat/tool-calling
* `mxbai-embed-large` for embeddings

This matches the CrewAI sample's local model setup and relies on Docker Model Runner / model-provider support being available in your local Docker installation. The first run will download both models, so startup can take a few minutes. If `docker compose -f compose.dev.yaml up` fails with `exec: "model": executable file not found in $PATH`, your local Docker installation does not have Docker Model Runner enabled yet. To keep iteration practical on CPU-only setups, `compose.dev.yaml` enables `LOCAL_FAST_DATA=true`, which uses deterministic sample generation and classification locally while still exercising the real chat and embedding services.

In deployed environments, the app uses dedicated `chat` and `embedding` model services defined in `compose.yaml`. Defang injects OpenAI-compatible `CHAT_URL` / `CHAT_MODEL` and `EMBEDDING_URL` / `EMBEDDING_MODEL` environment variables automatically, so the application code stays platform-independent.

### Configuration[​](#configuration-33 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration). Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `POSTGRES_PASSWORD`[​](#postgres_password-8 "Direct link to postgres_password-8")

The password for your PostgreSQL database. You need to set this before deploying for the first time.

*You can easily set this to a random string using `defang config set POSTGRES_PASSWORD --random`*

### Usage[​](#usage-1 "Direct link to Usage")

1. Open the app.

2. Click **Generate sample items**.

3. Watch the worker create 10 tasks and 10 events, then fan out per-item classify/embed jobs (progress updates in real time via SSE).

4. Ask questions like:

   <!-- -->

   * `What should I look at first?`
   * `Summarize the tasks and events.`
   * `Which items seem related?`
   * `Find events similar to the deploy rollback.`

### Deployment[​](#deployment-35 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-35 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (Deploy to your own AWS or GCP cloud account)[​](#byoc-deploy-to-your-own-aws-or-gcp-cloud-account "Direct link to BYOC (Deploy to your own AWS or GCP cloud account)")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

The default sample uses Defang's managed model provider services:

* `chat` uses `chat-default`
* `embedding` uses `embedding-default`

If you want to pin different models, edit the `provider.options.model` values in [compose.yaml](https://docs.defang.io/workspaces/defang-global/projects/samples/samples/mastra-extended/compose.yaml).

> \[!WARNING] **Extended deployment time:** This sample creates a managed PostgreSQL database which may take upwards of 20 minutes to provision on first deployment. Subsequent deployments are much faster (2-5 minutes).

Title: Mastra Extended

Short Description: A small Defang sample where background jobs classify and embed tasks and events, and a Mastra copilot answers questions with tools.

Tags: Mastra, Next.js, PostgreSQL, Redis, BullMQ, AI, Agents, sample

Languages: TypeScript, JavaScript, Docker

## [Mastra and Next.js Sample](https://github.com/DefangLabs/samples/tree/main/samples/mastra-nextjs)[​](#mastra-and-nextjs-sample "Direct link to mastra-and-nextjs-sample")

This sample shows how to deploy an AI-powered GitHub repository chat tool using [Mastra](https://mastra.ai/), a TypeScript AI framework. Mastra-nextjs allows you to chat with and understand any GitHub repository by fetching file trees, contents, pull requests, and issues, making it easy to navigate and understand codebases of any size.

### Features[​](#features "Direct link to Features")

* **Repository Analysis**: Enter a GitHub repository URL and instantly start a conversation about it
* **Code Exploration**: Navigate file trees, view file contents, and understand code structure
* **PR & Issue Access**: Query information about pull requests and issues directly in chat
* **Large Codebase Support**: Powered by Google's Gemini Flash model with its large context window
* **Intuitive UI**: Built with assistant-UI for a seamless chat experience with retries, copy, and message branching

### Prerequisites[​](#prerequisites-39 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-36 "Direct link to Development")

To run the application locally for development, use the development compose file:

```
docker compose -f compose.dev.yaml up
```

#### `GOOGLE_GENERATIVE_AI_API_KEY`[​](#google_generative_ai_api_key "Direct link to google_generative_ai_api_key")

When running locally with Docker Compose, you will need to set the `GOOGLE_GENERATIVE_AI_API_KEY` environment variable to your GCP API key. You can get the API key from the [Google AI Studio](https://aistudio.google.com/).

#### `LLM_MODEL`[​](#llm_model "Direct link to llm_model")

When running locally with Docker Compose, you are limited to the models on this list: [Google models](https://mastra.ai/models/providers/google).

This will:

* Start PostgreSQL with volume persistence for local development
* Expose PostgreSQL on port 5432 for direct access if needed
* Start the Next.js application on port 3000 with hot reload

You can access mastra-nextjs at `http://localhost:3000` once the containers are running.

### Configuration[​](#configuration-34 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration). Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `POSTGRES_PASSWORD`[​](#postgres_password-9 "Direct link to postgres_password-9")

The password for your Postgres database. You need to set this before deploying for the first time.

*You can easily set this to a random string using `defang config set POSTGRES_PASSWORD --random`*

#### `LLM_MODEL`[​](#llm_model-1 "Direct link to llm_model-1")

*You can easily set this using `defang config set LLM_MODEL=<SELECTED_MODEL>`*

The large language model to use for the AI-powered chat. This can be set to models like `anthropic.claude-3-5-sonnet-20241022-v2:0` for AWS or `gemini-2.5-flash` for Google Cloud. Here is a list of supported models for [GCP](https://ai-sdk.dev/providers/ai-sdk-providers/google-vertex#model-capabilities) and [AWS](https://ai-sdk.dev/providers/ai-sdk-providers/amazon-bedrock#model-capabilities). For AWS make sure you [request access](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html) to the model in AWS Bedrock console and for GCP make sure you have [request access](https://docs.cloud.google.com/marketplace/docs/enable-ai-models#get-ai-models) to the model in GCP Vertex AI console.

#### `DB_SSL`[​](#db_ssl "Direct link to db_ssl")

*You can easily set this using `defang config set DB_SSL=<true|false>`*

Set to `true` to enable SSL for AWS and GCP. Set to `false` to disable SSL, which is used for Defang Playground.

#### `GITHUB_TOKEN` (Optional)[​](#github_token-optional "Direct link to github_token-optional")

*You can easily set this using `defang config set GITHUB_TOKEN=<YOUR_GITHUB_TOKEN>`*

A [GitHub personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token) to increase API rate limits when fetching repository data. This is optional but recommended for better performance. Setting the permissions to public repositories only is sufficient, unless you want to access private repositories that you have access to.

### Usage[​](#usage-2 "Direct link to Usage")

1. Enter a GitHub repository URL in the input field (e.g., `https://github.com/DefangLabs/defang`)

2. Start chatting with mastra-nextjs about the repository

3. Use commands like:

   <!-- -->

   * "Show me the file structure"
   * "What are the recent pull requests?"
   * "Explain the purpose of \[filename]"
   * "How many open issues are there?"

### How It Works[​](#how-it-works "Direct link to How It Works")

Mastra-nextjs uses a tool-based approach rather than traditional RAG systems, making it more efficient for large codebases. When you provide a repository URL, Mastra-nextjs uses tools to:

1. Fetch the repository's file tree
2. Access file contents on demand
3. Retrieve information about pull requests and issues
4. Store conversation history using Mastra's memory package

The large context window of Gemini Flash allows the agent to hold more code in memory, making the conversation more coherent and informed.

### Deployment[​](#deployment-36 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-36 "Direct link to Defang Playground")

When deploying, the Playground environment is limited by resource constraints, so only Google Gemini flash or flash-lite models are supported. That said, I recommend using one of the flash models from this [list](https://ai-sdk.dev/providers/ai-sdk-providers/google-vertex#model-capabilities). If you want to use other models, please use [Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (Deploy to your own AWS or GCP cloud account)[​](#byoc-deploy-to-your-own-aws-or-gcp-cloud-account-1 "Direct link to BYOC (Deploy to your own AWS or GCP cloud account)")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

> \[!WARNING] > **Extended deployment time:** This sample creates a managed PostgreSQL database which may take upwards of 20 minutes to provision on first deployment. Subsequent deployments are much faster (2-5 minutes).

This sample was based off of mastra's [repo-chat sample](https://github.com/mastra-ai/repo-base).

Title: Mastra & Next.js

Short Description: An AI-powered tool for chatting with GitHub repositories using Mastra and Google Gemini.

Tags: AI, GitHub, Mastra, Next.js, PostgreSQL, TypeScript, sample

Languages: TypeScript, JavaScript, Docker

## [MCP](https://github.com/DefangLabs/samples/tree/main/samples/mcp)[​](#mcp "Direct link to mcp")

This is a sample of a Model Context Protocol (MCP) chatbot application built with Next.js, Python, and Anthropic Claude, deployed using Defang.

This example uses Docker's [`mcp/time`](https://hub.docker.com/r/mcp/time) image as a base for the MCP Server (with MCP tools included), but it can be adapted to use any of the Docker [MCP images](https://hub.docker.com/u/mcp).

#### How It Works[​](#how-it-works-1 "Direct link to How It Works")

##### Service 1 (Web Server with UI)[​](#service-1-web-server-with-ui "Direct link to Service 1 (Web Server with UI)")

The web server and UI are built in Next.js (see `/service-1/src/app`). The web server includes a forwarding action to connect to the MCP Client.

##### Service 2 (MCP Client and MCP Server)[​](#service-2-mcp-client-and-mcp-server "Direct link to Service 2 (MCP Client and MCP Server)")

The [MCP Client](https://modelcontextprotocol.io/quickstart/client) is written in Python and ran in a `venv` virtual environment. The MCP server is provided by the Docker `mcp/time` image. The MCP Server communicates with the MCP Client in a [Quart](https://quart.palletsprojects.com/en/latest/index.html) app (i.e. Asynchronous Server Gateway Interface (ASGI) version of Flask) through the `stdio` transport method, as seen in `/service-2/main.py`. For more on MCP transport methods, see [here](https://modelcontextprotocol.io/docs/concepts/transports).

Here's a breakdown of what happens when a user interacts with the UI:

1. When a user submits a query to the chatbot, the browser sends a request to the Next.js web server.
2. The Next.js web server will forward this request to the MCP Client via a REST endpoint.
3. The MCP Client processes the request by interacting with the Anthropic (Claude) API and tools available through the MCP Server.
4. Once the response is generated, it is sent back to the Next.js web server and displayed to the user in the UI.

### Prerequisites[​](#prerequisites-40 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-37 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-35 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `ANTHROPIC_API_KEY`[​](#anthropic_api_key "Direct link to anthropic_api_key")

An API key for accessing the [Anthropic Claude API](https://docs.anthropic.com/en/api/getting-started).

```
defang config set ANTHROPIC_API_KEY
```

### Deployment[​](#deployment-37 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-37 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC[​](#byoc-9 "Direct link to BYOC")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

Title: Model Context Protocol (MCP) Chatbot

Short Description: An MCP (Model Context Protocol) chatbot assistant built with Next.js, Python, and Anthropic Claude.

Tags: MCP, Next.js, Python, Quart, Claude, AI, Anthropic, TypeScript, React, JavaScript, sample

Languages: nodejs, python

## [Metabase & Postgres](https://github.com/DefangLabs/samples/tree/main/samples/metabase)[​](#metabase--postgres "Direct link to metabase--postgres")

Metabase is a simple and powerful analytics tool which lets anyone learn and make decisions from their company’s data. This sample demonstrates how to deploy Metabase with Defang. In development, we run a postgres container and in production, we use a managed postgres service. To build the sample, we used Neon, because of their simplicity and generous free tier.

### Prerequisites[​](#prerequisites-41 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. Have a managed database service configured and have the connection details ready.
3. (optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc), make sure you have properly [authenticated your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html).

### Local[​](#local "Direct link to Local")

For development, we use a Postgres container. The Postgres container is defined in the `compose.dev.yaml` file. The Metabase container is defined in the `compose.yaml` file, with some overrides in the `compose.dev.yaml` file so it can correctly connect to the development database container.

To start the development environment, run `docker compose -f ./compose.yaml -f ./compose.dev.yaml up`. This will start the Postgres container and the Metabase container. Metabase will be available at `http://localhost:3000`.

Since Metabase is a self contained application, there isn't an actual development process, but you can use the development environment to see how Metabase works.

### Deploying[​](#deploying-3 "Direct link to Deploying")

1. Open the terminal and type `defang login`
2. Add your database connection details using `defang config` by typing `defang config set <CONFIG_VAL>` where `<CONFIG_VAL>` is the each of the following `MB_DB_DBNAME`, `MB_DB_HOST`, `MB_DB_PORT`, `MB_DB_USER`, `MB_DB_PASS` (to set the database name, host, port, user, and password respectively). For example `defang config set MB_DB_DBNAME` and pasting your database name.
3. Type `defang compose up` in the CLI.
4. Your app will be running within a few minutes.

Title: Metabase & PostgreSQL

Short Description: A simple Metabase configuration with a PostgreSQL database.

Tags: Metabase, PostgreSQL, Analytics, Database, sample

Languages: SQL

## [n8n](https://github.com/DefangLabs/samples/tree/main/samples/n8n)[​](#n8n "Direct link to n8n")

This sample shows how to get a [n8n](https://n8n.io/) app up using PostgreSQL as a database and running with Defang. We based it in part on the [original sample](https://github.com/n8n-io/n8n-hosting/tree/main/docker-compose/withPostgres) from the n8n team, but we have adapted it to be consistent with the way our other samples are configured.

### Video Tutorial[​](#video-tutorial "Direct link to Video Tutorial")

### Prerequisites[​](#prerequisites-42 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-38 "Direct link to Development")

To run the application locally for development, use the development compose file:

```
docker compose -f compose.dev.yaml up
```

This will:

* Start PostgreSQL with volume persistence for local development
* Expose PostgreSQL on port 5432 for direct access if needed
* Start n8n on port 5678 with volume persistence

You can access n8n at `http://localhost:5678` once the containers are running.

### Configuration[​](#configuration-36 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration). Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `POSTGRES_PASSWORD`[​](#postgres_password-10 "Direct link to postgres_password-10")

The password for your Postgres database. You need to set this before deploying for the first time.

*You can easily set this to a random string using `defang config set POSTGRES_PASSWORD --random`*

#### `N8N_ENCRYPTION_KEY`[​](#n8n_encryption_key "Direct link to n8n_encryption_key")

The encryption key for your n8n instance. This is used to encrypt sensitive data in the database.

*You can easily set this to a random string using `defang config set N8N_ENCRYPTION_KEY --random`*

#### `DB_POSTGRESDB_SSL_ENABLED`[​](#db_postgresdb_ssl_enabled "Direct link to db_postgresdb_ssl_enabled")

Set to `true` to enable SSL. Set to `false` to disable SSL.

#### `DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED`[​](#db_postgresdb_ssl_reject_unauthorized "Direct link to db_postgresdb_ssl_reject_unauthorized")

Set to `true` to reject unauthorized certificates. Set to `false` to accept unauthorized certificates. Counterintuitive, but leave this as **true** to **disable SSL** (required for local dev and playground).

### Deployment[​](#deployment-38 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-38 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (Deploy to you own AWS or GCP cloud account)[​](#byoc-deploy-to-you-own-aws-or-gcp-cloud-account "Direct link to BYOC (Deploy to you own AWS or GCP cloud account)")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

> \[!WARNING] **Extended deployment time:** This sample creates a managed PostgreSQL database which may take upwards of 20 minutes to provision on first deployment. Subsequent deployments are much faster (2-5 minutes).

Title: n8n

Short Description: A n8n app running on Defang.

Tags: n8n, PostgreSQL, Docker, sample

Languages: Docker, Shell

## [Next.js](https://github.com/DefangLabs/samples/tree/main/samples/nextjs)[​](#nextjs "Direct link to nextjs")

A basic Next.js app with a Dockerfile and compose.yaml ready to deploy to AWS with [Defang](https://defang.io).

### Steps[​](#steps "Direct link to Steps")

1. [Install Defang](https://docs.defang.io/docs/getting-started/installing)
2. [Authenticate with Defang](https://docs.defang.io/docs/getting-started/authenticating)
3. (optional) [Authenticate with AWS](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
4. Run `defang compose up` in the root of this project

### Static Files (Experimental)[​](#static-files-experimental "Direct link to Static Files (Experimental)")

This example supports deployment to AWS as a static site. Static files will be copied to an S3 bucket. In the *affordable* deployment mode (the default), the static files will be served over HTTP from an S3 bucket.

info

Note that some top-level domains (TLDs), such as `.app`, require HSTS, which will disallow browsers from accessing the site over HTTP. If you want to use such a TLD, you must serve the static files over HTTPS by using either the *balanced* or *high\_availability* deployment mode.

To serve the static files over HTTPS, use either the *balanced* or *high\_availability* deployment mode, which will create a CloudFront distribution in front of the S3 bucket.

To deploy this project as a static site, run:

```
defang compose up -f compose.static.yaml --provider=aws --mode=balanced
```

Title: Next.js

Short Description: A basic Next.js app.

Tags: Next.js, React, Docker, Node.js, TypeScript, JavaScript, Static, sample

Languages: nodejs

## [Next.js Blog](https://github.com/DefangLabs/samples/tree/main/samples/nextjs-blog)[​](#nextjs-blog "Direct link to nextjs-blog")

This template is a starter project developed using Next.js designed to make it easy to launch a blog. It offers an excellent starting point to help you publish your content by simply modifying the MDX files included in `_posts` directory. We have prepared all the necessary files for deployment. By spending just a few minutes setting up the environment, as detailed in the prerequisites, and executing the commands in our step-by-step guide, your website will be ready to go live in no time!

### Essential Setup Files[​](#essential-setup-files "Direct link to Essential Setup Files")

1. A [Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) to describe the basic image of your applications.
2. A [docker-compose file](https://docs.defang.io/docs/concepts/compose) to define and run multi-container Docker applications.
3. A [.dockerignore](https://docs.docker.com/build/building/context/#dockerignore-files) file to comply with the size limit (10MB).

### Prerequisite[​](#prerequisite "Direct link to Prerequisite")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc), make sure you have properly [authenticated your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) Plus, make sure that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.

### A Step-by-Step Guide[​](#a-step-by-step-guide "Direct link to A Step-by-Step Guide")

1. Edit your content in the `_posts` directory
2. Open the terminal and type `defang login`
3. Type `defang compose up` in the CLI
4. Now your application will be launched

Title: Next.js Blog

Short Description: A starter project developed using Next.js designed to make it easy to launch a blog.

Tags: Next.js, Blog, Node.js, React, MDX, TypeScript, JavaScript, sample

Languages: nodejs

## [Next.js & Claude](https://github.com/DefangLabs/samples/tree/main/samples/nextjs-claude)[​](#nextjs--claude "Direct link to nextjs--claude")

This sample shows a Next.js and Claude application deployed using Defang. It uses Anthropic API for its chatbot functionality.

### Prerequisites[​](#prerequisites-43 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-39 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f compose.dev.yaml up --build
```

### Configuration[​](#configuration-37 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `ANTHROPIC_API_KEY`[​](#anthropic_api_key-1 "Direct link to anthropic_api_key-1")

An API key for Anthropic AI.

```
defang config set ANTHROPIC_API_KEY
```

### Deployment[​](#deployment-39 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-39 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC[​](#byoc-10 "Direct link to BYOC")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

Title: Next.js & Claude

Short Description: A fun chatbot created with Next.js and Claude.

Tags: Next.js, TypeScript, React, JavaScript, Chatbot, Claude, AI, Anthropic, sample

Languages: TypeScript

## [Next.js CV](https://github.com/DefangLabs/samples/tree/main/samples/nextjs-cv)[​](#nextjs-cv "Direct link to nextjs-cv")

This is a sample of a Next.js CV web application, deployed with Defang.

The template is based off of the repository <https://github.com/BartoszJarocki/cv> on GitHub.

### Prerequisites[​](#prerequisites-44 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-40 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-38 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-40 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-40 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC[​](#byoc-11 "Direct link to BYOC")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

Title: Next.js CV

Short Description: A Next.js web app that displays a minimalist CV.

Tags: Next.js, React, TypeScript, JavaScript, sample

Languages: nodejs

## [Nextra](https://github.com/DefangLabs/samples/tree/main/samples/nextjs-documentation)[​](#nextra "Direct link to nextra")

This template is a documentation starter project developed using Nextra, designed to streamline the creation of your documentation and quickly build a digital knowledgebase. You can add content easily by simply adding markdown files. This code-free solution requires no adjustments to the basic structure. We have prepared all the essential files for deployment. By spending just a few minutes setting up the environment, as detailed in the prerequisites, and executing the commands in our step-by-step guide, your website will be ready to go live in no time!

### Essential Setup Files[​](#essential-setup-files-1 "Direct link to Essential Setup Files")

1. A [Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) to describe the basic image of your applications.
2. A [docker-compose file](https://docs.defang.io/docs/concepts/compose) to define and run multi-container Docker applications.
3. A [.dockerignore](https://docs.docker.com/build/building/context/#dockerignore-files) file to comply with the size limit (10MB).

### Prerequisite[​](#prerequisite-1 "Direct link to Prerequisite")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc), make sure you have properly [authenticated your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) Plus, make sure that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.

### A Step-by-Step Guide[​](#a-step-by-step-guide-1 "Direct link to A Step-by-Step Guide")

1. Open the terminal and type `defang login`
2. Type `defang compose up` in the CLI
3. Now your application will be launched

Title: Nextra

Short Description: A documentation starter project developed using Nextra designed to streamline the creation of your documentation.

Tags: Next.js, Documentation, Nextra, Knowledgebase, Node.js, JavaScript, TypeScript, sample

Languages: nodejs

## [Next.js & Postgres](https://github.com/DefangLabs/samples/tree/main/samples/nextjs-postgres)[​](#nextjs--postgres "Direct link to nextjs--postgres")

This is a sample Next.js application that uses Postgres as a database. It is a simple example that demonstrates how to connect to a Postgres database from a Next.js application: on each request it takes the user's IP address, geo-locates it, and stores the result in the database, then displays the last 20 results on the home page.

### Prerequisites[​](#prerequisites-45 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) authenticated with your AWS account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-41 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f compose.dev.yaml up --build
```

### Configuration[​](#configuration-39 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration). Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `POSTGRES_PASSWORD`[​](#postgres_password-11 "Direct link to postgres_password-11")

A password that will be used to connect to the Postgres database.

*You can easily set this to a random string using `defang config set POSTGRES_PASSWORD --random`*

### `POSTGRES_SSL`[​](#postgres_ssl "Direct link to postgres_ssl")

We recommend enabling SSL when deploying to AWS and GCP to use managed Postgres instances on cloud providers like AWS RDS or GCP Cloud SQL. If you are using such a managed database, set this value to `true`. If you are using the Defang Playground Postgres instance or want to use a containerized Postgres instance without SSL, set this value to `false`.

*You can easily set this using `defang config set POSTGRES_SSL=<true|false>`*

### Deploying[​](#deploying-4 "Direct link to Deploying")

1. Open the terminal and type `defang login`
2. Use the [`defang config`](https://docs.defang.io/docs/concepts/compose#configuration) command to setup environment variables.
3. Type `defang compose up` in the CLI.
4. Your app will be running within a few minutes.

Title: Next.js & Postgres

Short Description: A sample Next.js application that uses Postgres as a database.

Tags: Next.js, Postgres, Database, Node.js, sample

Languages: TypeScript, JavaScript

## [Next.js-Railpack](https://github.com/DefangLabs/samples/tree/main/samples/nextjs-railpack)[​](#nextjs-railpack "Direct link to nextjs-railpack")

A simple Next.js app with a compose.yaml, ready to deploy to AWS using [Defang](https://defang.io). The container image is automatically built by [Railpack](https://railpack.com/).

### Steps[​](#steps-1 "Direct link to Steps")

1. [Install Defang](https://docs.defang.io/docs/getting-started/installing)
2. [Authenticate with Defang](https://docs.defang.io/docs/getting-started/authenticating)
3. (optional) [Authenticate with AWS](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
4. Run `defang compose up` in the root of this project

Title: Next.js

Short Description: A basic Next.js app.

Tags: Next.js, React, Node.js, TypeScript, JavaScript, Static, Railpack, sample

Languages: nodejs

## [NocoDB](https://github.com/DefangLabs/samples/tree/main/samples/nocodb)[​](#nocodb "Direct link to nocodb")

This sample demonstrates how to deploy a Nocodb instance with Defang. It's an open source alternative to AirTable, that makes it easy to organize and manage data.

### Prerequisites[​](#prerequisites-46 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. A Postgres database
3. S3 bucket and credentials, or S3 compatible alternative
4. (Optional) If you are using [Defang BYOC](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) authenticated with your AWS account
5. (Optional - for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Configuration[​](#configuration-40 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration). Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `NC_DB`[​](#nc_db "Direct link to nc_db")

Postgres database URL. NocoDB uses an odd, custom format for this. It should look like this: `pg://my.pg.hostname.com:5432?u=postgres&p=password&d=nocodb&ssl=true`. [Neon](https://neon.tech/) has a free tier and is easy to set up.

#### `NC_S3_ENDPOINT`[​](#nc_s3_endpoint "Direct link to nc_s3_endpoint")

S3 endpoint URL. [Wasabi](https://wasabi.com/) is a simple option for this if you don't already have an S3 bucket or don't have an AWS account you can use.

#### `NC_S3_BUCKET_NAME`[​](#nc_s3_bucket_name "Direct link to nc_s3_bucket_name")

Name of the S3 bucket.

#### `NC_S3_REGION`[​](#nc_s3_region "Direct link to nc_s3_region")

Region of the S3 bucket.

#### `NC_S3_ACCESS_KEY`[​](#nc_s3_access_key "Direct link to nc_s3_access_key")

Access key for the S3 bucket.

#### `NC_S3_ACCESS_SECRET`[​](#nc_s3_access_secret "Direct link to nc_s3_access_secret")

Access secret for the S3 bucket.

### Deploying[​](#deploying-5 "Direct link to Deploying")

1. Open the terminal and type `defang login`
2. Use the deploy the configuration values specified above using the [`defang config set` command](https://docs.defang.io/docs/concepts/configuration).
3. Type `defang compose up` in the CLI.
4. Your app will be running within a few minutes.

### Development[​](#development-42 "Direct link to Development")

For development, we use a local postgres container and a volume mount for file uploads. To run the app locally, just run:

`docker compose --file compose.dev.yaml up --build`

Title: NocoDB

Short Description: An open source alternative to AirTable.

Tags: NocoDB, sample

Languages: Dockerfile

## [Node.js & SocketIO](https://github.com/DefangLabs/samples/tree/main/samples/nodejs-chatroom)[​](#nodejs--socketio "Direct link to nodejs--socketio")

This is a minimal chat application that shows how to use Socket.IO with Node.js with minimal code deployed with Defang.

### Prerequisites[​](#prerequisites-47 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-43 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-41 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-41 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-41 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-26 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud)

Title: Node.js & SocketIO

Short Description: A minimal chat application that shows how to use Socket.IO with Node.js.

Tags: Node.js, Chat, Socket.IO, JavaScript, sample

Languages: nodejs

## [Node.js & Express](https://github.com/DefangLabs/samples/tree/main/samples/nodejs-express)[​](#nodejs--express "Direct link to nodejs--express")

This Node.js application, built with Express.js, is designed to inspect and display detailed information about incoming HTTP requests. It supports all HTTP methods and provides insights into the request path, method, headers, query parameters, and body. Note alongside your project, you should also include a package.json file that includes the relevant metadata such as package dependencies, scripts, project verrsions so that the Dockerfile can install necessary dependencies.

### Prerequisites[​](#prerequisites-48 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-44 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-42 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-42 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-42 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-27 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

Title: Node.js & Express

Short Description: A Node.js application that inspects and displays detailed information about incoming HTTP requests.

Tags: Node.js, Express, HTTP, Request, Inspector, JavaScript, sample

Languages: nodejs

## [Node.js Express Form](https://github.com/DefangLabs/samples/tree/main/samples/nodejs-form)[​](#nodejs-express-form "Direct link to nodejs-express-form")

This is a basic Node.js application using the Express framework to demonstrate handling a form submission. The application serves an HTML form where users can input their first name and then greets them personally upon submission.

### Prerequisites[​](#prerequisites-49 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-45 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-43 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-43 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-43 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-28 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud):

Title: Node.js Express Form

Short Description: A Node.js application that handles form submissions using the Express framework.

Tags: Node.js, Express, HTTP, JavaScript, sample

Languages: nodejs

## [Node.js HTTP Server](https://github.com/DefangLabs/samples/tree/main/samples/nodejs-http)[​](#nodejs-http-server "Direct link to nodejs-http-server")

This example shows how to build a minimal Node.js application using the [Node.js](https://nodejs.org/) runtime.

### Prerequisites[​](#prerequisites-50 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-46 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-44 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-44 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-44 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-29 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud):

Title: Node.js HTTP Server

Short Description: A simple Node.js application that creates an HTTP server.

Tags: Node.js, HTTP, Server, sample

Languages: nodejs

## [Node.js & OpenAI](https://github.com/DefangLabs/samples/tree/main/samples/nodejs-openai)[​](#nodejs--openai "Direct link to nodejs--openai")

A simple Node.js and OpenAI app deployed using Defang.

### Prerequisites[​](#prerequisites-51 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-47 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-45 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `OPENAI_KEY`[​](#openai_key-1 "Direct link to openai_key-1")

An API key to access the OpenAI API.

```
defang config set OPENAI_KEY
```

### Testing[​](#testing-2 "Direct link to Testing")

Below are some useful commands for testing.

```
echo "Hello" | curl -H "Content-Type: text/plain" -d @- https://xxxxxxxx/prompt
```

or alternatively,

```
cat prompt.txt | curl -H "Content-Type: application/text" -d @- https://xxxxxxxx/prompt
```

### Deployment[​](#deployment-45 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-45 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-30 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud):

Title: Node.js & OpenAI

Short Description: A simple Node.js application that interacts with the OpenAI API.

Tags: Node.js, OpenAI, API, JavaScript, sample

Languages: nodejs

## [Node.js & React & PostgreSQL](https://github.com/DefangLabs/samples/tree/main/samples/nodejs-react-postgres)[​](#nodejs--react--postgresql "Direct link to nodejs--react--postgresql")

This sample project demonstrates how to deploy a full-stack application using React for the frontend, Node.js for the backend, and PostgreSQL for the database.

In production, the Node.js server also serves the built React app, so one service handles both the UI and the API. The database is a Defang managed Postgres instance.

### Prerequisites[​](#prerequisites-52 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-48 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f compose.dev.yaml up --build
```

Or run without using Docker by doing the following:

1. run `npm install` to install the nodejs dependencies in both the `client` directory and the `server` directory
2. create or modify the .env file in both the `client` directory and the `server` directory with localhost, or create a .env.local to override the .env file.
3. run `npm start`

### Configuration[​](#configuration-46 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `POSTGRES_PASSWORD`[​](#postgres_password-12 "Direct link to postgres_password-12")

The password for the Postgres database.

```
defang config set POSTGRES_PASSWORD
```

The server connects to Postgres over SSL, as Defang managed Postgres requires. If you deploy to the Playground, where Postgres runs as a plain container, set `POSTGRES_SSL=false` on the `app` service.

### Deployment[​](#deployment-46 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-46 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-31 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud):

Title: Node.js & React & PostgreSQL

Short Description: A full-stack to-do list application.

Tags: Node.js, React, Full-stack, PostgreSQL, JavaScript, SQL, sample

Languages: nodejs

## [Node.js & REST API](https://github.com/DefangLabs/samples/tree/main/samples/nodejs-rest-api)[​](#nodejs--rest-api "Direct link to nodejs--rest-api")

This is a simple Node.js application that uses Express.js to create a REST API. It has two endpoints: one that returns a status message, and another that fetches and returns average interest rates data from the U.S. Department of the Treasury's Fiscal Data API.

### Prerequisites[​](#prerequisites-53 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-49 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-47 "Direct link to Configuration")

For this sample, you will not need to provide [configuration](https://docs.defang.io/docs/concepts/configuration).

If you wish to provide configuration, see below for an example of setting a configuration for a value named `API_KEY`.

```
defang config set API_KEY
```

### Deployment[​](#deployment-47 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-47 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-32 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud):

Title: Node.js & REST API

Short Description: A simple Node.js application that creates a REST API and fetches data from the U.S. Department of the Treasury's Fiscal Data API.

Tags: Node.js, REST API, JavaScript, sample

Languages: nodejs

## [Node.js & S3](https://github.com/DefangLabs/samples/tree/main/samples/nodejs-s3)[​](#nodejs--s3 "Direct link to nodejs--s3")

A simple Node.js and AWS S3 app deployed using Defang.

### Prerequisites[​](#prerequisites-54 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-50 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-48 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `AWS_ACCESS_KEY`[​](#aws_access_key-1 "Direct link to aws_access_key-1")

An API key to access AWS services.

```
defang config set AWS_ACCESS_KEY
```

#### `AWS_SECRET_KEY`[​](#aws_secret_key-1 "Direct link to aws_secret_key-1")

An API key to access AWS services.

```
defang config set AWS_SECRET_KEY
```

### Testing[​](#testing-3 "Direct link to Testing")

Below is a useful command for testing.

```
curl -X POST -H 'Content-Type: application/json' -d '{ "first_name" : "jane", "last_name" : "doe" }' https://xxxxxx/upload
curl https://xxxxxx/download
```

### Deployment[​](#deployment-48 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-48 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-33 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud):

Title: Node.js & S3

Short Description: A simple Node.js application that uploads and downloads files from AWS S3.

Tags: Node.js, S3, AWS, JavaScript, sample

Languages: nodejs

## [Nounly](https://github.com/DefangLabs/samples/tree/main/samples/nounly)[​](#nounly "Direct link to nounly")

Nounly (also known as Noun.ly) is a URL shortener website built with Go, JavaScript and Redis, and can be deployed with Defang as a sample.

The URL shortener appends a noun to the end of a Defang-deployed URL to create the new shortened URL. For reference, you can view the real [Noun.ly](https://noun.ly/) website here.

*"Share the web through words."* - Creator of Nounly

### Prerequisites[​](#prerequisites-55 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-51 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Configuration[​](#configuration-49 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration):

> Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `PROJECT_HONEYPOT_KEY`[​](#project_honeypot_key "Direct link to project_honeypot_key")

A [Project Honey Pot API](https://www.projecthoneypot.org/index.php) key that is used for anti-spamming. It is optional, but please include a non-empty string value.

```
defang config set PROJECT_HONEYPOT_KEY
```

#### `SHARED_SECRETS`[​](#shared_secrets "Direct link to shared_secrets")

A JSON object string of shared secrets that are used for API clients. It is optional, and the default value is `{}` if you do not have any shared secrets.

```
defang config set SHARED_SECRETS
```

### Deployment[​](#deployment-49 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-49 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC[​](#byoc-12 "Direct link to BYOC")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

Title: Nounly

Short Description: A URL shortener website built with Go, JavaScript, and Redis.

Tags: Go, JavaScript, Redis, URL shortener, sample

Languages: golang, javascript

## [Ollama](https://github.com/DefangLabs/samples/tree/main/samples/ollama)[​](#ollama "Direct link to ollama")

This sample demonstrates how to deploy [Ollama](https://ollama.com/) with Defang, along with a Next.js frontend using the [AI SDK](https://www.npmjs.com/package/ai) for smooth streaming conversations. By default it runs a very small model (`llama3.2:1b`) which can perform well with just a CPU, but we've included lines that you can uncomment in the compose file to enable GPU support and run a larger model like `gemma:7b`. If you want to deploy to a GPU powered instance, you will need to use your own AWS account with [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc).

### Prerequisites[​](#prerequisites-56 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) authenticated with your AWS account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-52 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f compose.dev.yaml up
```

### Deployment[​](#deployment-50 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-50 "Direct link to Defang Playground")

Deploy your application to the defang playground by opening up your terminal and typing `defang up`.

**Keep in mind that the playground does not support GPU instances.**

#### BYOC (AWS)[​](#byoc-aws-34 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run `defang up` in a terminal that has access to your AWS environment variables.

Title: Ollama

Short Description: Ollama is a tool that lets you easily run large language models.

Tags: AI, LLM, ML, Llama, Mistral, Next.js, AI SDK, sample

Languages: Typescript

## [Phoenix & Postgres](https://github.com/DefangLabs/samples/tree/main/samples/phoenix-postgres)[​](#phoenix--postgres "Direct link to phoenix--postgres")

Defang is the easiest way to deploy containerized apps like this Phoenix + Postgres sample to AWS. This is a sample Phoenix application that uses a PostgreSQL database. The sample doesn't add anything to the database, but is based off of the default Phoenix getting started instructions which add a postgres database to the application.

### Prerequisites[​](#prerequisites-57 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) authenticated with your AWS account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-53 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose -f compose.yaml -f compose.dev.yaml up --build
```

This will run Phoenix in development mode. If you need to run any commands in the container, after you have run the command above and started the container, you can run the command in a new terminal:

```
docker compose -f compose.yaml -f compose.dev.yaml exec phoenix bash
```

### Deploying[​](#deploying-6 "Direct link to Deploying")

1. Open the terminal and type `defang login`

2. Provide values for `SECRET_KEY_BASE` and `DATABASE_URL`

   * `SECRET_KEY_BASE` is a secret key used by Phoenix to sign cookies and other things. You can generate one by running `docker compose -f compose.yaml -f compose.dev.yaml run --rm phoenix mix phx.gen.secret`
   * `DATABASE_URL` is the connection string for your PostgreSQL database. It should look something like `ecto://username:password@hostname/dbname`

3. Type `defang compose up` in the CLI.

4. Your app will be running within a few minutes.

Title: Phoenix & PostgreSQL

Short Description: A sample Phoenix application that uses a PostgreSQL database.

Tags: Phoenix, PostgreSQL, Database, Elixir, sample

Languages: Elixir

## [Platformatic App](https://github.com/DefangLabs/samples/tree/main/samples/platformatic)[​](#platformatic-app "Direct link to platformatic-app")

This sample project demonstrates how to deploy a simplist Platformatic service that returns "Platformatic x Defang" when accessed. The project includes a Dockerized setup with Docker Compose, making it easy to deploy and manage the service.

Once your app is up and running, you can access it via the defined port (default is 3042). This service is designed to be simple, showcasing how to set up a basic Platformatic application and deploy it using Docker.

### Prerequisites[​](#prerequisites-58 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/defang-io/defang)
2. (optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc), make sure you have properly [authenticated your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html).

### Deploying[​](#deploying-7 "Direct link to Deploying")

1. Open the terminal and type `defang login`
2. Navigate to the directory "app" with `cd ./app`
3. Type `defang compose up` in the CLI.
4. Your app will be running within a few minutes.

### Local Development[​](#local-development "Direct link to Local Development")

1. After cloning the repository and navigating to the root directory of the project, navigate to the directory called "app" with `cd app`
2. Run `docker compose -f compose.dev.yaml up --build`

Title: Platformatic

Short Description: A sample project showcasing a simple Platformatic service with Docker deployment.

Tags: Platformatic, Defang, Docker, Node.js, Service, JavaScript, sample

Languages: nodejs

## [Pulumi](https://github.com/DefangLabs/samples/tree/main/samples/pulumi)[​](#pulumi "Direct link to pulumi")

This basic example shows you how to use the Defang Pulumi provider to deploy the nodejs-http sample with Defang.

### Prerequisites[​](#prerequisites-59 "Direct link to Prerequisites")

Install the Defang CLI by following the instructions in the [Defang CLI documentation](https://docs.defang.io/docs/getting-started).

Install the dependencies:

```
npm install
```

### Deploying[​](#deploying-8 "Direct link to Deploying")

Create a new stack:

```
pulumi stack init production
```

Login to Defang:

```
defang login
```

Deploy the application:

```
pulumi up
```

Title: Pulumi

Short Description: A basic Pulumi example.

Tags: Pulumi, Node.js, HTTP, Server, TypeScript, sample

Languages: nodejs

## [Pulumi & Remix & Postgres](https://github.com/DefangLabs/samples/tree/main/samples/pulumi-remix-postgres)[​](#pulumi--remix--postgres "Direct link to pulumi--remix--postgres")

In this example, we run a Remix application connected to a Postgres database using Prisma as an ORM. When we deploy our service to [Defang](https://defang.io/), we also deploy a Postgres service and database using [Aiven](https://aiven.io/) so we can run our full application in the cloud.

### Running Locally[​](#running-locally "Direct link to Running Locally")

To run this example locally, you'll need to have a Postgres database. You can run one locally with Docker:

```
docker run -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres
```

Create a `.env` file with the following:

```
DATABASE_URL="postgresql://postgres:password@localhost:5432/postgres?schema=public"
```

Then run `npm install` and `npm run dev` in the `remix` directory to start the application.

### Deploying to Defang[​](#deploying-to-defang "Direct link to Deploying to Defang")

First, `cd` into the `pulumi` directory and make sure you're logged into Defang with `defang login` and into Pulumi with `pulumi login`.

Next, head to your Aiven account and create an api token, then run the following command to store it in your Pulumi stack config:

```
pulumi config set --secret aiven:apiToken <YourToken>
```

You'll also need to make sure you have an Aiven organization with a billing method attached to a billing group. Get the organization id and the billing group id and add them to your config with the following commands:

```
pulumi config set --secret aivenOrganizationId <OrgId>
pulumi config set --secret aivenBillingGroupId <BillingGroupId>
```

Now, run `pulumi up` to deploy your application to Defang and Aiven! Head to the [portal](https://portal.defang.dev) to check on status, or run `defang services`.

Title: Pulumi & Remix & PostgreSQL

Short Description: A full-stack example using Remix, Prisma, and Aiven.

Tags: Full-stack, Remix, Prisma, Aiven, PostgreSQL, Pulumi, Node.js, TypeScript, SQL, sample

Languages: nodejs

## [Flask & Form Submission](https://github.com/DefangLabs/samples/tree/main/samples/python-form)[​](#flask--form-submission "Direct link to flask--form-submission")

This Flask application provides a basic example of handling form submissions. It displays an HTML form where users can input their first name. Upon submission, the application greets the user by name on a new page. Note that alognside your .py file, include a requirements.txt so that the Dockerfile can install the necessary packages with pip.

### Essential Setup Files[​](#essential-setup-files-2 "Direct link to Essential Setup Files")

1. A [Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/).
2. A [compose file](https://docs.defang.io/docs/concepts/compose) to define and run multi-container Docker applications (this is how Defang identifies services to be deployed). (compose.yaml file)

### Prerequisite[​](#prerequisite-2 "Direct link to Prerequisite")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc), make sure you have properly [authenticated your AWS account (optional)](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)

### A Step-by-Step Guide[​](#a-step-by-step-guide-2 "Direct link to A Step-by-Step Guide")

1. Open the terminal and type `defang login`
2. Type `defang compose up` in the CLI
3. Your app should be up and running with Defang in minutes!

Title: Python & Form

Short Description: A short Python example for form submission in Flask.

Tags: Python, Flask, Form, sample

Languages: python

## [Python & Implicit & GPU](https://github.com/DefangLabs/samples/tree/main/samples/python-implicit-gpu)[​](#python--implicit--gpu "Direct link to python--implicit--gpu")

This Music Recommendation API provides artist recommendations based on collaborative filtering using the Alternating Least Squares (ALS) algorithm from the implicit library. The dataset utilized is from Last.fm. Note that alongside your .py file, include a requirements.txt so that the Dockerfile can install the necessary packages with pip. It demonstrates how to use a GPU with Python and the implicit library with Defang.

### Essential Setup Files[​](#essential-setup-files-3 "Direct link to Essential Setup Files")

1. A [Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/).
2. A [compose file](https://docs.defang.io/docs/concepts/compose) to define and run multi-container Docker applications (this is how Defang identifies services to be deployed). (compose.yaml file)

### Prerequisite[​](#prerequisite-3 "Direct link to Prerequisite")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc), make sure you have properly [authenticated your AWS account (optional)](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)

### A Step-by-Step Guide[​](#a-step-by-step-guide-3 "Direct link to A Step-by-Step Guide")

1. Open the terminal and type `defang login`
2. Type `defang compose up` in the CLI
3. Your app should be up and running with Defang in minutes!

Title: Python & Implicit & GPU

Short Description: A Music Recommendation API that provides artist recommendations based on collaborative filtering using the ALS algorithm from the Implicit library, leveraging a GPU.

Tags: Music, Recommendation, API, Collaborative Filtering, Implicit, GPU, Python, sample

Languages: python

## [Python & Flask & HTTP](https://github.com/DefangLabs/samples/tree/main/samples/python-minimal)[​](#python--flask--http "Direct link to python--flask--http")

This Flask application is designed to inspect and return detailed information about HTTP requests. It supports both GET and POST methods, providing insights into the request path, method, headers, query parameters, and body. Note that alognside your .py file, include a requirements.txt so that the Dockerfile can install the necessary packages with pip.

### Features[​](#features-1 "Direct link to Features")

1. Support both GET and POST HTTP methods
2. Detailed information about the request, including path, method, headers, query parameters, and body.

### Essential Setup Files[​](#essential-setup-files-4 "Direct link to Essential Setup Files")

1. A [Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/).
2. A [compose file](https://docs.defang.io/docs/concepts/compose) to define and run multi-container Docker applications (this is how Defang identifies services to be deployed). (compose.yaml file)

### Prerequisite[​](#prerequisite-4 "Direct link to Prerequisite")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc), make sure you have properly [authenticated your AWS account (optional)](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)

### A Step-by-Step Guide[​](#a-step-by-step-guide-4 "Direct link to A Step-by-Step Guide")

1. Open the terminal and type `defang login`
2. Type `defang compose up` in the CLI
3. Your app should be up and running with Defang in minutes!

Title: Python & Flask & HTTP

Short Description: A Flask application that inspects and returns detailed information about HTTP requests.

Tags: Flask, HTTP, Python, sample

Languages: python

## [Python & Flask & OpenAI](https://github.com/DefangLabs/samples/tree/main/samples/python-openai)[​](#python--flask--openai "Direct link to python--flask--openai")

### Setup[​](#setup "Direct link to Setup")

This sample requires an API key to access the OpenAI API. The name of the config value is referenced in the compose.yaml file. To provide a value for it, you can use the Defang CLI like this:

```
defang config set --name OPENAI_KEY
```

and then enter the value when prompted.

### Testing[​](#testing-4 "Direct link to Testing")

```
echo "Hello" | curl -H "Content-Type: application/text" -d @- https://xxxxxxxx/prompt
```

or

```
cat prompt.txt | curl -H "Content-Type: application/text" -d @- https://xxxxxxxx/prompt
```

Title: Python & Flask & OpenAI

Short Description: An app that demonstrates how to use the OpenAI API with Python and Flask.

Tags: Python, Flask, OpenAI, AI, Python, sample

Languages: python

## [Python & REST API](https://github.com/DefangLabs/samples/tree/main/samples/python-rest-api)[​](#python--rest-api "Direct link to python--rest-api")

This Flask application fetches average interest rates from the Fiscal Data Treasury API. It provides endpoints to check the status of the API and to retrieve the latest average interest rates. Note that alognside your .py file, include a requirements.txt so that the Dockerfile can install the necessary packages with pip.

### Features[​](#features-2 "Direct link to Features")

Endpoint to check API status. Endpoint to fetch average interest rates from the Fiscal Data Treasury API.

### Essential Setup Files[​](#essential-setup-files-5 "Direct link to Essential Setup Files")

1. A [Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/).
2. A [compose file](https://docs.defang.io/docs/concepts/compose) to define and run multi-container Docker applications (this is how Defang identifies services to be deployed). This is optional

### Prerequisite[​](#prerequisite-5 "Direct link to Prerequisite")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc), make sure you have properly [authenticated your AWS account (optional)](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)

### A Step-by-Step Guide[​](#a-step-by-step-guide-5 "Direct link to A Step-by-Step Guide")

1. Open the terminal and type `defang login`
2. Type `defang compose up` in the CLI
3. Your app should be up and running with Defang in minutes!

Title: Python & REST API

Short Description: A Flask application that fetches average interest rates from the Fiscal Data Treasury API.

Tags: Flask, REST API, Python, sample

Languages: python

## [Python & Flask & AWS S3](https://github.com/DefangLabs/samples/tree/main/samples/python-s3)[​](#python--flask--aws-s3 "Direct link to python--flask--aws-s3")

This sample requires an API key to access AWS S3. The name of the config values is referenced in the compose.yaml file. To provide a value for it, you can use the Defang CLI like this:

```
defang config set --name AWS_ACCESS_KEY
defang config set --name AWS_SECRET_KEY
```

and then enter the value when prompted.

### Testing[​](#testing-5 "Direct link to Testing")

```
curl -X POST -H 'Content-Type: application/json' -d '{ "first_name" : "jane", "last_name" : "doe" }' https://xxxxxx/upload
curl https://xxxxxx/download
```

Title: Python & Flask & AWS S3

Short Description: An app that demonstrates how to upload and download files from AWS S3 using Python and Flask.

Tags: Python, Flask, AWS, S3, sample

Languages: python

## [Ruby on Rails](https://github.com/DefangLabs/samples/tree/main/samples/rails)[​](#ruby-on-rails "Direct link to ruby-on-rails")

This template is a member list project developed using Ruby on Rails, offering a starting point to help you quickly build your team management system. We have prepared all the essential files for deployment. By spending less than 10 minutes setting up the environment, as detailed in the prerequisites, and executing the commands in our step-by-step guide, your website will be ready to go live to the world!

### Essential Setup Files[​](#essential-setup-files-6 "Direct link to Essential Setup Files")

1. A [Dockerfile](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) to describe the basic image of your applications.
2. A [docker-compose file](https://docs.defang.io/docs/concepts/compose) to define and run multi-container Docker applications.
3. A [.dockerignore](https://docs.docker.com/build/building/context/#dockerignore-files) file to comply with the size limit (10MB).

### Development Using [Dev Containers](https://containers.dev/)[​](#development-using-dev-containers "Direct link to development-using-dev-containers")

1. Open the working directory with Visual Studio Code or any editor which supports Dev Containers.
2. Click on the bottom left corner of the window where you see "Reopen in Container".
3. Open up a shell in the VS Code terminal and run `docker compose -f compose.dev.yaml up --build`.

### Configuration[​](#configuration-50 "Direct link to Configuration")

For this sample, you will need to provide the following [configuration](https://docs.defang.io/docs/concepts/configuration). Note that if you are using the 1-click deploy option, you can set these values as secrets in your GitHub repository and the action will automatically deploy them for you.

#### `POSTGRES_PASSWORD`[​](#postgres_password-13 "Direct link to postgres_password-13")

This password will be used to initialize the PostgreSQL database and to connect to it.

### Deployment[​](#deployment-51 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-51 "Direct link to Defang Playground")

Deploy your application to the defang playground by opening up your terminal and typing `defang up`.

#### BYOC (AWS)[​](#byoc-aws-35 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run `defang --provider=aws up` in a terminal that has access to your AWS environment variables.

Title: Ruby on Rails

Short Description: A basic member list project developed using Ruby on Rails.

Tags: Ruby, Rails, sample

Languages: Ruby

## [React](https://github.com/DefangLabs/samples/tree/main/samples/react)[​](#react "Direct link to react")

This sample shows how to get a simple React app up and running with Defang. It includes Vite and ESLint, which are common build tools for React development.

### Prerequisites[​](#prerequisites-60 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-54 "Direct link to Development")

To run the application locally, you can use the following command (make sure you've got `npm` and [Node.js](https://nodejs.org/en) installed):

```
npm install
npm run dev
```

To run it using a Docker container, you can use the following command:

```
docker compose up --build
```

### Deployment[​](#deployment-52 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-52 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-36 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: React

Short Description: A minimal React app running on Defang.

Tags: React, Vite, JavaScript, Frontend, sample

Languages: JavaScript

## [React-Vite-Railpack](https://github.com/DefangLabs/samples/tree/main/samples/react-vite-railpack)[​](#react-vite-railpack "Direct link to react-vite-railpack")

This sample shows how to get a simple React app up and running with Defang. It includes Vite and ESLint, which are common build tools for React development. The container image is automatically built by [Railpack](https://railpack.com/).

### Prerequisites[​](#prerequisites-61 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account

### Development[​](#development-55 "Direct link to Development")

To run the application locally, you can use the following command (make sure you've got `npm` and [Node.js](https://nodejs.org/en) installed):

```
npm install
npm run dev
```

### Deployment[​](#deployment-53 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-53 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-37 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: React

Short Description: A minimal React app running on Defang.

Tags: React, Vite, JavaScript, Frontend, Railpack, sample

Languages: JavaScript

## [Redis & JavaScript](https://github.com/DefangLabs/samples/tree/main/samples/redis-js)[​](#redis--javascript "Direct link to redis--javascript")

This is a Redis and JavaScript application, deployed with Defang.

Note that Defang supports the use of managed Redis in production deployments. You can enable this feature by adding the `x-defang-redis: true` tag to your Redis service in the `compose.yaml` file.

### Prerequisites[​](#prerequisites-62 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) authenticate with your cloud provider account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-56 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up --build
```

### Deployment[​](#deployment-54 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-54 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC[​](#byoc-13 "Direct link to BYOC")

If you want to deploy to your own cloud account, you can [use Defang BYOC](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud).

Title: Redis & JavaScript

Short Description: A Redis and JavaScript application, deployed with Defang.

Tags: Redis, JavaScript, sample

Languages: JavaScript

## [Rocket](https://github.com/DefangLabs/samples/tree/main/samples/rocket)[​](#rocket "Direct link to rocket")

This sample demonstrates how to deploy a very simple Rocket app. Rocket is a web framework for Rust.

### Prerequisites[​](#prerequisites-63 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) authenticate against your AWS account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-57 "Direct link to Development")

To run the application locally, you can use the following command:

```
docker compose up
```

### Deployment[​](#deployment-55 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-55 "Direct link to Defang Playground")

Deploy your application to the defang playground by opening up your terminal and typing `defang up`.

#### BYOC (AWS)[​](#byoc-aws-38 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run `defang --provider=aws up` in a terminal that has access to your AWS environment variables.

Title: Rocket

Short Description: A simple Rocket app.

Tags: Rocket, sample

Languages: Rust

## [Sailsjs](https://github.com/DefangLabs/samples/tree/main/samples/sailsjs)[​](#sailsjs "Direct link to sailsjs")

This sample demosntrates how to deploy a very basic Sailsjs sample with Defang. The sample simply outputs hello world on the webpage.

### Prerequisites[​](#prerequisites-64 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) authenticated with your AWS account
3. (Optional - for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Deploying[​](#deploying-9 "Direct link to Deploying")

1. Open the terminal and type `defang login`
2. Type `defang compose up` in the CLI.
3. Your app will be running within a few minutes.

### Development[​](#development-58 "Direct link to Development")

For development, we use a local container. This can be seen in the compose.yaml document. To run the sample locally after cloning the respository, you can run on docker by using the following command:

1. docker compose -f compose.dev.yaml up --build

Title: Sails.js

Short Description: A short hello world application demonstrating how to deploy Sails.js onto Defang.

Tags: Sails.js, Node.js, sample

Languages: nodejs

## [Sails.js & PostgreSQL](https://github.com/DefangLabs/samples/tree/main/samples/sailsjs-postgres)[​](#sailsjs--postgresql "Direct link to sailsjs--postgresql")

This sample project demonstrates how to deploy

Sailsjs with Defang and connect it to a Postgres database. Furthermore, we emonstrate how to run a local Postgres container during development vs a managed postgres service (Neon). For a quick database set up please go to [Neon](https://neon.tech/) and follow set up instructions. The sample starts with a no tasks in the database and allows us to add tasks on the fly. It sets wide open permissions on the tables as well so you can start querying or mutating the data right away.

### Prerequisites[​](#prerequisites-65 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) authenticated with your AWS account
3. (Optional - for local development) [Docker CLI](https://docs.docker.com/engine/install/)
4. (Optional) \[Neon CLI] (<https://neon.tech/docs/reference/neon-cli>)

### Deploying production[​](#deploying-production "Direct link to Deploying production")

1. Open the terminal and type `defang login`
2. Add your connection string for the third party postgres database in the DATABASE\_URL part of the compose.yaml section
3. Type `defang compose up` in the CLI.
4. Your app will be running within a few minutes.

### Development[​](#development-59 "Direct link to Development")

For development, we use a Postgres container. The Postgres container is defined in the `compose.dev.yaml` file. The Neon postgres container is defined in the `compose.yaml` file, with some overrides in the `compose.dev.yaml` file so it correctly connects to the development database container. To start your own, please have the env variables, `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`, and `SESSION_SECRET` ready.

To start the development environment, run:

```
docker compose -f compose.dev.yaml up --build
```

Title: Sails.js & PostgreSQL

Short Description: A sample project demonstrating how to deploy a project with PostgreSQL and Sails.js.

Tags: PostgreSQL, Sails.js, SQL, JavaScript, sample

Languages: nodejs

## [Self-Improving Mastra Todo](https://github.com/DefangLabs/samples/tree/main/samples/self-improving)[​](#self-improving-mastra-todo "Direct link to self-improving-mastra-todo")

This sample is a multi-user Next.js todo app that turns user feedback into live code changes. Better Auth and PostgreSQL provide accounts, private todo lists, and feedback storage. The first person to sign up becomes the administrator. From the admin page, that person can curate feedback, add instructions, and send the request to a Mastra coding agent that edits the app source, which the Next.js development server then hot-reloads.

To keep those edits from being served half-applied, the coding agent works in an **isolated git worktree**, not the files the dev server is serving. It makes and typechecks all its edits there; only a successful, compiling run is fast-forwarded into the live tree in a single step, so users see one atomic update instead of every intermediate keystroke (a multi-file change would otherwise flash broken states and flood the backlog with transient errors).

The Compose project separates the public production app from the live-editing environment:

* `app` is a standalone Next.js production build with no source, agent, or admin UI.
* `dev` contains the source, Caddy, the Next.js dev server, and the Mastra agent.
* `db` is shared PostgreSQL for auth, todos, and feedback.
* `chat` is the managed model used by the coding agent, declared as a top-level `models:` entry; each cloud's env file selects an explicit model — z.ai GLM 5 on AWS Bedrock, Gemini 2.5 Flash on GCP Vertex AI.

The **admin console is served by the agent server, not the Next.js app** — it lives outside the source tree the coding agent edits. Caddy routes `/admin` to the agent server and everything else to Next.js, so the console stays usable to recover the app even if a bad edit crashes the Next.js dev server.

> \[!WARNING] This is a demo of agent-driven development, not a production software-update design. The coding agent can change any file under `todo-app/`. The admin gate, source boundary, and compile check reduce risk, but they are not a substitute for code review, tests, signed artifacts, or a deployment approval process.

### Prerequisites[​](#prerequisites-66 "Direct link to Prerequisites")

1. Use a [Defang CLI](https://github.com/DefangLabs/defang) build that exposes the resolved `DEFANG_PROVIDER` and `DEFANG_STACK` Compose variables (added by [DefangLabs/defang#2189](https://github.com/DefangLabs/defang/pull/2189)); v3.12.0 does not include this support.
2. Authenticate with a cloud account that has managed LLMs: a GCP project with Vertex AI, or an AWS account with Bedrock model access.
3. For local development, install Docker Desktop with [Docker Model Runner](https://docs.docker.com/ai/model-runner/) enabled.

### Development[​](#development-60 "Direct link to Development")

Start the live-editing environment, PostgreSQL, and the local model:

```
docker compose -f compose.dev.yaml up --build
```

Then open `http://localhost:3000` and:

1. Sign up. The first account becomes the administrator.
2. Add a few todos.
3. Use the feedback button in the lower-right corner.
4. Open **Admin**, select feedback, add instructions, and choose **Send to coding agent**.
5. Watch the run log. Successful edits appear in `todo-app/` and hot-reload in the browser.

The local model is `ai/qwen2.5-coder:7B-Q4_K_M`. It is intentionally small so the workflow can run on a laptop; use local development to test the loop, not to judge the quality of the generated changes. The first run downloads the model.

### Configuration[​](#configuration-51 "Direct link to Configuration")

Set these secrets before deploying:

```
defang config set POSTGRES_PASSWORD --random
defang config set BETTER_AUTH_SECRET --random
defang config set ADMIN_TOKEN --random
```

* `POSTGRES_PASSWORD` protects the managed PostgreSQL database.
* `BETTER_AUTH_SECRET` signs and encrypts authentication data. Keep it stable across deployments or existing sessions will be invalidated.
* `ADMIN_TOKEN` is a break-glass password for the admin console. The console normally accepts your regular admin login (its session is validated directly against PostgreSQL, so it works even while the app is down); the token is the fallback for when no valid session is available.

### Deployment[​](#deployment-56 "Direct link to Deployment")

The same Compose project deploys to either cloud; each cloud's env file selects an explicit managed model (z.ai GLM 5 on AWS, Gemini 2.5 Flash on GCP). The first deployment creates managed PostgreSQL and can take about 20 minutes. Defang reports separate URLs for `app` and `dev`:

* Share the `app` URL with normal users.
* Use the `dev` URL for administration and live agent changes.

The `dev` service deliberately runs as one always-on instance so its working tree survives idle periods. The `app` service remains a stateless production build.

Cloud deployments share the one `compose.yaml`. After resolving the provider, Defang automatically loads its non-secret interpolation file:

\| Provider | Environment file | Publish permission | | | `aws` | `.env.aws` | `AdministratorAccess` | | `gcp` | `.env.gcp` | `roles/owner` |

The two env files are the place to customize the managed model and other cloud-specific scalar settings. Secrets still belong in `defang config`, never in these committed files.

Self-publishing a full stack is administrator-equivalent. That permission is attached only to `dev`, never the public `app`; scope it down before adapting this demo for production.

#### GCP (Vertex AI)[​](#gcp-vertex-ai "Direct link to GCP (Vertex AI)")

The `gcp` env file selects `gemini-2.5-flash` on Vertex AI — a GA model that is broadly available on-demand across regions with no special configuration. Provide the target project when deploying:

```
export GCP_PROJECT_ID=your-gcp-project
defang compose up --stack gcp
```

#### AWS (Bedrock)[​](#aws-bedrock "Direct link to AWS (Bedrock)")

The `aws` env file selects z.ai GLM 5 (`zai.glm-5`) on Bedrock. Enable model access for it in the Bedrock console first. The `aws` stack selects `us-east-1`:

```
defang compose up --stack aws
```

> \[!NOTE] Defang supplies the resolved provider and stack to the `dev` service. The in-container **Publish** button therefore reuses the original deployment context, including the matching provider env file.

### Publishing (self-redeploy)[​](#publishing-self-redeploy "Direct link to Publishing (self-redeploy)")

The admin console's **Publish** panel promotes the live, agent-edited workspace into a new production build — by having the dev container run `defang compose up` on its own Compose project, overwriting **both** the `dev` and `app` services. There is deliberately no GitOps pipeline: the deployed app mutates its own deployment.

* **Authorization is per publish.** Clicking Publish starts an interactive `defang login` inside the container; the console surfaces the login URL in a new tab and the admin must complete it for every deployment. No Defang token is stored anywhere. After login, the panel shows who you are signed in as — make sure it is the tenant that owns this stack — before the final "Deploy and overwrite" button.
* **Cloud credentials are ambient, not baked.** The selected env file supplies the `dev` service's AWS task-role policy or GCP VM service-account role; the CLI reads those workload credentials directly.
* **History survives.** The workspace's git history (one commit per agent run, one per publish, each referencing the database rows it addressed) rides along in the build context, so the next dev container continues the same lineage.
* `PUBLISH_PROVIDER` and `PUBLISH_STACK` come from Defang's resolved deployment context; the standalone local-development Compose file leaves publishing disabled.

### Run history and revert[​](#run-history-and-revert "Direct link to Run history and revert")

Every successful agent run is committed in the agent worktree and fast-forwarded into the live tree with trailers (`Run-Id`, `Feedback-Id`, `Model`) linking it to the run and feedback rows in Postgres; a failed run is discarded in the worktree and never reaches the live app. The admin console's **History** panel lists the lineage, links agent commits to their run logs, and offers an admin-only revert (a new commit authored as the admin). Runs can be graded on demand ("Grade this run") with a second model call.

### Safety boundaries[​](#safety-boundaries "Direct link to Safety boundaries")

* The Mastra Workspace filesystem is rooted at `todo-app/`; it cannot edit its own agent server.
* The agent listens only on `127.0.0.1` inside `dev`.
* Next.js server routes validate the Better Auth session and admin role before dispatching or reading agent runs.
* Every run ends with `tsc --noEmit`. A failed check triggers one repair attempt and is reported as failed if the app still does not compile.
* The production `app` image contains neither the coding agent nor application source files.

Title: Self-Improving Mastra Todo

Short Description: A Next.js todo app where an admin can turn stored user feedback into live code changes with a Mastra coding agent.

Tags: Mastra, Next.js, PostgreSQL, Better Auth, AI, Agents

Languages: TypeScript, JavaScript, Docker

## [Svelte & Node.js & MySQL](https://github.com/DefangLabs/samples/tree/main/samples/svelte-mysql)[​](#svelte--nodejs--mysql "Direct link to svelte--nodejs--mysql")

This sample project demonstrates how to deploy a full-stack application using Svelte for the frontend, Node.js for the backend, and MySQL for the database. The project uses Docker to containerize the services, making it easy to run in both development and production environments.

### NOTE[​](#note "Direct link to NOTE")

This sample showcases how you could deploy a full-stack application with Defang and Svelte and NodeJS. However, it deploys mysql db as a defang service. Defang [services](https://12factor.net/processes) are ephemeral and should not be used to run stateful workloads in production as they will be reset on every deployment. For production use cases you should use a managed database like RDS, Aiven, or others. In the future, Defang will help you provision and connect to managed databases.

### Essential Setup Files[​](#essential-setup-files-7 "Direct link to Essential Setup Files")

1. Download \[Defang CLI] (<https://github.com/DefangLabs/defang>)
2. (optional) If you are using \[Defang BYOC] (<https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html>) authenticated your AWS account.
3. (optional for local development) \[Docker CLI] (<https://docs.docker.com/engine/install/>)

### Prerequisite[​](#prerequisite-6 "Direct link to Prerequisite")

1. Download \[Defang CLI] (<https://github.com/DefangLabs/defang>)
2. (optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) make sure you have properly
3. \[Docker CLI] (<https://docs.docker.com/engine/install/>)
4. \[NodeJS] (<https://nodejs.org/en/download/package-manager>)

### Development[​](#development-61 "Direct link to Development")

For development, we use a local container. This can be seen in the compose.yaml file and the server.js file where we create a pool of connections. To run the sample locally after clonging the respository, you can run on docker by doing *docker compose up --build --build* or run without using Docker by doing the following:

1. run npm install to install the nodejs dependencies
2. create an .env file on the svelte directory specifying the appropriate environment variables.
3. run npm start

#### Editing the database/permissions etc.[​](#editing-the-databasepermissions-etc "Direct link to Editing the database/permissions etc.")

If you want to edit the database, such that you can deploy them to production, you should [install the mySQL CLI](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-install-linux-quick.html) and mySQL workbench to gain access to a GUI so that you can make your changes to the database. After running defang compose up these changes will be reflected.

### Deploying[​](#deploying-10 "Direct link to Deploying")

1. Open the terminal and type `defang login`
2. Type `defang compose up` in the CLI.
3. Your app will be running within a few minutes.

Title: Svelte & Node.js & MySQL

Short Description: A full-stack application using Svelte for the frontend, Node.js for the backend, and MySQL for the database.

Tags: Svelte, Node.js, MySQL, Full-stack, JavaScript, TypeScript, SQL, sample

Languages: nodejs

## [Sveltekit](https://github.com/DefangLabs/samples/tree/main/samples/sveltekit)[​](#sveltekit "Direct link to sveltekit")

This sample shows how to get a minimal SvelteKit app up and running with Defang.

### Prerequisites[​](#prerequisites-67 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. Have a managed database service configured and have the connection string ready.
3. (Optional) If you are using [Defang BYOC](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) authenticated with your AWS account
4. (Optional - for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-62 "Direct link to Development")

To develop this app, you can run the sveltekit commands as you normally would on your local machine in the sveltekit directory. If you plan on adding other services, you might want to run it with docker compose. We have provided a `compose.dev.yaml` file and a `dev.Dockefile` to help you get started. Just run `docker compose -f compose.dev.yaml up --build` to start your Sveltekit app in dev mode in a container.

### Deploying[​](#deploying-11 "Direct link to Deploying")

1. Open the terminal and type `defang login`
2. Type `defang compose up` in the CLI.
3. Your app will be running within a few minutes.

Title: SvelteKit

Short Description: A minimal SvelteKit app running on Defang.

Tags: SvelteKit, TypeScript, JavaScript, Svelte, Node.js, Frontend, TypeScript, JavaScript, sample

Languages: nodejs

## [Sveltekit & MongoDB](https://github.com/DefangLabs/samples/tree/main/samples/sveltekit-mongodb)[​](#sveltekit--mongodb "Direct link to sveltekit--mongodb")

This is a project that demonstrate both client side component rendering and hydration as well as serverside rendering with external API route configuration. Furthermore, there is also a mongodb connection (not hosted on the atlas) to cache the queried results.

### NOTE[​](#note-1 "Direct link to NOTE")

This sample showcases how you could deploy a full-stack application with Defang and Sveltekit. However, it deploys mongodb as a defang service. Defang [services](https://12factor.net/processes) are ephemeral and should not be used to run stateful workloads in production as they will be reset on every deployment. For production use cases you should use a managed database like RDS, Aiven, or others. In the future, Defang will help you provision and connect to managed databases.

### Essential Setup Files[​](#essential-setup-files-8 "Direct link to Essential Setup Files")

1. Download \[Defang CLI] (<https://github.com/DefangLabs/defang>)
2. (optional) If you are using \[Defang BYOC] (<https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html>) authenticated your AWS account.
3. (optional for local development) \[Docker CLI] (<https://docs.docker.com/engine/install/>)

### Prerequisite[​](#prerequisite-7 "Direct link to Prerequisite")

1. Download \[Defang CLI] (<https://github.com/DefangLabs/defang>)

2. (optional) If you are using [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) make sure you have properly

3. \[Docker CLI] (<https://docs.docker.com/engine/install/>)

4. \[NodeJS] (<https://nodejs.org/en/download/package-manager>)

### Development[​](#development-63 "Direct link to Development")

For development, we use a local container. This can be seen in the compose.yaml and /src/routes/api/songs/+server.js file and the server.js file where we create a pool of connections. To run the sample locally after clonging the respository, you can run on docker by doing

1. docker compose up --build

### A Step-by-Step Guide[​](#a-step-by-step-guide-6 "Direct link to A Step-by-Step Guide")

1. Open the terminal and type `defang login`
2. Type `defang compose up` in the CLI
3. Your app should be up and running with Defang in minutes!

Title: SvelteKit & MongoDB

Short Description: A full-stack application using SvelteKit for the frontend and MongoDB for the database.

Tags: SvelteKit, MongoDB, Full-stack, Node.js, JavaScript, sample

Languages: nodejs

## [Mistral & vLLM](https://github.com/DefangLabs/samples/tree/main/samples/vllm)[​](#mistral--vllm "Direct link to mistral--vllm")

This guide demonstrates how to deploy Mistral using vLLM. You'll need a Hugging Face token to begin.

### Prerequisites[​](#prerequisites-68 "Direct link to Prerequisites")

* Hugging Face token

### Steps[​](#steps-2 "Direct link to Steps")

1. **Set the Hugging Face Token**

   First, set the Hugging Face token using the `defang config` command.

   ```
   defang config set --name HF_TOKEN
   ```

2. **Launch with Defang Compose**

   Run the following command to start the services:

   ```
   defang compose up
   ```

   The provided `compose.yaml` file includes the Mistral service. It's configured to run on an AWS instance with GPU support. The file also includes a UI service built with Next.js, utilizing Vercel's AI SDK.

   > **OpenAI SDK:** We use the OpenAI sdk, but set the `baseURL` to our Mistral endpoint.

   > **Note:** The API route does not use a system prompt, as the Mistral model we're deploying currently does not support this feature. To get around this we inject a couple messages at the front of the conversation providing the context (see the `ui/src/app/api/chat/route.ts` file). Other than that, the integration with the OpenAI SDK should be structured as expected.

   > **Changing the content:** The content for the bot is set in the `ui/src/app/api/chat/route.ts` file. You can edit the prompt in there to change the behaviour. You'll notice that it also pulls from `ui/src/app/docs.md` to provide content for the bot to use. You can edit this file to change its "knowledge".

### Configuration[​](#configuration-52 "Direct link to Configuration")

* The Docker Compose file is ready to deploy Mistral and the UI service.
* The UI uses Next.js and Vercel's AI SDK for seamless integration.

By following these steps, you should be able to deploy Mistral along with a custom UI on AWS, using GPU capabilities for enhanced performance.

Title: Mistral & vLLM

Short Description: Deploy Mistral with a custom UI using vLLM.

Tags: Mistral, vLLM, AI, Nextjs, GPU, Node.js, TypeScript, JavaScript, sample

Languages: nodejs

## [Vue.js](https://github.com/DefangLabs/samples/tree/main/samples/vuejs)[​](#vuejs "Direct link to vuejs")

This sample shows how to get a minimal Vue.js app up and running with Defang.

### Prerequisites[​](#prerequisites-69 "Direct link to Prerequisites")

1. Download [Defang CLI](https://github.com/DefangLabs/defang)
2. (Optional) If you are using [Defang BYOC](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) authenticated with your AWS account
3. (Optional for local development) [Docker CLI](https://docs.docker.com/engine/install/)

### Development[​](#development-64 "Direct link to Development")

To run the application locally, you can use the following command (make sure you've got `npm` and [Node.js](https://nodejs.org/en) installed):

```
npm run dev
```

To run it using a Docker container, you can use the following command:

```
docker compose up --build
```

### Deployment[​](#deployment-57 "Direct link to Deployment")

> \[!NOTE] Download [Defang CLI](https://github.com/DefangLabs/defang)

#### Defang Playground[​](#defang-playground-56 "Direct link to Defang Playground")

Deploy your application to the Defang Playground by opening up your terminal and typing:

```
defang compose up
```

#### BYOC (AWS)[​](#byoc-aws-39 "Direct link to BYOC (AWS)")

If you want to deploy to your own cloud account, you can use Defang BYOC:

1. [Authenticate your AWS account](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html), and check that you have properly set your environment variables like `AWS_PROFILE`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, and `AWS_SECRET_ACCESS_KEY`.
2. Run in a terminal that has access to your AWS environment variables:
   <!-- -->
   ```
   defang --provider=aws compose up
   ```

Title: Vue.js

Short Description: A minimal Vue.js app running on Defang.

Tags: Vue.js, Vite, Node.js, Frontend, JavaScript, sample

Languages: nodejs
