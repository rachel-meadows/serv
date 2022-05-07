import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BusinessJobItem from './BusinessJobItem'

import { useNavigate } from 'react-router-dom'
// import { APIgetBusinessByUserId } from '../../apis/business'
// import { fetchJobsByUserId } from '../../actions/business'

import {
  fetchOpenJobsByCategory,
  fetchJobsByUser,
} from '../../actions/business'

function BusinessJobsList({ children }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const currentUser = useSelector((state) => state.currentUser)
  const openJobs = useSelector((state) => state.openJobsByCategory)
  const jobsByUser = useSelector((state) => state.jobsByUser)
  // const { userId, category } = userData
  // const business = APIgetBusinessByUserId(currentUser.id)

  const [jobs, setJobs] = useState(openJobs)
  const [dropDownSelection, setdropDownSelection] = useState('unmatched')

  useEffect(() => {
    dispatch(fetchOpenJobsByCategory('construction'))
    dispatch(fetchJobsByUser(3))
  }, [])

  // useEffect(() => {
  //   // dispatch(fetchJobsByCatergory(userId, category))
  //   dispatch(fetchOpenJobsByCategory(business.category))
  //   dispatch(fetchJobsByUser(currentUser.id))
  // }, [])

  useEffect(() => {
    if (dropDownSelection === 'unmatched') {
      setJobs(openJobs)
    } else if (dropDownSelection === 'quoted') {
      setJobs(jobsByUser.filter((obj) => obj.status === 'quoted'))
    } else if (dropDownSelection === 'active') {
      setJobs(jobsByUser.filter((obj) => obj.status === 'in progress'))
    } else if (dropDownSelection === 'completed') {
      setJobs(jobsByUser.filter((obj) => obj.status === 'closed'))
    }
  }, [jobsByUser, openJobs, dropDownSelection])

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
        {jobs?.map((jobListing) => {
          return (
            <BusinessJobItem
              key={jobListing.id}
              jobListing={jobListing}
              showDetails={showDetails}
            />
          )

          //   {children} {/* This holds the WaitIndicator (from App) */}
          //   {jobListings?.map((jobListing) => {
          // return jobListing.description       Rachael to review this page/line
          // return <BusJobItem key={jobListing.id} jobListing={jobListing} />
        })}
      </div>
    </>
  )
}

export default BusinessJobsList
