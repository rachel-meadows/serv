const connection = require('./connection')

function getUsers(db = connection) {
  return db('users')
    .select(
      'id',
      'auth0_id as auth0Id',
      'user_name as userName',
      'email',
      'type'
    )
    .first()
}

function addUser(input, db = connection) {
  const { auth0Id, userName, email, type } = input
  const user = { auth0_id: auth0Id, user_name: userName, email, type }
  return db('users')
    .insert(user, 'id')
    .then(([data]) => {
      return getUserById(data.id)
    })
}

function getUserById(id, db = connection) {
  console.log('id: ', id)
  return db('users')
    .where('id', id)
    .select(
      'id',
      'auth0_id as auth0Id',
      'user_name as userName',
      'email',
      'type'
    )
    .first()
}

function getUserByAuth0Id(auth0Id, db = connection) {
  return db('users')
    .where('auth0_id', auth0Id)
    .first()
    .select(
      'id',
      'auth0_id as auth0Id',
      'user_name as userName',
      'email',
      'type'
    )
}

module.exports = {
  getUsers,
  addUser,
  getUserById,
  getUserByAuth0Id,
}
