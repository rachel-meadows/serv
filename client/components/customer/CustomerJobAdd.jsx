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
      <form>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Job Description</label>
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
          <label htmlFor="exampleInputEmail1">Budget Estimate</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              type="text"
              className="form-control mr-2 w-50"
              aria-label="Dollar amount (with dot and two decimal places)"
            />
            <div className="m-4">-</div>
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Dollar amount (with dot and two decimal places)"
            />

            {/* <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                  <form action="" method="post">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 padding0">
                           <div className="input-group"> 
                          <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            aria-label="Dollar amount (with dot and two decimal places)"
                          />
                          </div>
                        </div>

                        <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1 text-center padding0">
                          <p> - </p>
                        </div>

                        <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5 padding0">
                          <div id="max-group" className="input-group ">
                            <span className="input-group-addon">$</span>
                            <input
                              type="text"
                              id="price-max-input"
                              name="price-max"
                              data-toggle="dropdown"
                              className="form-control"
                              placeholder="Max Price"
                              value=""
                            />
                            <ul id="price-max" className="dropdown-menu">
                              <li>
                                <a href="#" data-value="1000">
                                  Max Price
                                </a>
                              </li>
                              <li>
                                <a href="#" data-value="300">
                                  300
                                </a>
                              </li>
                              <li>
                                <a href="#" data-value="500">
                                  500
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
           */}
          </div>
          <small id="emailHelp" className="form-text text-muted">
            We&apos;ll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
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
      //   <div>
      //     <input
      //       type="file"
      //       id="myImage"
      //       name="image"
      //       accept="image/*"
      //       onChange={(e) => handleFileUpload(e)}
      //     />
      //   </div>
      //   <div className="input-group">
      //     <img src={inputs.image} alt="" style={{ width: '100px' }} />
      //   </div>
      //   <div>
      //     <select
      //       name="category"
      //       id="category"
      //       onChange={handleChange}
      //       required
      //     >
      //       <option value="">Select Category</option>
      //       <option value="plumbing">Plumbing</option>
      //       <option value="gardening">Gardening</option>
      //       <option value="building">Building</option>
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
