'use strict'

const fs = require('fs')
const path = require('path')
const restify = require('restify')
const server = restify.createServer()
const namesGenerator = require('docker-namesgenerator')
const names = {}

function name () {
  var result = namesGenerator()
  if (names[result]) {
    result += names[result]++
  }
  names[result] = 1
  return result
}

server.get('/', function (req, res) {
  res.send(name())
})

server.listen(3000)

process.on('SIGINT', function () {
  console.error('Caught SIGINT, shutting down.')
  server.close()
})
