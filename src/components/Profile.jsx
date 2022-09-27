import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
export const Profile = () => {
  if (!window.localStorage.getItem('token')) {
    return <Navigate to="/" />;
  }
  return <h1>Это сайт авторизации Усмана</h1>;
};
