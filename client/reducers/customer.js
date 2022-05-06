import { GET_JOB_QUOTES_SUCCESS } from '../actions/customer'

const initialState = []

export const jobQuotes = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB_QUOTES_SUCCESS:
      return action.jobQuotes.quotes
    default:
      return state
  }
}
