import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { addUser } from '../actions/user'
import { convertToBase64 } from '../utils/convertImage'
// import { APIgetBusinessByUserId } from '../apis/business'

function Registration() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const currentUser = useSelector((state) => state.currentUser)
  const navigate = useNavigate()
  const [userType, setUserType] = useState('')

  const [form, setForm] = useState({
    auth0Id: '',
    userName: '',
    email: '',
  })

  useEffect(() => {
    setForm({
      auth0Id: user.auth0Id,
      userName: user.name,
      email: user.email,
    })
  }, [user])

  function handleChange(e) {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setForm({ ...form, logo: base64 })
  }

  function handleAddCustomer(e) {
    e.preventDefault()
    dispatch(
      addUser(
        {
          ...form,
          type: 'customer',
        },
        navigate,
        '/customer'
      )
    )
  }

  async function handleAddBusiness(e) {
    e.preventDefault()
    dispatch(
      addUser(
        {
          ...form,
          type: 'business',
        },
        navigate,
        '/business'
      )
    )
  }

  useEffect(() => {
    dispatch(addBusiness(currentUser?.id))
  }, [currentUser])

  const handleSetUserTypeCustomer = () => {
    setUserType('customer')
  }

  const handleSetUserTypeBusiness = () => {
    setUserType('business')
  }

  return (
    <div className="registration">
      <h2 className="page-title">Welcome to</h2>
      <div className="hero-logo">
        <img src="/images/serv-logo-light.png" alt="Welcome to Serv" />
      </div>
      <h3 className="user-type-title">Select what type of user you are..</h3>
      <div className="user-type">
        <button className="customer-btn" onClick={handleSetUserTypeCustomer}>
          I am a customer
        </button>
        <button className="business-btn" onClick={handleSetUserTypeBusiness}>
          I am a service provider
        </button>
      </div>
      {userType === 'customer' && (
        <form onSubmit={handleAddCustomer}>
          <h3>Customer</h3>
          <div className="input-group">
            <input name="auth0Id" value={form.auth0Id} type="hidden" />{' '}
            <input name="type" value="customer" type="hidden" />
          </div>
          <div className="input-group">
            <label htmlFor="userName">Username</label>
            <input
              name="userName"
              id="userName"
              value={form.userName}
              onChange={handleChange}
              disabled={true}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              disabled={true}
            />
          </div>
          <div className="input-group">
            <button>Register as Customer</button>
          </div>
        </form>
      )}
      {userType === 'business' && (
        <form onSubmit={handleAddBusiness} className="flex flex-col">
          <h3 className="business-details-title">Business Details</h3>
          <div className="input-group">
            <input name="auth0Id" value={form.auth0Id} type="hidden" />
            <input name="type" value="business" type="hidden" />
          </div>
          <div className="input-group">
            <label htmlFor="userName">Username</label>
            <input
              name="userName"
              value={form.userName}
              id="userName"
              onChange={handleChange}
              disabled={true}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              value={form.email}
              id="email"
              onChange={handleChange}
              disabled={true}
            />
          </div>
          <div className="input-group">
            <label htmlFor="businessName">Business Name</label>
            <input
              name="businessName"
              id="businessName"
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="website">Website Link</label>
            <input name="website" id="website" onChange={handleChange} />
          </div>
          <div className="input-group">
            <label htmlFor="category">Business Category</label>
            <select
              name="category"
              className="business-category"
              id="category"
              required
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="plumbing">Plumbing</option>
              <option value="gardening">Gardening</option>
              <option value="building">Building</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="logo">Logo</label>
            <input
              type="file"
              name="logo"
              id="logo"
              accept="image/*"
              onChange={(e) => handleFileUpload(e)}
            />
          </div>
          <div className="input-group">
            <img src={form.logo} alt="" style={{ width: '100px' }} />
          </div>
          <div className="input-group">
            <button>Register as Business</button>
          </div>
        </form>
      )}
    </div>
  )
}

export default Registration
