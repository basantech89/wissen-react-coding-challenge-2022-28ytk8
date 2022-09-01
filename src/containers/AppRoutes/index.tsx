import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AuthLayout from '../../layouts/AuthLayout'
import ErrorLayout from '../../layouts/ErrorLayout'
import ProtectedLayout from '../../layouts/ProtectedLayout'
import Login from '../Login'
import Users from '../Users'

const Error = () => (
  <div className="error-container">
    <div className="err-common-img error-img" />
    <div className="error-msg">You don't have access to this page.</div>
  </div>
)

const Nomatch = () => (
  <div className="error-container">
    <div className="err-common-img no-match-img" />
    <div className="error-msg">Page Not Found.</div>
  </div>
)

const AppRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route element={<ErrorLayout />}>
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Nomatch />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default AppRoutes
