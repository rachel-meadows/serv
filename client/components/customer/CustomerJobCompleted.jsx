import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchJobs } from '../../actions/jobListings'
import { APIgetJobQuotes } from '../../apis/customer'
import JobsListItem from './CustomerJobsItem'
import IndividualQuote from './IndividualQuote'

/*To-Do
1. Conditionally show the button in the <JobsListItem>
2. (stretch) Rate Button
*/



function CustomerJobCompleted() {
  const { jobsId } = useParams()
  const [job, setJob] = useState({})
  const [quote, setQuote] = useState({})
  const allJobs = useSelector((state) => { 
    return state.jobListings
  })
  const customerId = useSelector((state) => { 
    return state.currentUser.id
  })
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchJobs(1))
  }, [])

  // useEffect(() => {
  //   dispatch(fetchJobs(customerId))
  // }, [customerId])
  
  useEffect(() => {
    setJob(allJobs.find((obj) => obj.id === Number(jobsId)))
  }, [allJobs])
  
  useEffect(() => {
    APIgetJobQuotes(jobsId).then((obj) => { 
      console.log('APIgetJobQuotes returned obj', obj.quotes)
      setQuote(obj.quotes.find((quote) => quote.status === 'accepted'))
    })
  }, [])
  
  return <>
    {(job?.id !== undefined) 
      ? 
      <JobsListItem key={job.id} job={job}/>
      :
      <h4>Error - Job listing cannot display</h4>
    }
    {(quote !== undefined) 
    ? 
    <IndividualQuote notes={ quote.notes } price={quote.price} />
    :
    <h4>Error - Accepted quote cannot display</h4>
    }
    </>
    
}

export default CustomerJobCompleted