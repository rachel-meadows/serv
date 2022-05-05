const connection = require('./connection')

function addBusiness(input, db = connection) {
  const { name, website, category, logo } = input
  const business = { name, website, category, logo, average_rating: null }
  return db('businesses').insert(business)
}

function editBusiness(id, input, db = connection) {
  return db('jobs').where('id', id).update(input)
}

module.exports = {
  addBusiness,
  editBusiness,
}
