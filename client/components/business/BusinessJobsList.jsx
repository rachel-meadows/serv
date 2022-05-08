import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BusinessJobItem from './BusinessJobItem'

import { useNavigate } from 'react-router-dom'
import { APIgetBusinessByUserId } from '../../apis/business'

import {
  fetchOpenJobs,
  fetchOpenJobsByCategory,
  fetchJobsByUser,
} from '../../actions/business'

function BusinessJobsList({ children }) {

  const allJobs = useSelector((state) => state.jobList)
  const currentBusiness = useSelector((state) => state.currentBusiness)
  const currentUser = useSelector((state) => state.currentUser)
  const openJobs = useSelector((state) => state.openJobsByCategory)
  const jobsByUser = useSelector((state) => state.jobsByUser)
  const jobListing = useSelector((state) => state.openJobs)
  // const quoteById = useSelector((state) => state.quotesById)
  // const { userId, category } = userData


  const [business, setBusiness] = useState({})
  const [jobs, setJobs] = useState(openJobs)
  const [dropDownSelection, setdropDownSelection] = useState('unmatched')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userId = currentUser.id


  useEffect(() => {
    APIgetBusinessByUserId(currentUser.id)
      .then((data) => {
        setBusiness(data)
      }).catch
  }, [currentUser])

  useEffect(() => {
    dispatch(fetchOpenJobsByCategory(business?.category))
  }, [business])

  useEffect(() => {
    dispatch(fetchJobsByUser(6))
  }, [])

  useEffect(() => {
    if (dropDownSelection === 'unmatched') {
      setJobs(openJobs)
      console.log()
    }
    else if (dropDownSelection === 'quoted') {
      // 'pending'status includes pending and rejected quotes
      setJobs(jobsByUser.filter((obj) => obj.quoteStatus === 'pending' || 'rejected'))
      console.log(jobs)
    }
    else if (dropDownSelection === 'active') {
      setJobs(jobsByUser.filter((obj) => obj.jobStatus === 'in progress' && obj.quoteStatus === 'accepted'))
      console.log(jobs)
    }
    else if (dropDownSelection === 'completed') {
      setJobs(jobsByUser.filter((obj) => obj.jobStatus === 'closed' && obj.quoteStatus === 'accepted'))
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
      <form>
        <label htmlFor="filter">Filter your jobs:</label>
        <select name="filter" defaultValue="unmatched" onChange={handleDropDown} >
          {/* <option value="all">All</option> */}
          <option value="unmatched">Unmatched</option>
          <option value="quoted">Quoted</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </form>
      <h1>Job Listings</h1>
      <div className="jobList">

        {
          jobs?.map((job) => {
            return <BusinessJobItem key={job.id} job={job} dropDownSelection={dropDownSelection} />

            //   {children} {/* This holds the WaitIndicator (from App) */}
            //   {jobListings?.map((jobListing) => {
            // return jobListing.description       Rachel to review this page/line
            // return <BusJobItem key={jobListing.id} jobListing={jobListing} />
          })
        }
      </div >
    </>
  )
}

export default BusinessJobsList
