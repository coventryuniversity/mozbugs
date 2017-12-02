// production config
const merge = require('webpack-merge');
const {resolve} = require('path');

const paths = require('./paths')
let publicPath = paths.servedPath;

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolve(__dirname, '../dist'),
    publicPath,
  },
  devtool: 'source-map',
  plugins: [],
});
