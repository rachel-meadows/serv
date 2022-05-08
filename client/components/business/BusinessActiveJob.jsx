import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createQuote } from '../../actions/business'
import { useNavigate, useParams } from 'react-router-dom'
import {APIchangeJobStatus} from '../../apis/business'

function BusinessActiveJob() {
  // const curentJob = useSelector((state) => state.currentJob)
  // const [job, setJob] = useState(currentJob)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // useEffect(() => {
  //   dispatch(fetchJobById(jobId))
  // })

  const currentJob = {
    id: 1,
    userId: 2,
    category: "plumbing",
    description: "Water",
    minPrice: 30,
    maxPrice: 40,
    status: "in progress"
  }

  const jobId = useParams()
  console.log("BusinessJobToQuote", jobId)


  function handleSubmit(event) {
    event.preventDefault()
    APIchangeJobStatus(currentJob.id)
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