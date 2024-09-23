import { Injectable } from '@nestjs/common'
import { InjectConnection } from 'nest-knexjs'
import { Chapter } from './types'

@Injectable()
export class ChaptersRepo {
  constructor(@InjectConnection() private readonly knex) {}

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
}
