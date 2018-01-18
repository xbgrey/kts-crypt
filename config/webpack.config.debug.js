const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appHtml = path.resolve('public/index.html');//模版位置
const webpack = require("webpack");

module.exports = ()=>{
    return {
        entry:{
            'index':path.resolve('src/index.ts')
        },

        output: {
            path: path.resolve('bin'),
            filename: '[name].js',
        },
        
        devtool: 'source-map',

        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
          alias: {
            Crypt: path.resolve("./src/Crypt"),
          },
        },
    
        module: {
          loaders: [
            {
              test: /\.ts?$/,
              loader: 'awesome-typescript-loader'
            },{
              test: /\.json$/,
              loader: 'json'
            }
          ]
        },
        
        plugins: [
          new HtmlWebpackPlugin({
            template: appHtml,
            hash: true,
            hot: true,
          }),
        ]
      }
}