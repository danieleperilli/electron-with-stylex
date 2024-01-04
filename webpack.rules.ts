import type { ModuleOptions } from 'webpack';

export const rules: Required<ModuleOptions>['rules'] = [
  // Add support for native node modules
  {
    // We're specifying native_modules in the test because the asset relocator loader generates a
    // "fake" .node file which is really a cjs file.
    test: /native_modules[/\\].+\.node$/,
    use: 'node-loader',
  },
  {
    test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@vercel/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: [
      // This is only needed for the StyleX babel plugin
      {
        loader: 'babel-loader',
        options: {
          presets: [
            ["@babel/preset-react", { "runtime": "automatic" }],
            ["@babel/preset-typescript"]
          ],
          plugins: [
            '@stylexjs/babel-plugin'
          ]
        },
      },
      // Temporary disabled to use StyleX babel plugin
      /*{
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },*/
    ]
  },
];
