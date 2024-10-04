import { Verse } from '../verses/types'

export interface Proposition {
  PropositionId: number
  verseId: number
  propositionText: string
  verse?: Verse
}
