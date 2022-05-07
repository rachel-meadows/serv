import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getRegisterFn } from '../../auth0-utils'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const register = getRegisterFn(useAuth0)
  function handleRegister(event) {
    event.preventDefault()
    register()
  }

  const currentUser = useSelector((state) => state.currentUser)

  useEffect(() => {
    if (currentUser.type) {
      navigate(`/${currentUser.type}`)
    }
  }, [currentUser])

  return (
    <div className="home-page">
      <div className="hero">
        <img src="/images/serv-logo-dark.png" alt="Serv." />
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
