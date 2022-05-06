import { GET_JOB_QUOTES_SUCCESS } from '../actions/customer'
import { FETCH_JOB_LISTINGS } from '../actions/jobListings'

const initialState = []

export const jobQuotes = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB_QUOTES_SUCCESS:
      return action.jobQuotes.quotes
    default:
      return state
  }
}

//THIS IS INTENDED TO DISPLAY AN INDIVIDUAL CUSTOMER'S **OWN** JOB LISTINGS, NOT ALL THE JOB LISTINGS
export const jobListings = (state = [], action) => {
  switch (action.type) {
    case FETCH_JOB_LISTINGS:
      return action.jobs

    default:
      return state
  }
}
