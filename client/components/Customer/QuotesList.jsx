import React from 'react'
import QuotesItem from './QuotesItem'

// import { APIgetJobQuotes } from '../../apis/quotes'

function QuotesList() {

  // const quotes = fetchQuotes()
  // the data is hardcoded at the moment. Will need to pull from the api once built 
  // where can we generate the user_id and job_id from 

  const quotes = [
    {
      id: 1,
      user_id: 1,
      job_id: 2,
      price: 500,
      date_added: '2022-05-04T21:15:34.334Z',
      notes: 'We can do it for 500 if its quick',
      status: 'pending',
    },
    {
      id: 2,
      user_id: 1,
      job_id: 2,
      price: 500,
      date_added: '2022-05-04T21:15:34.334Z',
      notes: 'We can do it for 500 if its quick',
      status: 'pending',
    },
    {
      id: 3,
      user_id: 1,
      job_id: 2,
      price: 500,
      date_added: '2022-05-04T21:15:34.334Z',
      notes: 'We can do it for 500 if its quick',
      status: 'pending',
    }
  ]

  // function handleSubmit(event) {
  //   event.preventDefault()
  // }

  return (
    <div>
      <h1>Customer Quotes</h1>
      <section>
        {quotes.map((quote) => {
          console.log(quote)
          return <QuotesItem key={quote.id} quote={quote} />

        }
        )}

      </section>
    </div>
  )
}

export default QuotesList
