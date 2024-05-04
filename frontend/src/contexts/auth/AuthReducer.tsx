import { ActionTypes, InitialStateTypes } from "./AuthProvider"


export const AuthReducer = (state: InitialStateTypes, action: ActionTypes) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        token: action.token,
        isFetching: false,
        error: false
      }
    case "LOGIN_SUCCESS":
      return {
        token: action.token,
        isFetching: true,
        error: false
      }
    case 'LOGOUT':
      return {
        token: null,
        isFetching: false,
        error: false
      }
    case "LOGIN_ERROR":
      return {
        token: null,
        isFetching: false,
        error: true
      }
    default:
      return {
        token: null,
        isFetching: false,
        error: true
      }
  }
}