import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchJobs } from '../../actions/jobListings'
import JobsListItem from './CustomerJobsItem'

/*To-Do
1. Conditionally show the button in the <JobsListItem>
2. Add business's quote response to this page
3. (stretch) Rate Button
*/



function CustomerJobCompleted() {
  const { jobsId } = useParams()
  const [job, setJob] = useState({})
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

  return (job?.id !== undefined) &&
    <JobsListItem key={job.id} job={job}/>
  
}

export default CustomerJobCompleted