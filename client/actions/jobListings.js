// import { APIgetJobsByCustomer } from '../apis/customer'
// import { showError } from '../actions/error'

// export const FETCH_JOB_LISTINGS = 'FETCH_JOB_LISTINGS'

// export function fetchJobsSuccess(jobs) {
//   return {
//     type: FETCH_JOB_LISTINGS,
//     jobs,
//   }
// }

//Removed from CustomerJobCompleted.jsx
// THIS DISPLAYS A CUSTOMER'S **OWN** JOB LISTINGS, NOT ALL THE JOB LISTINGS
// export function fetchJobs(customerId) {
//   return (dispatch) => {
    // return APIgetJobsByCustomer(customerId)
    // .then((obj) => {
    //     dispatch(fetchJobsSuccess(obj.jobs))
    //     return null
    //   })
    //   .catch((err) => {
    //     if the error is from our routes, this will use the message our route
    //     sends back, rather than the generic 'Internal Server Error' from a
    //     status 500
    //     if the error is from elsewhere in the Promise chain, there won't be
    //     an err.response object, so we use err.message
    //     const errMessage = err.response?.text || err.message
    //     dispatch(showError(errMessage))
    //   })
//   }
// }
