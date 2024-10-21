import { Test, TestingModule } from '@nestjs/testing';
import { WordsPropertiesController } from './words-properties.controller';
import { WordsPropertiesService } from './words-properties.service';

describe('WordsPropertiesController', () => {
  let controller: WordsPropertiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WordsPropertiesController],
      providers: [WordsPropertiesService],
    }).compile();

    controller = module.get<WordsPropertiesController>(WordsPropertiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
