import { ADD_USER_SUCCESS } from '../actions/user'

const emptyUser = {
  id: null,
  auth0Id: '',
  userName: '',
  email: '',
  type: '',
}

export default function currentUser(state = emptyUser, action) {
  switch (action.type) {
    case ADD_USER_SUCCESS:
      return action.currentUser

      default:
      return state
  }
}
