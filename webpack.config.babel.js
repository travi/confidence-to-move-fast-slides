import webpack from 'webpack';
import {getIfUtils, removeEmpty} from 'webpack-config-utils';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default function (env = 'development') {
  const {ifDevelopment, ifProduction} = getIfUtils(env);
  const defaultChunks = ['vendor', 'manifest'];

  return {
    devtool: ifDevelopment('cheap-module-source-map', 'source-map'),

    entry: {
      slides: './src',
      vendor: removeEmpty([
        // ifDevelopment('webpack-hot-middleware/client'),
        // ifDevelopment('react-hot-loader/patch'),
        'react',
        'react-dom',
        'spectacle'
      ])
    },
    output: {
      path: path.resolve(__dirname, './lib'),
      filename: ifProduction('[name]-[chunkhash].js', '[name].js'),
      publicPath: '/'
    },


    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [['@travi', {
              react: true,
              modules: false,
              targets: {browser: true}
            }]],
            plugins: removeEmpty([
              ifProduction('transform-react-remove-prop-types'),
              ifDevelopment('@babel/transform-react-jsx-source'),
              '@babel/transform-runtime'
            ]),
            comments: false,
            cacheDirectory: true
          }
        },
        {
          test: /\.css$/,
          use: [
            {loader: 'style-loader'},
            {loader: 'raw-loader'}
          ]
        },
        {
          test: /\.mustache$/,
          loader: 'mustache-loader'
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                limit: 8192,
                publicPath: '..//'
              }
            },
            {
              loader: 'img-loader',
              options: {
                progressive: true
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        }
      ]
    },

    plugins: removeEmpty([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env)
        }
      }),
      new HtmlWebpackPlugin({
        chunks: [...defaultChunks, 'slides'],
        filename: 'index.html',
        template: 'src/presentation.mustache',
        title: 'With Enough Confidence, You Can Go Fast',
        ...'production' === env && {gaKey: 'UA-2890413-13'}
      })
    ]),

    mode: env,
    optimization: {
      minimize: ifProduction(true, false)
    }
  };
}
