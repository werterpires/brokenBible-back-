import { Injectable } from '@nestjs/common'
import { VersesRepo } from './verses.repo'
import { Verse } from './types'

@Injectable()
export class VersesService {
  constructor(private readonly versesRepo: VersesRepo) {}

  async findAllVersesByChapterId(
    chapterId: number,
    orderBy: string
  ): Promise<Verse[]> {
    const verses = await this.versesRepo.findAllVersesByChapterId(
      chapterId,
      orderBy
    )
    return verses
  }
}
