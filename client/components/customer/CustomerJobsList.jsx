import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { fetchJobs } from '../../actions/jobListings'

import JobsListItem from './CustomerJobsItem'

//THIS IS INTENDED TO DISPLAY AN INDIVIDUAL CUSTOMER'S **OWN** JOB LISTINGS, NOT ALL THE JOB LISTINGS

function JobsList() {
  const allJobs = useSelector((state) => state.jobListings)
  
  const [jobs, setJobs] = useState([])
  const [dropDownSelection, setdropDownSelection] = useState('all')
 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('fetchJobs')
    dispatch(fetchJobs())
  }, [])
  
  useEffect(() => {
    if (dropDownSelection === 'unmatched') {  
      const unmatchedJobs = allJobs.filter((obj) => obj.status === 'open')
      setJobs(unmatchedJobs)
    }
    else if (dropDownSelection === 'active') {
      setJobs(allJobs.filter((obj) => obj.status === 'in progress'))
    }
    else if (dropDownSelection === 'completed') {
      setJobs(allJobs.filter((obj) => obj.status === 'closed'))
    }
    else if (dropDownSelection === 'all') {
      setJobs(allJobs)
    }``
  }, [allJobs, dropDownSelection])
 
  function showDetails(jobsId, status) {
    if (status === 'open') {  
      navigate(`/customer/quote/${jobsId}`)
    }
    else if (status === 'in progress') {
      navigate(`#`)
    }
    else if (status === 'closed') {
      navigate(`/customer/completed/${jobsId}`)
    }
  }

  function handleDropDown(event) {
     setdropDownSelection(event.target.value)
  }

  return <>
    <form>
      <label htmlFor="filter">Filter your jobs:</label>
      <select name="filter" onChange={handleDropDown}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="unmatched" >Unmatched</option>
        <option value="completed">Completed</option>
      </select>
    </form>
    <div className="jobList">
      {/* {children} This holds the WaitIndicator (from App) */}
      {jobs.map((job) => {
        return <JobsListItem key={job.id} job={job} showDetails={showDetails}/>
      })}
    </div>
    </>
  
}

export default JobsList
