import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { APIaddJob } from '../../apis/customer'
import { useNavigate } from 'react-router-dom'
import { convertToBase64 } from '../../utils/convertImage'

function AddJob() {
  const navigate = useNavigate()
  const userId = useSelector((state) => state.currentUser.id)
  const [inputs, setInputs] = useState({ userId })

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value, userId }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    APIaddJob(inputs)
    navigate('/customer', { state: { message: true } })
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setInputs({ ...inputs, image: base64 })
  }

  return (
    <div>
      <h3>Get Your Job Taken Care Of!</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            name="description"
            placeholder="What can we help you with?"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <h3>Budget Estimate</h3>
          $
          <input
            name="priceMin"
            type="number"
            min={0}
            onChange={handleChange}
            required
          />
          $
          <input
            name="priceMax"
            type="number"
            min={0}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="file"
            id="myImage"
            name="image"
            accept="image/*"
            onChange={(e) => handleFileUpload(e)}
          />
        </div>
        <div className="input-group">
          <img src={inputs.image} alt="" style={{ width: '100px' }} />
        </div>
        <div>
          <select
            name="category"
            id="category"
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="plumbing">Plumbing</option>
            <option value="gardening">Gardening</option>
            <option value="building">Building</option>
          </select>
        </div>
        <div className="submit-buttons">
          <button className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddJob
