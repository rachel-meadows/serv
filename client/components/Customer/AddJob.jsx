import React, { useState } from 'react'
import { APIaddJob } from '../../apis/customer'

function AddJob() {
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs((values) => ({ ...values, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await APIaddJob(inputs)
    console.log(inputs)
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
          />
          $
          <input
            name="priceMax"
            type="number"
            min={0}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="file"
            id="myImage"
            name="imagename"
            onChange={handleChange}
          />
        </div>
        <div>
          <select name="category" id="category" onChange={handleChange}>
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
