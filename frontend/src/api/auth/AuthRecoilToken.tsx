import { SetterOrUpdater, useRecoilState, useRecoilValue } from "recoil";
import { tokenState } from "../../states/TokenState";
import axios from "axios";
import { InitialStateTypes } from "../../states/types/AuthTypes";
import { UserInput } from "../../pages/login/Login";

const url = "http://localhost:10082/api/loginToken";

const loginUrl = "http://localhost:10082/api/login";

export const authRecoilTokenCall = async (tokenRecoil: InitialStateTypes, setTokenRecoil: SetterOrUpdater<InitialStateTypes>) => {
  try {
    const response = await axios.get(url, {
      params: {
        token: tokenRecoil.token
      }
    });
    console.log(response);
    if (response.data.status >= 400 || !response.data.isToken) {
      localStorage.removeItem("token");
      setTokenRecoil({
        token: null,
        error: true
      });
    } else {
      localStorage.setItem("token", response.data.token);
      setTokenRecoil({
        token: response.data.token,
        error: false
      });
    }
  } catch (e) {
    localStorage.removeItem("token");
    setTokenRecoil({
      token: null,
      error: true
    });
  }
};

export const authrecoilLoginCall = async (inpuValue: UserInput, setTokenRecoil: SetterOrUpdater<InitialStateTypes>) => {
  try {
    const response = await axios.post(loginUrl, inpuValue);
    console.log(response);
    if (response.data.status < 400) {
      localStorage.setItem("token", response.data.token);
      setTokenRecoil({
        token: response.data.token,
        error: false
      });
    } else {
      throw new Error();
    }
  } catch (e) {
    setTokenRecoil({
      token: null,
      error: true
    });
  }
};