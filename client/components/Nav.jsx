import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { APIgetBusinessByUserId } from '../apis/business'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
import { getUserByAuth0Id } from '../actions/user'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

function Nav() {
  const dispatch = useDispatch()
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)
  const user = useSelector((state) => state.user)
  const currentUser = useSelector((state) => state.currentUser)
  const [business, setBusiness] = useState({})

  useEffect(() => {
    if (user.auth0Id !== '') {
      dispatch(getUserByAuth0Id(user.auth0Id))
    }
  }, [user])

  useEffect(() => {
    if (currentUser) {
      APIgetBusinessByUserId(currentUser.id)
        .then((business) => {
          setBusiness(business)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [currentUser])

  function handleLogin(event) {
    event.preventDefault()
    login()
  }

  function handleLogoff(event) {
    event.preventDefault()
    logout()
  }

  function handleRegister(event) {
    event.preventDefault()
    register()
  }

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <IfAuthenticated>
        {currentUser?.type === 'customer' && (
          <>
            <li className="nav-item">
              <Link to="/customer" className="nav-link">
                <button className="btn btn-outline-light">View Listings</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/customer/add" className="nav-link">
                <button className="btn btn-outline-light">Add Listing</button>
              </Link>
            </li>
          </>
        )}
        {currentUser?.type === 'business' && (
          <>
            <li className="nav-item">
              <Link to="/business" className="nav-link">
                <button className="btn btn-outline-light ">Business</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={`/business/${business?.id}`} className="nav-link">
                <button className="btn btn-outline-light">Details</button>
              </Link>
            </li>
          </>
        )}
        <li className="nav-item">
          <a href="/" onClick={handleLogoff} className="nav-link ">
            <button className="btn btn-light">Log out</button>
          </a>
        </li>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <>
          <li className="nav-item">
            <a href="/" onClick={handleLogin} className="nav-link">
              <button className="btn btn-outline-light">Login</button>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" onClick={handleRegister} className="nav-link">
              <button className="btn btn-outline-light">Sign Up</button>
            </a>
          </li>
        </>
      </IfNotAuthenticated>
    </ul>
  )
}

export default Nav
