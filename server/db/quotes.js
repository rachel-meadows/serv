const connection = require('./connection')

function addQuote(input, db = connection) {
  const { businessId, jobId, description, priceMin, priceMax } = input
  const quote = {
    business_id: businessId,
    job_id: jobId,
    notes: description,
    price_min: priceMin,
    price_max: priceMax,
    date_added: new Date(Date.now()),
    status: 'pending',
  }
  return db('quotes').insert(quote)
}

// addQuote helper function 1
function getUserIdByJobId(jobId, db = connection) {
  return db('quotes')
    .join('jobs', 'quotes.job_id', 'jobs.id')
    .where('jobs.id', jobId)
    .select('jobs.user_id as userId')
    .first()
}

// addQuote helper function 2
function addUserIdToQuote(quoteId, userId, db = connection) {
  console.log('userId in helper:', userId)
  console.log('quoteId in helper:', quoteId)
  return db('quotes').where('id', quoteId).update('user_id', userId)
}

function getQuotesByCustomer(id, db = connection) {
  return db('quotes')
    .where('user_id', id)
    .select(
      'id',
      'user_id as userId',
      'business_id as businessId',
      'job_id as jobId',
      'price_min as priceMin',
      'price_max as priceMax',
      'date_added as dateAdded',
      'notes as description',
      'status'
    )
}

function getQuotesByJob(id, db = connection) {
  return db('quotes')
    .where('job_id', id)
    .select(
      'id',
      'user_id as userId',
      'business_id as businessId',
      'job_id as jobId',
      'price_min as priceMin',
      'price_max as priceMax',
      'date_added as dateAdded',
      'notes as description',
      'status'
    )
}

function getQuote(id, db = connection) {
  return db('quotes')
    .where('id', id)
    .select(
      'id',
      'user_id as userId',
      'business_id as businessId',
      'job_id as jobId',
      'price_min as priceMin',
      'price_max as priceMax',
      'date_added as dateAdded',
      'notes as description',
      'status'
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
      'quotes.price_min as priceMin',
      'quotes.price_max as priceMax',
      'quotes.date_added as dateAdded',
      'notes as description',
      'quotes.status as quoteStatus',
      'jobs.status as jobStatus'
    )
    .first()
}

module.exports = {
  addQuote,
  getQuotesByCustomer,
  getQuotesByJob,
  getQuote,
  editQuoteStatus,
  getUserIdByJobId,
  addUserIdToQuote,
  getQuoteByJobAndUserId,
}
