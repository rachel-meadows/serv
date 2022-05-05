import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { getLoginFn, getLogoutFn, getRegisterFn } from '../auth0-utils'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useSelector } from 'react-redux'

function Nav() {
  const user = useSelector((state) => state.user)
  const login = getLoginFn(useAuth0)
  const logout = getLogoutFn(useAuth0)
  const register = getRegisterFn(useAuth0)

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
          <li>
            Hello, {user.name} {user.roles ? `(${user.roles})` : null}
          </li>
          <li>
            <a href="/" onClick={handleLogoff} className="nav-link">
              Log out
            </a>
          </li>
        </IfAuthenticated>
        <IfNotAuthenticated>
          <li>
            <p>Hello, guest</p>{' '}
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
        </IfNotAuthenticated>
      </ul>
    </nav>
  )
}

export default Nav
