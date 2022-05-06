import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { getRegisterFn } from '../../auth0-utils'

function Home() {
  const register = getRegisterFn(useAuth0)
  function handleRegister(event) {
    event.preventDefault()
    register()
  }
  return (
    <div className="home-page">
      <div className="hero">
        <img src="/serv-logo-dark.png" alt="Serv." />
        <p className="tagline">
          Need a plumber? A gardener? A roofer? Your search is over. Just
          describe your job, then get quotes from local businesses.
        </p>
        <button className="sign-up-btn" onClick={handleRegister}>
          Sign Up!
        </button>
      </div>
    </div>
  )
}

export default Home
