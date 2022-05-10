import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { APIgetBusinessById } from '../../apis/business'

function BusinessInfo({ children }) {
  const { businessId } = useParams()

  const [business, setBusiness] = useState({})

  useEffect(() => {
    APIgetBusinessById(businessId).then((data) => {
      setBusiness(data)
    })
  }, [])

  const {
    name,
    website,
    category,
    logo,
    location,
    averageRating,
    ratingCount,
  } = business

  return (
    <section>
      {children} {/* This holds the WaitIndicator (from App) */}
      <p>{name}</p>
      <p>{website}</p>
      <p>{category}</p>
      <p>{logo}</p>
      <p>{location}</p>
      <p>{averageRating}</p>
      <p>{ratingCount}</p>
      {/* <button className="reject-btn" onClick={handleSubmit}>
        Reject
      </button> */}
    </section>
  )
}

export default BusinessInfo
