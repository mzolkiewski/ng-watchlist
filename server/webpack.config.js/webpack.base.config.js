var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var webpackConfig = {
  entry: './src/main.ts',
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../', 'dist'),
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: [
      '.ts', '.js', '.json'
    ],
    modules: [
      'node_modules',
      'src',
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        test: /\.ts$/,
        ts: {
          compiler: 'typescript',
          configFileName: 'tsconfig.json'
        },
        tslint: {
          emitErrors: true,
          failOnHint: true
        }
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    }),
    // https://webpack.js.org/guides/code-splitting-libraries/
    new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest'
    })
  ],
  module: {
    rules: [
     {
       test: /\.ts$/,
       loaders: 'awesome-typescript-loader'
     },
     {
       test: /\.json$/,
       use: 'json-loader'
     }
   ]
  }
};

module.exports = webpackConfig;