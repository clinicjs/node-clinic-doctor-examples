'use strict'

const restify = require('restify')
const fs = require('fs')
const path = require('path')
const tmp = path.join(__dirname, 'tmp')
const server = restify.createServer()

server.get('/', function (req, res, next) {
  sleep(10) // mimic sync I/O by sleeping 10ms sync
  res.send({})
  next()
})

server.listen(3000)

process.on('SIGINT', function () {
  console.error('Caught SIGINT, shutting down.')
  try { fs.unlinkSync(tmp) } catch (e) {}
  server.close()
})

function sleep (ms){
  var now = Date.now()
  while(Date.now() < now + ms) { 
    fs.closeSync(fs.openSync(tmp, 'a'))
  } 
}