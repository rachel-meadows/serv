import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobById } from '../../actions/business'
import { useNavigate, useParams } from 'react-router-dom'
import { APIchangeJobStatus } from '../../apis/business'

function BusinessActiveJob() {
  const currentJob = useSelector((state) => state.currentJob)
  console.log(currentJob)
  const [job, setJob] = useState(currentJob)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { jobId } = useParams()
  useEffect(() => {
    dispatch(fetchJobById(jobId))
  }, [])


  console.log("BusinessJobToQuote", jobId)


  function handleSubmit(event) {
    event.preventDefault()
    APIchangeJobStatus(currentJob.id, "completed")
    navigate(`/business`)
  }
  return (
    <>
      <div className="flex flex-col flex-justify-center">
        <div className="jobList-item"></div>
        <p className="userId" key={currentJob.id}>{currentJob.userId}</p>
        <p className="category">{currentJob.category}</p>
        <p className="description">{currentJob.description}</p>
        <p className="price">Budget: ${currentJob.priceMin} - {currentJob.priceMax}</p>
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