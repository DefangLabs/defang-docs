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

<details>
<summary>
Run the following command
```
AWS_REGION=us-west-2 AWS_PROFILE=default defang compose up --provider aws
```
</summary>

```
 * Using Defang Playground provider from stored preference
 ! Defang cannot monitor status of the following managed service(s): [postgres].
   To check if the managed service is up, check the status of the service which depends on it.
 * Packaging the project files for release at /Users/defang/w/vast-badlands
 * Uploading the project files for release
 * Packaging the project files for web at /Users/defang/w/vast-badlands
 * Uploading the project files for web
 * Monitor your services' status in the defang portal
   - https://portal.defang.io/service/postgres
   - https://portal.defang.io/service/release
   - https://portal.defang.io/service/web
 * Tailing logs for deployment ID qhjwfbi6p1re ; press Ctrl+C to detach:
2025-08-28T14:46:14.632-07:00 cd Update started for stack defang-prod1
2025-08-28T14:46:17.801-07:00 cd  ** Updating service "postgres"
2025-08-28T14:46:17.869-07:00 cd  ** Building image for "release"...
2025-08-28T14:46:17.931-07:00 cd  ** Building image for "web"...
2025-08-28T14:46:17.946-07:00 cd  ** Updating service "web"
2025-08-28T14:46:20.003-07:00 cd  ** Updated service "postgres" to revision 1
2025-08-28T14:47:00.757-07:00 postgres The files belonging to this database system will be owned by user "postgres".
2025-08-28T14:47:00.757-07:00 postgres This user must also own the server process.
2025-08-28T14:47:00.758-07:00 postgres The database cluster will be initialized with locale "en_US.utf8".
2025-08-28T14:47:00.758-07:00 postgres The default database encoding has accordingly been set to "UTF8".
2025-08-28T14:47:00.758-07:00 postgres The default text search configuration will be set to "english".
2025-08-28T14:47:00.758-07:00 postgres Data page checksums are disabled.
2025-08-28T14:47:00.758-07:00 postgres fixing permissions on existing directory /var/lib/postgresql/data ... ok
2025-08-28T14:47:00.758-07:00 postgres creating subdirectories ... ok
2025-08-28T14:47:00.758-07:00 postgres selecting dynamic shared memory implementation ... posix
2025-08-28T14:47:00.829-07:00 postgres selecting default "max_connections" ... 100
2025-08-28T14:47:00.924-07:00 postgres selecting default "shared_buffers" ... 128MB
2025-08-28T14:47:00.940-07:00 postgres selecting default time zone ... Etc/UTC
2025-08-28T14:47:00.941-07:00 postgres creating configuration files ... ok
2025-08-28T14:47:01.723-07:00 postgres running bootstrap script ... ok
2025-08-28T14:47:03.232-07:00 postgres performing post-bootstrap initialization ... ok
2025-08-28T14:47:03.368-07:00 postgres initdb: hint: You can change this by editing pg_hba.conf or using the option -A, or --auth-local and --auth-host, the next time you run initdb.
2025-08-28T14:47:03.368-07:00 postgres syncing data to disk ... ok
2025-08-28T14:47:03.368-07:00 postgres Success. You can now start the database server using:
2025-08-28T14:47:03.368-07:00 postgres     pg_ctl -D /var/lib/postgresql/data -l logfile start
2025-08-28T14:47:03.530-07:00 postgres waiting for server to start....2025-08-28 21:47:03.530 UTC [48] LOG:  starting PostgreSQL 17.4 (Debian 17.4-1.pgdg120+2) on x86_64-pc-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit
2025-08-28T14:47:03.533-07:00 postgres 2025-08-28 21:47:03.533 UTC [48] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2025-08-28T14:47:03.544-07:00 postgres 2025-08-28 21:47:03.544 UTC [51] LOG:  database system was shut down at 2025-08-28 21:47:03 UTC
2025-08-28T14:47:03.550-07:00 postgres 2025-08-28 21:47:03.550 UTC [48] LOG:  database system is ready to accept connections
2025-08-28T14:47:03.639-07:00 postgres  done
2025-08-28T14:47:03.639-07:00 postgres server started
2025-08-28T14:47:04.033-07:00 postgres CREATE DATABASE
2025-08-28T14:47:04.034-07:00 postgres /usr/local/bin/docker-entrypoint.sh: ignoring /docker-entrypoint-initdb.d/*
2025-08-28T14:47:04.035-07:00 postgres waiting for server to shut down....2025-08-28 21:47:04.035 UTC [48] LOG:  received fast shutdown request
2025-08-28T14:47:04.039-07:00 postgres 2025-08-28 21:47:04.039 UTC [48] LOG:  aborting any active transactions
2025-08-28T14:47:04.040-07:00 postgres 2025-08-28 21:47:04.040 UTC [48] LOG:  background worker "logical replication launcher" (PID 54) exited with exit code 1
2025-08-28T14:47:04.043-07:00 postgres 2025-08-28 21:47:04.042 UTC [49] LOG:  shutting down
2025-08-28T14:47:04.045-07:00 postgres 2025-08-28 21:47:04.045 UTC [49] LOG:  checkpoint starting: shutdown immediate
2025-08-28T14:47:04.158-07:00 postgres 2025-08-28 21:47:04.158 UTC [49] LOG:  checkpoint complete: wrote 921 buffers (5.6%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.097 s, sync=0.008 s, total=0.116 s; sync files=301, longest=0.003 s, average=0.001 s; distance=4238 kB, estimate=4238 kB; lsn=0/1908990, redo lsn=0/1908990
2025-08-28T14:47:04.164-07:00 postgres 2025-08-28 21:47:04.164 UTC [48] LOG:  database system is shut down
2025-08-28T14:47:03.368-07:00 postgres initdb: warning: enabling "trust" authentication for local connections
2025-08-28T14:47:04.235-07:00 postgres  done
2025-08-28T14:47:04.235-07:00 postgres server stopped
2025-08-28T14:47:04.238-07:00 postgres PostgreSQL init process complete; ready for start up.
2025-08-28T14:47:04.269-07:00 postgres 2025-08-28 21:47:04.269 UTC [1] LOG:  starting PostgreSQL 17.4 (Debian 17.4-1.pgdg120+2) on x86_64-pc-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit
2025-08-28T14:47:04.323-07:00 postgres 2025-08-28 21:47:04.323 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
2025-08-28T14:47:04.324-07:00 postgres 2025-08-28 21:47:04.323 UTC [1] LOG:  listening on IPv6 address "::", port 5432
2025-08-28T14:47:04.329-07:00 postgres 2025-08-28 21:47:04.329 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
2025-08-28T14:47:04.338-07:00 postgres 2025-08-28 21:47:04.338 UTC [64] LOG:  database system was shut down at 2025-08-28 21:47:04 UTC
2025-08-28T14:47:04.345-07:00 postgres 2025-08-28 21:47:04.345 UTC [1] LOG:  database system is ready to accept connections
2025-08-28T14:51:54.551-07:00 cd  ** Build succeeded for "web"
2025-08-28T14:51:56.626-07:00 cd  ** Build succeeded for "release"
2025-08-28T14:52:04.407-07:00 postgres 2025-08-28 21:52:04.407 UTC [62] LOG:  checkpoint starting: time
2025-08-28T14:52:06.028-07:00 postgres 2025-08-28 21:52:06.027 UTC [62] LOG:  checkpoint complete: wrote 19 buffers (0.1%); 0 WAL file(s) added, 0 removed, 0 recycled; write=1.609 s, sync=0.004 s, total=1.621 s; sync files=11, longest=0.003 s, average=0.001 s; distance=28 kB, estimate=28 kB; lsn=0/190FA40, redo lsn=0/190F9E8
2025-08-28T14:52:32.418-07:00 release I, [2025-08-28T21:52:32.392682 #1]  INFO -- : Migrating to CreateMembers (20240416182733)
2025-08-28T14:52:32.418-07:00 release == 20240416182733 CreateMembers: migrating ====================================
2025-08-28T14:52:32.418-07:00 release -- create_table(:members)
2025-08-28T14:52:32.418-07:00 release    -> 0.0029s
2025-08-28T14:52:32.418-07:00 release == 20240416182733 CreateMembers: migrated (0.0030s) ===========================
2025-08-28T14:52:32.418-07:00 release I, [2025-08-28T21:52:32.400192 #1]  INFO -- : Migrating to DeviseCreateUsers (20240417165503)
2025-08-28T14:52:32.418-07:00 release == 20240417165503 DeviseCreateUsers: migrating ================================
2025-08-28T14:52:32.418-07:00 release -- create_table(:users)
2025-08-28T14:52:32.418-07:00 release    -> 0.0039s
2025-08-28T14:52:32.418-07:00 release -- add_index(:users, :email, {:unique=>true})
2025-08-28T14:52:32.418-07:00 release    -> 0.0013s
2025-08-28T14:52:32.418-07:00 release -- add_index(:users, :reset_password_token, {:unique=>true})
2025-08-28T14:52:32.418-07:00 release    -> 0.0008s
2025-08-28T14:52:32.418-07:00 release == 20240417165503 DeviseCreateUsers: migrated (0.0062s) =======================
2025-08-28T14:52:32.418-07:00 release I, [2025-08-28T21:52:32.409275 #1]  INFO -- : Migrating to AddUserIdToMembers (20240417202202)
2025-08-28T14:52:32.418-07:00 release == 20240417202202 AddUserIdToMembers: migrating ===============================
2025-08-28T14:52:32.418-07:00 release -- add_column(:members, :user_id, :integer)
2025-08-28T14:52:32.418-07:00 release    -> 0.0012s
2025-08-28T14:52:32.418-07:00 release -- add_index(:members, :user_id)
2025-08-28T14:52:32.418-07:00 release    -> 0.0009s
2025-08-28T14:52:32.418-07:00 release == 20240417202202 AddUserIdToMembers: migrated (0.0022s) ======================
2025-08-28T14:52:45.061-07:00 cd  ** Updated service "web" to revision 1
2025-08-28T14:52:49.353-07:00 cd Update succeeded in 6m34.758057781s ; provisioning...
2025-08-28T14:53:32.118-07:00 web => Booting Puma
2025-08-28T14:53:32.119-07:00 web => Rails 7.1.3.2 application starting in production
2025-08-28T14:53:32.119-07:00 web => Run `bin/rails server --help` for more startup options
2025-08-28T14:53:34.228-07:00 web Puma starting in single mode...
2025-08-28T14:53:34.228-07:00 web * Puma version: 6.4.2 (ruby 3.3.4-p94) ("The Eagle of Durango")
2025-08-28T14:53:34.228-07:00 web *  Min threads: 5
2025-08-28T14:53:34.228-07:00 web *  Max threads: 5
2025-08-28T14:53:34.228-07:00 web *  Environment: production
2025-08-28T14:53:34.228-07:00 web *          PID: 1
2025-08-28T14:53:34.230-07:00 web * Listening on http://0.0.0.0:5000
2025-08-28T14:53:34.232-07:00 web Use Ctrl-C to stop
```
</details>

See our full tutorial on [deploying to AWS](/docs/tutorials/deploy-to-aws).

### Deploying to GCP

GCP support for deployments without Dockerfiles coming soon.

## Step 3 - Migrating your data

:::tip
If you need help with your migration, please reach out to our support team on [Discord](https://s.defang.io/discord).
:::
