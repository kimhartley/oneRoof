const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getArtistList(db = connection) {
   
    return db('artists')
    .select()
}

function getArtistsById(id, db = connection) {
    
    return db('artists')
    .where('id',id)
    .then((artists) => {
        return artists[0]
    })
}

module.exports = {
    getArtistList,
    getArtistsById
}