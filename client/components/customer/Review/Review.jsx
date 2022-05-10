import React, { useState } from 'react'
import StarRating from './StarRating'
import { APIaddFeedback } from '../../../apis/customer'

function Review({ quoteId, reviewed, setReviewed, customerId }) {
  const [rating, setRating] = useState(null)
  const [review, setReview] = useState('')

  const handleRating = (value) => {
    setRating(value)
  }

  const handleReview = (event) => {
    setReview(event.target.value)
  }

  const postReview = (event) => {
    event.preventDefault()
    APIaddFeedback(quoteId, { customerId, review, rating })
    setReviewed(true)
  }

  return (
    <div className="review">
      {reviewed ? (
        <p className="thanks-msg">Thanks for submitting a review!</p>
      ) : (
        <form onSubmit={postReview}>
          <StarRating onChange={handleRating} />
          <input
            type="textarea"
            value={review}
            onChange={handleReview}
            placeholder="Write a review"
          />
          <button type="submit">Submit Review</button>
        </form>
      )}
    </div>
  )
}

export default Review
