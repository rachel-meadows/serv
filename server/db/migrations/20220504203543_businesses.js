exports.up = function (knex) {
  return knex.schema.createTable('businesses', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.text('business_name')
    table.text('website')
    table.string('category')
    table.text('logo')
    table.text('location')
    table.integer('average_rating')
    table.integer('rating_count')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('businesses')
}
