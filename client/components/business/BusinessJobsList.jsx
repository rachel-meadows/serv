import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import {
  APIgetBusinessByUserId,
  APIgetJobsByUser,
  APIgetOpenJobsByCategory,
} from '../../apis/business'
import BusinessJobItem from './BusinessJobItem'

function BusinessJobsList() {
  const location = useLocation()
  const user = useSelector((state) => state.currentUser)
  const [showMessage, setShowMessage] = useState(false)
  const [jobs, setJobs] = useState([])
  const [openJobsInCategory, setOpenJobsInCategory] = useState([])
  const [jobsQuotedOn, setJobsQuotedOn] = useState([])
  const [dropDownSelection, setdropDownSelection] = useState('unmatched')

  useEffect(() => {
    // Test user
    // APIgetJobsByUser(4).then((quotedJobs) => {
    APIgetJobsByUser(user?.id)
      .then((quotedJobs) => {
        setJobsQuotedOn(quotedJobs)
      })
      .catch((err) => {
        console.error(err)
      })

    // Test user
    APIgetBusinessByUserId(user?.id)
      // APIgetBusinessByUserId(4)
      .then((business) => {
        return APIgetOpenJobsByCategory(business?.category)
      })
      .then((openJobs) => {
        setOpenJobsInCategory(openJobs)
      })
      .catch((err) => {
        // TODO
        // dispatch(showError(err.message))
        console.error(err)
        return false
      })
  }, [user, dropDownSelection])

  useEffect(() => {
    setShowMessage(location?.state?.message)
    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }, [])

  useEffect(() => {
    if (dropDownSelection === 'unmatched') {
      // Exclude content business has worked on (i.e. quoted jobs)
      const jobsQuotedOnIds = jobsQuotedOn.map((obj) => obj.id)
      const openAndUnquoted = openJobsInCategory.filter((job) => {
        return !jobsQuotedOnIds.includes(job.id)
      })
      setJobs(openAndUnquoted)
    } else if (dropDownSelection === 'quoted') {
      // 'Quoted' status includes pending and rejected quotes
      setJobs(jobsQuotedOn)
    } else if (dropDownSelection === 'active') {
      setJobs(
        jobsQuotedOn.filter(
          (obj) =>
            obj.jobStatus === 'in progress' && obj.quoteStatus === 'accepted'
        )
      )
    } else if (dropDownSelection === 'completed') {
      setJobs(
        jobsQuotedOn.filter(
          // (obj) => obj.jobStatus === 'closed' && obj.quoteStatus === 'accepted'
          (obj) => obj.jobStatus === 'closed'
        )
      )
    }
  }, [user, dropDownSelection, openJobsInCategory])

  function handleDropDown(event) {
    setdropDownSelection(event.target.value)
  }

  return (
    <div className="container mt-3 " data-dismiss="modal">
      {showMessage && (
        <div className="alert alert-primary" role="alert">
          Your quote has been submitted!
        </div>
      )}
      <h2 className="text-primary mb-3">Job Listings</h2>
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
            <option value="unmatched">Unmatched</option>
            <option value="quoted">Quoted</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </form>

      <div className="d-flex d-flex flex-row flex-wrap w-100 ">
        {jobs?.map((job) => {
          console.log('BusJobList', job)
          return (
            <BusinessJobItem
              key={job.id}
              job={job}
              dropDownSelection={dropDownSelection}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BusinessJobsList
