import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {
  APIgetJobById,
  APIgetQuoteByJobAndUserId,
  APIchangeJobStatus,
} from '../../apis/business'

function BusinessQuotedJob() {
  const [job, setJob] = useState({})
  const [quote, setQuote] = useState({})
  const navigate = useNavigate()
  const { jobId } = useParams()
  const user = useSelector((state) => state.currentUser)

  console.log(quote)
  console.log(job)

  useEffect(() => {
    APIgetQuoteByJobAndUserId(jobId, user?.id)
      .then((quote) => {
        setQuote(quote)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [user])

  /// Can replace this with data from APIgetQuoteByJobAndUserId in refactor
  useEffect(() => {
    APIgetJobById(jobId)
      .then((job) => {
        setJob(job)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    APIchangeJobStatus(job.id)
      .then(() => {
        navigate(`/business`)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div className="container mt-3">
      <h2 className="text-success mb-3">Quoted Jobs</h2>
      <div className="card mx-2 my-2 p-1 col-xl-6">
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Category: </th>
              <td className="text">{job.category}</td>
            </tr>
            <tr>
              <th scope="row">Description: </th>
              <td className="text">{job.description}</td>
            </tr>
            <tr>
              <th scope="row">Budget: </th>
              <td>
                ${job.priceMin}.00 - ${job.priceMax}.00
              </td>
            </tr>
            <tr>
              <th scope="row">Address: </th>
              <td>{job.location}</td>
            </tr>
            <tr>
              <th scope="row">Date added: </th>
              <td>
                {job.dateAdded
                  ? new Date(job.dateAdded).toLocaleString()
                  : null}
              </td>
            </tr>
            <tr>
              <th scope="row">Image: </th>
              <td>
<<<<<<< HEAD
                <img src={job.image} alt="No image to display" />
||||||| 59708b2
                <img src={job.image} alt="Job illustration" />
=======
                {job.image ? (
                  <img src={job?.image} alt="Job illustration" />
                ) : (
                  <p>N/A</p>
                )}
>>>>>>> 444d34b21a7dac843a50cf0cf0e3362178cc2d49
              </td>
            </tr>
            <tr>
              <th scope="row">Job Status: </th>
              <td className="text">{job.status}</td>
            </tr>
            <tr>
              <th scope="row">Date quoted: </th>
              <td>
                {quote.dateAdded
                  ? new Date(quote.dateAdded).toLocaleString()
                  : null}
              </td>
            </tr>
            <tr>
              <th scope="row">Quote Status: </th>
              <td className="text">{quote?.quoteStatus}</td>
            </tr>
          </tbody>
        </table>

        <button className="btn btn-danger" onClick={handleSubmit}>
          Remove quote
        </button>
      </div>
    </div>
  )
}

export default BusinessQuotedJob
