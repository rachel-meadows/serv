import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createQuote, fetchJobById } from '../../actions/business'
import { useNavigate, useParams } from 'react-router-dom'


function BusinessJobToQuote() {
  const currentJob = useSelector((state) => state.currentJob)
  console.log(currentJob)
  const [job, setJob] = useState(currentJob)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchJobById(jobId))
  }, [])

    //need to send businessId to database with quote 
    //APIgetBusinessByUserId

  const [toggleForm, setToggleForm] = useState(false)
  const [quoteForm, setQuoteForm] = useState({
    description: "",
    priceMin: 0,
    priceMax: 0
  })

  const { jobId } = useParams()

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setQuoteForm((values) => ({ ...values, [name]: value }))
  }

  const handleSetToggleForm = () => {
    setToggleForm(!toggleForm)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(currentJob.id)
    console.log(quoteForm)
    dispatch(createQuote(currentJob.id, quoteForm))
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


        {createQuote && (
          <button className="accept-btn" onClick={handleSetToggleForm}>
            Create Quote
          </button>
        )}

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
            <label htmlFor="price_min"></label>
            <input
              name="priceMin"
              placeholder="Min price"
              value={quoteForm.priceMin}
              onChange={handleChange}
              disabled={false} />
            <label htmlFor="price_min"></label>
            <input
              name="priceMax"
              placeholder="Max price"
              value={quoteForm.priceMax}
              onChange={handleChange}
              disabled={false} />
          </div>
          <div className="flex flex-col flex-justify-center">
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
          </div>
        </>
      )}
    </>
  )


}



export default BusinessJobToQuote