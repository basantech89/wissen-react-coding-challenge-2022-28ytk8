import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { getItem } from '../../utils';

import './styles';

const ProtectedLayout = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = getItem('token');
    if (!token) {
      navigate('/');
    }
  }, []);

  return (
    <div className="protected-layout">
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
