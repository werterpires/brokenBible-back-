import { Verse } from '../verses/types'
import { Version } from '../versions/types'

export interface CreateVersesOnVersion {
  verseId: number
  versionId: number
  verseText: string
}

export interface VerseOnVersion extends CreateVersesOnVersion {
  verseOnVersionId: number
  version?: Version
  verse?: Verse
}
