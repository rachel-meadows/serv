import request from 'superagent'

const rootUrl = '/api/v1/business'

export function APIgetBusinessById(businessId) {
  return request.get(rootUrl + `/${businessId}`).then((res) => {
    console.log('API!!!', res.body)
    return res.body
  })
}

export function APIgetJobs() {
  return request.get(rootUrl + `/jobs`).then((res) => {
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
