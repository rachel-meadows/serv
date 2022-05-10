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
    status,
    location,
  } = props.job

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
    <div className="card my-2 p-4 col-xl-6">
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Category: </th>
            <td className="text-capitalize">{category}</td>
          </tr>
          <tr>
            <th scope="row">Description: </th>
            <td className="text-capitalize">{description}</td>
          </tr>
          <tr>
            <th scope="row">Budget: </th>
            <td>
              ${priceMin}.00 - ${priceMax}.00
            </td>
          </tr>
          <tr>
            <th scope="row">Address: </th>
            <td>{location}</td>
          </tr>
          <tr>
            <th scope="row">Image: </th>
            <td>
              <img src={image} alt="Job illustration" />
            </td>
          </tr>
          <tr>
            <th scope="row">Status: </th>
            <td className="text-capitalize">{status}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-col flex-justify-center">
        <div className="jobList-item"></div>
        <button className="btn btn-success" onClick={handleDetailClick}>
          Details
        </button>
      </div>
    </div>
  )
}

export default BusinessJobItem
