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
          <div className="container mt-3">
            <StarRating onChange={handleRating} />
            <div className="input-group w-50">
              <input
                type="text"
                className="form-control"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
                aria-label="Write a review"
                placeholder="Write a review"
                value={review}
                onChange={handleReview}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                id="inputGroupFileAddon04"
              >
                Submit Review
              </button>
            </div>
          </div>
          {/* <button type="submit">Submit Review</button> */}
        </form>
      )}
    </div>
  )
}

export default Review
