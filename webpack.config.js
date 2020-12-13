const path = require('path')
const webpack = require('webpack')

module.exports = {
  target: 'webworker',
  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [],
  },
  entry: [path.resolve(__dirname, 'src/server.ts')],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  mode: 'production',
  optimization: {
    usedExports: true,
  },
  node: {
    net: 'empty',
    fs: 'empty',
    tls: 'empty',
  },
}

