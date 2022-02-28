import { createContext, ReactNode } from 'react'
import { RootStore, rootStore } from '../RootStore'

export const RootContext = createContext({} as RootStore)

const RootContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <RootContext.Provider value={rootStore}>{children}</RootContext.Provider>
  )
}

export default RootContextProvider
