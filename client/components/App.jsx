import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import PingRoutes from './PingRoutes'
import Registration from './Registration'
import Users from './Users'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'

function App() {
  cacheUser(useAuth0)

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/" element={<PingRoutes />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Layout>
  )
}

export default App
