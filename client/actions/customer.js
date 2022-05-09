import { APIgetJobQuotes, APIaddJob } from '../apis/customer'
import { showError } from '../actions/error'

export const GET_JOB_QUOTES_PENDING = 'GET_JOB_QUOTES_PENDING'
export const GET_JOB_QUOTES_SUCCESS = 'GET_JOB_QUOTES_SUCCESS'

export const CREATE_JOB_PENDING = 'CREATE_JOB_PENDING'
export const CREATE_JOB_SUCCESS = 'CREATE_JOB_SUCCESS'

export function fetchJobQuotesPending() {
  return {
    type: GET_JOB_QUOTES_PENDING,
  }
}

export function fetchJobQuotesSuccess(quotes) {
  return {
    type: GET_JOB_QUOTES_SUCCESS,
    jobQuotes: quotes,
  }
}

export function createJobPending() {
  return {
    type: CREATE_JOB_PENDING,
  }
}

export function createJobSuccess() {
  return {
    type: CREATE_JOB_SUCCESS,
  }
}

export function fetchJobQuotes(jobId) {
  return (dispatch) => {
    dispatch(fetchJobQuotesPending())
    return APIgetJobQuotes(jobId)
      .then((jobs) => {
        dispatch(fetchJobQuotesSuccess(jobs))
        return null
      })
      .catch((error) => {
        const errMessage = error.response?.text || error.message
        dispatch(showError(errMessage))
      })
  }
}
//Remove from CustomerJobAdd.jsx
// export function createJob(data, navigate) {
//   return APIaddJob(data)
    // .then((response) => {
    //   if (response.status === 201) {
    //     navigate('/customer', { state: { message: true } })
    //   }
    // })
//     .catch((error) => {
//       const errMessage = error.response?.text || error.message
//       console.log(errMessage)
//     })
// }
