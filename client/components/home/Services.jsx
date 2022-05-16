import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

import { getRegisterFn } from '../../auth0-utils'

function Services() {
  const register = getRegisterFn(useAuth0)
  function handleRegister(event) {
    event.preventDefault()
    register()
  }
  return (
    <div className="services">
      <div className="panels">
        <div className="services-panel">
          <h2>Services We Offer</h2>
          <p>
            We offer a range of services to cater your needs. We are always
            looking to expand so get in touch if you would to be a part of Serv.
          </p>
          <ul>
            <li>Plumbing Services</li>
            <li>Electrical Services</li>
            <li>Gardening Services</li>
            <li>Carpentry Services</li>
            <li>Cleaning Services</li>
            <li>..and more</li>
          </ul>
          <button className="sign-up-btn" onClick={handleRegister}>
            Sign Up!
          </button>
        </div>
        <div className="businesses-panel">
          <h2>Businesses we work with</h2>
          <div className="services-box">
            <div className="service">
              <img src="/images/services/plumber.jpg" alt="plumber" />
              <h4 className="service-title">Plumbers</h4>
            </div>
            <div className="service">
              <img src="/images/services/electrician.jpg" alt="plumber" />
              <h4 className="service-title">Electricians</h4>
            </div>
            <div className="service">
              <img src="/images/services/gardener.jpg" alt="plumber" />
              <h4 className="service-title">Gardeners</h4>
            </div>
            <div className="service">
              <img src="/images/services/carpenter.jpg" alt="plumber" />
              <h4 className="service-title">Carpenters</h4>
            </div>
            <div className="service">
              <img src="/images/services/cleaner.jpg" alt="plumber" />
              <h4 className="service-title">Cleaners</h4>
            </div>
            <div className="service">
              <img src="/images/services/more.jpg" alt="plumber" />
              <h4 className="service-title">and more..</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
