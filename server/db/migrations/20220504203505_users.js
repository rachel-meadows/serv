exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.text('auth0_id')
    table.text('user_name')
    table.text('email')
    table.string('type')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
