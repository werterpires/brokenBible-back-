import { Controller, Get, Param } from '@nestjs/common'
import { VersesService } from './verses.service'

@Controller('verses')
export class VersesController {
  constructor(private readonly versesService: VersesService) {}

  @Get('chapter/:chapterId/:orderBy')
  findOne(
    @Param('chapterId') chapterId: string,
    @Param('orderBy') orderby: string
  ) {
    return this.versesService.findAllVersesByChapterId(+chapterId, orderby)
  }
}
