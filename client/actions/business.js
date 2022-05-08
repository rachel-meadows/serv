import {
  APIgetJobs,
  APIaddQuote,
  APIgetBusinessDetails,
  APIeditBusiness,
  APIgetOpenJobsByCategory,
  APIgetJobsByUser,
  APIgetJobById,
  APIgetBusinessByUserId
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

export const FETCH_JOBS_BY_CATEGORY_PENDING = 'FETCH_JOBS_BY_CATEGORY_PENDING'
export const FETCH_JOBS_BY_CATEGORY_SUCCESS = 'FETCH_JOBS_BY_CATEGORY_SUCCESS'

export const FETCH_JOBS_BY_USER_PENDING = 'FETCH_JOBS_BY_USER_PENDING'
export const FETCH_JOBS_BY_USER_SUCCESS = 'FETCH_JOBS_BY_USER_SUCCESS'

export const FETCH_JOB_BY_ID_PENDING = 'FETCH_JOB_BY_ID_PENDING'
export const FETCH_JOB_BY_ID_SUCCESS = 'FETCH_JOB_BY_ID_SUCCESS'

export const ADD_BUSINESS_PENDING = 'ADD_BUSINESS_PENDING'
export const ADD_BUSINESS_SUCCESS = 'ADD_BUSINESS_SUCCESS'

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

export function fetchOpenJobsByCategoryPending() {
  return {
    type: FETCH_JOBS_BY_CATEGORY_PENDING,
  }
}

export function fetchOpenJobsByCategorySuccess(jobs) {
  return {
    type: FETCH_JOBS_BY_CATEGORY_SUCCESS,
    openJobsByCategory: jobs,
  }
}

export function fetchJobsByUserPending() {
  return {
    type: FETCH_JOBS_BY_USER_PENDING,
  }
}

export function fetchJobsByUserSuccess(jobs) {
  return {
    type: FETCH_JOBS_BY_USER_SUCCESS,
    jobsByUser: jobs,
  }
}

export function fetchJobByIdPending() {
  return {
    type: FETCH_JOB_BY_ID_PENDING,
  }
}

export function fetchJobByIdSuccess(job) {
  return {
    type: FETCH_JOB_BY_ID_SUCCESS,
    currentJob: job,
  }
}

export function addBusinessPending() {
  return {
    type: ADD_BUSINESS_PENDING,
  }
}

export function addBusinessSuccess(business) {
  return {
    type: ADD_BUSINESS_SUCCESS,
    currentBusiness: business,
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

export function fetchOpenJobsByCategory(category) {
  return (dispatch) => {
    dispatch(fetchOpenJobsByCategoryPending())
    return APIgetOpenJobsByCategory(category)
      .then((jobs) => {
        dispatch(fetchOpenJobsByCategorySuccess(jobs))
        return null
      })
      .catch((error) => {
        const errMessage = error.response?.text || error.message
        dispatch(showError(errMessage))
      })
  }
}

export function fetchJobsByUser(userId) {
  return (dispatch) => {
    dispatch(fetchJobsByUserPending())
    return APIgetJobsByUser(userId)
      .then((jobs) => {
        dispatch(fetchJobsByUserSuccess(jobs))
        return null
      })
      .catch((error) => {
        const errMessage = error.response?.text || error.message
        dispatch(showError(errMessage))
      })
  }
}

export function fetchJobById(jobId) {
  return (dispatch) => {
    dispatch(fetchJobByIdPending())
    return APIgetJobById(jobId)
      .then((job) => {
        console.log("fetchJObById", job)
        dispatch(fetchJobByIdSuccess(job))
        return null
      })
      .catch((error) => {
        const errMessage = error.response?.text || error.message
        dispatch(showError(errMessage))
      })
  }
}
export function addBusiness(userId) {
  return (dispatch) => {
    dispatch(addBusinessPending())
    return APIgetBusinessByUserId(userId)
      .then((business) => {
        dispatch(addBusinessSuccess(business))
        return null
      })
      .catch((error) => {
        const errMessage = error.response?.text || error.message
        dispatch(showError(errMessage))
      })
  }
}