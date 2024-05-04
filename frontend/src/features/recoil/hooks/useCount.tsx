import React, { useState } from 'react'

export const useCount = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    { counter, setCounter }
  )
}
