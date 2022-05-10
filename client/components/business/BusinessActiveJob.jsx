import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { APIchangeJobStatus, APIgetJobById } from '../../apis/business'

function BusinessActiveJob() {
  const [job, setJob] = useState({})
  const navigate = useNavigate()
  const { jobId } = useParams()

  useEffect(() => {
    APIgetJobById(jobId).then((job) => {
      setJob(job)
    })
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    APIchangeJobStatus(job.id, 'closed').then(() => {
      navigate(`/business`)
    })
  }

  return (
    <>
      <div className="flex flex-col flex-justify-center">
        <div className="jobList-item"></div>
        <p className="userId" key={job?.id}>
          {job?.userId}
        </p>
        <p className="category">{job?.category}</p>
        <p className="description">{job?.description}</p>
        <p className="price">
          Budget: ${job.priceMin} - {job?.priceMax}
        </p>
        {/* <p className="image">{image}</p> */}
        <p className="location">{job?.location}</p>
        <p className="status">{job?.status}</p>
        <button className="completed-btn" onClick={handleSubmit}>
          Mark as Completed
        </button>
      </div>
    </>
  )
}

export default BusinessActiveJob
