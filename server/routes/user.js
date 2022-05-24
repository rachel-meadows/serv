const express = require('express')
const router = express.Router()

const dbBusiness = require('../db/business')
const dbUsers = require('../db/users')

// POST /api/v1/user
router.post('/', async (req, res) => {
  // Some users are not businesses and some are - filter and handle accordingly
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
    location,
  } = req.body
  try {
    const userData = { auth0Id, email, userName, type }
    const user = await dbUsers.addUser(userData)
    if (type === 'business') {
      const businessData = {
        userId: user.id,
        businessName,
        description,
        website,
        category,
        logo,
        location,
      }
      await dbBusiness.addBusiness(businessData)
    }
    res.json(user)
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
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'Unable to get user from the database by ID' })
  }
})

module.exports = router
