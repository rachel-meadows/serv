const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./business')

jest.setTimeout(10000)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

// describe('editBusiness', () => {
//   it('edits an existing business correctly', () => {
//     const newData = {
//       userId: 1,
//       businessName: 'Plumbers R Us',
//       website: 'www.example.com',
//       category: 'plumbing',
//       logo: 'base64ImageString',
//       location: '123 Fake Street',
//     }

//     return db.editBusiness(1, newData).then((event) => {
//       expect(event.logo).toBe('base64ImageString')
//       expect(event.businessName).toBe('Plumbers R Us')
//       return null
//     })
//   })
// })

// describe('addBusiness', () => {
//   it('inserts a new business correctly', () => {
//     const newBusiness = {
//       userId: 1,
//       businessName: 'Plumbers R Us',
//       website: 'www.example.com',
//       category: 'plumbing',
//       logo: '',
//       location: '123 Fake Street',
//       average_rating: null,
//     }
//     return db.addBusiness(newBusiness, testDb).then((businessId) => {
//       db.getBusinessByUserId(businessId).then((event) => {
//         console.log('event', event)
//         expect(event.userId).toBe(1)
//         expect(event.businessName).resolves.toBe('Plumbers R Us')
//         return null
//       })
//     })
//   })
// })

describe('getBusinessByUserId', () => {
  it('returns business by ID of the user who registered it', () => {
    return db.getBusinessByUserId(2, testDb).then((event) => {
      expect(event.id).toBe(1)
      expect(event.businessName).toBe('Pipe Fix Plumbing')
      return null
    })
  })
})

// TODO:
// getBusiness
// addFeedback
// getRatings
// updateBusinessRatingCount
// updateBusinessAverageRating
// getReviews
