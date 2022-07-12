const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  mode: 'development',
  entry: { main: './src/index.ts' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  devtool: 'source-map',
  stats: {
    children: true,
  },
  resolve: {
    alias: {
      'handlebars' : 'handlebars/dist/handlebars.js'
    },
        fallback: {
      'fs': false
    },
    extensions: ['.ts', '.js', '.json', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      // шрифты и SVG
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader',
          },
        ],
        exclude: /(node_modules)/,
      },
            {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        'postcss-loader']
      },

    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', filename: 'index.html', inject: 'body' }),
    new MiniCssExtractPlugin()
  ],
};






// // webpack.config.js

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

// module.exports = {
//   mode: 'development',
//   entry: './src/index.ts',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'project-name.bundle.js'
//   },
//   resolve: {
//     alias: {
//       'express-handlebars': 'handlebars/dist/handlebars.js'
//     },
//     fallback: {
//       'fs': false
//     },
//     extensions: ['.ts', '.js', '.json']
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts?$/,
//         use: [
//           {
//             loader: 'ts-loader',
//             options: {
//               configFile: path.resolve(__dirname, 'tsconfig.json'),
//             },
//           },
//         ],
//         exclude: /(node_modules)/
//       },
//       {
//         test: /\.js$/,
//         use: 'babel-loader',
//         exclude: '/node_modules/'
//       },
//       {
//         test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
//         type: 'asset/resource'
//       },
//       {
//         test: /\.hbs$/,
//         use: ['handlebars-loader']
//       },
//       {
//         test: /\.css$/,
//         use: [MiniCssExtractPlugin.loader, {
//           loader: 'css-loader',
//           options: {
//             importLoaders: 1
//           }
//         },
//         'postcss-loader']
//       },
      
//     ]
//   },
//   devServer: {
//     static: path.resolve(__dirname, './dist'),
//     compress: true,
//     port: 8080,
//     open: true
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './src/index.html',
//     }),
//     new CleanWebpackPlugin(), 
//     new MiniCssExtractPlugin()
    
//   ] 
// }; 

