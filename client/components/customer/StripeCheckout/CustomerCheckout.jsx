import React from 'react'
import { APIcustomerCheckoutSession } from '../../../apis/customer'

function CustomerCheckout(props) {
  const { quoteId } = props
  const handleClick = () => {
    APIcustomerCheckoutSession(quoteId)
  }
  return (
    <div>
      <button onClick={handleClick}>Checkout</button>
    </div>
  )
}

export default CustomerCheckout
