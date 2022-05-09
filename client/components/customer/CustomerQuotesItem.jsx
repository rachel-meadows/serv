import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { APIgetBusinessById } from '../../apis/business'
import { APIchangeQuoteStatus } from '../../apis/customer'

function QuotesItem(props) {
  const [business, setBusiness] = useState({})
  const { id, businessId, description, priceMin, priceMax, status } = props.quote
  const navigate = useNavigate()

  function handleSubmitAccept() {
    APIchangeQuoteStatus(id, 'accepted')
    navigate('/customer')
  }

  function handleSubmitReject() {
    APIchangeQuoteStatus(id, 'rejected')
    navigate('/customer')
  }

  useEffect(() => {
    APIgetBusinessById(businessId).then((data) => {
      return setBusiness(data)
    })
  }, [])

  return (
    <>
      <section>
        <div className="flex quoteList-item"></div>
        <strong>
          <Link to={`/business/${businessId}`}>{business.businessName}</Link>
        </strong>
        <p>{description}</p>
           <p>${priceMin} - ${priceMax}</p>
        {status === 'accepted' && <p>Quote has been accepted.</p>}
        {status === 'rejected' && <p>Quote has was rejected.</p>}
        {status === 'pending' && (
          <>
            <button className="accept-btn" onClick={handleSubmitAccept}>
              Accept
            </button>
            <button className="reject-btn" onClick={handleSubmitReject}>
              Reject
            </button>
          </>
        )}
      </section>
    </>
  )
}

export default QuotesItem
