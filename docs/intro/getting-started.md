# Getting Started

## Install the Defang CLI[​](#install-the-defang-cli "Direct link to Install the Defang CLI")

Defang Deploy doesn't require installing anything in your cloud, but you will need to install the [open source](https://github.com/DefangLabs/defang) Defang command line interface (CLI) to interact with your Defang resources and account.

We offer a few different ways to install the Defang CLI. You can use a shell script, Homebrew, Winget, or you can download the binary directly.

* Shell
* Homebrew
* Winget
* Nix
* Direct Download

**Using a shell script**

You can install the Defang CLI using a shell script. Run the following command in your terminal:

```
eval "$(curl -fsSL s.defang.io/install)"
```

The script will try to download the appropriate binary for your operating system and architecture, add it to `~/.local/bin`, and add `~/.local/bin` to your `PATH` if it's not already there, with your permission. If you do not provide permission it will print an appropriate instruction for you to follow to add it manually. You can also customize the installation directory by setting the `INSTALL_DIR` environment variable before running the script.

**Using Homebrew**

You can easily install the Defang CLI using [Homebrew](https://brew.sh/). Run the following command in your terminal:

```
brew install DefangLabs/defang/defang
```

**Using Winget**

On Windows, you can install the Defang CLI using `winget`. Run the following command in your terminal:

```
winget install defang
```

**Using Nix**

```
nix profile install github:DefangLabs/defang#defang-bin --refresh
```

**Direct Download**

You can find the latest version of the Defang CLI on the [latest release page](https://github.com/DefangLabs/defang/releases/latest). Just download the appropriate binary for your operating system and architecture, and put it somewhere in your `PATH`.

## Generate a project[​](#generate-a-project "Direct link to Generate a project")

```
$ defang generate nodejs-http
```

You should see the following prompt:

```
? What folder would you like to create the project in?
```

Type in the name of the folder you'd like to use for your new project and press ENTER.

I'll type `"welcome-to-defang"`. Now, you'll see the following output:

```
? What folder would you like to create the project in? welcome-to-defang
 * Fetching sample from the Defang repository...
 * Writing files to disk...
   - .github/
   - .github/workflows/
   - .github/workflows/deploy.yaml
   - README.md
   - app/
   - app/Dockerfile
   - app/main.js
   - compose.yaml
 * Code generated successfully in folder welcome-to-defang

Check the files in your favorite editor.
To deploy the service, do `cd welcome-to-defang` and

  defang compose up
```

Now, navigate to the folder you just created:

```
$ cd welcome-to-defang
```

You can open the folder in your favorite editor and see the files that were generated for you:

* The `app` folder contains the code for your service.
* The `Dockerfile` is used to build the container image for your service.
* The `compose.yaml` file is used to define the services you want to deploy.

## Deploy to your cloud[​](#deploy-to-your-cloud "Direct link to Deploy to your cloud")

Defang Deploy runs your app in your own AWS, Google Cloud or Azure account. Before you deploy, you need:

* A Defang account. `defang login` opens a browser window for you to sign in.
* Credentials for the cloud account you're deploying to, available in the terminal where you run `defang`. Sign in with that cloud's own tooling (for example the AWS CLI or `gcloud`) or set the usual environment variables. Each [provider page](https://docs.defang.io/docs/providers.md) lists the permissions Defang needs.
* The account details for your cloud: `AWS_REGION` on AWS, `GCP_PROJECT_ID` on Google Cloud, or `AZURE_SUBSCRIPTION_ID` on Azure.

Then, from your project folder:

```
$ defang login
```

Sign in with the browser window it opens. To learn more about how authentication works in Defang, see [Authentication](https://docs.defang.io/docs/concepts/authentication.md).

Next, create a [stack](https://docs.defang.io/docs/concepts/stacks.md). A stack records the cloud, region and [deployment mode](https://docs.defang.io/docs/concepts/deployment-modes.md) for a deployment:

```
$ defang stack new
```

Finally, deploy:

```
$ defang compose up
```

Defang builds your images, deploys the services in your cloud account, and streams the logs to your terminal. When the deployment finishes, the CLI prints the address of each service. To see what is running, use `defang compose ps`, and to tear it down, use `defang compose down`.

If you would rather deploy from GitHub whenever you push, follow one of the GitHub Actions tutorials: [AWS](https://docs.defang.io/docs/tutorials/deploying-from-github-actions/to-aws.md), [Google Cloud](https://docs.defang.io/docs/tutorials/deploying-from-github-actions/to-gcp.md) or [Azure](https://docs.defang.io/docs/tutorials/deploying-from-github-actions/to-azure.md).

## Next Steps[​](#next-steps "Direct link to Next Steps")

Congratulations! You've successfully deployed your first service with Defang Deploy. Now, where do you go from here?

Defang Deploy supports various ways of creating and deploying services to the cloud. The following tutorials dive into each one in more detail:

## [📄️<!-- --> <!-- -->Deploy to your own cloud](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud.md)

[Set up AWS, Google Cloud or Azure for production](https://docs.defang.io/docs/tutorials/deploy-to-your-cloud.md)

## [📄️<!-- --> <!-- -->Generate a Project with AI](https://docs.defang.io/docs/tutorials/generate-new-code-using-ai.md)

[Use Defang Deploy to generate and deploy a new project](https://docs.defang.io/docs/tutorials/generate-new-code-using-ai.md)

## [📄️<!-- --> <!-- -->Explore the Defang CLI](https://docs.defang.io/docs/cli.md)

[Learn more about the Defang CLI](https://docs.defang.io/docs/cli.md)

## [📄️<!-- --> <!-- -->Learn more about Defang Deploy](https://docs.defang.io/docs/intro/what-is-defang.md)

[What is Defang Deploy and how does it work?](https://docs.defang.io/docs/intro/what-is-defang.md)

## [📄️<!-- --> <!-- -->Deploy using Pulumi](https://docs.defang.io/docs/tutorials/deploy-using-pulumi.md)

[Deploy using Pulumi](https://docs.defang.io/docs/tutorials/deploy-using-pulumi.md)

## [📄️<!-- --> <!-- -->Monitor your services](https://docs.defang.io/docs/tutorials/monitoring-your-services.md)

[Learn how to monitor your services with Defang Deploy](https://docs.defang.io/docs/tutorials/monitoring-your-services.md)

Choose the direction that seems the most interesting. If you have any questions, join the [Defang Discord](https://discord.gg/defang) and we'll be happy to help you out.
