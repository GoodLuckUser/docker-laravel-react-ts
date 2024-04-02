import axios from "axios";
import { Dispatch } from "react";
import { ActionTypes } from "../../contexts/auth/AuthProvider";

const url = "http://localhost:10082/api/login";

// 無名関数のジェネリクス(引数型定義)は「,」が必要らしい
export const LoginCall = async <T,>(body: T, dispatch: Dispatch<ActionTypes>) => {
  dispatch({ type: 'LOGIN_START', token: null });
  try {
    const response = await axios.post(url, body)
    if (response.data.status < 400) {
      localStorage.setItem("token", response.data.token);
      dispatch({ type: "LOGIN_SUCCESS", token: response.data.token })
    } else {
      throw new Error();
    }
  } catch (e) {
    dispatch({ type: "LOGIN_ERROR", token: null })
  }
}