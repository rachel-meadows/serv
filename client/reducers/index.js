import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import user from './user'
import { openJobs } from './business'
import { jobQuotes, jobListings } from './customer'
import waiting from './waiting'

export default combineReducers({
  errorMessage,
  waiting,
  user,
  openJobs,
  jobQuotes,
  jobListings,
})
