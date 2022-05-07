import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import Registration from './Registration'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import HowItWorks from './home/HowItWorks'
import Services from './home/Services'
import Home from './home/Home'
import AddJob from './customer/CustomerJobAdd'
import JobsList from './customer/CustomerJobsList'
import QuotesList from './customer/CustomerQuotesList'
import CustomerJobCompleted from './customer/CustomerJobCompleted'
import BusinessInfo from './business/BusinessInfo'
import BusinessJobsList from './business/BusinessJobsList'

import BusinessJobItem from './business/BusinessJobItem'

import WaitIndicator from './WaitIndicator'
import { useSelector } from 'react-redux'


function App() {
  cacheUser(useAuth0)

  //Check if user is logged in, if logged in, update currentCustomer state variable 
  // const user = useSelector((state) => state.user)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/customer/add" element={<AddJob />} />
        <Route path="/customer/completed/:jobsId" element={<CustomerJobCompleted />} />
        <Route
          path="/customer"
          element={
            <JobsList>
              <WaitIndicator />
            </JobsList>
          }
        />
        <Route
          path="/customer/quote/:jobsId"
          element={
            <QuotesList>
              <WaitIndicator />
            </QuotesList>
          }
        />
        {/* <Route path="/customer/active" element={} /> */}
        {/* <Route path="/customer/complete" element={} /> */}
        {/* <Route path="/business/:jobId" element={} /> */}
        {/* <Route path="/business/jobs" element={} /> */}
        {/* <Route path="/business/jobs/:jobId" element={} />  */}

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
