const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './frontend/src/index.html',
  filename: './index.html',
});

module.exports = {
  devtool: 'eval-source-map',
  entry: './frontend/src/index.jsx',
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [htmlPlugin],
  resolve: {
    extensions: ['.json', '.jsx', '.js'],
  },
};
