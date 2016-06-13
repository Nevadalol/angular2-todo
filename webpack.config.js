let webpack = require('webpack');

module.exports = {
  devtool: 'cheap-inline-module-source-map',
  context: __dirname,
  cache: true,

  entry: {
    build: __dirname + '/src',
    vendor: require('./vendors.json')
  },

  output: {
    path: __dirname + '/public',
    filename: '[name].js',
    publicPath: '/public/'
  },

  resolve: {
    extensions: ['', '.js', '.ts', '.html']
  },

  module: {
    loaders: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: 'ts'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    })
  ],

  devServer: {
    contentBase: __dirname,
    compress: true,
    inline: true,
    port: 8080,
    hot: true
  }
};