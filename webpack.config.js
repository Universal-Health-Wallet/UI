const path = require('path');
const environment = process.env.NODE_ENV || 'production';
const nodeExternals = require('webpack-node-externals');
const cloneDeep = require('lodash/cloneDeep');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = {
  mode: environment,
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        include: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|ttf|gif|eot|woff|woff2|png)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  resolve: {
    alias: {
      config: path.resolve(__dirname, 'config'),
      helpers: path.resolve(__dirname, 'app/helpers/'),
      modules: path.resolve(__dirname, 'app/modules/'),
      library: path.resolve(__dirname, 'app/library'),
      pages: path.resolve(__dirname, 'app/pages'),
    },
  },
};
let serverConfig = {
  entry: ['babel-polyfill', './server/index.js'],
  target: 'node',
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
};
let clientConfig = {
  entry: ['babel-polyfill', './app/client.js'],
  output: {
    filename: 'js/client.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/static/',
  },
};

// Add environment specific configs
if (environment === 'development') {
  const { CleanWebpackPlugin } = require('clean-webpack-plugin');

  baseConfig.mode = environment;
  baseConfig.plugins.push(
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  );
  baseConfig.devtool = 'source-map';
}

serverConfig = Object.assign(serverConfig, cloneDeep(baseConfig));
clientConfig = Object.assign(clientConfig, cloneDeep(baseConfig));

module.exports = [clientConfig, serverConfig];
