exports.up = function (knex) {
  return knex.schema.createTable('quotes', (table) => {
    table.increments('id').primary()
    table.integer('job_id').references('jobs.id')
    table.integer('business_id').references('businesses.id')
    table.int('price')
    table.date('date_added')
    table.string('notes')
    table.string('status')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('quotes')
}
