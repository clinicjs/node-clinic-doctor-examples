'use strict'

const restify = require('restify')
const server = restify.createServer()

// the path `/` is not handled, this causes an error response. It is the
// error response that has the deoptimization.

server.get('/a', function (req, res, next) {
  res.send({})
  next()
})

server.get('/b', function (req, res, next) {
  res.send({})
  next()
})

server.get('/c', function (req, res, next) {
  res.send({})
  next()
})

server.listen(3000)

process.on('SIGINT', function () {
  console.error('Caught SIGINT, shutting down.')
  server.close()
})
