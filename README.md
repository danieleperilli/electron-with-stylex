# Installing StyleX in Electron app

Here are the steps to include StyleX in an Electron app built with Forge and using React, Webpack and Typescript:

### Create an empty Electron app using the following command in an empty directory

```bash
npm init electron-app@latest APP_NAME -- --template=webpack-typescript
```

### Integrate React

(source: https://www.electronforge.io/guides/framework-integration/react-with-typescript)

**Install React dependencies:**

```bash
npm install --save react react-dom
npm install --save-dev @types/react @types/react-dom
```

**Integrate React code:**

Add the `"jsx": "react",` directive to `tsconfig.json`:

```json
{
  "compilerOptions": {
    "jsx": "react",
    ...
  }
}
```

Create a file `src/App.tsx` with the following content:

```ts
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.body).render(
    <div>Hello from React</div>
);
```

Append the following line to the end of `src/rendered.ts`:

```ts
import './App';
```

### Integrate StyleX
(source: https://stylexjs.com/docs/learn/installation/)

Install StyleX dependencies:

```bash
npm install --save @stylexjs/stylex
npm install --save-dev @stylexjs/webpack-plugin
```

Add the following lines to `webpack.plugins.js`:

```js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const StylexPlugin = require('@stylexjs/webpack-plugin');
...

export const plugins = [
    new StylexPlugin({
        filename: 'styles.[contenthash].css',
        //dev: argv.mode === 'development',
        runtimeInjection: false,
        classNamePrefix: 'x',
        unstable_moduleResolution: {
            type: 'commonJS',
            rootDir: __dirname,
        },
    }),
    ...
];
```

### Add sample StyleX code

Replace `src/App.tsx` content with the following code:

```ts
import React from "react";
import ReactDOM from "react-dom/client";

import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  base: {
    fontSize: 16,
    lineHeight: 1.5,
    color: 'red',
  }
});

ReactDOM.createRoot(document.body).render(
    <>
        <div>Hello from React</div>
        <div {...stylex.props(styles.base)}>Hello from StyleX</div>
    </>
);

```