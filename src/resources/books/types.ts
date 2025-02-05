import { Chapter } from '../chapters/types'

export type Testamento = 'Antigo' | 'Novo'

export interface createBook {
  bookAbbr: string
  bookCompleteName: string
  bookReducedName: string
  testament: Testamento
  bookPosition: number
}

export interface AtualizarBook extends createBook {
  bookId: number
}

export interface Book extends AtualizarBook {
  chapters?: Chapter[]
}
