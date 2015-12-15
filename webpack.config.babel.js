import webpack from 'webpack';

module.exports = {
  devtool: '#source-map',
  entry: './src',
  output: {
    path: './dist/',
    filename: 'jquery.iframe.js',
    library: 'jquery.iframe',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'html' },
    ],
  },
  externals: {
    jquery: {
      root: '$',
      commonjs2: 'jquery',
      commonjs: 'jquery',
      amd: 'jquery',
    },
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
};
