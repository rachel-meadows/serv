import { APIgetJobQuotes } from '../apis/customer'
import { showError } from '../actions/error'

export const GET_JOB_QUOTES_PENDING = 'GET_JOB_QUOTES_PENDING'
export const GET_JOB_QUOTES_SUCCESS = 'GET_JOB_QUOTES_SUCCESS'

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
