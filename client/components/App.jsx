import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Routes, Route } from 'react-router-dom'

import BusinessActiveJob from './business/BusinessActiveJob'
import BusinessCompletedJob from './business/BusinessCompletedJob'
import BusinessInfo from './business/BusinessInfo'
import BusinessJobsList from './business/BusinessJobsList'
import BusinessJobToQuote from './business/BusinessJobToQuote'
import BusinessQuotedJob from './business/BusinessQuotedJob'
import { cacheUser } from '../auth0-utils'
import CheckoutCancel from './customer/StripeCheckout/CheckoutCancel'
import CustomerJobCompleted from './customer/CustomerJobCompleted'
import CheckoutSuccess from './customer/StripeCheckout/CheckoutSuccess'
import CustomerJobAdd from './customer/CustomerJobAdd'
import Home from './home/Home'
import JobsList from './customer/CustomerJobsList'
import Layout from './Layout/Layout'
import QuotesList from './customer/CustomerQuotesList'
import Registration from './Registration'
import Services from './home/Services'
import SubmittedMessage from './customer/SubmittedMessage'
import WaitIndicator from './WaitIndicator'
import WelcomeToServ from './home/WelcomeToServ'

function App() {
  cacheUser(useAuth0)
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<WelcomeToServ />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/customer/add" element={<CustomerJobAdd />} />
        <Route path="/customer/checkout/cancel" element={<CheckoutCancel />} />
        <Route
          path="/customer/checkout/success"
          element={<CheckoutSuccess />}
        />

        <Route
          path="/customer/completed/:jobsId"
          element={<CustomerJobCompleted />}
        />
        <Route
          path="/customer"
          element={
            <JobsList>
              <WaitIndicator />
            </JobsList>
          }
        />
        <Route
          path="/customer/quote/:jobId"
          element={
            <QuotesList>
              <WaitIndicator />
            </QuotesList>
          }
        />
        <Route
          path="/business/open/:jobId"
          element={
            <BusinessJobToQuote>
              <WaitIndicator />
            </BusinessJobToQuote>
          }
        />
        <Route
          path="/business/active/:jobId"
          element={
            <BusinessActiveJob>
              <WaitIndicator />
            </BusinessActiveJob>
          }
        />
        <Route
          path="/business/quoted/:jobId"
          element={
            <BusinessQuotedJob>
              <WaitIndicator />
            </BusinessQuotedJob>
          }
        />
        <Route
          path="/business/completed/:jobId"
          element={
            <BusinessCompletedJob>
              <WaitIndicator />
            </BusinessCompletedJob>
          }
        />
        <Route
          path="/business"
          element={
            <BusinessJobsList>
              <WaitIndicator />
            </BusinessJobsList>
          }
        />
        <Route
          path="/business/:businessId"
          element={
            <BusinessInfo>
              <WaitIndicator />
            </BusinessInfo>
          }
        />
        {/* <Route path="/business/:jobId" element={} />
        <Route path="/business/jobs" element={} />
        <Route path="/business/jobs/:jobId" element={} /> */}
      </Routes>
    </Layout>
  )
}

export default App
