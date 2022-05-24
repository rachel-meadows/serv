import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { APIchangeJobStatus, APIgetBusinessById } from '../../apis/business'
import { APIchangeQuoteStatus } from '../../apis/customer'

function QuotesItem(props) {
  const [business, setBusiness] = useState({})
  const { jobId, id, businessId, description, price, quoteStatus } = props.quote
  const status = quoteStatus
  const user = useSelector((state) => state.currentUser)

  const navigate = useNavigate()

  async function handleSubmitAccept() {
    await APIchangeQuoteStatus(id, 'accepted')
    APIchangeJobStatus(jobId, 'in progress')
      .then(() => {
        navigate(`/customer`, { state: { message: { type: 'quoteAdd' } } })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  function handleSubmitReject() {
    APIchangeQuoteStatus(id, 'rejected')
    navigate('/customer')
  }
  useEffect(() => {
    APIgetBusinessById(businessId)
      .then((data) => {
        return setBusiness(data)
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
            <th scope="row">Business</th>
            <td className="text">
              <Link to={`/business/${businessId}`}>
                {business.businessName}
              </Link>
              {/* <Link to={`/business/${user.id}`}>{business.businessName}</Link> */}
            </td>
          </tr>
          <tr>
            <th scope="row">Description</th>
            <td className="text">{description}</td>
          </tr>
          <tr>
            <th scope="row">Price</th>
            <td>${price}.00</td>
          </tr>
          <tr>
            <th scope="row">Status</th>
            <td>
              {status === 'accepted' && <p>Quote has been accepted.</p>}
              {status === 'rejected' && <p>Quote has was rejected.</p>}
              {status === 'pending' && <p>Quote is pending.</p>}
            </td>
          </tr>
        </tbody>
      </table>

      {status === 'pending' && (
        <div className="d-flex">
          <button
            className="btn btn-outline-success mx-2 w-40"
            onClick={handleSubmitAccept}
          >
            Accept
          </button>
          <button
            className="btn btn-danger mx-2 w-40"
            onClick={handleSubmitReject}
          >
            Reject
          </button>
        </div>
      )}
    </div>
  )
}

export default QuotesItem
