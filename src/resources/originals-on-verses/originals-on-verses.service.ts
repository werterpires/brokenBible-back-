import { Injectable } from '@nestjs/common';
import { CreateOriginalsOnVerseDto } from './dto/create-originals-on-verse.dto';
import { UpdateOriginalsOnVerseDto } from './dto/update-originals-on-verse.dto';

@Injectable()
export class OriginalsOnVersesService {
  create(createOriginalsOnVerseDto: CreateOriginalsOnVerseDto) {
    return 'This action adds a new originalsOnVerse';
  }

  findAll() {
    return `This action returns all originalsOnVerses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} originalsOnVerse`;
  }

  update(id: number, updateOriginalsOnVerseDto: UpdateOriginalsOnVerseDto) {
    return `This action updates a #${id} originalsOnVerse`;
  }

  remove(id: number) {
    return `This action removes a #${id} originalsOnVerse`;
  }
}
