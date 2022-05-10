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
              src="/images/hero2.jpg"
              alt="Second slide"
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
                <h4>Our Vision</h4>
                <p>
                  <q>
                    To lead the way in bringing services effortlessly to your
                    front door at the click of a button
                  </q>
                </p>
                <h4>Our Mission</h4>
                <p>
                  <q>
                    Our mission is to provide effortless service at the click of
                    a button, so you can have all of your maintenance issues
                    fixed with ease by skilled professionals.
                  </q>
                </p>
              </div>
              <div className="our-values">
                <h3 className="text-danger">Our Values</h3>
                <ul>
                  <li>Trust</li>
                  <li>Accountability</li>
                  <li>Ingenuity</li>
                  <li>Respect</li>
                  <li>Value creation</li>
                </ul>
                <h4>We Serv. You</h4>
                <p className="tagline">
                  We take the hard work out of vetting tradespeople. We select
                  the best, most qualified and with the best reviews and
                  experience. We also compare those service prices and we offer
                  you a selection from the most expensive to the most
                  inexpensive. So when your lights go out, or your hot water
                  cylinder explodes, just tap on our app and your problem will
                  be solved before you even have to worry about it. We&apos;ll
                  get you the quotes and you&apos;ll do the choosing.
                </p>
                <p>
                  We take the hassle out lifes unexpected maintenance problems
                  We are here to ensure all your service needs and requirements
                  are met in an easy and efficient manner.
                </p>
                <p>
                  Our aim is to make your life easier by finding the service
                  providers for you. Our service providers are trained and
                  certified in all aspects of Health and Safety procedures
                  including Workplace Hygiene, HACCP Hazard Analysis and
                  Critical Control Point, GMP, Good Manufacturing Practices.
                </p>
                <p>
                  Additionally, our service providers are highly trained in
                  Hazard Management, Confined Space, Safe Working at Heights,
                  Safe Chemical Handling plus many more.
                </p>
                <p>
                  The Company&apos;s Health and Safety Policy and Environmental
                  Policies are comprehensive. Serv. prides itself on offering a
                  full range of services to our clients, together with the
                  expertise to ensure they get the results they require.
                </p>
              </div>
            </div>
            <div className="col p-3">
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
              <blockquote className="blockquote mt-3">
                <p className="mb-3">
                  This is going to change the way services are offered around
                  the world.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in the service industry
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
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
