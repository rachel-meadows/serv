import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
function BusJobItem(props) {
  const [toggleForm, setToggleForm] = useState(false)
  const [quoteForm, setQuoteForm] = useState({
    description: "",
    price_min: 0, 
    price_max: 0
  })
 
  const dispatch = useDispatch()

  const handleSetToggleForm = () => {
    setToggleForm(!toggleForm )
  }

  const { id, user_id, description, image, category, price_min, price_max } = props.jobListing

  function handleSubmit(event) {
    event.preventDefault()
    // dispatch(addQuote({
    //   // description: description,
    //   // price_min: price_min,
    //   // price_max: price_max,
    // }))
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setQuoteForm((values) => ({ ...values, [name]: value }))
   console.log(quoteForm);
  }

  return (
    <>
      <section className="flex flex-col flex-justify-center">
        {/* <h2>Details</h2> */}
        <div className="jobList-item"></div>
        <p key={id}>{user_id}</p>
        <p>{category}</p>
        <p>{description}</p>
        <p>Budget: ${price_min} - {price_max}</p>
        <p>{image}</p>
        <button className="accept-btn" onClick={handleSetToggleForm}>
          Create Quote
        </button>
      </section>

      {toggleForm && (

        <><section className="flex flex-col flex-align-center">
          <h2>Send A Message To A Customers</h2>
          <textarea
            name="description"
            value={quoteForm.description}
            placeholder="What can we help you with?"
            onChange={handleChange}
          ></textarea>
          <h3>Cost Estimate</h3>
        </section>
          <section className="flex flex-row flex-justify-center">
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
          </section>
          <section className="flex flex-col flex-justify-center">
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
          </section>
        </>
      )}
    </>
  )
}

export default BusJobItem
