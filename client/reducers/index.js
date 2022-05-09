import { combineReducers } from 'redux'

import error from './error'
import user from './user'
import currentUser from './currentUser'
import waiting from './waiting'

export default combineReducers({
  error,
  waiting,
  currentUser,
  user,
})
