import {
  APIgetJobs,
  APIaddQuote,
  APIgetBusinessDetails,
  APIeditBusiness,
} from '../apis/business'
import { showError } from '../actions/error'

export const GET_JOBS_PENDING = 'GET_JOBS_PENDING'
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS'

export const CREATE_QUOTE_PENDING = 'CREATE_QUOTE_PENDING'
export const CREATE_QUOTE_SUCCESS = 'CREATE_QUOTE_SUCCESS'

export const FETCH_BUSINESS_PENDING = 'FETCH_BUSINESS_PENDING'
export const FETCH_BUSINESS_SUCCESS = 'FETCH_BUSINESS_SUCCESS'

export const UPDATE_BUSINESS_PENDING = 'UPDATE_BUSINESS_PENDING'
export const UPDATE_BUSINESS_SUCCESS = 'UPDATE_BUSINESS_SUCCESS'

export function fetchOpenJobsPending() {
  return {
    type: GET_JOBS_PENDING,
  }
}

export function fetchOpenJobsSuccess(jobs) {
  return {
    type: GET_JOBS_SUCCESS,
    openJobs: jobs,
  }
}

export function createQuotePending() {
  return {
    type: CREATE_QUOTE_PENDING,
  }
}

export function createQuoteSuccess() {
  return {
    type: CREATE_QUOTE_SUCCESS,
  }
}

export function fetchBusinessPending() {
  return {
    type: FETCH_BUSINESS_PENDING,
  }
}

export function fetchBusinessSuccess() {
  return {
    type: FETCH_BUSINESS_SUCCESS,
  }
}

export function updateBusinessPending() {
  return {
    type: UPDATE_BUSINESS_PENDING,
  }
}

export function updateBusinessSuccess() {
  return {
    type: UPDATE_BUSINESS_SUCCESS,
  }
}

export function fetchOpenJobs() {
  return (dispatch) => {
    dispatch(fetchOpenJobsPending())
    return APIgetJobs()
      .then((jobs) => {
        dispatch(fetchOpenJobsSuccess(jobs))
        return null
      })
      .catch((error) => {
        const errMessage = error.response?.text || error.message
        dispatch(showError(errMessage))
      })
  }
}


export function createQuote(jobId, data) {
  return (dispatch) => {
    dispatch(createQuotePending())
    return APIaddQuote(jobId, data)
      .then(() => {
        dispatch(createQuoteSuccess())
        return null
      })
      .catch((error) => {
        const errMessage = error.response?.text || error.message
        dispatch(showError(errMessage))
      })
  }
}

export function fetchBusiness() {
  return (dispatch) => {
    dispatch(fetchBusinessPending())
    return APIgetBusinessDetails()
      .then((data) => {
        dispatch(fetchBusinessSuccess(data))
        return null
      })
      .catch((error) => {
        const errMessage = error.response?.text || error.message
        dispatch(showError(errMessage))
      })
  }
}

export function updateBusiness(userId, data) {
  return (dispatch) => {
    dispatch(updateBusinessPending())
    return APIeditBusiness(userId, data)
      .then(() => {
        dispatch(updateBusinessSuccess())
        return null
      })
      .catch((error) => {
        const errMessage = error.response?.text || error.message
        dispatch(showError(errMessage))
      })
  }
}
