import React from 'react'

function JobsListItem(props) {
  const { job, hideButton } = props

  function showDetails() {
    props.showDetails(job.id, job?.status)
  }

  return (
     <div className="card my-2 p-4 col-xl-6">
       <p className="description">{job?.description}</p>
      <p className="image">
        {job.image && (
          <img src={job.image} alt="my job" style={{ width: '100px' }} />
        )}
      </p>
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
              <img src={job?.image} alt="Job illustration" />
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

{/* 
      <div className="flex flex-col flex-justify-center">
        <div className="jobList-item"></div>
        <button className="btn btn-success" onClick={handleDetailClick}>
          Details
        </button>
      </div>
    </div> */}



    // <div className="job">
    //   <p className="description">{job?.description}</p>
    //   <p className="image">
    //     {job.image && (
    //       <img src={job.image} alt="my job" style={{ width: '100px' }} />
    //     )}
    //   </p>
    //   <p className="category">{job?.category}</p>
    //   <p className="priceMin">${job?.priceMin}</p>
    //   <p className="priceMax">${job?.priceMax}</p>
    //   <p className="location">{job?.location}</p>
    //   <p className="status">{job?.status}</p>
    //   {!hideButton ? (
    //     <p>
    //       {job.status === 'open' ? (
    //         <button onClick={showDetails}>Quotes</button>
    //       ) : job.status === 'closed' ? (
    //         <button onClick={showDetails}>Details</button>
    //       ) : null}
    //     </p>
    //   ) : (
    //     <></>
    //   )}
    // </div>

