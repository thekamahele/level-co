// import express from 'express'
var express = require('express')
var path = require('path')
var app = express()


app.set('port', (process.env.PORT || 3000))
app.use('/', express.static(path.resolve(__dirname + '/../dist')))

var apiRouter = new express.Router()
app.use('/api', apiRouter)
require('./routes/routes.js')(apiRouter)


app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})
