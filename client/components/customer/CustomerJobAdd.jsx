import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { APIaddJob } from '../../apis/customer'
import { useNavigate } from 'react-router-dom'
import { convertToBase64 } from '../../utils/convertImage'

function AddJob() {
  const navigate = useNavigate()
  const userId = useSelector((state) => state.currentUser?.id)
  const [inputs, setInputs] = useState({ userId })

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value, userId }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('here are our inputs', inputs)
    APIaddJob(inputs)
      .then(() =>
        navigate('/customer', { state: { message: { type: 'jobAdd' } } })
      )
      .catch((error) => {
        console.log(error)
      })
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setInputs({ ...inputs, image: base64 })
  }

  return (
    <div className="container my-3">
      <h2 className="text-dark">Get Your Job Taken Care Of!</h2>
      <form onSubmit={handleSubmit}>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Job Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="description"
              placeholder="What can we help you with?"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="location"
              className="form-control"
              name="location"
              id="location"
              onChange={handleChange}
            />
          </div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Budget Estimate:
          </label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              name="priceMin"
              type="text"
              className="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
              placeholder="Min Price"
              onChange={handleChange}
            />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              name="priceMax"
              type="text"
              className="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
              placeholder="Max Price"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image Upload:
            </label>
            {/* <input className="form-control" type="file" id="formFile"/> */}
            <input
              className="form-control"
              type="file"
              id="myImage"
              name="image"
              accept="image/*"
              onChange={(e) => handleFileUpload(e)}
            />
            <div className="input-group">
              <img src={inputs.image} alt="" style={{ width: '100px' }} />
            </div>
          </div>

          <div className="my-3 ml-auto">
            <label htmlFor="category" className="form-label">
              Pick your category:
            </label>
            <select
              name="category"
              id="category"
              className="form-select w-25"
              defaultValue=""
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="plumbing">Plumbing</option>
              <option value="gardening">Gardening</option>
              <option value="building">Building</option>
            </select>
          </div>
          <button type="submit" className="btn btn-outline-success">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddJob
