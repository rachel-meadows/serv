import React from 'react'

function JobsListItem(props) {
  const { job, hideButton } = props
  function showDetails() {
    props.showDetails(job.id, job?.jobStatus)
  }

  return (
    <div
      className={`card mx-2 my-2 p-1 col-s-${props.size} col-m-${props.size} col-l-${props.size} col-xl-${props.size}`}
    >
      <table className="table">
        <tbody>
          <tr>
            <th scope="row">Category: </th>
            <td className="text">{job?.category}</td>
          </tr>
          <tr>
            <th scope="row">Description: </th>
            <td className="text">{job?.description}</td>
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
            <th scope="row">Date added: </th>
            <td>
              {job?.dateAdded
                ? new Date(job?.dateAdded).toLocaleString()
                : null}
              {/* {job?.dateAdded
                ? new Date(job?.dateAdded).toLocaleString()
                : null} */}
            </td>
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
            <td className="text">{job?.jobStatus}</td>
          </tr>
        </tbody>
      </table>
      {!hideButton ? (
        <p>
          {job?.jobStatus === 'open' ? (
            <button
              className="btn btn-outline-success w-100"
              onClick={showDetails}
            >
              Quotes
            </button>
          ) : job?.jobStatus === 'closed' ? (
            <button
              className="btn btn-outline-success w-100"
              onClick={showDetails}
            >
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
