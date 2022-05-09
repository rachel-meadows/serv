import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  APIgetJobById,
  APIaddQuote,
  APIgetBusinessByUserId,
} from '../../apis/business'
import { useNavigate, useParams } from 'react-router-dom'

function BusinessJobToQuote() {
  const navigate = useNavigate()
  const { jobId } = useParams()
  const [job, setJob] = useState({})
  const [business, setBusiness] = useState({})
  const user = useSelector((state) => state.currentUser)

  useEffect(() => {
    APIgetJobById(jobId).then((job) => {
      setJob(job)
    })

    APIgetBusinessByUserId(user?.id).then((business) => {
      console.log('user', user)
      console.log('business', business)
      setBusiness(business)
    })
  }, [user])

  const [toggleForm, setToggleForm] = useState(false)
  const [quoteForm, setQuoteForm] = useState({
    description: '',
    priceMin: 0,
    priceMax: 0,
  })

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setQuoteForm((values) => ({
      ...values,
      [name]: value,
      businessId: business?.id,
    }))
  }

  const handleSetToggleForm = () => {
    setToggleForm(!toggleForm)
  }

  function handleSubmit(event) {
    event.preventDefault()
    APIaddQuote(job.id, quoteForm).then(() => {
      navigate(`/business`, { state: { message: true } })
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

        <button className="accept-btn" onClick={handleSetToggleForm}>
          Create Quote
        </button>
      </div>
      {toggleForm && (
        <>
          <div className="flex flex-col flex-align-center">
            <h2>Send A Message To A Customers</h2>
            <textarea
              name="description"
              value={quoteForm.description}
              placeholder="What can we help you with?"
              onChange={handleChange}
            ></textarea>
            <h3>Cost Estimate</h3>
          </div>
          <div className="flex flex-row flex-justify-center">
            <label htmlFor="price"></label>
            <input
              name="price"
              placeholder="Price"
              value={quoteForm.price}
              onChange={handleChange}
              disabled={false}
            />
          </div>
          <div className="flex flex-col flex-justify-center">
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </>
      )}
    </>
  )
}

export default BusinessJobToQuote
