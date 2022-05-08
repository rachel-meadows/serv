import {
  GET_JOBS_SUCCESS,
  FETCH_JOBS_BY_CATEGORY_SUCCESS,
  FETCH_JOBS_BY_USER_SUCCESS,
  FETCH_JOB_BY_ID_SUCCESS,
} from '../actions/business'

const initialState = []

export const openJobsByCategory = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_BY_CATEGORY_SUCCESS:
      return action.openJobsByCategory
    default:
      return state
  }
}

export const jobsByUser = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_BY_USER_SUCCESS:
      return action.jobsByUser
    default:
      return state
  }
}

export const openJobs = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_SUCCESS:
      // Two layers deep to get the array within the object returned from DB
      return action.openJobs.jobs
    default:
      return state
  }
}

export const currentJob = (state = {}, action) => {
  switch (action.type) {
    case FETCH_JOB_BY_ID_SUCCESS:
      return action.currentJob
    default:
      return state
  }
}
