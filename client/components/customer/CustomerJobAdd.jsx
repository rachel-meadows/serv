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
    APIaddJob(inputs).then(() =>
      navigate('/customer', { state: { message: true } })
    )
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setInputs({ ...inputs, image: base64 })
  }

  return (
    <>
      <h3>Get Your Job Taken Care Of!</h3>
      <form onSubmit={handleSubmit}>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Job Description:</label>
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
          <br></br>
          <label htmlFor="exampleInputEmail1">Budget Estimate:</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
              placeholder="Min Price"
            />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
              placeholder="Max Price"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image Upload:</label>
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        </div>
      </form>
    </>
  )
}

export default AddJob
{
  /* // <div>
    //   <h3>Get Your Job Taken Care Of!</h3>
      // <form onSubmit={handleSubmit}>
      //   <div>
          // <textarea
            // name="description"
            // placeholder="What can we help you with?"
            // onChange={handleChange}
            // required
          // ></textarea>
      //   </div>
      //   <div>
      //     <h3>Budget Estimate</h3>
      //     $
      //     <input
      //       name="priceMin"
      //       type="number"
      //       min={0}
      //       onChange={handleChange}
      //       required
      //     />
      //     $
      //     <input
      //       name="priceMax"
      //       type="number"
      //       min={0}
      //       onChange={handleChange}
      //       required
      //     />
      //   </div>




        // <div>
        //   <input
        //     type="file"
        //     id="myImage"
        //     name="image"
        //     accept="image/*"
        //     onChange={(e) => handleFileUpload(e)}
        //   />
        // </div>
        // <div className="input-group">
        //   <img src={inputs.image} alt="" style={{ width: '100px' }} />
        // </div>

        
      //   <div>
      //     <select
      //       name="category"
      //       id="category"
      //       onChange={handleChange}
      //       required
      //     >
            // <option value="">Select Category</option>
            // <option value="plumbing">Plumbing</option>
            // <option value="gardening">Gardening</option>
            // <option value="building">Building</option>
      //     </select>
      //   </div>
      //   <div>
      //     <text
      //       name="location"
      //       placeholder="What's the address of the job?"
      //       onChange={handleChange}
      //       required
      //     ></text>
      //   </div>
      //   <div className="submit-buttons">
      //     <button className="submit-button">Submit</button>
      //   </div>
      // </form>
    // </div> */
}
