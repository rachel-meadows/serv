const connection = require('./connection')

function addBusiness(input, db = connection) {
  const { userId, businessName, website, category, logo, location } = input
  const business = {
    user_id: userId,
    business_name: businessName,
    website,
    category,
    logo,
    location,
    average_rating: null,
  }
  return db('businesses').insert(business)
}

function editBusiness(id, input, db = connection) {
  const { businessName, website, category, logo, location, ratingCount } = input
  const business = {
    user_id: id,
    business_name: businessName,
    website,
    category,
    logo,
    location,
    rating_count: ratingCount,
  }
  return db('businesses').where('id', id).update(business)
}

function getBusinessByUserId(id, db = connection) {
  return db('businesses')
    .join('users', 'users.id', 'businesses.user_id')
    .where('businesses.user_id', id)
    .select(
      'businesses.id',
      'user_id as userId',
      'business_name as businessName',
      'website',
      'category',
      'logo',
      'location',
      'average_rating as averageRating',
      'rating_count as ratingCount'
    )
    .first()
}

function getBusiness(id, db = connection) {
  return db('businesses')
    .where('id', id)
    .select(
      'id',
      'user_id as userId',
      'business_name as businessName',
      'website',
      'category',
      'logo',
      'location',
      'average_rating as averageRating',
      'rating_count as ratingCount'
    )
    .first()
}

function addFeedbackHelper(quoteId, db = connection) {
  return db('businesses')
    .join('quotes', 'quotes.business_id', 'businesses.id')
    .where('quotes.id', quoteId)
    .select('businesses.id as businessId')
    .first()
}

function addFeedback(data, db = connection) {
  const reviewData = {
    user_id: data.customerId,
    business_id: data.businessId,
    rating: data.rating,
    review: data.review,
    date_added: data.dateAdded,
  }
  return db('reviews').insert(reviewData)
}

function getRatings(businessId, db = connection) {
  return db('reviews').where('business_id', businessId).select('rating')
}

function updateBusinessRatingCount(businessId, ratingsCount, db = connection) {
  return db('businesses')
    .where('id', businessId)
    .update({ rating_count: ratingsCount })
}

function updateBusinessAverageRating(
  businessId,
  averageRating,
  db = connection
) {
  return db('businesses')
    .where('id', businessId)
    .update({ average_rating: averageRating })
}

function getReviews(businessId, db = connection) {
  return db('reviews')
    .where('business_id', businessId)
    .select('review', 'rating')
}

module.exports = {
  addBusiness,
  editBusiness,
  getBusiness,
  getBusinessByUserId,
  addFeedbackHelper,
  addFeedback,
  getRatings,
  updateBusinessRatingCount,
  updateBusinessAverageRating,
  getReviews,
}
