import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import { openJobs } from './business'
import { jobQuotes } from './customer'

export default combineReducers({
  users,
  user,
  openJobs,
  jobQuotes,
})
