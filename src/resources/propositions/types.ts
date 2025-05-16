import { Verse } from '../verses/types'

export interface CreateProposition {
  versesId: number[]
  propositionText: string
}

export interface Proposition extends CreateProposition {
  propositionId: number
  verses?: Verse[]
}
