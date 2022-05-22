import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
// eslint-disable-next-line import/no-unresolved
import { Auth0Provider } from '@auth0/auth0-react'
import store from './store'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Auth0Provider
      domain={process.env.DOMAIN}
      clientId={process.env.CLIENT_ID}
      redirectUri={window.location.origin}
      audience={process.env.AUDIENCE}
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
