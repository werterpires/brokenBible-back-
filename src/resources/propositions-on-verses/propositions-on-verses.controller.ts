import { Controller, Get, Param } from '@nestjs/common'
import { PropositionsOnVersesService } from './propositions-on-verses.service'

@Controller('propositions-on-verses')
export class PropositionsOnVersesController {
  constructor(
    private readonly propositionsOnVersesService: PropositionsOnVersesService
  ) {}

  @Get('verse/:verseId/:orderBy')
  async findAllPropositionsOnVerseByVerseId(
    @Param('verseId') verseId: number,
    @Param('orderBy') orderBy: string
  ) {
    return this.propositionsOnVersesService.findAllPropositionsOnVerseByVerseId(
      +verseId,
      orderBy
    )
  }
}
