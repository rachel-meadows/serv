import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import users from './users'
import user from './user'
import { openJobs } from './business'
import { jobQuotes, jobListings } from './customer'

export default combineReducers({
  errorMessage,
  users,
  user,
  openJobs,
  jobQuotes,
  jobListings,
})
