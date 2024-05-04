import { useCount } from '../hooks/useCount'

export const Count = () => {
  const { counter } = useCount()
  return (
    <div>{counter}</div>
  )
}
