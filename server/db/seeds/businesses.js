exports.seed = function (knex) {
  return knex('businesses')
    .del()
    .then(function () {
      return knex('businesses').insert([
        {
          id: 1,
          user_id: 4,
          business_name: 'Plumbers R Us',
          website: 'www.example.com',
          category: 'plumbing',
          logo: 'multer image string placeholder',
          location: '123 Location Road, Auckland',
          rating_count: 5,
          average_rating: 4.6,
        },
        {
          id: 2,
          user_id: 5,
          business_name: 'Gardenscapes',
          website: 'www.example.com',
          category: 'gardening',
          logo: 'multer image string placeholder',
          location: '123 Location Road, Auckland',
          rating_count: 5,
          average_rating: 2.1,
        },
        {
          id: 3,
          user_id: 6,
          business_name: 'Earnest Catering',
          website: 'www.example.com',
          category: 'food',
          logo: 'multer image string placeholder',
          location: '123 Location Road, Auckland',
          rating_count: 0,
          average_rating: null,
        },
      ])
    })
}
