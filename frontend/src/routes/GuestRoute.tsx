import React, { FC } from 'react'
import { useAuthContext } from '../contexts/auth/AuthProvider';
import { Navigate, Route } from 'react-router-dom';
import { PropsTypes } from './types/PorpsType';

export const GuestRoute: FC<PropsTypes> = (props) => {
  const { state } = useAuthContext();
  const { token } = state;

  return token ? <Navigate to="/" /> : <Route {...props} />;
}
