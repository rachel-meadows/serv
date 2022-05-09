import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { APIgetJobQuotes } from '../../apis/customer'
import CustomerQuotesItem from './CustomerQuotesItem'
// import { useDispatch } from 'react-redux'

function QuotesList({ children }) {
  const { jobsId } = useParams()
  const [quotes, setQuotes] = useState([])
  
  useEffect(() => {
    APIgetJobQuotes(jobsId)
      .then((jobs) => {
        console.log('jobs', jobs)
        setQuotes(jobs.quotes)
        return null
      })
      .catch((error) => {
        const errMessage = error.response?.text || error.message
        // dispatch(showError(errMessage))
        console.log(errMessage)
      })
  }, [])

  return (
    <div>
      <h1>Customer Quotes</h1>
      <section>
        {children} {/* This holds the WaitIndicator (from App) */}
        {quotes.map((quote) => {
          return <CustomerQuotesItem key={quote.id} quote={quote} />
        })}
      </section>
    </div>
  )
}

export default QuotesList
