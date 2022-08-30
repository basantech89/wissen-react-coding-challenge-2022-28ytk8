import React from 'react';
import { Outlet } from 'react-router-dom';

import './styles';

const ErrorLayout = () => {
  return (
    <div className="error-layout">
      <Outlet />
    </div>
  );
};

export default ErrorLayout;
