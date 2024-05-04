import React, { useCallback, useContext } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { inputTitleState } from '../states/InputTitleState'
import { addTitleState } from '../states/AddTitleState';

const getKey = () => {
  return Math.random().toString(32).substring(2);
}

export const InputTask = () => {
  // const inputTitle = useRecoilValue(inputTitleState)
  // const setInputTitle = useSetRecoilState(inputTitleState)
  const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);
  const [addTitle, setAddTitle] = useRecoilState(addTitleState)

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
    console.log(inputTitle);
  }, [inputTitle])


  const handleClick = () => {
    setAddTitle(() => [...addTitle, { id: getKey(), title: inputTitle }]);
    setInputTitle('');
    console.log(addTitle)
  }
  return (
    <>
      <div>
        <input type="text" onChange={onChange} value={inputTitle} />
        <button onClick={handleClick}>追加</button>
      </div>
    </>
  )
}
