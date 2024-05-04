import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Login } from '../pages/login/Login';
import { useAuthContext } from '../contexts/auth/AuthProvider';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RecoilHome } from '../features/recoil/pages/RecoilHome';
import { PrivateRoute } from './PrivateRoute';
import { usePermissions } from './hooks/usePermissions';
import { authState } from '../states/AuthState';
import { isLoignFlag, tokenState } from '../states/TokenState';
import { authRecoilTokenCall } from '../api/auth/AuthRecoilToken';

export const HomeRoute = () => {
  // const { state } = useAuthContext();
  // const { token } = state;
  const [tokenRecoil, setTokenRecoil] = useRecoilState(tokenState);
  const isLoign = useRecoilValue(isLoignFlag);
  const { permission } = usePermissions();

  useEffect(() => {
    authRecoilTokenCall(tokenRecoil, setTokenRecoil);
    console.log(tokenRecoil);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={isLoign ? <Home /> : <Login />} />
        {permission && <Route path="/recoil" element={<RecoilHome />} />}
      </Routes>
    </>
  );
};
