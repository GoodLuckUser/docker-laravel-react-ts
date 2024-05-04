import { atom, selector } from "recoil";
import { Task } from "../types/Task";
import { inputTitleState } from "./InputTitleState";

export const addTitleState = atom<Array<Task>>({
  key: "addTitleState",
  default: [],
});

export const AddTitleStateLength = selector<number>({
  key: 'addTitleStateLength',
  get: ({ get }) => {
    const addTitleNumber: Array<Task> = get(addTitleState);
    return addTitleNumber?.length || 0;
  },
});

export const inputTitleStateLength = selector<number>({
  key: 'inputTitleStateLength',
  get: ({ get }) => {
    const inputTitleNumber: string = get(inputTitleState);
    return inputTitleNumber?.length || 0;
  }
});