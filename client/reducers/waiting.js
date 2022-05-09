import { SET_WAITING, CLEAR_WAITING } from '../actions/waiting'
import { SHOW_ERROR } from '../actions/error'

function waiting(state = false, action) {
  switch (action.type) {
    case SET_WAITING:
      return true

    case CLEAR_WAITING:
    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
