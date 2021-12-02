export type ListColumn<T = unknown> = {
  name: string
  className?: string
  sort?: (itemA: T, itemB: T) => number
}

export type SortOrder = 'asc' | 'desc'
export type ListSort = { index?: number; order: SortOrder }

export type ListVariant = 'card'
