import { SET_WAITING, CLEAR_WAITING } from '../actions/waiting'

function waiting(state = false, action) {
  switch (action.type) {
    case SET_WAITING:
      return true

    case CLEAR_WAITING:
      return false

    default:
      return state
  }
}

export default waiting
