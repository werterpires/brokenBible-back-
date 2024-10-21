import { Test, TestingModule } from '@nestjs/testing';
import { WordsPropertiesService } from './words-properties.service';

describe('WordsPropertiesService', () => {
  let service: WordsPropertiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WordsPropertiesService],
    }).compile();

    service = module.get<WordsPropertiesService>(WordsPropertiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
