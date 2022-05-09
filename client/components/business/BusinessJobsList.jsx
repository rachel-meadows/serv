import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BusinessJobItem from './BusinessJobItem'
import {
  APIgetBusinessByUserId,
  APIgetOpenJobsByCategory,
  APIgetJobsByUser,
  APIgetJobById,
} from '../../apis/business'
import { useLocation, useNavigate } from 'react-router-dom'

function BusinessJobsList({ children }) {
  const navigate = useNavigate()
  const location = useLocation()

  const user = useSelector((state) => state.currentUser)

  const [showMessage, setShowMessage] = useState(false)

  const [jobs, setJobs] = useState([])
  const [openJobsInCategory, setOpenJobsInCategory] = useState([])
  const [jobsQuotedOn, setJobsQuotedOn] = useState([])
  const [dropDownSelection, setdropDownSelection] = useState('unmatched')

  useEffect(() => {
    APIgetJobsByUser(user?.id).then((quotedJobs) => {
      return setJobsQuotedOn(quotedJobs)
    })

    APIgetBusinessByUserId(user?.id)
      .then((business) => {
        return APIgetOpenJobsByCategory(business?.category)
      })
      .then((openJobs) => {
        setOpenJobsInCategory(openJobs)
      })
      .catch((err) => {
        // TODO
        // dispatch(showError(err.message))
        return false
      })
  }, [user])

  useEffect(() => {
    setShowMessage(location?.state?.message)
    setTimeout(() => {
      setShowMessage(false)
    }, 5000)
  }, [])

  useEffect(() => {
    if (dropDownSelection === 'unmatched') {
      setJobs(openJobsInCategory)
      // TODO: Filter to exclude content business has worked on

      // const openAndUnquoted = openJobs.filter(
      //   (job) => !jobsByUser.includes(job.id)
      // )
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
          (obj) => obj.jobStatus === 'closed' && obj.quoteStatus === 'accepted'
        )
      )
      console.log(jobs)
    }
  }, [user, dropDownSelection, openJobsInCategory])

  function showDetails(jobsId, status) {
    if (status === 'open') {
      navigate(`/business/open/${jobsId}`)
    } else if (status === 'quoted') {
      navigate(`/business/quoted/${jobsId}`)
    } else if (status === 'in progress') {
      navigate(`/business/active/${jobsId}`)
    } else if (status === 'closed') {
      navigate(`/business/completed/${jobsId}`)
    }
  }

  function handleDropDown(event) {
    setdropDownSelection(event.target.value)
  }

  return (
    <>
      {showMessage && (
        <div className="quote-submitted flex flex-col flex-align-center">
          <h2>Your quote has been submitted</h2>
          <p>Your quote has been successfully passed on to your customer.</p>
          <p>Youll get a message soon if they accept the quote.</p>
        </div>
      )}
      <form>
        <label htmlFor="filter">Filter your jobs:</label>
        <select
          name="filter"
          defaultValue="unmatched"
          onChange={handleDropDown}
        >
          <option value="unmatched">Unmatched</option>
          <option value="quoted">Quoted</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </form>
      <h1>Job Listings</h1>
      <div className="jobList">
        {jobs?.map((job) => {
          return (
            <BusinessJobItem
              key={job.id}
              job={job}
              dropDownSelection={dropDownSelection}
            />
          )
        })}
      </div>
    </>
  )
}

export default BusinessJobsList
