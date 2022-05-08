import React from 'react'
import { useLocation } from 'react-router-dom'

function SubmittedMessage() {
  const location = useLocation()
  console.log(location.state.message)
  return <h1>YOUR JOB HAS BEEN SUBMITTED!</h1>
}

export default SubmittedMessage
