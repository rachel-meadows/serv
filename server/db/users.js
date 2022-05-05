const connection = require('./connection')

function getUsers(db = connection) {
  return db('users').select(
    'id',
    'auth0_id as auth0Id',
    'email',
    'type',
    'business_id as businessId'
  )
}

function addUser(input, db = connection) {
  const { auth0Id, email, type, businessId } = input
  const user = { auth0_id: auth0Id, email, type, business_id: businessId }
  return db('users').insert(user)
}

module.exports = {
  getUsers,
  addUser,
}
