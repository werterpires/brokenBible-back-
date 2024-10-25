import { Test, TestingModule } from '@nestjs/testing';
import { ValuesOnMorphologicalAnalysisService } from './values-on-morphological-analysis.service';

describe('ValuesOnMorphologicalAnalysisService', () => {
  let service: ValuesOnMorphologicalAnalysisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ValuesOnMorphologicalAnalysisService],
    }).compile();

    service = module.get<ValuesOnMorphologicalAnalysisService>(ValuesOnMorphologicalAnalysisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
