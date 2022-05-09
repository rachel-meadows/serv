import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  const dispatch = useDispatch()
  const location = useLocation()

  const user = useSelector((state) => state.currentUser)

  const [business, setBusiness] = useState({})
  const [showMessage, setShowMessage] = useState(false)

  const [jobs, setJobs] = useState([])
  const [openJobsInCategory, setOpenJobsInCategory] = useState([])
  const [jobsQuotedOn, setJobsQuotedOn] = useState([])
  const [dropDownSelection, setdropDownSelection] = useState('unmatched')

  useEffect(() => {
    APIgetBusinessByUserId(user?.id)
      .then((currentBusiness) => {
        console.log('currentBusiness', currentBusiness)
        setBusiness(currentBusiness)
      })
      .then(
        APIgetOpenJobsByCategory('plumbing').then((openJobs) => {
          // TODO: fix this
          // APIgetOpenJobsByCategory('business?.category').then((openJobs) => {
          console.log('openJobs', openJobs)
          setOpenJobsInCategory(openJobs)
        })
      )
      .then(
        APIgetJobsByUser(user?.id).then((quotedJobs) => {
          console.log('quotedJobs', quotedJobs)
          setJobsQuotedOn(quotedJobs)
        })
      )
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
      // 'pending'status includes pending and rejected quotes
      setJobs(
        jobsByUser.filter((obj) => obj.quoteStatus === 'pending' || 'rejected')
      )
    } else if (dropDownSelection === 'active') {
      setJobs(
        jobsByUser.filter(
          (obj) =>
            obj.jobStatus === 'in progress' && obj.quoteStatus === 'accepted'
        )
      )
    } else if (dropDownSelection === 'completed') {
      setJobs(
        jobsByUser.filter(
          (obj) => obj.jobStatus === 'closed' && obj.quoteStatus === 'accepted'
        )
      )
      console.log(jobs)
    }
  }, [user])

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
          {/* <option value="all">All</option> */}
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

          //   {children} {/* This holds the WaitIndicator (from App) */}
          //   {jobListings?.map((jobListing) => {
          // return jobListing.description       Rachel to review this page/line
          // return <BusJobItem key={jobListing.id} jobListing={jobListing} />
        })}
      </div>
    </>
  )
}

export default BusinessJobsList
