import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { VersesService } from './verses.service'
import { CreateVerseDto } from './dto/create-verse.dto'

@Controller('verses')
export class VersesController {
  constructor(private readonly versesService: VersesService) {}

  @Post()
  async createVerse(@Body() createVerseDto: CreateVerseDto) {
    return await this.versesService.createVerse(createVerseDto)
  }

  @Get('chapter/:chapterId/:orderBy')
  async findOne(
    @Param('chapterId') chapterId: string,
    @Param('orderBy') orderby: string
  ) {
    return await this.versesService.findAllVersesByChapterId(
      +chapterId,
      orderby
    )
  }
}
