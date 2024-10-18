import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OriginalsOnVersesService } from './originals-on-verses.service';
import { CreateOriginalsOnVerseDto } from './dto/create-originals-on-verse.dto';
import { UpdateOriginalsOnVerseDto } from './dto/update-originals-on-verse.dto';

@Controller('originals-on-verses')
export class OriginalsOnVersesController {
  constructor(private readonly originalsOnVersesService: OriginalsOnVersesService) {}

  @Post()
  create(@Body() createOriginalsOnVerseDto: CreateOriginalsOnVerseDto) {
    return this.originalsOnVersesService.create(createOriginalsOnVerseDto);
  }

  @Get()
  findAll() {
    return this.originalsOnVersesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.originalsOnVersesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOriginalsOnVerseDto: UpdateOriginalsOnVerseDto) {
    return this.originalsOnVersesService.update(+id, updateOriginalsOnVerseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.originalsOnVersesService.remove(+id);
  }
}
