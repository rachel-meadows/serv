import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Serv.</h1>
      </Link>
      <Nav />
    </header>
  )
}

export default Header
