import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BusinessJobItem from './BusinessJobItem'

import { useLocation, useNavigate } from 'react-router-dom'
// import { APIgetBusinessByUserId } from '../../apis/business'

import {
  // fetchOpenJobs,
  fetchOpenJobsByCategory,
  fetchJobsByUser,
} from '../../actions/business'

function BusinessJobsList({ children }) {
  // const allJobs = useSelector((state) => state.jobList)
  const currentUser = useSelector((state) => state.currentUser)
  const openJobs = useSelector((state) => state.openJobsByCategory)
  const jobsByUser = useSelector((state) => state.jobsByUser)
  // const jobListing = useSelector((state) => state.openJobs)
  const location = useLocation()
  // const { userId, category } = userData
  // const business = APIgetBusinessByUserId(currentUser.id)
  console.log(jobsByUser)
  const [jobs, setJobs] = useState(openJobs)
  const [dropDownSelection, setdropDownSelection] = useState('unmatched')

  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const userId = currentUser.id
  useEffect(() => {
    console.log('1')
    dispatch(fetchOpenJobsByCategory('plumbing'))
  }, [])

  useEffect(() => {
    dispatch(fetchJobsByUser(userId))
  }, [])

  // useEffect(() => {
  //   // dispatch(fetchJobsByCatergory(userId, category))
  //   dispatch(fetchOpenJobsByCategory(business.category))
  //   dispatch(fetchJobsByUser(currentUser.id))
  // }, [])

  useEffect(() => {
    if (dropDownSelection === 'unmatched') {
      setJobs(openJobs)
      console.log()
    } else if (dropDownSelection === 'quoted') {
      setJobs(jobsByUser.filter((obj) => obj.quoteStatus === 'pending'))
      console.log(jobs)
    } else if (dropDownSelection === 'active') {
      setJobs(jobsByUser.filter((obj) => obj.jobStatus === 'in progress'))
      console.log(jobs)
    } else if (dropDownSelection === 'completed') {
      setJobs(jobsByUser.filter((obj) => obj.jobStatus === 'closed'))
      console.log(jobs)
    }
    // else if (dropDownSelection === 'all') {
    //   setJobs(allJobs)
    // }
  }, [jobsByUser, openJobs, dropDownSelection])

  function handleDropDown(event) {
    setdropDownSelection(event.target.value)
  }

  return (
    <>
      {location?.state?.message && (
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
