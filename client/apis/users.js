import request from 'superagent'

const rootUrl = '/api/v1/user'

export function APIaddUser(data) {
  return request.post(rootUrl).send(data)
}
