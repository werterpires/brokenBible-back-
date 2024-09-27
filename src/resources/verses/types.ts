import { Chapter } from '../chapters/types'
import { VerseOnVersion } from '../verses-on-versions/types'

export interface Verse {
  verseId: number
  chapterId: number
  verseNumber: number
  verseTranslation: string
  chapter?: Chapter
  verseOnVersions?: VerseOnVersion[]
}
