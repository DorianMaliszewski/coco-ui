import { ListColumn, ListVariant } from './types'
import React from 'react'

export type ListContextType = {
  variant?: ListVariant
  columns?: ListColumn[]
}

export const ListContext = React.createContext<ListContextType>(
  {} as ListContextType
)

export const useListContext = (): ListContextType =>
  React.useContext(ListContext)
