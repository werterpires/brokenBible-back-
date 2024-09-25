import { Injectable } from '@nestjs/common'
import { InjectConnection } from 'nest-knexjs'
import { Verse } from './types'

@Injectable()
export class VersesRepo {
  constructor(@InjectConnection() private readonly knex) {}

  async findAllVersesByChapterId(
    verseId: number,
    orderBy: string
  ): Promise<Verse[]> {
    const versesConsult = await this.knex('verses')
      .where('chapter_id', verseId)
      .orderBy(orderBy)

    const verses: Verse[] = versesConsult.map((verse) => {
      return <Verse>{
        verseId: verse.verse_id,
        chapterId: verse.chapter_id,
        verseNumber: verse.verse_number
      }
    })

    return verses
  }
}
