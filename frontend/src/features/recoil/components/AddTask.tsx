import React from 'react';
import { useRecoilValue } from 'recoil';
import { AddTitleStateLength, addTitleState, inputTitleStateLength } from '../states/AddTitleState';

export const AddTask = () => {
  const addTitle = useRecoilValue(addTitleState);
  const addTitleLength = useRecoilValue(AddTitleStateLength);
  const inputTitleLength = useRecoilValue(inputTitleStateLength);
  return (
    <div>
      <div>文字数：{inputTitleLength}目</div>
      <div>{addTitleLength}個タスクがあります</div>
      <ul>
        {
          addTitle.map((task) =>
            <li key={task.id}>
              {task.title}
            </li>
          )
        }
      </ul>
    </div>
  );
};
