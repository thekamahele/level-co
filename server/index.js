import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackConfig from '../webpack.config'
import webpackDev from 'webpack-dev-middleware'
import webpackHot from 'webpack-hot-middleware'
import { routes } from './routes/routes.js'

const app = express()
/**
Setting up webpack middleware for hot reloading
**/
const compiler = webpack(webpackConfig);

app.use(webpackDev(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHot(compiler));

/**
Setting up express and routers
**/
app.set('port', (process.env.PORT || 3000))
app.use(express.static(path.resolve(__dirname + '/../public')))

const apiRouter = new express.Router()
app.use('/api', apiRouter)
routes(apiRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(app.get('port'), () => {
  console.log(`Node app is running at localhost:${app.get('port')}`)
})
