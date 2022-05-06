import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { APIgetBusinessById } from '../../apis/business'

function BusinessInfo() {
  const { businessId } = useParams()
  const [business, setBusiness] = useState({})

  useEffect(() => {
    APIgetBusinessById(businessId).then((data) => {
      setBusiness(data)
    })
  }, [])

  const { name, website, category, logo, averageRating } = business

  return (
    <section>
      <p>{name}</p>
      <p>{website}</p>
      <p>{category}</p>
      <p>{logo}</p>
      <p>{averageRating}</p>
      {/* <button className="reject-btn" onClick={handleSubmit}>
        Reject
      </button> */}
    </section>
  )
}

export default BusinessInfo
