'use strict'

const restify = require('restify')
const proc = require('child_process')

const server = restify.createServer()

server.get('/', function (req, res, next) {
  sleep(10) // mimic sync I/O by sleeping 10ms sync
  res.send({})
  next()
})

server.listen(3000)

process.on('SIGINT', function () {
  console.error('Caught SIGINT, shutting down.')
  server.close()
})

function sleep (ms) {
  proc.execSync(`node -e "setTimeout(() => {}, ${ms})"`, {
    env: Object.assign({}, process.env, {NODE_OPTIONS: ''})
  })
}
