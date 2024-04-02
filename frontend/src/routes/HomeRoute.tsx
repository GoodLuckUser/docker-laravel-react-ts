import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/home/Home'
import { Login } from '../pages/login/Login'
import { useAuthContext } from '../contexts/auth/AuthProvider'
import { useRecoilValue } from 'recoil'
import { AuthState } from '../states/AuthState'

export const HomeRoute = () => {
  const { state } = useAuthContext();
  const { token } = state;
  // const token = useRecoilValue(AuthState);
  console.log(token);
  return (
    <>
      <Routes>
        <Route path="/" element={token ? <Home /> : <Login />} />
      </Routes>
    </>
  )
}
