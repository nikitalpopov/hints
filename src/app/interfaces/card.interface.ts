import type { WordRow } from './word-row.interface'

export interface Card {
  id: number
  words: WordRow[]
}

export interface CardsData {
  cards: Card[]
}
