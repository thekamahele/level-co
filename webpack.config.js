var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: ["webpack/hot/dev-server", "webpack-hot-middleware/client", "./app/app.js"],
    output: {
      path: path.join(__dirname, '/public/'),
      filename: "bundle.js",
      publicPath: '/'
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel']
            }
        ]
    }
}
