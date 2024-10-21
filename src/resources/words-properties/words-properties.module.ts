import { Module } from '@nestjs/common';
import { WordsPropertiesService } from './words-properties.service';
import { WordsPropertiesController } from './words-properties.controller';

@Module({
  controllers: [WordsPropertiesController],
  providers: [WordsPropertiesService],
})
export class WordsPropertiesModule {}
