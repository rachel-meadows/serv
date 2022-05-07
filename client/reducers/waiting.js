import {
  GET_JOBS_PENDING,
  GET_JOBS_SUCCESS,
  CREATE_QUOTE_PENDING,
  CREATE_QUOTE_SUCCESS,
  FETCH_BUSINESS_PENDING,
  FETCH_BUSINESS_SUCCESS,
  UPDATE_BUSINESS_PENDING,
  UPDATE_BUSINESS_SUCCESS,
} from '../actions/business'

import {
  GET_JOB_QUOTES_PENDING,
  GET_JOB_QUOTES_SUCCESS,
  CREATE_JOB_PENDING,
  CREATE_JOB_SUCCESS,
} from '../actions/customer'

import { SHOW_ERROR } from '../actions/error'

function waiting(state = false, action) {
  switch (action.type) {
    case GET_JOBS_PENDING:
      return true

    case GET_JOBS_SUCCESS:
      return false

    case CREATE_QUOTE_PENDING:
      return true

    case CREATE_QUOTE_SUCCESS:
      return false

    case FETCH_BUSINESS_PENDING:
      return true

    case FETCH_BUSINESS_SUCCESS:
      return false

    case UPDATE_BUSINESS_PENDING:
      return true

    case UPDATE_BUSINESS_SUCCESS:
      return false

    case GET_JOB_QUOTES_PENDING:
      return true

    case GET_JOB_QUOTES_SUCCESS:
      return false

    case CREATE_JOB_PENDING:
      return true

    case CREATE_JOB_SUCCESS:
      return false

    default:
      return state
  }
}

export default waiting
