import React from 'react'
import { Link } from 'react-router-dom'

function HowItWorks() {
  return (
    <div className="how-it-works-page">
      <h2>Welcome to Serv.</h2>

      <div className="hero">
        <h3>Our Vision</h3>
        <p>
          <q>
            To lead the way in bringing services effortlessly to your front door
            at the click of a button
          </q>
        </p>
        <h3>Our Mission</h3>
        <p>
          <q>
            Our mission is to provide effortless service at the click of a
            button, so you can have all of your maintenance issues fixed with
            ease by skilled professionals.
          </q>
        </p>
        <h3>Our Values</h3>
        <ul>
          <li>Trust</li>
          <li>Accountability</li>
          <li>Ingenuity</li>
          <li>Respect</li>
          <li>Value creation</li>
        </ul>
        <h3>We Serv. You</h3>
        <p className="tagline">
          We take the hard work out of vetting tradespeople. We select the best,
          most qualified and with the best reviews and experience. We also
          compare those service prices and we offer you a selection from the
          most expensive to the most inexpensive. So when your lights go out, or
          your hot water cylinder explodes, just tap on our app and your problem
          will be solved before you even have to worry about it. We&apos;ll get
          you the quotes and you&apos;ll do the choosing.
        </p>
        <p>
          We take the hassle out lifes unexpected maintenance problems We are
          here to ensure all your service needs and requirements are met in an
          easy and efficient manner.
        </p>
        <p>
          Our aim is to make your life easier by finding the service providers
          for you. Our service providers are trained and certified in all
          aspects of Health and Safety procedures including Workplace Hygiene,
          HACCP Hazard Analysis and Critical Control Point, GMP, Good
          Manufacturing Practices.
        </p>
        <p>
          Additionally, our service providers are highly trained in Hazard
          Management, Confined Space, Safe Working at Heights, Safe Chemical
          Handling plus many more.
        </p>
        <p>
          The Company&apos;s Health and Safety Policy and Environmental Policies
          are comprehensive. Serv. prides itself on offering a full range of
          services to our clients, together with the expertise to ensure they
          get the results they require.
        </p>

        <h4>The team at Serv.</h4>
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
    </div>
  )
}

export default HowItWorks
