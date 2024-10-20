import { Test, TestingModule } from '@nestjs/testing';
import { MorphologicalAnalysisService } from './morphological-analysis.service';

describe('MorphologicalAnalysisService', () => {
  let service: MorphologicalAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MorphologicalAnalysisService],
    }).compile();

    service = module.get<MorphologicalAnalysisService>(MorphologicalAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
