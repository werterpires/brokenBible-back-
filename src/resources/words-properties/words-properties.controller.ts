import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WordsPropertiesService } from './words-properties.service';
import { CreateWordsPropertyDto } from './dto/create-words-property.dto';
import { UpdateWordsPropertyDto } from './dto/update-words-property.dto';

@Controller('words-properties')
export class WordsPropertiesController {
  constructor(private readonly wordsPropertiesService: WordsPropertiesService) {}

  @Post()
  create(@Body() createWordsPropertyDto: CreateWordsPropertyDto) {
    return this.wordsPropertiesService.create(createWordsPropertyDto);
  }

  @Get()
  findAll() {
    return this.wordsPropertiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wordsPropertiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWordsPropertyDto: UpdateWordsPropertyDto) {
    return this.wordsPropertiesService.update(+id, updateWordsPropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wordsPropertiesService.remove(+id);
  }
}
