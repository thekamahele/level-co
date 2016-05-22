import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackConfig from '../webpack.config'
import webpackDev from 'webpack-dev-middleware'
import webpackHot from 'webpack-hot-middleware'

const app = express()
const compiler = webpack(webpackConfig);

app.use(webpackDev(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHot(compiler));

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
