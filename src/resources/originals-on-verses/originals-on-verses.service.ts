import { Injectable } from '@nestjs/common'
import { OriginalsOnVersesRepo } from './originals-on-verses.repo'
import { OriginalOnVerse } from './types'

@Injectable()
export class OriginalsOnVersesService {
  constructor(private readonly originalsOnVersesRepo: OriginalsOnVersesRepo) {}

  async findAllOriginalsOnVerseByVerseId(
    verseId: number,
    orderBy: string
  ): Promise<OriginalOnVerse[]> {
    return this.originalsOnVersesRepo.findAllOriginalsOnVerseByVerseId(
      verseId,
      orderBy
    )
  }
}
