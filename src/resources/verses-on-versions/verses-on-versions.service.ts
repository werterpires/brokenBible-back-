import { Injectable } from '@nestjs/common'
import { VersesOnVersionsRepo } from './verses-on-versions.repo'
import { VerseOnVersion } from './types'

@Injectable()
export class VersesOnVersionsService {
  constructor(private readonly versesOnVersionsRepo: VersesOnVersionsRepo) {}

  async findAllVersesOnVersionsByVerseId(
    verseId: number,
    orderBy: string
  ): Promise<VerseOnVersion[]> {
    return this.versesOnVersionsRepo.findAllVersesOnVersionsByVerseId(
      verseId,
      orderBy
    )
  }
}
