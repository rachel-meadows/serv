import React, { useState } from 'react'

function BusJobItem(props) {
  const [QuoteForm, setQuoteForm] = useState('')

  const handleSetQuoteForm = () => {
    setQuoteForm('quoteItem')
  }

  const { id, user_id, description, image, category, price_min, price_max } = props.jobListing

  function handleSubmit(event) {
    event.preventDefault()
  }


  function handleChange(e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <>
      <section className="flex flex-col flex-justify-center">
        <h2>Job Details</h2>
        <div className="jobList-item"></div>
        <p key={id}>{user_id}</p>
        <p>{category}</p>
        <p>{description}</p>
        <p>Budget: ${price_min} - {price_max}</p>
        <p>{image}</p>
        <button className="accept-btn" onClick={handleSetQuoteForm}>
          Create Quote
        </button>
      </section>

      {QuoteForm === 'quoteItem' && (

        <><section className="flex flex-col flex-align-center">
          <h2>Send A Message To A Customers</h2>
          <textarea
            name="form"
            placeholder="What can we help you with?"
            onChange={handleChange}
          ></textarea>
          <h3>Cost Estimate</h3>
        </section>
          <section flex flex-col>
            <label htmlFor="price_min"></label>
            <input
              name="price_min"
              placeholder="Min price"
              value={price_min}
              onChange={handleChange}
              disabled={true} />
          </section>
          <section flex flex-col>
            <label htmlFor="price_min"></label>
            <input
              name="price_max"
              placeholder="Max price"
              value={price_max}
              onChange={handleChange}
              disabled={true} />
          </section>
          <button className="submit-button" onClick={handleSubmit}>Submit</button></>
      )}
    </>
  )
}

export default BusJobItem
