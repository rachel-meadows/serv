import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { APIgetJobsByCustomer } from '../../apis/customer'
import JobsListItem from './CustomerJobsItem'

function JobsList() {
  const customerId = useSelector((state) => state.currentUser?.id)
  const [jobs, setJobs] = useState([])
  const [allJobs, setAllJobs] = useState([])
  const [showMessage, setShowMessage] = useState({})
  const [dropDownSelection, setdropDownSelection] = useState('unmatched')
  const location = useLocation()
  const navigate = useNavigate()
  // const dispatch = useDispatch()

  useEffect(() => {
    // obj returning will include quotes object
    //console.log(customerId)
    APIgetJobsByCustomer(customerId)
      .then((jobs) => {
        console.log(jobs)
        setAllJobs(jobs)
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
      setShowMessage({})
    }, 3000)
  }, [])

  useEffect(() => {
    if (dropDownSelection === 'unmatched') {
      const unmatchedJobs = allJobs.filter(
        (job) => job.jobStatus === 'open' && job.quoteStatus == null
      )
      setJobs(unmatchedJobs)
    } else if (dropDownSelection === 'quoted') {
      //console.log('here')
      setJobs(
        allJobs.filter(
          (job) => job.jobStatus === 'open' && job.quoteStatus === 'pending'
        )
      )
    } else if (dropDownSelection === 'active') {
      setJobs(allJobs.filter((obj) => obj.jobStatus === 'in progress'))
    } else if (dropDownSelection === 'completed') {
      setJobs(allJobs.filter((obj) => obj.jobStatus === 'closed'))
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
  //console.log(showMessage)

  //for styling
  const size = 3

  return (
    <div className="container my-3">
      {showMessage?.type === 'jobAdd' && (
        // {showMessage === 'jobAdd' && (
        <div className="alert alert-success" role="alert">
          Your job has been submitted!
        </div>
      )}

      {showMessage?.type === 'quoteAdd' && (
        // {showMessage === 'quoteAdd' && (
        <div className="alert alert-success" role="alert">
          Your quote has been submitted!
        </div>
      )}
      <div className="container my-3">
        <h2 className="text-success">Job Listings</h2>
        <form>
          <div className="my-3 ml-auto">
            <label htmlFor="filter" className="form-label">
              Filter your jobs:
            </label>

            <select
              name="filter"
              id="filter"
              className="form-select w-25"
              defaultValue="all"
              onChange={handleDropDown}
            >
              <option value="all">All</option>
              <option value="unmatched">Unmatched</option>
              <option value="quoted">Quoted</option>
              <option value="active">Active</option>
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
            <div className="d-flex flex-row flex-wrap w-100">
              {jobs.map((job) => {
                return (
                  <JobsListItem
                    key={job.id}
                    job={job}
                    showDetails={showDetails}
                    size={size}
                  />
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default JobsList
