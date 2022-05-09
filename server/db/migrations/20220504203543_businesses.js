exports.up = function (knex) {
  return knex.schema.createTable('businesses', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('business_name')
    table.string('website')
    table.string('category')
    table.string('logo')
    table.string('location')
    table.int('average_rating')
    table.int('review_count')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('businesses')
}
