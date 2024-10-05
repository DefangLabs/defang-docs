# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```
Make sure that you've cloned the `defanglabs/defang` repo and `defanglabs/samples` repo in sibling directories.

```
$ git clone https://github.com/DefangLabs/defang.git ../defang 
$ git clone https://github.com/DefangLabs/samples.git ../samples
```

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. 

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
