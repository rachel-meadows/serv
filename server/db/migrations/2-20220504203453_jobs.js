exports.up = function (knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.text('location')
    table.text('description')
    table.text('image')
    table.text('category')
    table.integer('price_min')
    table.integer('price_max')
    table.date('date_added')
    table.string('status')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('jobs')
}
