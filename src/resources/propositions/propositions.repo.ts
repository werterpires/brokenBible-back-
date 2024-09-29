import { Injectable } from '@nestjs/common'
import { InjectConnection } from 'nest-knexjs'
import { Proposition } from './types'

@Injectable()
export class PropositionsRepo {
  constructor(@InjectConnection() private readonly knex) {}

  async findAllPropositionsByVerseId(
    verseId: number,
    orderBy: string
  ): Promise<Proposition[]> {
    const propositionsConsult = await this.knex('propositions')
      .where('verse_id', verseId)
      .orderBy(orderBy)

    const propositions: Proposition[] = propositionsConsult.map(
      (proposition) => {
        return <Proposition>{
          PropositionId: proposition.proposition_id,
          verseId: proposition.verse_id,
          proposition: proposition.proposition
        }
      }
    )

    return propositions
  }
}
