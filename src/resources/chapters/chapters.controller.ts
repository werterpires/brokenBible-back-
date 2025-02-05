import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ChaptersService } from './chapters.service'
import { CreateChapterDto } from './dto/create-chapter.dto'

@Controller('chapters')
export class ChaptersController {
  constructor(private readonly chaptersService: ChaptersService) {}

  @Post()
  async createChapter(@Body() createChapterDto: CreateChapterDto) {
    return await this.chaptersService.createChapter(createChapterDto)
  }

  @Get('/book/:bookId/:orderBy')
  findAllChaptersByBookId(
    @Param('bookId') bookId: string,
    @Param('orderBy') orderBy: string
  ) {
    return this.chaptersService.findAllChaptersByBookId(+bookId, orderBy)
  }
}
