import React, { useState } from 'react'
import StarRating from './StarRating'
import superagent from 'superagent'

// add star rating component
// add post request
// have posted state (in selection)

function Review({ beer_id, hasReviewed, setHasReviewed }) {
  const [rating, setRating] = useState(null)
  const [review, setReview] = useState('')

  const handleRating = (value) => {
    setRating(value)
  }

  const handleReview = (event) => {
    setReview(event.target.value)
    setRating(null)
    setReview(null)
  }

  const postReview = (event) => {
    event.preventDefault()
    superagent
      .post(`/api/${beer_id}/review`)
      .send({ comment: review, rating })
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
    setHasReviewed(beer_id)
  }

  return (
    <div className="review">
      {hasReviewed ? (
        <p className="thanks-msg">Thanks for submitting a review!</p>
      ) : (
        <form onSubmit={postReview}>
          <StarRating onChange={handleRating} />
          <input
            type="text"
            value={review}
            onChange={handleReview}
            placeholder="Write a review"
            style={{
              fontSize: '2rem',
              border: 'none',
              borderRadius: '.25rem',
              width: '600px',
            }}
          />
          <button
            type="submit"
            style={{
              background: '#314ee1',
              color: 'white',
              border: 'none',
              fontSize: '1.85rem',
              marginLeft: '4px',
              borderRadius: '.25rem',
              padding: '0.25rem 1rem',
            }}
          >
            Submit Review
          </button>
        </form>
      )}
    </div>
  )
}

export default Review
