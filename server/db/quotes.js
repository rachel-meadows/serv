const connection = require('./connection')

function addQuote(input, db = connection) {
  const { businessId, jobId, description, price } = input
  const quote = {
    business_id: businessId,
    job_id: jobId,
    notes: description,
    price,
    date_added: new Date(Date.now()),
    status: 'pending',
  }
  return db('quotes').insert(quote)
}

function getQuotesByJob(id, db = connection) {
  return db('quotes')
    .where('job_id', id)
    .select(
      'id',
      'business_id as businessId',
      'job_id as jobId',
      'price',
      'date_added as dateAdded',
      'notes as description',
      'status as quoteStatus'
    )
}

function getQuote(id, db = connection) {
  return db('quotes')
    .where('id', id)
    .select(
      'id',
      'business_id as businessId',
      'job_id as jobId',
      'price',
      'date_added as dateAdded',
      'notes as description',
      'status as quoteStatus'
    )
}

function editQuoteStatus(quoteId, status, db = connection) {
  return db('quotes').where('id', quoteId).update('status', status)
}

function getQuoteByJobAndUserId(jobId, userId, db = connection) {
  return db('quotes')
    .join('businesses', 'quotes.business_id', 'businesses.id')
    .join('users', 'users.id', 'businesses.user_id')
    .join('jobs', 'jobs.id', 'quotes.job_id')
    .where('quotes.job_id', jobId)
    .where('users.id', userId)
    .select(
      'quotes.id as quoteId',
      'business_id as businessId',
      'job_id as jobId',
      'price',
      'quotes.date_added as dateAdded',
      'notes as description',
      'quotes.status as quoteStatus',
      'jobs.status as jobStatus',
      'jobs.location as jobLocation',
      'businesses.location as businessLocation'
    )
    .first()
}

module.exports = {
  addQuote,
  getQuotesByJob,
  getQuote,
  editQuoteStatus,
  getQuoteByJobAndUserId,
}
