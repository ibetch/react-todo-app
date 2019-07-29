const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  target: 'web',
  devServer: {
    port: 3000,
    contentBase: './dist',
  },
  entry: {
    app: ['./src/js/App.jsx'],
    vendor: ['react', 'react-dom']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: 'body',
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    filename: isDevelopment ? '[name].js' : '[name].[hash].js',
    path: path.resolve(process.cwd(), 'dist')
  },
  resolve: { 
    extensions: ['.js', '.jsx']
  },
};