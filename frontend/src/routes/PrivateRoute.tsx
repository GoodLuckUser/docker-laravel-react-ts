import React, { FC } from 'react'
import { useAuthContext } from '../contexts/auth/AuthProvider';
import { Navigate, Route } from 'react-router-dom';
import { PropsTypes } from './types/PorpsType';

export const PrivateRoute: FC<PropsTypes> = ({ path, children }) => {
  const { state } = useAuthContext();
  const { token } = state;

  return token ? <Route path={path} element={children} /> : <Navigate to="/" />;
}