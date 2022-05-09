import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchJobs } from '../../actions/jobListings'
import { APIgetJobQuotes, APIgetJobsByCustomer } from '../../apis/customer'
import CustomerCheckout from './StripeCheckout/CustomerCheckout'
import JobsListItem from './CustomerJobsItem'
import IndividualQuote from './IndividualQuote'

/*To-Do
1. Conditionally show the button in the <JobsListItem>
2. (stretch) Rate Button
*/

function CustomerJobCompleted() {
  const { jobsId } = useParams()
  const [allJobs, setAllJobs] = useState([])
  const [job, setJob] = useState({})
  const [quote, setQuote] = useState({})
  const customerId = useSelector((state) => state.currentUser.id)

  useEffect(() => {
    APIgetJobsByCustomer(customerId)
      .then((obj) => {
        setAllJobs(obj.jobs)
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        console.log(errMessage)
      })
  }, [])

  useEffect(() => {
    setJob(allJobs.find((obj) => obj.id === Number(jobsId)))
  }, [allJobs])

  useEffect(() => {
    APIgetJobQuotes(jobsId)
      .then((obj) => {
        setQuote(obj.quotes.find((quote) => quote.status === 'accepted'))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      {job?.id !== undefined ? (
        <JobsListItem key={job.id} job={job} />
      ) : (
        <h4>Error - Job listing cannot display</h4>
      )}
      {quote !== undefined ? (
        <IndividualQuote notes={quote.notes} price={quote.price} />
      ) : (
        <h4>Error - Accepted quote cannot display</h4>
      )}
      <CustomerCheckout quoteId={quote.id} />
    </>
  )
}

export default CustomerJobCompleted
