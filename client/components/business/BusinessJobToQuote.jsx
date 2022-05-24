import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import {
  APIaddQuote,
  APIgetBusinessByUserId,
  APIgetJobById,
} from '../../apis/business'

function BusinessJobToQuote() {
  const navigate = useNavigate()
  const { jobId } = useParams()
  const [job, setJob] = useState({})
  const [business, setBusiness] = useState({})
  const user = useSelector((state) => state.currentUser)

  useEffect(() => {
    APIgetJobById(jobId)
      .then((job) => {
        setJob(job)
      })
      .catch((err) => {
        console.error(err)
      })

    APIgetBusinessByUserId(user?.id)
      .then((business) => {
        setBusiness(business)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [user])

  const [toggleForm, setToggleForm] = useState(false)
  const [quoteForm, setQuoteForm] = useState({
    description: '',
    price: '',
  })

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setQuoteForm((values) => ({
      ...values,
      [name]: value,
      businessId: business?.id,
    }))
  }

  const handleSetToggleForm = () => {
    setToggleForm(!toggleForm)
  }

  function handleSubmit(event) {
    event.preventDefault()
    APIaddQuote(job.id, quoteForm)
      .then(() => {
        navigate(`/business`, { state: { message: true } })
      })
      .catch((err) => {
        console.error(err)
      })
  }
  return (
    <div className="container mt-3">
      <h2 className="text-primary mb-3">Job Details</h2>
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
              <td className="text">{job.jobStatus}</td>
            </tr>
          </tbody>
        </table>
        <button
          className="btn btn-outline-primary"
          onClick={handleSetToggleForm}
        >
          Create Quote
        </button>
      </div>
      {toggleForm && (
        <div className="card my-4 p-4 col-xl-6">
          <div className="mb-3">
            <h2 className="text-primary mb-3">Quote Job</h2>
            <textarea
              name="description"
              className="form-control"
              value={quoteForm.description}
              placeholder="Enter the job quote details.."
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="price_min">Quote Amount</label>
            <input
              name="price"
              type="number"
              min={0}
              className="form-control"
              placeholder="Price"
              value={quoteForm.price}
              onChange={handleChange}
              disabled={false}
            />
          </div>
          <div className="">
            <button className="btn btn-outline-primary" onClick={handleSubmit}>
              Send Quote
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BusinessJobToQuote
