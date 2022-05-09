import React from 'react'
import { useNavigate } from 'react-router-dom'

function BusinessJobItem(props) {
  const navigate = useNavigate()

  const {
    id,
    userId,
    description,
    image,
    category,
    priceMin,
    priceMax,
    status,
    location,
  } = props.job
  console.log('job: ', props.job)

  const dropDownStatus = props.dropDownSelection

  function showDetails(jobsId, dropDownStatus) {
    if (dropDownStatus === 'unmatched') {
      navigate(`/business/open/${jobsId}`)
    } else if (dropDownStatus === 'quoted') {
      navigate(`/business/quoted/${jobsId}`)
    } else if (dropDownStatus === 'active') {
      navigate(`/business/active/${jobsId}`)
    } else if (dropDownStatus === 'completed') {
      navigate(`/business/completed/${jobsId}`)
    }
  }

  function handleDetailClick() {
    showDetails(id, dropDownStatus)
  }

  return (
    <>
      <div className="flex flex-col flex-justify-center">
        <div className="jobList-item"></div>
        <p className="userId" key={id}>
          {userId}
        </p>
        <p className="category">{category}</p>
        <p className="description">{description}</p>
        <p className="price">
          Budget: ${priceMin} - {priceMax}
        </p>
        <p className="image">{image}</p>
        <p className="location">{location}</p>
        <p className="status">{status}</p>
        <button onClick={handleDetailClick}>Details</button>
      </div>
    </>
  )
}

export default BusinessJobItem
