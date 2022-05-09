import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function CheckoutSuccess() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/customer')
    }, 3000)
  }, [])
  return (
    <div>
      <div>Thank you for your payment! Redirecting to jobs list..</div>
    </div>
  )
}

export default CheckoutSuccess
