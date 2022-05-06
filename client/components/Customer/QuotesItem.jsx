import React from 'react'
import { Link } from 'react-router-dom'

function QuotesItem(props) {
  
  const { id, user_id, job_id, business_id, notes, price } = props.quote
  function handleSubmit(event) {
    event.preventDefault()
  }

  //Business details to display the business name based on the business_id
  // Replace with redux
  const businessDetails = [
  {
    id: 1, 
    name: 'Plumbers R Us',
    website: 'url',
    category: 'plumbing',
    logo: 'url',
    average_rating: 4.6
  },
  {
    id: 2, 
    name: 'Gardenscapes',
    website: 'url',
    category: 'gardening',
    logo: 'url',
    average_rating: 2.1
  },
  {
    id: 3, 
    name: 'Earnest Catering',
    website: 'url',
    category: 'plumbing',
    logo: 'url',
    average_rating: 5
  }
]

const businessName = businessDetails.find((obj) => obj.id === business_id).name

  return (
    <>
      <h1>Customer Quotes</h1>
      <section>
        <div className="flex quoteList-item"></div>
        <Link to={`/business/details/${business_id}`}>{businessName}</Link>
        <p key={id}>{user_id}</p>
        <p>{job_id}</p>
        <p>{notes}</p>
        <p>${price}</p>
        <button className="accept-btn" onClick={handleSubmit}>
          Accept
        </button>
        <button className="reject-btn" onClick={handleSubmit}>
          Reject
        </button>
      </section>
    </>
  )
}

export default QuotesItem
