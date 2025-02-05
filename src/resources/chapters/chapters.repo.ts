import { Injectable } from '@nestjs/common'
import { InjectConnection } from 'nest-knexjs'
import { Chapter, createChapter } from './types'

@Injectable()
export class ChaptersRepo {
  constructor(@InjectConnection() private readonly knex) {}

  async createChapter(chapterData: createChapter): Promise<number> {
    const { chapterNumber, chapterSummary, bookId } = chapterData

    const [chapterId] = await this.knex('chapters').insert({
      chapter_number: chapterNumber,
      chapter_summary: chapterSummary,
      book_id: bookId
    })

    return chapterId
  }

  async findAllChaptersByBookId(
    bookId: number,
    orderBy: string
  ): Promise<Chapter[]> {
    const chaptersConsult = await this.knex('chapters')
      .where('book_id', bookId)
      .orderBy(orderBy)

    const chapters: Chapter[] = chaptersConsult.map((chapter) => {
      return {
        chapterId: chapter.chapter_id,
        chapterNumber: chapter.chapter_number,
        chapterSummary: chapter.chapter_summary,
        bookId: chapter.book_id
      }
    })

    return chapters
  }

  async findChapterById(chapterId: number): Promise<Chapter> {
    const chapterConsult = await this.knex('chapters')
      .first('*')
      .where('chapter_id', chapterId)

    const chapter: Chapter = {
      chapterId: chapterConsult.chapter_id,
      chapterNumber: chapterConsult.chapter_number,
      chapterSummary: chapterConsult.chapter_summary,
      bookId: chapterConsult.book_id
    }
    return chapter
  }
}
