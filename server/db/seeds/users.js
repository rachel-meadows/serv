exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          auth0_id: 'auth0|628cc12a89f78c0068a45fb4',
          user_name: 'customer',
          email: 'customer@example.com',
          type: 'customer',
        },
        {
          id: 2,
          auth0_id: 'auth0|627a2087c94999006fde3c59',
          user_name: 'servbusiness',
          email: 'servbusiness@example.com',
          type: 'business',
        },
      ])
    })
}
