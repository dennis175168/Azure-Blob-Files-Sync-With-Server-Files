const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: {
        app: [
            // 'webpack-hot-middleware/client?path=http://localhost:3000/_webpack_hmr',
            './components/app'
        ]
  },
  output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'[name].js',
        publicPath:'http://localhost:3000/static/'
    },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    // module: {
    //   rules: [
    //     {
    //       test: /\.js$/,
    //       exclude: /(node_modules|bower_components)/,
    //       use: {
    //         loader: 'babel-loader',
    //         options: {
    //           presets: ['@babel/preset-env'],
    //         }
    //       }
    //     }
    //   ]
    // }
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
};
