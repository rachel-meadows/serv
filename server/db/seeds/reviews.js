exports.seed = function (knex) {
  return knex('reviews')
    .del()
    .then(function () {
      return knex('reviews').insert([
        {
          id: 1,
          user_id: 1,
          business_id: 1,
          rating: 5,
          review:
            'They did a great job unclogging a tricky U-bend. Would reccomend.',
          date_added: '2022-05-04T21:15:34.334Z',
        },
      ])
    })
}
