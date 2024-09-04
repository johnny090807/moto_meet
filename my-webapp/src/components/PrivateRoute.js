import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const PrivateRoute = () => {
  const { currentUser } = getAuth();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;