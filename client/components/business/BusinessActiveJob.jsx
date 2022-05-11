import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { APIchangeJobStatus, APIgetJobById } from '../../apis/business'

function BusinessActiveJob() {
  const [job, setJob] = useState({})
  const navigate = useNavigate()
  const { jobId } = useParams()

  useEffect(() => {
    APIgetJobById(jobId)
      .then((job) => {
        setJob(job)
      })
      .catch(() => null)
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    APIchangeJobStatus(job.id, 'closed')
      .then(() => {
        navigate(`/business`)
      })
      .catch(() => null)
  }

  return (
    <div className="card my-2 p-4 col-xl-6">
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
          <td>
            {job.dateAdded ? new Date(job.dateAdded).toLocaleString() : null}
          </td>
          <tr>
            <th scope="row">Image: </th>
            <td>

              {job.image ? (
                <img src={job?.image} alt="Job illustration" />
              ) : (
                <p>N/A</p>
              )}

            </td>
          </tr>
          <tr>
            <th scope="row">Status: </th>
            <td className="text">{job?.status}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-col flex-justify-center">
        <div className="jobList-item"></div>
        <button className="btn btn-success" onClick={handleSubmit}>
          Mark as Completed
        </button>
      </div>
    </div>

    // <div className="flex flex-col flex-justify-center">
    //   <div className="jobList-item"></div>
    //   <p className="userId" key={job?.id}>
    //     {job?.userId}
    //   </p>
    //   <p className="category">{job?.category}</p>
    //   <p className="description">{job?.description}</p>
    //   <p className="price">
    //     Budget: ${job.priceMin} - {job?.priceMax}
    //   </p>
    //   {/* <p className="image">{image}</p> */}
    //   <p className="location">{job?.location}</p>
    //   <p className="status">{job?.status}</p>
    //   <button className="completed-btn" onClick={handleSubmit}>
    //     Mark as Completed
    //   </button>
    // </div>
  )
}

export default BusinessActiveJob
