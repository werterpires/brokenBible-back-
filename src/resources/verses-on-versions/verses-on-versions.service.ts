import { Injectable } from '@nestjs/common'
import { VersesOnVersionsRepo } from './verses-on-versions.repo'
import { VerseOnVersion } from './types'
import { CreateVersesOnVersionDto } from './dto/create-verses-on-version.dto'

@Injectable()
export class VersesOnVersionsService {
  constructor(private readonly versesOnVersionsRepo: VersesOnVersionsRepo) {}

  async findAllVersesOnVersionsByVerseId(
    verseId: number,
    orderBy: string
  ): Promise<VerseOnVersion[]> {
    return this.versesOnVersionsRepo.findAllVerseOnVersionsByVerseId(
      verseId,
      orderBy
    )
  }

  async createVerseOnVersion(
    verseOnVersionDto: CreateVersesOnVersionDto
  ): Promise<VerseOnVersion> {
    const verseOnVersionId =
      await this.versesOnVersionsRepo.createVerseOnVersion(verseOnVersionDto)
    const verseOnVersion =
      await this.versesOnVersionsRepo.findVerseOnVersionById(verseOnVersionId)
    return verseOnVersion
  }
}
