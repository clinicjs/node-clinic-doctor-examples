'use strict'

const restify = require('restify')
const server = restify.createServer()
const async = require('async')

function awaitData (callback) {
  async.series([
    (done1) => setTimeout(done1, Math.random() * 1000),
    (done1) => async.parallel([
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000),
      (done2) => setTimeout(done2, Math.random() * 1000)
    ], done1)
  ], callback)
}

server.get('/', function (req, res, next) {
  awaitData(function () {
    res.send({})
    next()
  })
})

server.listen(3000)

process.on('SIGINT', function () {
  console.error('Caught SIGINT, shutting down.')
  server.close()
})
