import React from 'react'
import { useCountContext } from '../contexts/CountProvider'

export const ContextCount = () => {
  const { conterOne } = useCountContext()
  return (
    <div>useCountContext:{conterOne}</div>
  )
}
