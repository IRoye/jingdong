var path = require('path');
var webpack = require('webpack');

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // necessary for hot reloading with IE:
    'eventsource-polyfill',
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',
    // your code:
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: path.join(__dirname, 'src')
    },
     {
       test: /\.scss$/,
       use: [
         'style-loader',
         {
           loader: 'css-loader', 
           options: { importLoaders: 1 }
         },
          {
                 loader:'postcss-loader',
                  options:{
                     plugins:(loader) =>[
                      //  传参数
                         require('autoprefixer')({browsers:["last 5 versions"]}),
                         require('postcss-import')({ root: loader.resourcePath }),
                     ]
                 }
        },
          {
                loader: "sass-loader" // compiles Sass to CSS 
          }
       ]        
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        { 
        loader: 'css-loader', 
        options: { importLoaders: 1 }
        },
        {
                 loader:'postcss-loader',
                  options:{
                     plugins:(loader) =>[
                      //  传参数
                         require('autoprefixer')({browsers:["last 5 versions"]}),
                         require('postcss-import')({ root: loader.resourcePath }),
                     ]
                 }
        }
          ]
    },
    {
      test : /\.(jpe?g|png)$/,
      loader: 'file-loader'

    }
  
  ]
  }
};
