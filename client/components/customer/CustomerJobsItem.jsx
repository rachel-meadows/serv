import React from 'react'

function JobsListItem(props) {
  const job = props.job

  function showDetails() {
   props.showDetails(job.id, job.status)
  }

  return (
    <div className="job">
      <p className="description">{job.description}</p>
      <p className="image">{job.image}</p>
      <p className="category">{job.category}</p>
      <p className="priceMin">{job.priceMin}</p>
      <p className="priceMax">{job.priceMax}</p>
      <p className="status">{job.status}</p>
      <p>
        <button onClick={showDetails}>
          Details
        </button>
      </p>
    </div>
  )
}

export default JobsListItem
