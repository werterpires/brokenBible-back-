import { Chapter } from '../chapters/types'

export type Testamento = 'Angito' | 'Novo'

export interface CriarBook {
  bookAbbr: string
  bookCompleteName: string
  bookReducedName: string
  testament: Testamento
  bookPosition: number
}

export interface AtualizarBook extends CriarBook {
  bookId: number
}

export interface Book extends AtualizarBook {
  chapters?: Chapter[]
}
