// const knex = require('knex')
// const config = require('./knexfile').test
// const testDb = knex(config)
// const db = require('./connection')

// jest.setTimeout(10000)

// beforeAll(() => {
//   return testDb.migrate.latest()
// })

// beforeEach(() => {
//   return testDb.seed.run()
// })

// afterAll(() => {
//   return testDb.destroy()
// })

// describe('getOpenJobs', () => {
//   it('returns business by ID of the user who registered it', () => {
//     return db.getBusinessByUserId(2, testDb).then((event) => {
//       expect(event.id).toBe(1)
//       expect(event.businessName).toBe('Pipe Fix Plumbing')
//       return null
//     })
//   })
// })

// // Get a list of all jobs that have not already had a quote accepted.
// function getOpenJobs(db = connection) {
//   return db('jobs')
//     .where('status', 'open')
//     .select(
//       'id',
//       'user_id as userId',
//       'description',
//       'image',
//       'category',
//       'price_min as priceMin',
//       'price_max as priceMax',
//       'date_added as dateAdded',
//       'location',
//       'status as jobStatus'
//     )
// }
