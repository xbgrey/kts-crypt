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
        
        devServer: {
          contentBase: path.resolve('/bin'),
          hot: true
        },

        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
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
          new webpack.NamedModulesPlugin(),
          new webpack.HotModuleReplacementPlugin(),
        ]
      }
}