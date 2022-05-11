import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="/images/serv-logo-small-white.png" alt="Serv" />
          </Link>
          <div className="d-flex">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <Nav />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
