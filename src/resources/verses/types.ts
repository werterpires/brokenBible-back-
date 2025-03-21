import { Chapter } from '../chapters/types'
import { VerseOnVersion } from '../verses-on-versions/types'

export interface CreateVerse {
  chapterId: number
  verseNumber: number
  verseTranslation: string
}

export interface Verse extends CreateVerse {
  verseId: number
  chapter?: Chapter
  verseOnVersions?: VerseOnVersion[]
}
