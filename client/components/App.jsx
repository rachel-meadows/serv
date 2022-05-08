import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import Registration from './Registration'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import HowItWorks from './home/HowItWorks'
import Services from './home/Services'
import Home from './home/Home'
import JobsList from './customer/CustomerJobsList'
import QuotesList from './customer/CustomerQuotesList'
import CustomerJobAdd from './customer/CustomerJobAdd'
import SubmittedMessage from './customer/SubmittedMessage'
import BusinessInfo from './business/BusinessInfo'
import BusinessJobsList from './business/BusinessJobsList'
import CustomerJobCompleted from './customer/CustomerJobCompleted'
import BusinessJobToQuote from './business/BusinessJobToQuote'
import BusinessActiveJob from './business/BusinessActiveJob'
import WaitIndicator from './WaitIndicator'


function App() {
  cacheUser(useAuth0)
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/customer/add" element={<CustomerJobAdd />} />
<<<<<<< HEAD
        <Route path="/customer/completed/:jobsId" element={<CustomerJobCompleted />} />
        <Route path="/customer" element={<JobsList><WaitIndicator /></JobsList>}>
          <Route path="message" element={<SubmittedMessage />} />
        </Route>
        <Route path="/customer/quote/:jobsId" element={<QuotesList><WaitIndicator /></QuotesList>} />

        <Route path="/business/open/:jobId" element={<BusinessJobToQuote><WaitIndicator /></BusinessJobToQuote>} />
        <Route path="/business/active/:jobId" element={<BusinessActiveJob><WaitIndicator /></BusinessActiveJob>} />
||||||| 05cbec3
        <Route path="/customer/completed/:jobsId" element={<CustomerJobCompleted />} />
        <Route path="/customer" element={ <JobsList><WaitIndicator /></JobsList>}>
          <Route path="message" element={<SubmittedMessage />} />
        </Route>
        <Route path="/customer/quote/:jobsId" element={ <QuotesList><WaitIndicator /></QuotesList> }/>
        
        {/* <Route path="/business/:jobId" element={} /> */}
=======
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
          path="/customer/quote/:jobsId"
          element={
            <QuotesList>
              <WaitIndicator />
            </QuotesList>
          }
        />

        {/* <Route path="/business/:jobId" element={} /> */}
>>>>>>> 28948660d3de110f576418df8eefad7285052596
        {/* <Route path="/business/jobs" element={} /> */}
        {/* <Route path="/business/jobs/:jobId" element={} />  */}

        <Route path="/business" element={<BusinessJobsList><WaitIndicator /></BusinessJobsList>} />
        <Route path="/business/:businessId" element={<BusinessInfo><WaitIndicator /></BusinessInfo>} />
        {/* <Route path="/business/:jobId" element={} />
        <Route path="/business/jobs" element={} />
        <Route path="/business/jobs/:jobId" element={} /> */}
      </Routes>
    </Layout>
  )
}

export default App
