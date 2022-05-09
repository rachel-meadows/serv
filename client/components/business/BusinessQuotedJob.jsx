import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { APIgetJobById, APIgetQuoteByJobAndUserId } from '../../apis/business'

function BusinessQuotedJob() {
  const [job, setJob] = useState({})
  const [quote, setQuote] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { jobId } = useParams()
  const user = useSelector((state) => state.currentUser)

  useEffect(() => {
    APIgetQuoteByJobAndUserId(jobId, user?.id).then((quote) => {
      setQuote(quote)
    })
  }, [user])

  /// Can replace this with data from APIgetQuoteByJobAndUserId in refactor
  useEffect(() => {
    APIgetJobById(jobId).then((job) => {
      setJob(job)
    })
  }, [])

  console.log('BusinessJobToQuote', jobId)

  function handleSubmit(event) {
    event.preventDefault()
    APIchangeJobStatus(job.id).then(() => {
      navigate(`/business`)
    })
  }

  return (
    <>
      <div className="flex flex-col flex-justify-center">
        <div className="jobList-item"></div>
        <p className="userId" key={job.id}>
          {job.userId}
        </p>
        <p className="category">{job.category}</p>
        <p className="description">{job.description}</p>
        <p className="price">
          Budget: ${job.priceMin} - {job.priceMax}
        </p>
        {/* <p className="image">{image}</p> */}
        <p className="status">{job.status}</p>
        <p className="status">{quote?.quoteStatus}</p>
        <button className="completed-btn" onClick={handleSubmit}>
          Remove quote
        </button>
      </div>
    </>
  )
}

export default BusinessQuotedJob
