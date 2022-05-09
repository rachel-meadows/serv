const express = require('express')
const dbJobs = require('../db/jobs')
const dbQuotes = require('../db/quotes')
const router = express.Router()

// POST api/v1/customer/add
router.post('/add', async (req, res) => {
  const data = req.body
  try {
    await dbJobs.addJob(data)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to insert job into the database' })
  }
})

// GET api/v1/customer/:customerId/jobs
router.get('/:customerId/jobs', async (req, res) => {
  const { customerId } = req.params
  try {
    await dbJobs.getJobsByCustomer(customerId).then((jobs) => {
      res.json({ jobs })
      return null
    })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'Unable to get list of jobs by customer ID' })
  }
})

// GET api/v1/customer/jobs/:jobId
router.get('/jobs/:jobId', async (req, res) => {
  const { jobId } = req.params
  try {
    await dbJobs.getJobById(jobId).then((job) => {
      res.json({ job })
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get job by job ID' })
  }
})

// PATCH api/v1/customer/jobs/:jobId
router.patch('/jobs/:jobId', async (req, res) => {
  const { jobId } = req.params
  const data = req.body
  try {
    await dbJobs.editJob(jobId, data).then((job) => {
      res.json({ job })
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get list of jobs by job ID' })
  }
})

// GET api/v1/customer/:customerId/quotes
router.get('/:customerId/quotes', async (req, res) => {
  const { customerId } = req.params
  try {
    await dbQuotes.getQuotesByCustomer(customerId).then((quotes) => {
      res.json({ quotes })
      return null
    })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'Unable to get list of quotes by customer ID' })
  }
})

// GET api/v1/customer/:jobId/quotes
router.get('/quote/:jobId', async (req, res) => {
  const { jobId } = req.params
  console.log('1', jobId)
  try {
    await dbQuotes.getQuotesByJob(jobId).then((quotes) => {
      res.json({ quotes })
      return null
    })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'Unable to get list of quotes by customer ID' })
  }
})

// Change quote status
// GET api/v1/customer/jobs/quotes/:quoteId
router.patch('/jobs/quotes/:quoteId', async (req, res) => {
  const { quoteId } = req.params
  const status = req.body.status
  try {
    await dbQuotes.editQuoteStatus(quoteId, status).then((quote) => {
      res.json({ quote })
      return null
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Unable to get list of jobs by job ID' })
  }
})

// GET api/v1/customer/:jobId/quotes/:quoteId
router.get('/:jobId/quotes/:quoteId', async (req, res) => {
  const { quoteId } = req.params
  try {
    await dbQuotes.getQuote(quoteId).then((quotes) => {
      res.json({ quotes })
      return null
    })
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'Unable to get list of quotes by customer ID' })
  }
})

module.exports = router
