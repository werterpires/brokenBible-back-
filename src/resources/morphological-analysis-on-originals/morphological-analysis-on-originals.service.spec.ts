import { Test, TestingModule } from '@nestjs/testing';
import { MorphologicalAnalysisOnOriginalsService } from './morphological-analysis-on-originals.service';

describe('MorphologicalAnalysisOnOriginalsService', () => {
  let service: MorphologicalAnalysisOnOriginalsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MorphologicalAnalysisOnOriginalsService],
    }).compile();

    service = module.get<MorphologicalAnalysisOnOriginalsService>(MorphologicalAnalysisOnOriginalsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
