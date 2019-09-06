const path = require('path');
const combinedLoaders = require('webpack-combine-loaders');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './client/dist/index.jsx'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './client/dist')
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
          test: /\.(s*)css$/,
          loader: combinedLoaders([
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader', 
              query: {
                modules: true, 
                localIdentName: '[name]__[loader]__[hash:base64:5]'
              }
            },{
              loader: "sass-loader",
               // compiles Sass to CSS
            }
          ])
        }
      ]
    }
  };