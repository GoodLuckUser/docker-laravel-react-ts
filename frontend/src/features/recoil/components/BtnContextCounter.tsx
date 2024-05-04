import React from 'react'

import { useCount } from '../hooks/useCount'
import { useCountContext } from '../contexts/CountProvider'

export const BtnContextCounter = () => {
  const { conterOne, setCoutnerOne } = useCountContext()

  const clickCountPlus = () => {
    console.log(conterOne)
    setCoutnerOne(conterOne + 2)
    console.log(conterOne)
  }

  const clickCountMnis = () => {
    setCoutnerOne(conterOne - 2)
  }

  return (
    <>
      <button onClick={clickCountPlus}>+2</button>
      <button onClick={clickCountMnis}>-2</button>
    </>
  )
}
