const express = require('express')
const db = require('../db/tracks')
const router = express.Router()

router.get('/', (req, res) => {

    db.getTrackList()
    .then(tracks => {
        res.json(tracks)
    })
})

module.exports = router