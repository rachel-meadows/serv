import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getRegisterFn } from '../../auth0-utils'
import { Link, useNavigate } from 'react-router-dom'

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
        className="carousel slide h-100"
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
        <div className="carousel-inner h-100">
          <div className="carousel-item active number1 h-100">
            <img
              className="d-block w-100"
              src="/images/hero1-2.jpg"
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="carousel-heading">Service to your door</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/hero3-2.jpg"
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="carousel-heading">
                A range of quality service providers
              </h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/hero2-2.jpg"
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="carousel-heading">No obligation free quotes</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/hero4-2.jpg"
              alt="Third slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h2 className="carousel-heading">
                Service at the click of a button
              </h2>
            </div>
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
        </a>
      </div>
      <div className="about-panel">
        <div className="container">
          <div className="row">
            <div className="col p-3">
              <div className="about-us">
                <h3 className="text-success my-3">About Us</h3>
                <h5 className="">Our Vision</h5>
                <p>
                  To lead the way in bringing services effortlessly to your
                  front door at the click of a button.
                </p>
                <h5 className="">Our Mission</h5>
                <p>
                  Our mission is to provide effortless service at the click of a
                  button, so you can have all of your maintenance issues fixed
                  with ease by skilled professionals.
                </p>
              </div>
              <div className="our-values">
                <h3 className="text-success my-3">Welcome To Serv</h3>
                <Link to="/welcome">
                  <img
                    src="/images/home-flowers.png"
                    alt="..."
                    className="img-thumbnail p-2"
                  />
                </Link>
              </div>
            </div>
            <div className="col p-3">
              <h3 className="text-success my-3">Services We Offer</h3>
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
              <div className="card my-3 p-3">
                <blockquote className="blockquote mt-3">
                  <p className="mb-3 fs-5">
                    It always seems impossible, until it is done.
                  </p>
                  <footer className="blockquote-footer fs-6">
                    Nelson Mandela
                  </footer>
                </blockquote>
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
