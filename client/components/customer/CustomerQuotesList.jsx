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
    <div>
      <h1>Customer Quotes</h1>
      <section>
        {children} {/* This holds the WaitIndicator (from App) */}
        {!quotes[0]
          ?
          <h3>No Quotes Available</h3>
          :
          quotes.map((quote) => {
          return <CustomerQuotesItem key={quote.id} quote={quote} />
        })}
      </section>
    </div>
  )
}

export default QuotesList
