const connection = require('./connection')

function addBusiness(input, db = connection) {
  const { userId, businessName, website, category, logo } = input
  const business = {
    user_id: userId,
    business_name: businessName,
    website,
    category,
    logo,
    average_rating: null,
  }
  return db('businesses').insert(business)
}

function editBusiness(id, input, db = connection) {
  const { businessName, website, category, logo } = input
  const business = {
    user_id: id,
    business_name: businessName,
    website,
    category,
    logo,
  }
  return db('businesses').where('id', id).update(business)
}

function getBusiness(id, db = connection) {
  return db('businesses').where('id', id).select().first()
}

module.exports = {
  addBusiness,
  editBusiness,
  getBusiness,
}
