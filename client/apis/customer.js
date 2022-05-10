import request from 'superagent'

const rootUrl = '/api/v1/customer'

export function APIgetJobsByCustomer(customerId) {
  return request.get(rootUrl + `/${customerId}/jobs`).then((res) => {
    return res.body
  })
}

export function APIaddJob(data) {
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
  return request
    .patch(rootUrl + `/jobs/quotes/${quoteId}`)
    .send({ status: status })
    .then(() => {
      return null
    })
}

export function APIaddFeedback(quoteId, data) {
  return request
    .post(`/api/v1/customer/completed/${quoteId}/review`)
    .send(data)
    .catch((error) => console.log(error))
}

// TODO: Add quoteId so we can search for item price and send that items price to stripe for payment
export function APIcustomerCheckoutSession(quoteId) {
  return request
    .post(rootUrl + `/create-checkout-session`)
    .send({
      quoteId,
    })
    .then((res) => {
      if (res.ok) return res.body
      return res.json().then((json) => Promise.reject(json))
    })
    .then(({ url }) => {
      window.location = url
    })
    .catch((e) => {
      console.error(e.error)
    })
}
