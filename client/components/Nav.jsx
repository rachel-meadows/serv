import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserByAuth0Id } from '../actions/user'

function Nav() {
  const dispatch = useDispatch()
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)
  const user = useSelector((state) => state.user)
  const currentUser = useSelector((state) => state.currentUser)

  useEffect(() => {
    if (user.auth0Id !== '') {
      dispatch(getUserByAuth0Id(user.auth0Id))
    }
  }, [user])

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
            {/* <li className="nav-item">
              <Link to="/business/jobs" className="nav-link">
                <button className="btn btn-outline-light">Bus Jobs</button>
              </Link>
            </li> */}
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
          {/* <li>
              <Link to="/how-it-works">How It Works</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li> */}
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
