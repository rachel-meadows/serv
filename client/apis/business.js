import request from 'superagent'

const rootUrl = '/api/v1/business'

export function APIgetJobs() {
  return request.get(rootUrl).then((res) => {
    return res.body
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

export function APIaddQuote(jobId, data) {
  return request.post(rootUrl + `/jobs/${jobId}/addquote`).send(data)
}

export function APIgetBusinessDetails() {
  return request.get(rootUrl + `/jobs/${jobId}`).then((res) => {
    return res.body
  })
}

export function APIeditBusiness(userId, data) {
  return request.put(rootUrl + `/${userId}/edit`).send(businessId, data)
}
