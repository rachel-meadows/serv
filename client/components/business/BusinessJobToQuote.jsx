import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  APIgetJobById,
  APIaddQuote,
  APIgetBusinessByUserId,
} from '../../apis/business'
import { useNavigate, useParams } from 'react-router-dom'

function BusinessJobToQuote() {
  const navigate = useNavigate()
  const { jobId } = useParams()
  const [job, setJob] = useState({})
  const [business, setBusiness] = useState({})
  const user = useSelector((state) => state.currentUser)

  useEffect(() => {
    APIgetJobById(jobId).then((job) => {
      setJob(job)
    })

    APIgetBusinessByUserId(user?.id).then((business) => {
      console.log('user', user)
      console.log('business', business)
      setBusiness(business)
    })
  }, [user])

  const [toggleForm, setToggleForm] = useState(false)
  const [quoteForm, setQuoteForm] = useState({
    description: '',
    priceMin: 0,
    priceMax: 0,
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
    APIaddQuote(job.id, quoteForm).then(() => {
      navigate(`/business`, { state: { message: true } })
    })
  }
  return (
    <div className="container mt-3">
      <h2 className="text-success mb-3">Job Details</h2>
      <div className="card my-2 p-4 col-xl-6">
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Category: </th>
              <td className="text-capitalize">{job.category}</td>
            </tr>
            <tr>
              <th scope="row">Description: </th>
              <td className="text-capitalize">{job.description}</td>
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
              <th scope="row">Image: </th>
              <td>
                <img src={job.image} alt="Job illustration" />
              </td>
            </tr>
            <tr>
              <th scope="row">Status: </th>
              <td className="text-capitalize">{job.status}</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={handleSetToggleForm}>
          Create Quote
        </button>
      </div>
      {toggleForm && (
        <div className="card my-4 p-4 col-xl-6">
          <div className="mb-3">
            <h2 className="text-success mb-3">Quote Job</h2>
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
              name="priceMin"
              type="number"
              min={0}
              className="form-control"
              placeholder="Min price"
              value={quoteForm.priceMin}
              onChange={handleChange}
              disabled={false}
            />
            {/* <label htmlFor="price_min"></label>
            <input
              name="priceMax"
              placeholder="Max price"
              value={quoteForm.priceMax}
              onChange={handleChange}
              disabled={false}
            /> */}
          </div>
          <div className="">
            <button className="btn btn-success" onClick={handleSubmit}>
              Send Quote
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BusinessJobToQuote
