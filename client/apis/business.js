import request from 'superagent'

const rootUrl = '/api/v1/business'

export function APIgetJobs() {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}

export function APIgetJobById(jobId) {
  return request.get(rootUrl + `/jobs/details/${jobId}`).then((res) => {
    return res.body[0]
  })
}

export function APIgetOpenJobsByCategory(category) {
  return request.get(rootUrl + `/category/${category}`).then((res) => {
    return res.body
  })
}

export function APIgetJobsByUser(userId) {
  return request.get(rootUrl + `/user/${userId}`).then((res) => {
    return res.body
  })
}

export function APIgetBusinessById(businessId) {
  return request.get(rootUrl + `/${businessId}`).then((res) => {
    return res.body
  })
}

export function APIgetBusinessByUserId(userId) {
  return request.get(rootUrl + `/details/${userId}`).then((res) => {
    return res.body
  })
}

export function APIaddQuote(jobId, data) {
  return request
    .post(rootUrl + `/jobs/${jobId}/addquote`)
    .send(data)
    .then(() => {})
}

export function APIeditBusiness(userId, data) {
  return request.put(rootUrl + `/${userId}/edit`).send(businessId, data)
}

export function APIchangeJobStatus(jobId, status) {
  return request
    .patch(rootUrl + `/jobs/${jobId}`)
    .send({ status: status })
    .then(() => {})
}

export function APIgetQuoteByJobAndUserId(jobId, userId) {
  return request
    .get(rootUrl + `/quotes/${jobId}/${userId}`)
    .then((res) => res.body)
}

export function APIgetReviews(businessId) {
  return request.get(rootUrl + `/${businessId}/reviews`).then((res) => res.body)
}
