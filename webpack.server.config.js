const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  entry: './api/server.js',
  mode: 'none',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname)
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
