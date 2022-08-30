import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { getItem } from '../../utils';
import './styles';

const AuthLayout = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = getItem('token');
    if (!!token) {
      navigate('/users');
    }
  }, []);

  return (
    <div className="auth-layout">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
