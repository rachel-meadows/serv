import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchJobs } from '../../actions/jobListings'
import { APIgetJobQuotes } from '../../apis/customer'
import JobsListItem from './CustomerJobsItem'

/*To-Do
1. Conditionally show the button in the <JobsListItem>
2. Add business's quote response to this page
3. (stretch) Rate Button
*/



function CustomerJobCompleted() {
  const { jobsId } = useParams()
  const [job, setJob] = useState({})
  const [quote, setQuote] = useState({})
  const allJobs = useSelector((state) => { 
    return state.jobListings
  }
  )

const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchJobs())
}, [])

  useEffect(() => {
    setJob(allJobs.find((obj) => obj.id === Number(jobsId)))
  }, [allJobs])

  useEffect(() => {
    APIgetJobQuotes(jobsId).then((obj) => { 
      console.log('obj', obj.quotes)
      setQuote(obj.quotes.find((quote) => quote.status === 'accepted'))
    })
  }, [])

  return (job?.id !== undefined) &&
    <>
      <JobsListItem key={job.id} job={job}/>

      {/* Replace with component */}
      <h3>Accepted Quote</h3>
      <p>Notes: {quote.notes} </p>
      <p>Price: {quote.price} </p>
    </>
    
}

export default CustomerJobCompleted