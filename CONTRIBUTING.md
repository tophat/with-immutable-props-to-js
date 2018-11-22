# Contributing to with-immutable-props-to-js

Start off by reading through the [Code of Conduct](./CODE_OF_CONDUCT.md) for the project, and make sure you understand the conduct expectations for all contributors.

## Setup

Make sure you're using the yarn version listed in .yvmrc and the Node.js version listed in .nvmrc.
You can manage multiple versions of yarn using [yvm](http://yvm.js.org), and multiple versions of Node.js with [nvm](https://github.com/creationix/nvm).

Fork the repository (unless you're in the tophat GitHub org, then you can just use a feature branch in this repo).
Clone your fork and run the following command in the root directory to install dependencies:

```
yarn install
```

Make sure all of the tests pass locally:

```
yarn test
```

Great! Now you're ready to start contributing.

## Making changes

Have a look through existing issues and pull requests to make sure that you're not completing work that's already been taken care of.
If you're unsure whether or not your changes will be valuable to the project, feel free to open an issue first to propose and discuss your changes.

Make sure you add tests for any changes that are made.
Also make sure that your code is formatted correctly; you can set up your editor/IDE to report eslint errors, or you can run the following from the command line:

```
yarn lint
```

When everything is ready, commit your changes to your fork (or feature branch) and submit a pull request to the main repository.
CircleCI will run any required status checks; make sure that they pass.
The project owner or members will review your pull request and possibly request changes.
Once your PR is spick-and-span, it will be approved and merged into the main branch.
If a release needs to be published as a result, the project members will do so, and a new version will automatically be deployed as part of the build to NPM.

## For project members

### Deploying

On the master branch:

```
yarn version --major|--minor|--patch  # choose the correct semantic versioning bump
```

This command automatically bumps the version in package.json and creates a commit on the master branch with a git tag.

```
git push --tags origin master
```

This command pushes the commit and tag to master.
CircleCI will automatically detect the tag and run the deploy a new version to the NPM registry.
