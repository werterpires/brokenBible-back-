import { Injectable } from '@nestjs/common'
import { InjectConnection } from 'nest-knexjs'
import { OriginalOnVerse } from './types'
import { Original } from '../originals/types'
import { Root } from '../roots/types'

@Injectable()
export class OriginalsOnVersesRepo {
  constructor(@InjectConnection() private readonly knex) {}

  async findAllOriginalsOnVerseByVerseId(
    verseId: number,
    orderBy: string
  ): Promise<OriginalOnVerse[]> {
    const originalsOnVerseConsult = await this.knex('originals_on_verses')
      .leftJoin(
        'originals',
        'originals_on_verses.original_id',
        'originals.original_id'
      )
      .leftJoin('roots', 'originals.root_id', 'roots.root_id')
      .where('verse_id', verseId)
      .orderBy(orderBy)

    const originalsOnVerse: OriginalOnVerse[] = originalsOnVerseConsult.map(
      (propositionOnVerse) => {
        const root: Root = {
          rootId: propositionOnVerse.root_id,
          rootWord: propositionOnVerse.root_word,
          rootMeaning: propositionOnVerse.root_meaning
        }
        const original: Original = {
          originalId: propositionOnVerse.original_id,
          originalName: propositionOnVerse.original_name,
          originalMeaning: propositionOnVerse.original_meaning,
          rootId: propositionOnVerse.root_id,
          root
        }
        return <OriginalOnVerse>{
          verseId: propositionOnVerse.verse_id,
          originalId: propositionOnVerse.original_id,
          wordPosition: propositionOnVerse.word_position,
          apparatus: propositionOnVerse.apparatus,
          original
        }
      }
    )

    return originalsOnVerse
  }
}
