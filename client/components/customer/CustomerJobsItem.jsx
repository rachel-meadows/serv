import React from 'react'

function JobsListItem(props) {
  const { job, hideButton } = props
  console.log(job)
  function showDetails() {
    props.showDetails(job.id, job?.status)
  }

  return (
    <div className="job">
      <p className="description">{job?.description}</p>
      <p className="image">
        {job.image && (
          <img src={job.image} alt="my job" style={{ width: '100px' }} />
        )}
      </p>
      <p className="category">{job?.category}</p>
      <p className="priceMin">${job?.priceMin}</p>
      <p className="priceMax">${job?.priceMax}</p>
      <p className="location">{job?.location}</p>
      <p className="status">{job?.status}</p>
      {!hideButton ? (
        <p>
          {job.status === 'open' ? (
            <button onClick={showDetails}>Quotes</button>
          ) : job.status === 'closed' ? (
            <button onClick={showDetails}>Details</button>
          ) : null}
        </p>
      ) : (
        <></>
      )}
    </div>
  )
}

export default JobsListItem
