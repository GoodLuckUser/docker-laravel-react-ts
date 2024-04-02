import axios from "axios";
import { Dispatch } from "react";
import { ActionTypes } from "../../contexts/auth/AuthProvider";

const url = "http://localhost:10082/api/loginToken";

// もっといい書き方がありそう
export const TokenCall = async <T extends string | null,>(body: T, dispatch: Dispatch<ActionTypes>) => {
  dispatch({ type: 'LOGIN_START', token: body });
  try {
    const response = await axios.get(url, {
      params: {
        token: body
      }
    })
    if (response.data.status >= 400 || !response.data.isToken) {
      localStorage.removeItem("token");
      dispatch({ type: "LOGOUT", token: null })
    } else {
      localStorage.setItem("token", response.data.token);
      dispatch({ type: "LOGIN_SUCCESS", token: response.data.token })
    }
  } catch (e) {
    localStorage.removeItem("token");
    dispatch({ type: "LOGIN_ERROR", token: null })
  }
}