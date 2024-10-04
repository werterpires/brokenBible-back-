import { Proposition } from '../propositions/types'
import { Verse } from '../verses/types'

export interface PropositionOnVerse {
  propositionId: number
  verseId: number

  proposition?: Proposition
  verse?: Verse
}
