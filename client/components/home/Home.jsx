import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRegisterFn } from '../../auth0-utils'
import { getUserByAuth0Id } from '../../actions/user.js'

function Home() {
  const dispatch = useDispatch()
  const register = getRegisterFn(useAuth0)
  function handleRegister(event) {
    event.preventDefault()
    register()
  }
  //Check whether user is logged in, if logged in, then set the currentUser state variable to that user's details
  const user = useSelector((state) => state.user)
  if (user.auth0Id !== ''){
    console.log(user.auth0Id)
    dispatch(getUserByAuth0Id(user.auth0Id))

  }


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
