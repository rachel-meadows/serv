exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          auth0_id: 'auth0 placeholder',
          user_name: 'Bob Bee',
          email: 'example1@example.com',
          type: 'customer',
        },
        {
          id: 2,
          auth0_id: 'auth0 placeholder',
          user_name: 'Alice Ay',
          email: 'example2@example.com',
          type: 'customer',
        },
        {
          id: 3,
          auth0_id: 'auth0 placeholder',
          user_name: 'Carol Sea',
          email: 'example3@example.com',
          type: 'customer',
        },
        {
          id: 4,
          auth0_id: 'auth0 placeholder',
          user_name: 'Flynn Foo',
          email: 'example4@example.com',
          type: 'business',
        },
        {
          id: 5,
          auth0_id: 'auth0 placeholder',
          user_name: 'Baz Black',
          email: 'example3@example.com',
          type: 'business',
        },
        {
          id: 6,
          auth0_id: 'auth0 placeholder',
          user_name: 'Brit Bar',
          email: 'example3@example.com',
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
