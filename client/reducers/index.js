import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import openJobs from './business'

export default combineReducers({
  users,
  user,
  openJobs,
})
