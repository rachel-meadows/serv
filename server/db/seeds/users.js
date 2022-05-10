exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          auth0_id: 'auth0|627a1fe6a17ac70069715cdd',
          user_name: 'servcustomer',
          email: 'servcustomer@example.com',
          type: 'customer',
        },
        {
          id: 2,
          auth0_id: 'auth0|627a2087c94999006fde3c59',
          user_name: 'servbusiness',
          email: 'servbusiness@example.com',
          type: 'business',
        },
        {
          id: 7,
          auth0_id: 'google-oauth2|100533594005351605752',
          user_name: 'Daniel Bird',
          email: 'danieldbird@gmail.com',
          type: 'customer',
        },
      ])
    })
}
