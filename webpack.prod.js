/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const WebpackObfuscator = require('webpack-obfuscator');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new WebpackObfuscator({
      rotateStringArray: true,
    }),
  ],
  // webpack loader rules array
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'post',
        use: {
          loader: WebpackObfuscator.loader,
          options: {
            rotateStringArray: true,
          },
        },
      },
    ],
  },
});
