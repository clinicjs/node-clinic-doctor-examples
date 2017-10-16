'use strict'

const fs = require('fs')
const path = require('path')
const restify = require('restify')
const server = restify.createServer()

function createLargeLinkStructure (tail, item, repeats, callback) {
  setImmediate(function () {
    if (repeats > 0) {
      const next = JSON.parse(item)
      tail.next = next
      createLargeLinkStructure(next, item, repeats - 1, callback)
    } else {
      callback(null, tail)
    }
  })
}

function getLargeData (data, callback) {
  const item = JSON.stringify(data)
  const first = JSON.parse(item)
  createLargeLinkStructure(first, item, 512, function (err, last) {
    if (err) return callback(err)

    // make data circular
    last.next = first
    callback(null, first)
  })
}

function getVersion (bigdata, callback) {
  setTimeout(function () {
    callback(null, bigdata.version)
  }, 1000)
}

function processRequest (data, callback) {
  getLargeData(data, function (err, bigdata) {
    if (err) return callback(err)

    getVersion(bigdata, function (err, version) {
      if (err) return callback(err)

      callback(null, { version })
    })
  })
}

server.get('/', function (req, res, next) {
  processRequest(require('../package.json'), function (err, output) {
    if (err) return next(err)
    res.send(output)
    next()
  })
})

server.listen(3000)

process.on('SIGINT', function () {
  console.error('Caught SIGINT, shutting down.')
  server.close()
})
