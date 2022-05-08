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
    <nav>
      <ul>
        <IfAuthenticated>
          {/* puit === 'customer' when ready for production */}
          {currentUser?.type && (
            <>
              <li>
                <Link to="/customer">Customer</Link>
              </li>
              <li>
                <Link to="/customer/add">Cus Add</Link>
              </li>
            </>
          )}
          {/* put === 'business' when ready for production */}
          {currentUser?.type && (
            <>
              <li>
                <Link to="/business">Business</Link>
              </li>
              <li>
                <Link to="/business/jobs">Bus Jobs</Link>
              </li>
            </>
          )}
          <li>
            <a href="/" onClick={handleLogoff} className="nav-link">
              Log out
            </a>
          </li>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <>
            <li>
              <Link to="/how-it-works">How It Works</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <a href="/" onClick={handleLogin} className="nav-link">
                Sign in
              </a>
            </li>
            <li>
              <a href="/" onClick={handleRegister} className="nav-link">
                Register
              </a>
            </li>
          </>
        </IfNotAuthenticated>
      </ul>
    </nav>
  )
}

export default Nav
