import { Injectable } from '@nestjs/common'
import { Proposition } from './types'
import { PropositionsRepo } from './propositions.repo'

@Injectable()
export class PropositionsService {
  constructor(private readonly propositionsRepo: PropositionsRepo) {}

  async findAllPropositionsByVerseId(
    verseId: number,
    orderBy: string
  ): Promise<Proposition[]> {
    return await this.propositionsRepo.findAllPropositionsByVerseId(
      verseId,
      orderBy
    )
  }
}
