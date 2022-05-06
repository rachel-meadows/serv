import React, { useEffect } from 'react'
import QuotesItem from './CustomerQuotesItem'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

// import { APIgetJobQuotes } from '../../apis/quotes'

function QuotesList() {

  const { jobsId } = useParams()
  // console.log('JOBS ID: ' + jobsId)

  // const quotes = useSelector((state) => state.quotes)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchQuotes(jobsId))
  // }, [])
  // the data is hardcoded at the moment.t 
  // need related user_id and job_id from 

  const quotes = [
    {
      id: 1,
      user_id: 1,
      job_id: 2,
      business_id: 1,
      price: 500,
      date_added: '2022-05-04T21:15:34.334Z',
      notes: 'We can do it for 500 if its quick',
      status: 'pending',
    },
    {
      id: 2,
      user_id: 1,
      job_id: 2,
      business_id: 2,
      price: 500,
      date_added: '2022-05-04T21:15:34.334Z',
      notes: 'We can do it for 500 if its quick',
      status: 'pending',
    },
    {
      id: 3,
      user_id: 1,
      job_id: 2,
      business_id: 3,
      price: 500,
      date_added: '2022-05-04T21:15:34.334Z',
      notes: 'We can do it for 500 if its quick',
      status: 'pending',
    }
  ]


  return (
    <div>
      <h1>Customer Quotes</h1>
      <section>
        {quotes.map((quote) => {
          return <QuotesItem key={quote.id} quote={quote} />

        }
        )}

      </section>
    </div>
  )
}

export default QuotesList
