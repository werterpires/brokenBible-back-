import { Injectable } from '@nestjs/common'
import { InjectConnection } from 'nest-knexjs'
import { CreateVerse, Verse } from './types'

@Injectable()
export class VersesRepo {
  constructor(@InjectConnection() private readonly knex) {}

  async createVerse(verseData: CreateVerse) {
    const { chapterId, verseNumber, verseTranslation } = verseData

    const [verseId] = await this.knex('verses').insert({
      chapter_id: chapterId,
      verse_number: verseNumber,
      verse_translation: verseTranslation
    })

    return verseId
  }

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
        verseNumber: verse.verse_number,
        verseTranslation: verse.verse_translation
      }
    })

    return verses
  }

  async findVerseById(verseId: number): Promise<Verse> {
    const versesConsult = await this.knex('verses')
      .first('*')
      .where('verse_id', verseId)

    const verse: Verse = {
      verseId: versesConsult.verse_id,
      chapterId: versesConsult.chapter_id,
      verseNumber: versesConsult.verse_number,
      verseTranslation: versesConsult.verse_translation
    }

    return verse
  }
}
