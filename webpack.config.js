var webpack = require('webpack');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

var config = {
  entry: {
    index: ['./app/index.jsx'],
    LikeButton: './app/components/LikeButton.jsx'
  },
output: {
  path: './app/built',
  filename: '[name].js'
},
module: {
 loaders: [
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
      }
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
         presets: ['es2015'],
      }
    }
 ]
},
 plugins: [
   new webpack.ExternalsPlugin('commonjs',['fs']),
   new webpack.IgnorePlugin(/vertx/)
 ]
}

config.target = webpackTargetElectronRenderer(config);
module.exports = config;
