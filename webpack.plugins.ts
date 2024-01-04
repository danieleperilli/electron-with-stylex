import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const StylexPlugin = require('@stylexjs/webpack-plugin');

export const plugins = [
  new StylexPlugin({
    filename: 'styles.[contenthash].css',
    dev: true, //dev: argv.mode === 'development',
    runtimeInjection: false,
    classNamePrefix: 'x',
    unstable_moduleResolution: {
      type: 'commonJS',
      rootDir: __dirname,
    },
  }),
  new ForkTsCheckerWebpackPlugin({
    logger: 'webpack-infrastructure',
  }),
];
