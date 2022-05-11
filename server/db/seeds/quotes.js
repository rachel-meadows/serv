exports.seed = function (knex) {
  return knex('quotes')
    .del()
    .then(function () {
      return knex('quotes').insert([
        {
          id: 1,
          business_id: 1,
          job_id: 1,
          price: 1100,
          date_added: '1652220023069',
          notes: `We can fix your roof leak for 1100, materials excluded. Check out our website for evidence of work on similar issues.`,
          status: 'pending',
        },
        {
          id: 2,
          business_id: 1,
          job_id: 2,
          price: 110,
          date_added: '1652220023069',
          notes:
            'I can have a plumber look at it within 24 hours of accepting the quote.',
          status: 'accepted',
        },
      ])
    })
}
