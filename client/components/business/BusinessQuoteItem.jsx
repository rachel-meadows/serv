import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function BusinessQuoteItem(props) {
  const [showButton, setShowButton] = useState(false)

  const { id, user_id, description, image, category, price_min, price_max, status } = props.job

  // const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault()
    // dispatch(function({
    // })
  }

  useEffect(() => {
    // logic to show button
    if (status === 'unmatched') {
      setShowButton(showButton)
    } else {
      setShowButton(!showButton)
    }
  }, [])

  return (

    <>
      <div className="flex flex-col flex-justify-center">
        <div className="jobList-item"></div>
        <p className="userId" key={id}>{user_id}</p>
        <p className="category">{category}</p>
        <p className="description">{description}</p>
        <p className="price">Budget: ${price_min} - {price_max}</p>
        <p className="image">{image}</p>
        <p classNme="status">{status}</p>
      </div>


      {showButton && (

        // <button className="accept-quote" onClick={handleSubmit}>Accept Quote</button>
      )}
    </>
  )
}

export default BusinessQuoteItem