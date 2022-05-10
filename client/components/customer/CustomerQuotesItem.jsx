import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { APIgetBusinessById, APIchangeJobStatus } from '../../apis/business'
import { APIchangeQuoteStatus, APIgetJobQuotes } from '../../apis/customer'

function QuotesItem(props) {
  const [business, setBusiness] = useState({})
  const { jobId, id, businessId, description, price, status } = props.quote
  const user = useSelector((state) => state.currentUser)

  const navigate = useNavigate()

  function handleSubmitAccept() {
    APIchangeQuoteStatus(id, 'accepted')
    APIchangeJobStatus(jobId, 'in progress')
      .then(() => {
        navigate('/customer')
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
    APIgetJobQuotes(user?.id)
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
            <td className="text-capitalize">
              <Link to={`/business/${user.id}`}>{business.businessName}</Link>
            </td>
          </tr>
          <tr>
            <th scope="row">Description</th>
            <td className="text-capitalize">{description}</td>
          </tr>
          <tr>
            <th scope="row">Price</th>
            <td>${price}.00</td>
          </tr>
        </tbody>
      </table>
      {status === 'accepted' && <p>Quote has been accepted.</p>}
      {status === 'rejected' && <p>Quote has was rejected.</p>}
      {status === 'pending' && (
        <>
          <button className="btn btn-success" onClick={handleSubmitAccept}>
            Accept
          </button>
          <button className="btn btn-danger" onClick={handleSubmitReject}>
            Reject
          </button>
        </>
      )}
    </div>
  )
}

export default QuotesItem
