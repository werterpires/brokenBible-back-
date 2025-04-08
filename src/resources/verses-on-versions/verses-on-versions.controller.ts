import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { VersesOnVersionsService } from './verses-on-versions.service'
import { CreateVersesOnVersionDto } from './dto/create-verses-on-version.dto'

@Controller('verses-on-versions')
export class VersesOnVersionsController {
  constructor(
    private readonly versesOnVersionsService: VersesOnVersionsService
  ) {}

  @Get('verse/:verseId/:orderBy')
  async vindAllVersesOnVersesByVerseId(
    @Param('verseId') verseId: number,
    @Param('orderBy') orderBy: string
  ) {
    return this.versesOnVersionsService.findAllVersesOnVersionsByVerseId(
      +verseId,
      orderBy
    )
  }

  @Post()
  async createVerseOnVersion(
    @Body() verseOnVersionDto: CreateVersesOnVersionDto
  ) {
    return await this.versesOnVersionsService.createVerseOnVersion(
      verseOnVersionDto
    )
  }
}
