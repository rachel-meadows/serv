import React from 'react'

function IndividualQuote(props) {
  const title = 'Accepted Quote'

  return (
    <>
      <h3>{ title }</h3>
      <p>Notes: {props.notes} </p>
      <p>Price: {props.price} </p>
    </>
  )
}

export default IndividualQuote