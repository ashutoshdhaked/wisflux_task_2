import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const token = localStorage.getItem('token');
  console.log("token " + token); 
  let  isAuthenticated  =  false;
  if(token){
    isAuthenticated  =  true;
  }
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;