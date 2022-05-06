import React from 'react'
import { useParams } from 'react-router-dom'

function BusinessInfo() {
  const { businessId } = useParams()
  console.log(businessId)
  //Business details to display all of the business' info based on the business_id
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

  // const { name, website, category, logo, average_rating } = businessDetails.find((obj) => obj.id === Number(businessId))

  return (
    <section>
      {/* <p>{name}</p>
      <p>{website}</p>
      <p>{category}</p>
      <p>{logo}</p>
      <p>{average_rating}</p> */}
      {/* <button className="reject-btn" onClick={handleSubmit}>
        Reject
      </button> */}
    </section>
  )
}

export default BusinessInfo