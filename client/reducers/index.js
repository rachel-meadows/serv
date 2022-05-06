import { combineReducers } from 'redux'

import users from './users'
import user from './user'
import { openJobs } from './business'
import { jobQuotes, jobListings } from './customer'

export default combineReducers({
  users,
  user,
  openJobs,
  jobQuotes,
  jobListings,
})
