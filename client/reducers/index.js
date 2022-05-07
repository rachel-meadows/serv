import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import currentUser from './currentUser'
import user from './user'
import { openJobs } from './business'
import { jobQuotes, jobListings } from './customer'
import waiting from './waiting'

export default combineReducers({
  errorMessage,
  waiting,
  currentUser,
  user,
  openJobs,
  jobQuotes,
  jobListings,
})
