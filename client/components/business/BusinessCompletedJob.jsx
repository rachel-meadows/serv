import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { APIgetJobById, APIgetQuoteByJobAndUserId } from '../../apis/business'

function BusinessCompletedJob() {
  const user = useSelector((state) => state.currentUser)
  const [job, setJob] = useState({})
  const [quote, setQuote] = useState({})
  const { jobId } = useParams()

  useEffect(() => {
    APIgetJobById(jobId)
      .then((job) => {
        setJob(job)
      })
      .catch(() => null)
  }, [])

  useEffect(() => {
    APIgetQuoteByJobAndUserId(jobId, user?.id)
      .then((quote) => {
        setQuote(quote)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [user])

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
            <th scope="row">Date added: </th>
            <td>
              {job.dateAdded ? new Date(job.dateAdded).toLocaleString() : null}
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
            <th scope="row">Quote Date:</th>
            <td>{quote.dateAdded ? quote.dateAdded.toLocaleString() : null}</td>
          </tr>
          <tr>
            <th scope="row">Quote Text: </th>
            <td className="text-capitalize">{quote?.description}</td>
          </tr>
          <tr>
            <th scope="row">Quoted Price: </th>
            <td className="text-capitalize">{quote?.price}</td>
          </tr>
          <tr>
            <th scope="row">Status: </th>
            <td className="text-capitalize">{job?.quoteStatus}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default BusinessCompletedJob
