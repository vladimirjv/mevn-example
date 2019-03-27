const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports={
  entry: './src/app/main.js',
  output: {
    path: path.join(__dirname,'src/public/js'),
    filename:'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ]
}
// module.exports = {
//   entry: './src/app/main.js',
//   output: {
//     path: path.join(__dirname, 'src/public/js'),
//     filename: 'bundle.js'
//   },
//   resolve: {
//     alias: {
//       vue: 'vue/dist/vue.js'
//     }
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/
//       },
//       {
//         test: /\.vue$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'vue-loader'
//         }
//       }
//     ]
//   },
//   devServer: {
//     port: 3000
//   }
// };
