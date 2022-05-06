import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOpenJobs } from '../../actions/business'

function BusinessJobsList() {
  const jobs = useSelector((state) => state.openJobs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOpenJobs())
    console.log('jobs', jobs)
  }, [])

  return (
    <div>
      <h1>Open jobs:</h1>
      {jobs?.map((job) => {
        return job.description
      })}
    </div>
  )
}

export default BusinessJobsList
