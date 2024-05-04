import React from 'react'
import { useCount } from '../hooks/useCount'

export const BtnCounter = () => {
  const { counter, setCounter } = useCount()

  const clickCountPlus = () => {
    console.log(counter)
    setCounter((count) => count + 1)
    console.log(counter)
  }

  const clickCountMnis = () => {
    setCounter((count) => count - 1)
  }

  return (
    <>
      <button onClick={clickCountPlus}>+</button>
      <button onClick={clickCountMnis}>-</button>
    </>
  )
}
