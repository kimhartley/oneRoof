const express = require('express')
const db = require('../db/artists')
const router = express.Router()

router.get('/', (req, res) => {

    db.getArtistList()
    .then(artists => {
        res.json(artists)
    })
})

module.exports = router