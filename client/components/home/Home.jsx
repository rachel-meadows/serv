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
    if (currentUser?.type) {
      navigate(`/${currentUser.type}`)
    }
  }, [currentUser])

  return (
    <div className="home-page">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="/images/hero1.jpeg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/hero2.png"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/hero3.png"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="about-panel">
        <div className="container">
          <div className="row">
            <div className="col p-3">
              <div className="about-us">
                <h3 className="text-danger">About Us</h3>
              </div>
              <div className="our-values">
                <h3 className="text-danger">Our Values</h3>
              </div>
            </div>
            <div className="col p-3">
              <div className="container">
                <h3 className="text-danger">Services We Offer</h3>
                <img
                  src="/images/services/carpenter.jpg"
                  alt="..."
                  className="img-thumbnail w-50 p-2"
                />
                <img
                  src="/images/services/cleaner.jpg"
                  alt="..."
                  className="img-thumbnail w-50 p-2"
                />
                <img
                  src="/images/services/electrician.jpg"
                  alt="..."
                  className="img-thumbnail w-50 p-2"
                />
                <img
                  src="/images/services/gardener.jpg"
                  alt="..."
                  className="img-thumbnail w-50 p-2"
                />
                <img
                  src="/images/services/plumber.jpg"
                  alt="..."
                  className="img-thumbnail w-50 p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hero">
        <img src="/images/serv-logo-dark.png" alt="Serv." />
        <p className="tagline">
          Need a plumber? A gardener? A roofer? Your search is over. Just
          describe your job, then get quotes from local businesses.
        </p>
        <button className="sign-up-btn" onClick={handleRegister}>
          Sign Up!
        </button>
      </div> */}
    </div>
  )
}

export default Home
