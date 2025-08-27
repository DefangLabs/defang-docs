---
sidebar_position: 100
description: Deploy your Heroku Applications in your own Cloud Account with Defang
---

# Migrating from Heroku

This tutorial will guide you through the process of migrating your Heroku applications to your own cloud account with Defang. This will allow you to reduce cost, gain more control, and access to the complete range of available cloud services.

## Pre-requisites
* [A Defang Account](/docs/concepts/authentication)
* [The Defang CLI](/docs/getting-started#install-the-defang-cli)
* [The Heroku CLI (optional, but recommended)](https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli)
* Cloud Account Credentials
  * [AWS](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-authentication.html)
  * [GCP](https://cloud.google.com/docs/authentication/set-up-adc-local-dev-environment)

:::tip
**Do I need a Dockerfile?**

No, Defang will use [Railpack](https://railpack.com/) to automatically build an OCI container for your application based on the source code and dependencies.

**Do I need a Docker Compose file?**

Defang does require a Docker Compose file to deploy your application, but you don't need to write one from scratch. Defang will automatically generate one for your Heroku application.
:::

## Step 1 - Generating a Docker Compose file

Navigate to your project's working directory:

```
$ cd ~/w/vast-badlands
$ ls
Gemfile		Procfile	Rakefile	bin		config.ru	lib		public		test		vendor
Gemfile.lock	README.md	app		config		db		log		storage		tmp
```

Then run `defang init` and select `Migrate from heroku`:
```
$ defang init
? How would you like to start?  [Use arrows to move, type to filter]
  Generate with AI
  Clone a sample
> Migrate from Heroku
```

A web browser may open, prompting you to login to Defang. Then, if you have the `heroku` CLI installed, you may be prompted to login with Heroku. Defang will delegate to the `heroku` CLI to create an authentication token so that it can access information about your deployment. The token `defang` creates will only be valid for 5 minutes.

:::tip
**What if I don't have the Heroku CLI installed?**
`defang` will prompt you for an auth token. You can paste it into the prompt after [creating one in the Heroku Dashboard](https://dashboard.heroku.com/account/applications/authorizations/new).
:::

At this point, `defang` will fetch a list of your Heroku applications and prompt you to select the one you would like to migrate.

```
$ defang init
? How would you like to start? Migrate from Heroku
 * Ok, let's create a compose file for your existing deployment.
 * The Heroku CLI is installed, we'll use it to generate a short-lived authorization token
? Select the Heroku application to use as a source:  [Use arrows to move, type to filter]
> vast-badlands-staging
  vast-badlands-production
```

Then, `defang` will request some information about your application from the Heroku API. This information will be used to generate a `compose.yaml` file which can then be deployed with Defang.

```
defang init
? How would you like to start? Migrate from heroku
 * Ok, let's create a compose file for your existing deployment.
 * The Heroku CLI is installed, we'll use it to generate a short-lived authorization token
? Select the Heroku application to use as a source: vast-badlands-production
 * Collecting information about "vast-badlands-production"...
 * Generating compose file...
 * Compose file written to compose.yaml

Check the files in your favorite editor.
To deploy this project, run

  defang compose up
```

At this point, `defang` will have generated a `compose.yaml` file that describes your application and its services. You can review this file in your favorite text editor.

The application I used had a single `web` dyno:
```
$ heroku ps -a vast-badlands-production

=== web (Eco): bin/rails server -p ${PORT:-5000} -e $RAILS_ENV (1)
```

And a single PostgreSQL database:
```
heroku addons -a vast-badlands-production

 Add-on                                     Plan        Price        Max price State
 ────────────────────────────────────────── ─────────── ──────────── ───────── ───────
 heroku-postgresql (postgresql-rosy-12345) essential-0 ~$0.007/hour $5/month  created
  └─ as DATABASE
```

The `compose.yaml` file that `defang` generated looks like this:

```yaml
services:
  postgres:
    image: postgres:17.4
    environment:
      POSTGRES_DB: eb631mzx93pn27
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD:
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U $POSTGRES_USER"]
    x-defang-postgres: "true"

  web:
    build:
      context: .
    command:
      - bin/rails server -p $PORT -e $RAILS_ENV
    ports:
      - "5000:5000"
    environment:
      DATABASE_URL: postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@postgres:5432/$POSTGRES_DB
      LANG: en_US.UTF-8
      RACK_ENV: production
      RAILS_ENV: production
      RAILS_LOG_TO_STDOUT: enabled
      RAILS_SERVE_STATIC_FILES: enabled
      SECRET_KEY_BASE:
      PORT: 5000
      POSTGRES_PASSWORD: $POSTGRES_PASSWORD
    depends_on:
      postgres:
        condition: service_healthy
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 512M

  release:
    build:
      context: .
    command:
      - bin/rails db:migrate
    environment:
      DATABASE_URL: postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@postgres:5432/$POSTGRES_DB
      RAILS_ENV: production
      SECRET_KEY_BASE:
    depends_on:
      postgres:
        condition: service_healthy
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 512M
    restart: "no"
```

## Step 2 - Deploying to your cloud account

Now all you need to do is deploy your application to the cloud. 

### Deploying to AWS

If you're deploying to AWS, you'll need to invoke `defang compose up` with your AWS access credentials in the environment:

```
AWS_REGION=us-west-2 AWS_PROFILE=default defang compose up --provider aws
```

See our full tutorial on [deploying to AWS](/docs/tutorials/deploy-to-aws).

### Deploying to GCP

If you're deploying to GCP, you'll need to invoke `defang compose up` with your GCP project id in the environment:

```
GCP_PROJECT_ID=my-project-123 defang compose up --provider gcp
```

See our full tutorial on [deploying to GCP](/docs/tutorials/deploy-to-gcp).


### Deploying to DigitalOcean

If you're deploying to DigitalOcean, you'll need to invoke `defang compose up` with your DigitalOcean project id in the environment:

```
DIGITALOCEAN_TOKEN=my-token-123 SPACES_ACCESS_KEY_ID=my-access-key-id SPACES_SECRET_ACCESS_KEY=my-access-key-secret  defang compose up --provider digitalocean
```

See our full tutorial on [deploying to DigitalOcean](/docs/tutorials/deploy-to-digitalocean).

## Step 3 - Migrating your data

:::tip
If you need help with your migration, please reach out to our support team on [Discord](https://s.defang.io/discord).
:::
