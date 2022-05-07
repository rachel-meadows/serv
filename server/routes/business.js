const express = require('express')
const dbJobs = require('../db/jobs')
const dbQuotes = require('../db/quotes')
const dbBusiness = require('../db/business')
const router = express.Router()

// GET /business
router.get('/', async (req, res) => {
  try {
    dbJobs.getOpenJobs().then((jobs) => {
      res.json({ jobs })
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get list of all jobs' })
  }
})

// GET /business/category/:category
// Get data for the openJobsByCategory state
router.get('/category/:category', async (req, res) => {
  const { category } = req.params
  try {
    dbJobs.getOpenJobsByCategory(category).then((jobs) => {
      res.json(jobs)
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get list of all jobs' })
  }
})

// GET /business/user/:userId
// Get data for the jobsByUser state
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params
  try {
    dbJobs.getJobsByUser(userId).then((jobs) => {
      res.json(jobs)
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get list of all jobs' })
  }
})

// GET /business/:jobId
router.get('/:jobId', async (req, res) => {
  const { jobId } = req.params
  try {
    await dbBusiness.getBusiness(jobId).then((data) => {
      res.json(data)
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to find busines by job ID' })
  }
})

// Get business details by user ID
// GET /business/:userId/details
router.get('/:userId/details', async (req, res) => {
  const { userId } = req.params
  try {
    await dbBusiness.getBusinessByUserId(userId).then((data) => {
      res.json(data)
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to find busines by job ID' })
  }
})

// GET /business/:businessId
router.get('/:businessId', async (req, res) => {
  console.log('up to route')
  const { businessId } = req.params
  try {
    dbJobs.getBusiness(businessId).then((data) => {
      res.json({ data })
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to find busines by business ID' })
  }
})

// POST /business/jobs/:jobsId/addquote
router.post('/jobs/:jobId/addquote', async (req, res) => {
  const { jobId } = req.params
  const data = { ...req.body, jobId }
  try {
    await dbQuotes.addQuote(data)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to add quote into db' })
  }
})

// GET /business/:id/edit
// Details for edit business form
router.get('/:id/edit', async (req, res) => {
  const { id } = req.params
  try {
    await dbBusiness.getBusiness(id).then((data) => {
      res.json({ data })
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get list of all jobs' })
  }
})

// PUT /business/edit Edit business details
router.put('/:id/edit', async (req, res) => {
  const { id } = req.params
  const data = req.body
  try {
    await dbBusiness.editBusiness(id, data)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to edit business' })
  }
})

// Change job status
// PATCH /business/jobs/:jobId Edit business details
router.patch('/jobs/:jobId', async (req, res) => {
  const { jobId } = req.params
  const status = req.body.status
  try {
    await dbJobs.changeJobStatus(jobId, status)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to edit business' })
  }
})

module.exports = router
