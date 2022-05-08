exports.seed = function (knex) {
  return knex('jobs')
    .del()
    .then(function () {
      return knex('jobs').insert([
        {
          id: 1,
          user_id: 3,
          description:
            'My roof has been leaking for 3 days. It appears to be from a crack in some of the tiles.',
          image: 'multer image string placeholder',
          category: 'construction',
          price_min: '500',
          price_max: '1000',
          date_added: '2022-05-04T21:15:34.334Z',
          status: 'open',
        },
        {
          id: 2,
          user_id: 3,
          description:
            'Looking for a contractor to mow my lawn every two weeks.',
          image: 'multer image string placeholder',
          category: 'gardening',
          price_min: '20',
          price_max: '40',
          date_added: '2022-03-04T21:14:34.334Z',
          status: 'in progress',
        },
        {
          id: 3,
          user_id: 3,
          description: 'Office is moving, needs a deep clean (3-4 days work).',
          image: 'multer image string placeholder',
          category: 'cleaning',
          price_min: '900',
          price_max: '2000',
          date_added: '2022-02-01T21:15:34.334Z',
          status: 'closed',
        },
        {
          id: 4,
          user_id: 1,
          description: 'I have a job that involves plumbing.',
          image: 'multer image string placeholder',
          category: 'plumbing',
          price_min: '90',
          price_max: '200',
          date_added: '2022-02-01T21:15:34.334Z',
          status: 'open',
        },
        {
          id: 5,
          user_id: 2,
          description: `I'd like a small forest inside my house.`,
          image: 'multer image string placeholder',
          category: 'gardening',
          price_min: '10000',
          price_max: '110000',
          date_added: '2022-02-01T21:15:34.334Z',
          status: 'open',
        },
        {
          id: 6,
          user_id: 3,
          description: 'In urgent need of a birdhouse.',
          image: 'multer image string placeholder',
          category: 'building',
          price_min: '50',
          price_max: '100',
          date_added: '2022-02-01T21:15:34.334Z',
          status: 'open',
        },
      ])
    })
}
