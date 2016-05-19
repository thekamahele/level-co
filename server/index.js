// import express from 'express'
var express = require('express')
var path = require('path')
var app = express()
var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.set('port', (process.env.PORT || 3000))
app.use(express.static(path.resolve(__dirname + '/../public')))


var apiRouter = new express.Router()
app.use('/api', apiRouter)
require('./routes/routes.js')(apiRouter)

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})
