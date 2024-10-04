import { Injectable } from '@nestjs/common'
import { PropositionsOnVersesRepo } from './propositions-on-verses.repo'
import { PropositionOnVerse } from './types'

@Injectable()
export class PropositionsOnVersesService {
  constructor(
    private readonly propositionsOnVersesRepo: PropositionsOnVersesRepo
  ) {}

  async findAllPropositionsOnVerseByVerseId(
    verseId: number,
    orderBy: string
  ): Promise<PropositionOnVerse[]> {
    return this.propositionsOnVersesRepo.findAllPropositionsOnVerseByVerseId(
      verseId,
      orderBy
    )
  }
}
