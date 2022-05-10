import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { APIgetBusinessById, APIgetReviews } from '../../apis/business'

function BusinessInfo({ children }) {
  const { businessId } = useParams()

  const [business, setBusiness] = useState({})
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    APIgetBusinessById(businessId).then((data) => {
      setBusiness(data)
    })
  }, [])

  useEffect(() => {
    APIgetReviews(businessId).then((data) => {
      const reviewData = data.filter((obj) => obj.review !== '')
      console.log('reviews: ', reviewData)
      setReviews(reviewData)
    })
  }, [])

  const {
    businessName,
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
      <p>{logo}</p>
      <h1>{businessName}</h1>
      <h2>{category}</h2>
      <a href={website}>
        <h2>{website}</h2>
      </a>
      <p>{location}</p>
      <p>
        {averageRating?.toFixed(2)} ({ratingCount} ratings)
      </p>
      {reviews.map((obj) => {
        return `${obj.review}
        Rating: ${obj.rating}`
      })}
    </section>
  )
}

export default BusinessInfo
