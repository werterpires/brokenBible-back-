import { Controller, Get, Param } from '@nestjs/common'
import { VersesOnVersionsService } from './verses-on-versions.service'

@Controller('verses-on-versions')
export class VersesOnVersionsController {
  constructor(
    private readonly versesOnVersionsService: VersesOnVersionsService
  ) {}

  @Get('verse/:verseId/:orderBy')
  vindAllVersesOnVersesByVerseId(
    @Param('verseId') verseId: number,
    @Param('orderBy') orderBy: string
  ) {
    return this.versesOnVersionsService.findAllVersesOnVersionsByVerseId(
      +verseId,
      orderBy
    )
  }
}
