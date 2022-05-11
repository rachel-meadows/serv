import React from 'react'
import { useNavigate } from 'react-router-dom'

function BusinessJobItem(props) {
  const navigate = useNavigate()

  const {
    id,
    description,
    image,
    category,
    priceMin,
    priceMax,
    quoteStatus,
    jobLocation,
    dateAdded,
  } = props.job

  console.log('props.job', props.job)

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
    <div className="card mx-2 my-2 p-1 col-xl-3">
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Category: </th>
            <td className="text">{category}</td>
          </tr>
          <tr>
            <th scope="row">Description: </th>
            <td className="text">{description}</td>
          </tr>
          <tr>
            <th scope="row">Budget: </th>
            <td>
              ${priceMin}.00 - ${priceMax}.00
            </td>
          </tr>
          <tr>
            <th scope="row">Address: </th>
            <td>{jobLocation}</td>
          </tr>
          <tr>
            <th scope="row">Date added: </th>
            <td>{dateAdded ? new Date(dateAdded).toLocaleString() : null}</td>
          </tr>
          <tr>
            <th scope="row">Image: </th>
            <td>
              {image ? (
                <img src={image} className="w-100" alt="Job illustration" />
              ) : (
                <p>N/A</p>
              )}
            </td>
          </tr>
          <tr>
            <th scope="row">Status: </th>
            <td className="text">{quoteStatus}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex align-items-end">
        <button
          className="btn btn-outline-success w-100"
          onClick={handleDetailClick}
        >
          Details
        </button>
      </div>
    </div>
  )
}

export default BusinessJobItem
