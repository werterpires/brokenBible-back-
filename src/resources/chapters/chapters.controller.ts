import { Controller, Get, Param } from '@nestjs/common'
import { ChaptersService } from './chapters.service'

@Controller('chapters')
export class ChaptersController {
  constructor(private readonly chaptersService: ChaptersService) {}

  @Get('/book/:bookId/:orderBy')
  findAllChaptersByBookId(
    @Param('bookId') bookId: string,
    @Param('orderBy') orderBy: string
  ) {
    return this.chaptersService.findAllChaptersByBookId(+bookId, orderBy)
  }
}
