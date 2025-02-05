import { Book } from '../books/types'
import { Verse } from '../verses/types'

export interface createChapter {
  chapterNumber: number
  chapterSummary: string
  bookId: number
}

export interface Chapter extends createChapter {
  chapterId: number
  book?: Book
  verses?: Verse[]
}
