import { Verse } from '../verses/types'
import { Version } from '../versions/types'

export interface VerseOnVersion {
  verseOnVersionId: number
  verseId: number
  versionId: number
  verseText: string
  version?: Version
  verse?: Verse
}
