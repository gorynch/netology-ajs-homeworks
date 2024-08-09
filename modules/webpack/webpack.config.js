const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
          { test: /\.svg$/, use: 'svg-inline-loader' },
          { test: /\.css$/, use: [ 'style-loader',
                                    // MiniCssExtractPlugin.loader,
                                    'css-loader'] },
          // { test: /\.txt$/, use: 'raw-loader'}
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'./src/index.html'),
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin()
    ],
    mode: 'production',
    output: {
      path: path.resolve(__dirname, 'dist'),
      // path: path.resolve(__dirname, 'public'),
      filename: 'main.js'
    }
}