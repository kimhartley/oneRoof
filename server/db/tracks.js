const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getTrackList(db = connection) {
   
    return db('tracks')
    .select()
}

function getTracksById(id, db = connection) {
    
    return db('tracks')
    .where('id',id)
    .then((tracks) => {
        return tracks[0]
    })
}

module.exports = {
    getTrackList,
    getTracksById
}