import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { APIgetBusinessById } from '../../apis/business'

function QuotesItem(props) {
  const { id, userId, jobId, businessId, notes, price } = props.quote
  function handleSubmit(event) {
    event.preventDefault()
  }

  const [business, setBusiness] = useState({})

  useEffect(() => {
    APIgetBusinessById(businessId).then((data) => {
      return setBusiness(data)
    })
  }, [])

  return (
    <>
      <h1>Customer Quotes</h1>
      <section>
        <div className="flex quoteList-item"></div>
        <strong>
          <Link to={`/business/${businessId}`}>{business.businessName}</Link>
        </strong>
        <p key={id}>{userId}</p>
        <p>{jobId}</p>
        <p>{notes}</p>
        <p>${price}</p>
        <button className="accept-btn" onClick={handleSubmit}>
          Accept
        </button>
        <button className="reject-btn" onClick={handleSubmit}>
          Reject
        </button>
      </section>
    </>
  )
}

export default QuotesItem
