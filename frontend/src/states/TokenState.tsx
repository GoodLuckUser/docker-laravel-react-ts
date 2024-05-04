import { atom, selector } from 'recoil';
import { InitialStateTypes } from './types/AuthTypes';

export const tokenState = atom<InitialStateTypes>({
  key: "tokenState",
  default: {
    token: localStorage.getItem("token") || '',
    error: false
  }
});

export const isLoignFlag = selector<Boolean>({
  key: 'isLoignFlag',
  get: ({ get }) => {
    const { token } = get(tokenState);
    return token ? true : false;
  }
});