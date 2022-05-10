import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { APIgetJobQuotes } from '../../apis/customer'
import CustomerQuotesItem from './CustomerQuotesItem'

function QuotesList({ children }) {
  const { jobId } = useParams()
  const [quotes, setQuotes] = useState([])
  
  useEffect(() => {
    APIgetJobQuotes(jobId)
      .then((jobs) => {
        setQuotes(jobs.quotes)
        return null
      })
      .catch((error) => {
        const errMessage = error.response?.text || error.message
        console.log(errMessage)
      })
  }, [])

  return (

    <div className="container mt-3">
    <h2 className="text-success mb-3">Customer Quotes</h2>
      <section>
        {children} {/* This holds the WaitIndicator (from App) */}
        {!quotes[0]
          ?
          <h4>No Quotes Available</h4>
          :
          quotes.map((quote) => {
          return <CustomerQuotesItem key={quote.id} quote={quote} />
        })}
      </section>
      </div>
  )
}

export default QuotesList
