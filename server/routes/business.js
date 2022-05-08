const express = require('express')
const dbJobs = require('../db/jobs')
const dbQuotes = require('../db/quotes')
const dbBusiness = require('../db/business')
const router = express.Router()

// GET /business
router.get('/', async (req, res) => {
  try {
    await dbJobs.getOpenJobs().then((jobs) => {
      res.json({ jobs })
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get list of all jobs' })
  }
})

// Get job by job ID
// GET /business/jobs/details/:jobsId
router.get('/jobs/details/:jobId', async (req, res) => {
  const { jobId } = req.params
  try {
    await dbJobs.getJobById(jobId).then((job) => {
      res.json(job)
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to add quote into db' })
  }
})

// GET /business/category/:category
// Get data for the openJobsByCategory state
router.get('/category/:category', async (req, res) => {
  const { category } = req.params
  try {
    await dbJobs.getOpenJobsByCategory(category).then((jobs) => {
      res.json(jobs)
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get list of all jobs' })
  }
})

// Get business details by user ID
// GET /business/details/:userId/
router.get('/details/:userId/', async (req, res) => {
  const { userId } = req.params
  try {
    await dbBusiness.getBusinessByUserId(userId).then((data) => {
      res.json(data)
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to find business by user ID' })
  }
})

// GET /business/user/:userId
// Get data for the jobsByUser state
router.get('/user/:userId', async (req, res) => {
  const { userId } = req.params
  try {
    await dbJobs.getJobsByUser(userId).then((jobs) => {
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
    res.status(500).json({ message: 'Unable to find business by job ID' })
  }
})

// Change job status
// PATCH /business/jobs/:jobId Edit business details
router.patch('/jobs/:jobId', async (req, res) => {
  const { jobId } = req.params
  const status = req.body.status
  console.log('routes')
  console.log('jobId', jobId)
  console.log('status', status)
  try {
    await dbJobs.changeJobStatus(jobId, status)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to edit business' })
  }
})

// GET /business/:businessId
router.get('/:businessId', async (req, res) => {
  const { businessId } = req.params
  try {
    await dbJobs.getBusiness(businessId).then((data) => {
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

module.exports = router
