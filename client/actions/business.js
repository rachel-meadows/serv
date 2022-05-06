import { APIgetJobs } from '../apis/business'

export const GET_JOBS_PENDING = 'GET_JOBS_PENDING'
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS'

export function fetchOpenJobsPending() {
  return {
    type: GET_JOBS_PENDING,
  }
}

export function fetchOpenJobsSuccess(jobs) {
  console.log('fetch success, jobs are ', jobs)
  return {
    type: GET_JOBS_SUCCESS,
    openJobs: jobs,
  }
}

// Get all existing orders
export function fetchOpenJobs() {
  return (dispatch) => {
    dispatch(fetchOpenJobsPending())
    return APIgetJobs()
      .then((jobs) => {
        console.log('up to actions', jobs)
        dispatch(fetchOpenJobsSuccess(jobs))
        return null
      })
      .catch((error) => {
        const errMessage = error.response?.text || error.message
        dispatch(showError(errMessage))
      })
  }
}
