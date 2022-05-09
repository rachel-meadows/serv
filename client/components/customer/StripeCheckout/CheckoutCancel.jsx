import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function CheckoutCancel() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/customer')
    }, 3000)
  }, [])
  return (
    <div>
      <div>Transaction cancelled. Redirecting to jobs list..</div>
    </div>
  )
}

export default CheckoutCancel
