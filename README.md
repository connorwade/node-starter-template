# node-starter-template

A modern template for starting a node project built with TypeScript, Rome, Jest, and Husky.

## Commands

`npm start`: Compiles the TypeScript and runs the result

`npm run format`: Formats the code with Rome

`npm run lint`: Lints the code with Rome

`npm run lint:fix`: Lints the code and applies suggested fixes

`npm prepare`: Installs Husky and githooks

`npm test`: Runs our jest tests

## Why's

### Why Rome for Linting and Formatting?

ESLint and Prettier have become tools that have grown more complex than they are useful. Rome is fast, easy to setup, and far more intuitive.

### Why TypeScript?

I find that working with Typescript reduces the amount of frustrating debugging I need to do. The tradeoff of slightly longer coding time for reducing debugging and communicating better with teams is well worth it for most my projects.

### Why Jest?

Jest is the package I am most interested in replacing. In order to implement Jest in a TypeScript environment, you need to use either babel or ts-jest. I'm not a fan of either of these solutions. I'd love a test runner that supports only assertions and natively supports TypeScript.
