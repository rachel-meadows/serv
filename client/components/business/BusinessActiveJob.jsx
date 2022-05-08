import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobById } from '../../actions/business'
import { useNavigate, useParams } from 'react-router-dom'
import { APIchangeJobStatus } from '../../apis/business'

function BusinessActiveJob() {
  const currentJob = useSelector((state) => state.currentJob)
  console.log('currentJob: ', currentJob)
  const [job, setJob] = useState(currentJob)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { jobId } = useParams()

  useEffect(() => {
    dispatch(fetchJobById(jobId))
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    // This API function does work; it changes the data in the database
    // The problem is that jobStatus does not update in state here,
    // though it is visible in the Redux tools.
    APIchangeJobStatus(currentJob.id, 'completed')
    dispatch(fetchJobById(jobId))
    console.log('currentJob after API call: ', currentJob)
    navigate(`/business`)
  }

  return (
    <>
      <div className="flex flex-col flex-justify-center">
        <div className="jobList-item"></div>
        <p className="userId" key={currentJob.id}>
          {currentJob.userId}
        </p>
        <p className="category">{currentJob.category}</p>
        <p className="description">{currentJob.description}</p>
        <p className="price">
          Budget: ${currentJob.priceMin} - {currentJob.priceMax}
        </p>
        {/* <p className="image">{image}</p> */}
        <p className="status">{currentJob.status}</p>
        <button className="completed-btn" onClick={handleSubmit}>
          Mark as Completed
        </button>
      </div>
    </>
  )
}

export default BusinessActiveJob
