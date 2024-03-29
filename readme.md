# Element Web automation testing

This repository contains automated tests for Element Web application, written in Cypress framework.

## Prerequisites

###### Required

[Node.js](https://nodejs.org/en/download/) - Backend JavaScript runtime environment

[npm](https://www.npmjs.com/) - Package manager for JavaScript

###### Optional

[Visual Studio Code](https://code.visualstudio.com/) - Integrated Development Environment (IDE)

## Getting started

Download and install prerequisites.

Clone this repo and open the root folder in VS Code or your preferred IDE.

Type the following command in terminal to install necessary dependencies:

```bash
npm i
```

If this is your first time using Cypress on a machine, it could take a while for everything to get installed so please be patient.

## Usage

To open Cypress Test Runner, type the following command into terminal:

```bash
npm run web:prod
```

You can use Cypress GUI from there to run all tests located in /src/Element-web/tests.

### Environments

This framework supports multiple test environments (e.g. local, QA, PROD). Configuration file for each environment contains variables like application URL, user credentials etc. and is located in: /src/Element-web/configuration/ folder.

For example, if you have Element Web running locally, you can use the run command without specifying the environment:

```bash
npm run web
```

This will point Cypress Test Runner to a url you specified in config.json - baseUrl variable.
