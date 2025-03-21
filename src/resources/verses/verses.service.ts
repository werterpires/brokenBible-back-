import { Injectable } from '@nestjs/common'
import { VersesRepo } from './verses.repo'
import { Verse } from './types'
import { CreateVerseDto } from './dto/create-verse.dto'

@Injectable()
export class VersesService {
  constructor(private readonly versesRepo: VersesRepo) {}

  async createVerse(verseDataDto: CreateVerseDto): Promise<Verse> {
    const verseId = await this.versesRepo.createVerse(verseDataDto)
    const verse = await this.versesRepo.findVerseById(verseId)
    return verse
  }

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
