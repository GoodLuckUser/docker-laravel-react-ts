import React, { FC, ReactNode, createContext, useContext, useReducer, useState, Dispatch, useEffect } from 'react'
import { Provider } from 'react-redux'
import { AuthReducer } from './AuthReducer';
import { TokenCall } from '../../middleware/login/TokenCall';
// import store from './AuthStore'

export type InitialStateTypes = {
  token: string | null,
  isFetching: boolean,
  error: boolean
}

const initialToken = localStorage.getItem("token");
const initialState: InitialStateTypes = {
  // localStorageは文字列に直す場合、nullも文字列になる
  token: initialToken ?? null,
  isFetching: false,
  error: false
}

type PropsTypes = {
  children: ReactNode
}

type ReducerContext = {
  state: InitialStateTypes;
  // dispatchの引数オブジェクトの型を、React.Dispatch<XXXXX> に定義する。
  dispatch: Dispatch<ActionTypes>;
};
export type ActionTypes = {
  type: 'LOGIN_START' | 'LOGIN_SUCCESS' | 'LOGOUT' | 'LOGIN_ERROR'
  token: string | null,
}

export const AuthContext = createContext<ReducerContext>({
  state: initialState,
  dispatch: () => null
});

export const AuthProvider: FC<PropsTypes> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const { token } = state;

  useEffect(() => {
    TokenCall<string | null>(token, dispatch)
  }, [])

  return (
    <>
      <AuthContext.Provider value={{
        state,
        dispatch
      }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export const useAuthContext = () => useContext(AuthContext);