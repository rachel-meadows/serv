import request from 'superagent'

const rootUrl = '/api/v1/customer'

export function APIgetJobsByCustomer(customerId) {
  return request.get(rootUrl + `/${customerId}/jobs`).then((res) => {
    return res.body
  })
}

export function APIaddJob(data) {
  console.log('api', data)
  return request.post(rootUrl + `/add`).send(data)
}

export function APIgetJobById(jobId) {
  return request.get(rootUrl + `/jobs/${jobId}`).then((res) => {
    return res.body
  })
}

export function APIeditJob(jobId, data) {
  return request.patch(rootUrl + `/jobs/${jobId}`).send(jobId, data)
}

export function APIgetCustomerQuotes(customerId) {
  return request.get(rootUrl + `/${customerId}/quotes`).then((res) => {
    return res.body
  })
}

export function APIgetJobQuotes(jobId) {
  return request.get(rootUrl + `/quote/${jobId}`).then((res) => {
    return res.body
  })
}

export function APIgetQuoteById(jobId, quoteId) {
  return request.get(rootUrl + `/${jobId}/quotes/${quoteId}`).then((res) => {
    return res.body
  })
}

export function APIchangeQuoteStatus(quoteId, status) {
  console.log(quoteId, status)
  return request
    .patch(rootUrl + `/jobs/quotes/${quoteId}`)
    .send({ status: status })
    .then(() => {
      return null
    })
}
