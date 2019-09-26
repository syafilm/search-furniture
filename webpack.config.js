const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
  title: 'Caching'
})

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
}) 

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: process.env.WEBPACK_MODE ? '[name].[chunkhash].js':'[name].[hash].js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    htmlWebpackPlugin,
    miniCssExtractPlugin,
  ],
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'api': path.resolve(__dirname, './src/api'),
      'utils': path.resolve(__dirname, './src/utils'),
      'pages': path.resolve(__dirname, './src/pages'),
      'stores': path.resolve(__dirname, './src/stores'),
      'locales': path.resolve(__dirname, './src/locales'),
      'images': path.resolve(__dirname, './src/assets/images'),
      'components': path.resolve(__dirname, './src/components'),
      'styles': path.resolve(__dirname, './src/assets/stylesheets')
    }
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.yml$/,
        use: {
          loader: 'js-yaml-loader'
        }
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.woff$/, /\.woff2$/, /\.eot$/, /\.ttf$/],
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'images/[hash]-[name].[ext]'
          }
        }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
      }
    ]
  }
};