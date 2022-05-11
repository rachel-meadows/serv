import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { APIgetJobsByCustomer } from '../../apis/customer'
import JobsListItem from './CustomerJobsItem'

function JobsList() {
  const customerId = useSelector((state) => state.currentUser?.id)
  const [jobs, setJobs] = useState([])
  const [allJobs, setAllJobs] = useState([])
<<<<<<< HEAD
  const [showMessage, setShowMessage] = useState({})
  const [dropDownSelection, setdropDownSelection] = useState('all')
||||||| 59708b2
  const [showMessage, setShowMessage] = useState(false)
  const [dropDownSelection, setdropDownSelection] = useState('all')
=======
  const [showMessage, setShowMessage] = useState(false)
  const [dropDownSelection, setdropDownSelection] = useState('unmatched')
>>>>>>> 444d34b21a7dac843a50cf0cf0e3362178cc2d49
  const location = useLocation()
  const navigate = useNavigate()
  // const dispatch = useDispatch()
<<<<<<< HEAD
  console.log('allJobs', allJobs)
||||||| 59708b2
=======
  console.log('jobs', jobs)
  console.log('Alljobs', allJobs)
>>>>>>> 444d34b21a7dac843a50cf0cf0e3362178cc2d49

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
      setShowMessage({})
    }, 3000)
  }, [])

  useEffect(() => {
    if (dropDownSelection === 'unmatched') {
      const unmatchedJobs = allJobs.filter((obj) => obj.status === 'open')
      setJobs(unmatchedJobs)
    } else if (dropDownSelection === 'quoted') {
      setJobs(allJobs.filter((obj) => obj.status === 'in progress'))
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
<<<<<<< HEAD
  console.log(showMessage)

||||||| 59708b2
=======

  //for styling
  const size = 3

>>>>>>> 444d34b21a7dac843a50cf0cf0e3362178cc2d49
  return (
    <>
<<<<<<< HEAD
      {/* {showMessage.type === 'jobAdd' && ( */}
      {showMessage === 'jobAdd' && (
||||||| 59708b2
     
        {showMessage && 
=======
      {showMessage && (
>>>>>>> 444d34b21a7dac843a50cf0cf0e3362178cc2d49
        <div className="alert alert-success" role="alert">
<<<<<<< HEAD
          Your job has been submitted!
        </div>
      )}

      {showMessage === 'quoteAdd' && (
        <div className="alert alert-success" role="alert">
          Your quote has been submitted!
        </div>
      )}

      <h2 className="text-success mb-3">Job Listings</h2>
||||||| 59708b2
        Your job has been submitted!
      </div> }
        
        <h2 className="text-success mb-3">Job Listings</h2>
=======
          Your job has been submitted!
        </div>
      )}

      <h2 className="text-success mb-3">Job Listings</h2>
>>>>>>> 444d34b21a7dac843a50cf0cf0e3362178cc2d49
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
<<<<<<< HEAD
            <option value="all">All</option>
            <option value="unmatched">Unmatched</option>
            <option value="unmatched">Quoted</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
||||||| 59708b2
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="unmatched">Unmatched</option>
          <option value="completed">Completed</option>
        </select>
=======
            <option value="unmatched">Unmatched</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="all">All</option>
          </select>
>>>>>>> 444d34b21a7dac843a50cf0cf0e3362178cc2d49
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
    </>
  )
}

export default JobsList
