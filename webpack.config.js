const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',

  entry: {
    bundle: './src/index'
  },

  plugins: [],

  module: {
    rules: [
      {
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        test: /\.js$/
      }
    ]
  }
};
