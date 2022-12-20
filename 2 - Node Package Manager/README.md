# Introduction

Dependencies are packages that are used in all of our projects and come with a `package.json` file. This file is the map of our prokect. It tells who created it, the version, and the package that needs to be installed. 

A Package or module or dependency ?\
They're nearly the same thing. They're simply a file or multiple files combined together to form a package that represents a specific function. 

The idea behind having the package directory and `NPM` is to build lightweight projects that can be easily shared across development team and install the dependencies or packages locally on our machines when we use the project. \
It allows to free our resouces locally and install only what we need versus carrying this go tags with whoever we want to share our projects with.

# Getting started with npm

## Initializing package.json file
To start a `package.json` we type `npm init` follwed by answering some specifications. 

## Adding node packages
`npm install package-name@latest` - Production Dependency -> The dependencies that will be included with the project. `@latest` is optional, by default it install the latest version. \
`npm install package-name --save-dev` - Dev Dependency -> Only those that we want to use while working on the project. Dev Dependencies tell npm to install them as dev tools, which means they won't be included in the production build, but only used throughout development.

## Managing global directory
Add `-g` or `-global` plan during `npm install` 

## Updating a package
`npm outdated` -> Checks all dependencies locally and presents a list of all outdated packages that need to be updated. Use `-g` flag to include global dependenices. \
`npm update package-name` or `npm install package-name` -> Sometimes, the `udpate` command does not work then we can simply use the `install` command. 

## Removing a package
`npm uninstall package-name` -> uninstalls a package.

## Semantic Versioning
```json
"express" : "^4.16.3"
```
- 1st Number (4) is usually Major Releases like full new version of a software.
- 2nd Number (16) is Minor Releases like adding new functions to the major release.
- 3rd Number (3) is patches and fixes.
- `Carrot (^)` : Default. Npm will install any recent version available. \
`^1.x.x` : All minor and patches OK
- `Tilde (~)` : Strict versioning. \
`~1.5.x` : All pacthes only

## package-lock.json
In most cases, developers creating packages, and publishing to `NPM`, will follow the major, minor and patches releases. So, any version within `1.x.x` should'nt have breaking chains to the application. And in the huge ecosystem of packages, in most cases, dependencies rely on others, and so on, so fort. It really easy to imagine how quickly the entire tree of dependencies could break if there isn't any order.

Example : We get a project from another developer, without a `package-lock.json`, and we install the dependencies, start the project, but it doesn't work. We look at the `package.json` file, and we see `express` version `^4.15.4`, and we check that currently it's `4.25.3`. \
In this version, which is not major, breaks our app. So this is where `package-lock.json` comes to the rescue. \
When we do `NPM` install, the `package.json` file is the input, and the `package-lock.json` is the output. And, this file will guarantee the same install, every time we do an `NPM install`. As long as we commit the `package-lock.json` file to our repo.

# Advanced Subjects

## Working with npm cache
`NPM` keeps a `cache` of the installed modules so that it doesn't have to get them everytime. But that, sometimes, can lead to unexpected results. \
When we install a module, in most cases, it should work fine, and if it doesn't or a version of a module doesn't, try clearing the cache.

`npm cache verify` -> run a report to verify the cache \
`npm cache clean --force` -> forcefully clears the cache. Needs to be forced as the cache self heals.

## npm audit
`npm audit` is a command that will check the dependencies of the project and make sure they are safe to use. \
Whenever a new package is installed, the command `npm audit` runs automatically and tells if there are any issues with the package. \
It only works on version 6 or above of `NPM` which can be checked via `npm -v`. \
To fix errors, `npm audit fix` or simply install the dependencies one by one. 

## Scripting
Scripting in a `package.json` file provides a way to do simple command, to repeat, or execute complex commands. \
There are some predefined commands. eg `start`, we can be used by `npm start` and `npm` will run the instruction attached with `start` inside `scripts` section of `package.json`. \
We can also defined our own scripts. To run them use `npm run script-name`. 

## npx
At times there are packages that are used only once in projects. The only thing they do afterwards if package pollution in the global directories. The main prupose of creating `npx` was to resolve this issue. \
`npx` executes the function of the package without having the install it locally.

## Other alternative to npm
- `yarn` : super fast. They first introducted the `package-lock.json` file. `npm` added it after them.
- `ni` : less verbose approach

# Advance npm

# Publising a Package

## Requirements
- `npm` account
- Well documented `README` file
- Scoped package name : unqiue, descriptive, meets `npm` policies (eg. @angular/cli or @angular/core)

## Dist-Tags
Human readable tags, that are added when packages are published to `npm`.
- Easy way to clarify details around release.
- Used when publishing package with `--tag`.
    - eg : `npm publish --tag bugfix`
- Used after publication with `dist-tag` command.
    - eg : `npm dist-tag add test-npm@1.0.0 [stable]`

