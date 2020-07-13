// import external modules
const path = require('path')
const express = require('express')

const artistRoutes = require('./routes/artistRoutes')
const trackRoutes = require('./routes/trackRoutes')

const server = express()

// add middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/artists', artistRoutes)
server.use('/api/v1/tracks', trackRoutes)

module.exports = server