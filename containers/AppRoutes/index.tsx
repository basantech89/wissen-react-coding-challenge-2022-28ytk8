import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AuthLayout from '../../layouts/AuthLayout';
import ErrorLayout from '../../layouts/ErrorLayout';
import ProtectedLayout from '../../layouts/ProtectedLayout';
import Login from '../Login';
import Users from '../Users';

import { Toast } from 'react-bootstrap';

import { useToasts } from '../../providers/ToastProvider';

declare interface RouteProps {
  children: React.ReactElement;
}

const Error = () => (
  <div className="error-container">
    <div className="err-common-img error-img" />
    <div className="error-msg">You don't have access to this page.</div>
  </div>
);

const Nomatch = () => (
  <div className="error-container">
    <div className="err-common-img no-match-img" />
    <div className="error-msg">Page Not Found.</div>
  </div>
);

const AppRoutes = () => {
  const { toast, showToast } = useToasts();
  console.log('ttttttt', toast, showToast);

  return (
    <React.Fragment>
      <Toast show={showToast} bg={toast?.bg}>
        <Toast.Body>{toast?.msg}</Toast.Body>
      </Toast>

      <Routes>
        <Route element={<ErrorLayout />}>
          <Route path="/error" exact element={<Error />} />
          <Route path="*" element={<Nomatch />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/" exact element={<Login />} />
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path="/users" exact element={<Users />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default AppRoutes;
