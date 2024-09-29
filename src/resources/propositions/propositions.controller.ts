import { Controller, Get, Param } from '@nestjs/common'
import { PropositionsService } from './propositions.service'

@Controller('propositions')
export class PropositionsController {
  constructor(private readonly propositionsService: PropositionsService) {}

  @Get('verse/:verseId/:orderBy')
  findAllPropositionsByVerseId(
    @Param('verseId') verseId: number,
    @Param('orderBy') orderBy: string
  ) {
    return this.propositionsService.findAllPropositionsByVerseId(
      verseId,
      orderBy
    )
  }
}
