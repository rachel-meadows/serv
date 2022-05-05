import request from 'superagent'

const rootUrl = '/api/v1/users'

export function APIaddUser(data) {
  return request.post(rootUrl).send(data)
}
