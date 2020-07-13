exports.up = knex => {
    return knex.schema.createTable('tracks', (table) => {
      table.increments('id').primary
      table.string('track_name')
      table.string('image')
      table.string('file')
    })
  
}
  
exports.down = knex => {
    return knex.schema.dropTable('tracks')
}
