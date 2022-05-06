import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import users from './users'
import user from './user'
import { openJobs } from './business'
import { jobQuotes, jobListings } from './customer'
import waiting from './waiting'

export default combineReducers({
  errorMessage,
  waiting,
  users,
  user,
  openJobs,
  jobQuotes,
  jobListings,
})
