# Elenchi

An [Nx](https://nx.dev) monorepo for React and Angular.

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

## Workflow

```txt
nx serve ignoratio
nx g @nrwl/react:app ignoratio to generate an application.
nx g @nrwl/react:lib my-lib to generate a library.
nx g @nrwl/react:component my-component --project=ignoratio
nx build ignoratio to build the project, `--prod` flag for a production build.
nx test ignoratio to execute the unit tests via Jest.
nx affected:test to execute the unit tests affected by a change.
ng e2e ignoratio to execute the end-to-end tests via Cypress.
nx affected:e2e to execute the end-to-end tests affected by a change.
nx dep-graph to see a diagram of the dependencies of your projects.
```

## Scaffolding the React app

The first React was created with the following:

```txt
npx create-nx-workspace@latest
? Workspace name (e.g., org name)     elenchi
? What to create in the new workspace react
? Application name                    todos
? Default stylesheet format           CSS
cd elenchi
nx generate @nrwl/react:app ignoratio
? Which stylesheet format would you like to use? ...
> CSS
```

After this, the general gist of the scaffolding technique shown in Duncan Hunters [Enterprise Angular applications with NgRx and Nx](https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/introduction/3-generating-components-and-nx-lib) workshop was followed.  Whereas there it's Angular, here we will be using the React equivalent.

### Part 1. Generate a lib

```txt
> nx generate @nrwl/react:lib game --routing 
UPDATE workspace.json
CREATE libs/game/.eslintrc.json
CREATE libs/game/.babelrc
CREATE libs/game/README.md
CREATE libs/game/src/index.ts
CREATE libs/game/tsconfig.json
CREATE libs/game/tsconfig.lib.json
UPDATE tsconfig.base.json
CREATE libs/game/jest.config.js
CREATE libs/game/tsconfig.spec.json
UPDATE jest.config.js
CREATE libs/game/src/lib/game.module.css
CREATE libs/game/src/lib/game.spec.tsx
CREATE libs/game/src/lib/game.tsx
```

### 2. Add a container to the lib

```txt
> nx generate @nrwl/react:component containers/board --project=game
√ Should this component be exported in the project? (y/N) · true
Found "/" in the component name. Did you mean to use the --directory option (e.g. `nx g c board --directory containers`)?
```

Strange, that worked for the Angular app.  So add the directory flag it is:

```txt
nx g c board --directory containers --project=game
√ Should this component be exported in the project? (y/N) · true
CREATE libs/game/src/containers/board/board.module.css
CREATE libs/game/src/containers/board/board.spec.tsx
CREATE libs/game/src/containers/board/board.tsx
UPDATE libs/game/src/index.ts
```

Add a cards component.

```txt
nx generate @nrwl/react:component cards --directory components --project=game
√ Should this component be exported in the project? (y/N) · true
CREATE libs/game/src/components/cards/cards.module.css
CREATE libs/game/src/components/cards/cards.spec.tsx
CREATE libs/game/src/components/cards/cards.tsx
UPDATE libs/game/src/index.ts
```

### 3. Add a default route to the auth module

This is done for us when using the --routing flag with the nx cli.  They look a little something like this in the app.tsx file:

```tsx
      <div role="navigation">
        <Link to="/page-2">Page 2</Link>
      </div>
      <Route
        path="/page-2"
        exact
        render={() => (
        <Link to="/">Click here to go back to root page.</Link>
        )}/>
    </div>
```

Add a link to the game lib there like this:

```tsx
import { Game } from '@elenchi/game';
...
      <Route
        path="/game"
        exact
        render={() => (
          <Game></Game>
        )}
      />
```

### 4. Update the consuming Customer Portal App module

## Original Readme

### Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

### Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@elenchi/mylib`.

### Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

### Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

### Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

### ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
