exports.up = knex => {
    return knex.schema.createTable('artists', (table) => {
      table.increments('id').primary
      table.string('name')
      table.string('image')
      table.string('bio')
      table.string('audio')
    })
  
  }
  
  exports.down = knex => {
    return knex.schema.dropTable('artists')
  }
