exports.seed = function (knex) {
  return knex('quotes')
    .del()
    .then(function () {
      return knex('quotes').insert([
        {
          id: 1,
          user_id: 4,
          business_id: 1,
          job_id: 1,
          price: 500,
          date_added: '2022-05-04T21:15:34.334Z',
          notes: `We can fix your roof for 500 if it's quick`,
          status: 'pending',
        },
        {
          id: 2,
          user_id: 5,
          business_id: 2,
          job_id: 2,
          price: 30,
          date_added: '2022-05-04T21:15:34.334Z',
          notes: 'price excludes lawnmower gas',
          status: 'accepted',
        },
        {
          id: 3,
          user_id: 6,
          business_id: 3,
          job_id: 2,
          price: 100,
          date_added: '2022-05-04T21:15:34.334Z',
          notes: null,
          status: 'rejected',
        },
        {
          id: 4,
          user_id: 6,
          business_id: 3,
          job_id: 4,
          price: 100,
          date_added: '2022-05-04T21:15:34.334Z',
          notes: 'I am a plumber',
          status: 'pending',
        },
        {
          id: 5,
          user_id: 6,
          business_id: 3,
          job_id: 5,
          price: 9000,
          date_added: '2022-05-04T21:15:34.334Z',
          notes: `I've done this exact work many times before. Piece of cake!`,
          status: 'accepted',
        },
        {
          id: 6,
          user_id: 6,
          business_id: 3,
          job_id: 6,
          price: 100,
          date_added: '2022-05-04T21:15:34.334Z',
          notes: 'Best I can do is a treehouse.',
          status: 'pending',
        },
        {
          id: 7,
          user_id: 7,
          business_id: 3,
          job_id: 7,
          price: 100,
          date_added: '2022-05-04T21:15:34.334Z',
          notes: 'Best I can do is a treehouse.',
          status: 'accepted',
        },
      ])
    })
}
