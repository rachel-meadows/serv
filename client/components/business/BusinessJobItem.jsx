import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createQuote } from '../../actions/business'
import { useNavigate } from 'react-router-dom'

function BusinessJobItem(props) {
  const [toggleForm, setToggleForm] = useState(false)
  const [quoteForm, setQuoteForm] = useState({
    description: "",
    price_min: 0,
    price_max: 0
  })
  const [createQuote, setCreateQuote] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSetToggleForm = () => {
    setToggleForm(!toggleForm)
  }

  const { id, user_id, description, image, category, price_min, price_max, status } = props.jobListing

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(createQuote(id, quoteForm))
    navigate(`/business/jobs`)
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setQuoteForm((values) => ({ ...values, [name]: value }))
    console.log(quoteForm);
  }

  function showDetails() {
    props.showDetails(id, status)
    setCreateQuote(!createQuote)
  }


  return (

    <>
      <div className="flex flex-col flex-justify-center">
        <div className="jobList-item"></div>
        <p className="userId" key={id}>{user_id}</p>
        <p className="category">{category}</p>
        <p className="description">{description}</p>
        <p className="price">Budget: ${price_min} - {price_max}</p>
        <p className="image">{image}</p>
        <button onClick={showDetails}>Details</button>

        {createQuote && (
          <button className="accept-btn" onClick={handleSetToggleForm}>
            Create Quote
          </button>
        )}

      </div>

      {toggleForm && (

        <><div className="flex flex-col flex-align-center">
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
              name="price_min"
              placeholder="Min price"
              value={quoteForm.price_min}
              onChange={handleChange}
              disabled={false} />
            <label htmlFor="price_min"></label>
            <input
              name="price_max"
              placeholder="Max price"
              value={quoteForm.price_max}
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

export default BusinessJobItem
