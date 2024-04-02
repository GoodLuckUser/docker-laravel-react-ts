import React from 'react'
import { atom } from 'recoil'

export const AuthState = atom({
  key: "AuthState",
  default: localStorage.getItem("token") || null
})
