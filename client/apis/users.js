import request from 'superagent'

const rootUrl = '/api/v1/user'

export function APIaddUser(data) {
  console.log('reached API', data)
  return request.post(rootUrl).send(data).then((res) => {
    console.log('API .then', res)
    return res.body})
}
