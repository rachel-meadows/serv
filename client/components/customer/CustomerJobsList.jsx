import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { APIgetJobsByCustomer } from '../../apis/customer'
import JobsListItem from './CustomerJobsItem'

function JobsList() {
  const customerId = useSelector((state) => state.currentUser?.id)
  const [jobs, setJobs] = useState([])
  const [allJobs, setAllJobs] = useState([])
  const [showMessage, setShowMessage] = useState(false)
  const [dropDownSelection, setdropDownSelection] = useState('all')
  const location = useLocation()
  const navigate = useNavigate()
  // const dispatch = useDispatch()

  useEffect(() => {
    APIgetJobsByCustomer(customerId)
      .then((obj) => {
        setAllJobs([obj])
        console.log('jobs: ', obj)
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        console.log(errMessage)
        // dispatch(showError(errMessage))
      })
  }, [customerId])

  useEffect(() => {
    setShowMessage(location?.state?.message)
    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }, [])

  useEffect(() => {
    console.log('allJobs: ', allJobs)
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
      {showMessage && (
        <div className="alert alert-success" role="alert">
          Your job has been submitted!
        </div>
      )}

      <h2 className="text-success mb-3">Job Listings</h2>
      <form>
        <div className="my-3 ml-auto">
          <label htmlFor="filter" className="form-label">
            Filter your jobs:
          </label>

          <select
            name="filter"
            id="filter"
            className="form-select w-25"
            defaultValue="unmatched"
            onChange={handleDropDown}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="unmatched">Unmatched</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </form>
      <div className="jobList">
        {/* {children} This holds the WaitIndicator (from App) */}
        {!jobs[0] ? (
          <h4 className="text-success mb-3">
            You have no job listings to view
          </h4>
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
