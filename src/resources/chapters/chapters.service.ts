import { Injectable } from '@nestjs/common'

import { ChaptersRepo } from './chapters.repo'
import { Chapter } from './types'
import { CreateChapterDto } from './dto/create-chapter.dto'

@Injectable()
export class ChaptersService {
  constructor(private readonly chaptersRepo: ChaptersRepo) {}

  async createChapter(chapterData: CreateChapterDto): Promise<Chapter> {
    const chapterId = await this.chaptersRepo.createChapter(chapterData)

    const chapter = await this.chaptersRepo.findChapterById(chapterId)

    return chapter
  }

  async findAllChaptersByBookId(
    bookId: number,
    orderBy: string
  ): Promise<Chapter[]> {
    const chapters = this.chaptersRepo.findAllChaptersByBookId(bookId, orderBy)

    return chapters
  }
}
