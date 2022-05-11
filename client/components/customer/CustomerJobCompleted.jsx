import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { APIgetJobQuotes, APIgetJobsByCustomer } from '../../apis/customer'
import CustomerCheckout from './StripeCheckout/CustomerCheckout'
import JobsListItem from './CustomerJobsItem'
import IndividualQuote from './IndividualQuote'
import StarRating from './Review/StarRating'
import Review from './Review/Review'

function CustomerJobCompleted() {
  const { jobsId } = useParams()
  const [allJobs, setAllJobs] = useState([])
  const [job, setJob] = useState({})
  const [quote, setQuote] = useState({})
  const customerId = useSelector((state) => state.currentUser.id)
  const [reviewed, setReviewed] = useState(false)

  console.log('allJob', allJobs)

  useEffect(() => {
    APIgetJobsByCustomer(customerId)
      .then((obj) => {
        console.log('allJobsApi', obj)
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
      .catch(() => null)
  }, [])

  //for styling
  const size = 6

  return (
    <>
      {job?.id !== undefined ? (
        <>
          <h2>Your job:</h2>
          <JobsListItem key={job.id} job={job} hideButton={true} size={size} />
        </>
      ) : (
        <h4>Error - Job listing cannot display</h4>
      )}

      {quote !== undefined ? (
        <>
          <IndividualQuote
            description={quote.description}
            price={quote.price}
          />
        </>
      ) : (
        <h4>Error - Accepted quote cannot display</h4>
      )}

      <Review
        quoteId={quote.id}
        customerId={customerId}
        reviewed={reviewed}
        setReviewed={setReviewed}
      />
      <br />
      <CustomerCheckout quoteId={quote.id} />
    </>
  )
}

export default CustomerJobCompleted
