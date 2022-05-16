import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { APIgetJobsByCustomer, APIgetJobQuotes } from '../../apis/customer'
import CustomerCheckout from './StripeCheckout/CustomerCheckout'
import IndividualQuote from './IndividualQuote'
import JobsListItem from './CustomerJobsItem'
import Review from './Review/Review'
import StarRating from './Review/StarRating'

function CustomerJobCompleted() {
  const { jobsId } = useParams()
  const [allJobs, setAllJobs] = useState([])
  const [job, setJob] = useState({})
  const [quote, setQuote] = useState({})
  const customerId = useSelector((state) => state.currentUser.id)
  const [reviewed, setReviewed] = useState(false)
  console.log('customerId', customerId)
  console.log('allJobs', allJobs)

  useEffect(() => {
    APIgetJobsByCustomer(customerId)
      .then((jobs) => {
        console.log('job', job)
        setAllJobs(jobs)
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        console.log(errMessage)
      })
  }, [customerId])

  useEffect(() => {
    setJob(allJobs.find((obj) => obj.id === Number(jobsId)))
  }, [allJobs])
  console.log(allJobs)

  useEffect(() => {
    APIgetJobQuotes(jobsId)
      .then((obj) => {
        setQuote(obj.quotes.find((quote) => quote.quoteStatus === 'accepted'))
      })
      .catch(() => null)
  }, [job])

  //for styling
  const size = 6
  console.log('quote', quote)
  return (
    <div className="container my-3">
      {job?.id !== undefined ? (
        <>
          <h2 className="text-success">Your job</h2>
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
            date={quote.dateAdded}
          />
        </>
      ) : (
        <h4>Error - Accepted quote cannot display</h4>
      )}

      <Review
        quoteId={quote?.id}
        customerId={customerId}
        reviewed={reviewed}
        setReviewed={setReviewed}
      />
      <br />
      <CustomerCheckout quoteId={quote?.id} />
    </div>
  )
}

export default CustomerJobCompleted
