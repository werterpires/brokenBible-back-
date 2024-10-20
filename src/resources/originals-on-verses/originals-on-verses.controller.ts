import { Controller, Get, Param } from '@nestjs/common'
import { OriginalsOnVersesService } from './originals-on-verses.service'

@Controller('originals-on-verses')
export class OriginalsOnVersesController {
  constructor(
    private readonly originalsOnVersesService: OriginalsOnVersesService
  ) {}

  @Get('verse/:verseId/:orderBy')
  async findAllOriginalsOnVerseByVerseId(
    @Param('verseId') verseId: number,
    @Param('orderBy') orderBy: string
  ) {
    return this.originalsOnVersesService.findAllOriginalsOnVerseByVerseId(
      +verseId,
      orderBy
    )
  }
}
