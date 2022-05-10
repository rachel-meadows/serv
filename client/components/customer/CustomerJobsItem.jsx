import React from 'react'

function JobsListItem(props) {
  const { job, hideButton } = props
  console.log(job)
  function showDetails() {
    props.showDetails(job.id, job?.status)
  }

  return (
    <div className="card my-2 p-4 col-xl-6">
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Category: </th>
            <td className="text-capitalize">{job?.category}</td>
          </tr>
          <tr>
            <th scope="row">Description: </th>
            <td className="text-capitalize">{job?.description}</td>
          </tr>
          <tr>
            <th scope="row">Budget: </th>
            <td>
              ${job?.priceMin}.00 - ${job?.priceMax}.00
            </td>
          </tr>
          <tr>
            <th scope="row">Address: </th>
            <td>{job?.location}</td>
          </tr>
          <tr>
            <th scope="row">Image: </th>
            <td>
              {job.image ? (
                <img
                  src={job?.image}
                  className="w-100"
                  alt="Job illustration"
                />
              ) : (
                <p>N/A</p>
              )}
            </td>
          </tr>
          <tr>
            <th scope="row">Status: </th>
            <td className="text-capitalize">{job?.status}</td>
          </tr>
        </tbody>
      </table>
      {!hideButton ? (
        <p>
          {job.status === 'open' ? (
            <button className="btn btn-success" onClick={showDetails}>
              Quotes
            </button>
          ) : job.status === 'closed' ? (
            <button className="btn btn-success" onClick={showDetails}>
              Details
            </button>
          ) : null}
        </p>
      ) : (
        <></>
      )}
    </div>
  )
}

export default JobsListItem
