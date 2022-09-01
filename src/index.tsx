import React from 'react'
import './scss/styles.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Provider } from 'react-redux'

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './containers/AppRoutes'
import WissenToast from './components/WissenToast'

import store from './redux-store'

import { RecoilRoot } from 'recoil'
import {
  registerForUserActivityTracking,
  registerForUserInactivitySession,
} from './utils'

const container = document.getElementById('app')

const root = createRoot(container!) // createRoot(container!) if you use TypeScript

const App = () => {
  React.useEffect(() => {
    registerForUserInactivitySession()
    registerForUserActivityTracking()
  }, [])

  return (
    <React.StrictMode>
      <Provider store={store}>
        <RecoilRoot>
          <BrowserRouter>
            <AppRoutes />
            <WissenToast />
          </BrowserRouter>
        </RecoilRoot>
      </Provider>
    </React.StrictMode>
  )
}

root.render(<App />)
