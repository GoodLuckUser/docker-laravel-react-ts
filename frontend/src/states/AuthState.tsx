import { atom } from 'recoil';

export const authState = atom<string>({
  key: "authState",
  default: localStorage.getItem("token") || '',
});