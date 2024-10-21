import { Injectable } from '@nestjs/common';
import { CreateWordsPropertyDto } from './dto/create-words-property.dto';
import { UpdateWordsPropertyDto } from './dto/update-words-property.dto';

@Injectable()
export class WordsPropertiesService {
  create(createWordsPropertyDto: CreateWordsPropertyDto) {
    return 'This action adds a new wordsProperty';
  }

  findAll() {
    return `This action returns all wordsProperties`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wordsProperty`;
  }

  update(id: number, updateWordsPropertyDto: UpdateWordsPropertyDto) {
    return `This action updates a #${id} wordsProperty`;
  }

  remove(id: number) {
    return `This action removes a #${id} wordsProperty`;
  }
}
