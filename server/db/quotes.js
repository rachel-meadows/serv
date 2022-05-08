const connection = require('./connection')

function addQuote(input, db = connection) {
  console.log(input)
  const { userId, jobId, description, priceMin, priceMax } = input
  const quote = {
    user_id: userId,
    job_id: jobId,
    notes: description,
    price_min: priceMin,
    price_max: priceMax,
    date_added: new Date(Date.now()),
    status: 'pending',
  }
  return db('quotes').insert(quote)
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

module.exports = {
  addQuote,
  getQuotesByCustomer,
  getQuotesByJob,
  getQuote,
  editQuoteStatus,
}
