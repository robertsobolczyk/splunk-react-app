const path = require("path");

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "index_bundle.js",
    libraryTarget: 'amd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: "./resources",
            publicPath: '/static/app/reactapp/dist/resources'
          }
        }]
      }
    ]
  }
};