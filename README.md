# Nx Project

This project was generated using [Nx](https://nx.dev).

### Installing Nx CLI

- `npm install -g nx`

### Create workspace

- `npx create-nx-workspace <workspace name> --preset=[apps,react,...]`
  - Make an empty workspace with `--preset=apps`
  - Make a workspace with React app with `--preset=react`
- `npm install -D @nrwl/react`

<details>
 <summary><b>Adding capabilities to our workspace</b></summary>

- [React](https://reactjs.org)
  - `npm install -D @nrwl/react`
- Web (no framework frontends)
  - `npm install -D @nrwl/web`
- [Angular](https://angular.io)
  - `npm install -D @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install -D @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install -D @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install -D @nrwl/node`
- ...

</details>

### Generate an application

- Run `nx g @nrwl/react:app <app name>` to generate an application.

### Generate a library

- Run `nx g @nrwl/react:lib <library name>` to generate a library.
- `nx g @nrwl/workspace:lib <library name> [--directory=<dir name>] [--appProject=<app name>]`
  - for typescript libary

Libraries are shareable across libraries and applications. They can be imported from `@nxnick/<library name>`.

### Generate a Component

- Run `nx g component <component name>` to generate a component with base structure.
- `nx g c <component name> [--project=<project name (app or lib name)>] `

### Development server

- `nx serve` serve `defaultProject` that specified in `nx.json`
- `nx serve <app name>`
  The app will automatically reload if you change any of the source files.

### Build

To build the project

- `nx build` serve `defaultProject` that specified in `nx.json`
- `nx build <app name>`

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Understand the workspace

Run `nx graph` to see a diagram of the dependencies of our projects.

- `nx dep-graph`
- `nx affected:dep-graph`
- `nx affected:build`

### Setup husky & lint-staged

Follow below steps

- `npm install -D husky`
- `npx husky-init` generates .husky directory
- `npm install -D lint-staged`
- copy lint-staged rule to `package.json`, like below :

  ```
    "lint-staged": {
      "*.{ts,tsx,js,jsx,json,html,css,scss,sass}": [
        "nx affected:lint --all",
        "nx format:write"
      ]
    }
  ```

- copy husky pre-commit and/or pre-push rule to `.husky` directory, like below :

  ```
    #!/bin/sh
    . "$(dirname "$0")/_/husky.sh"
    npx lint-staged
    nx format:write --uncommitted
  ```

### Install & Setup Mui with Styled Components

First install Mui, Mui Icons, Mui Styled Components Engine and Styled Components with below command.

- `npm install @mui/material @mui/icons-material @mui/styled-engine-sc styled-components`

Then add the following path config to your `tsconfig.json`:

```json
"paths": {
  "@mui/styled-engine": ["./node_modules/@mui/styled-engine-sc"]
}
```

And install `@types/styled-components`:

`npm install --save-dev @types/styled-components`

For RTL :

[Read more detailed info here](https://mui.com/material-ui/guides/right-to-left/)

`npm install stylis-plugin-rtl@^1` (currently we should use version 1 because of styled-components requirement)

having issue in stylis-plugin-rtl v1 in typescript, doing this stuff for resolving it temporarily [(issue)](https://github.com/styled-components/stylis-plugin-rtl/issues/31#issuecomment-940184046)
