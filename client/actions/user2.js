import { APIaddUser } from '../apis/users'

export function addProduct(data) {
  return () => {
    return APIaddUser(data)
      .then(() => {
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
