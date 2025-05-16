import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectConnection } from 'nest-knexjs'
import { CreateProposition, Proposition } from './types'

@Injectable()
export class PropositionsRepo {
  constructor(@InjectConnection() private readonly knex) {}

  async createProposition(propositionData: CreateProposition): Promise<number> {
    const { propositionText, versesId: verseId } = propositionData

    const propositionId: number = await this.knex.transaction(async (trx) => {
      const [propositionIdConsult] = await trx('propositions').insert({
        proposition_text: propositionText
      })

      for (const id of verseId) {
        await trx('propositions_on_verses').insert({
          verse_id: id,
          proposition_id: propositionIdConsult
        })
      }

      return propositionIdConsult
    })

    return propositionId
  }

  async findPropositionById(propositionId: number) {
    const propositionConsult = await this.knex('propositions')
      .first('*')
      .where('proposition_id', propositionId)
    if (!propositionConsult) {
      throw new NotFoundException('#Proposition não encontrada')
    }

    const propositionsOnVersesconsult = await this.knex(
      'propositions_on_verses'
    )
      .select('verse_id')
      .where('proposition_id', propositionId)

    console.log('proposition buscada:', propositionConsult)

    const proposition: Proposition = {
      propositionId: propositionConsult.proposition_id,
      propositionText: propositionConsult.proposition_text,
      versesId: propositionsOnVersesconsult.map((consult) => {
        return consult.verse_id
      })
    }

    return proposition
  }
}
