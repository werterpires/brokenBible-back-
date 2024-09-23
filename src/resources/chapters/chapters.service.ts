import { Injectable } from '@nestjs/common'

import { ChaptersRepo } from './chapters.repo'
import { Chapter } from './types'

@Injectable()
export class ChaptersService {
  constructor(private readonly chaptersRepo: ChaptersRepo) {}

  async findAllChaptersByBookId(
    bookId: number,
    orderBy: string
  ): Promise<Chapter[]> {
    const chapters = this.chaptersRepo.findAllChaptersByBookId(bookId, orderBy)

    return chapters
  }
}
