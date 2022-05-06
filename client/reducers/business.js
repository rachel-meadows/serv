import { GET_JOBS_SUCCESS } from '../actions/business'

const initialState = []

export const openJobs = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_SUCCESS:
      // Two layers deep to get the array within the object returned from DB
      return action.openJobs.jobs
    default:
      return state
  }
}
