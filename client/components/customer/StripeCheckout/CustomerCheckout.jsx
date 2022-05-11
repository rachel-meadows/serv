import React from 'react'
import { APIcustomerCheckoutSession } from '../../../apis/customer'

function CustomerCheckout(props) {
  const { quoteId } = props
  const handleClick = () => {
    APIcustomerCheckoutSession(quoteId)
  }
  return (
    <div className="container mt-3">
      <button className="btn btn-outline-success" onClick={handleClick}>
        Checkout
      </button>
    </div>
  )
}

export default CustomerCheckout
