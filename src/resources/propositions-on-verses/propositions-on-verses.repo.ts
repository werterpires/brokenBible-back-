import { Injectable } from '@nestjs/common'
import { InjectConnection } from 'nest-knexjs'
import { PropositionOnVerse } from './types'
import { Proposition } from '../propositions/types'

@Injectable()
export class PropositionsOnVersesRepo {
  constructor(@InjectConnection() private readonly knex) {}

  async findAllPropositionsOnVerseByVerseId(
    verseId: number,
    orderBy: string
  ): Promise<PropositionOnVerse[]> {
    const propositionsOnVerseConsult = await this.knex('propositions_on_verses')
      .leftJoin(
        'propositions',
        'propositions_on_verses.proposition_id',
        'propositions.proposition_id'
      )
      .where('verse_id', verseId)
      .orderBy(orderBy)

    const propositionsOnVerse: PropositionOnVerse[] =
      propositionsOnVerseConsult.map((propositionOnVerse) => {
        const proposition: Proposition = {
          propositionText: propositionOnVerse.proposition_text,
          PropositionId: propositionOnVerse.proposition_id,
          verseId: propositionOnVerse.verse_id
        }
        return <PropositionOnVerse>{
          verseId: propositionOnVerse.verse_id,
          propositionId: propositionOnVerse.proposition_id,
          proposition
        }
      })

    return propositionsOnVerse
  }
}
