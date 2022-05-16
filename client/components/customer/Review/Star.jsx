import React from 'react'
import { FaStar } from 'react-icons/fa'

function Star({ filled, onClick }) {
  return (
    <FaStar
      color={filled ? 'orange' : 'lightgray'}
      onClick={onClick}
      size={27.5}
    />
  )
}
export default Star
