import { FC, ReactNode, createContext, useContext, useState } from "react";

type PropsTypes = {
  children: ReactNode
}
export type GlobalContent = {
  conterOne: number
  setCoutnerOne: (c: number) => void
}

export const CountContext = createContext<GlobalContent>({
  conterOne: 0,
  setCoutnerOne: () => { }
});

export const CountProvider: FC<PropsTypes> = ({ children }) => {
  const [conterOne, setCoutnerOne] = useState<number>(0)

  return (
    <>
      <CountContext.Provider value={{
        conterOne,
        setCoutnerOne
      }}>
        {children}
      </CountContext.Provider>
    </>
  )
}

export const useCountContext = () => useContext(CountContext)