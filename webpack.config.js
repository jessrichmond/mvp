const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
// const SRC_DIR = path.resolve(__dirname, 'frontend/src');
const DIST_DIR = path.resolve(__dirname, 'frontend/public');

// const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './frontend/src/index.html',
  filename: './index.html'
})

module.exports = {
  devtool: 'eval-source-map',
  entry: './frontend/src/index.js',
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
    ],
  },
  plugins: [htmlPlugin],
  // devServer: {
  //   contentBase: path.join(__dirname, DIST_DIR),
  //   port: 8080,
  //   publicPath: `http://localhost:8080/dist/`
  // }

};