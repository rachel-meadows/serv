import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { fetchJobs } from '../../actions/jobListings'

import JobsListItem from './CustomerJobsItem'

//THIS IS INTENDED TO DISPLAY AN INDIVIDUAL CUSTOMER'S **OWN** JOB LISTINGS, NOT ALL THE JOB LISTINGS
function JobsList({ children }) {
  const jobs = useSelector((state) => state.jobListings)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchJobs())
  }, [])

  function showDetails(jobsId) {
    //navigate to route that displays Your Listing Details
    navigate(`/customer/quote/${jobsId}`)
  }

  return (
    <div className="jobList">
      {/* {children} This holds the WaitIndicator (from App) */}
      {jobs.map((job) => {
        return <JobsListItem key={job.id} job={job} showDetails={showDetails} />
      })}
    </div>
  )
}

export default JobsList
