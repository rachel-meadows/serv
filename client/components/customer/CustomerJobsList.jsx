import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import { APIgetJobsByCustomer } from '../../apis/customer'
import JobsListItem from './CustomerJobsItem'

function JobsList() {
  const customerId = useSelector((state) => state.currentUser?.id)
  const [jobs, setJobs] = useState([])
  const [allJobs, setAllJobs] = useState([])
  const [dropDownSelection, setdropDownSelection] = useState('all')
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    APIgetJobsByCustomer(customerId)
      .then((obj) => {
        setAllJobs(obj.jobs)
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }, [customerId])

  useEffect(() => {
    if (dropDownSelection === 'unmatched') {
      const unmatchedJobs = allJobs.filter((obj) => obj.status === 'open')
      setJobs(unmatchedJobs)
    } else if (dropDownSelection === 'active') {
      setJobs(allJobs.filter((obj) => obj.status === 'in progress'))
    } else if (dropDownSelection === 'completed') {
      setJobs(allJobs.filter((obj) => obj.status === 'closed'))
    } else if (dropDownSelection === 'all') {
      setJobs(allJobs)
    }
  }, [allJobs, dropDownSelection])

  function showDetails(jobsId, status) {
    if (status === 'open') {
      navigate(`/customer/quote/${jobsId}`)
    } else if (status === 'in progress') {
      navigate(`#`)
    } else if (status === 'closed') {
      navigate(`/customer/completed/${jobsId}`)
    }
  }

  function handleDropDown(event) {
    setdropDownSelection(event.target.value)
  }
  return (
    <>
      <form>
        {location?.state?.message && <h1>YOUR JOB HAS BEEN SUBMITTED!</h1>}
        <label htmlFor="filter">Filter your jobs:</label>
        <select name="filter" onChange={handleDropDown}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="unmatched">Unmatched</option>
          <option value="completed">Completed</option>
        </select>
      </form>
      <div className="jobList">
        {/* {children} This holds the WaitIndicator (from App) */}
        {!jobs[0] ? (
          <h3>You have no job listings (EDIT THE WORDING)</h3>
        ) : (
          jobs.map((job) => {
            return (
              <JobsListItem key={job.id} job={job} showDetails={showDetails} />
            )
          })
        )}
      </div>
    </>
  )
}

export default JobsList
