import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import ProtectedLayout from '../../layouts/ProtectedLayout';
import Login from '../Login';
import Users from '../Users';

declare interface RouteProps {
  children: React.ReactElement;
}

const Error = () => <div>404 Forbidden</div>;
const Nomatch = () => <div>Not Found</div>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" exact element={<Login />} />
      </Route>
      <Route element={<ProtectedLayout />}>
        <Route path="/users" exact element={<Users />} />
        <Route path="/error" exact element={<Error />} />
        <Route path="*" element={<Nomatch />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
