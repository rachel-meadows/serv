const express = require('express')

const dbUsers = require('../db/users')
const dbBusiness = require('../db/business')
const router = express.Router()

// POST /api/v1/user
router.post('/', async (req, res) => {
  // console.log(req.body);
  // Some users are not businesses and some are - filter and handle accordingly
  console.log('route', req.body)
  const {
    auth0Id,
    email,
    type,
    userName,
    businessName,
    description,
    website,
    category,
    logo,
  } = req.body
  console.log(req.body.userName)
  try {
    const userData = { auth0Id, email, userName, type }
    const userId = await dbUsers.addUser(userData)
    if (type === 'business') {
      const businessData = {
        userId,
        businessName,
        description,
        website,
        category,
        logo,
      }
      await dbBusiness.addBusiness(businessData)
    }
    res.json(userId)
    return null
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to insert user into the database' })
  }
})

// GET /api/v1/user
router.get('/:auth0Id', async (req, res) => {
  const auth0Id = req.params.auth0Id
  try {
    const user = await dbUsers.getUserByAuth0Id(auth0Id)
    res.json(user)
    return null
  }
  catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get user from the database by ID' })
  }

} )




module.exports = router
