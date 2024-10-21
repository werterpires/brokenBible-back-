import { Test, TestingModule } from '@nestjs/testing';
import { MorphologicalAnalysisOnOriginalsController } from './morphological-analysis-on-originals.controller';
import { MorphologicalAnalysisOnOriginalsService } from './morphological-analysis-on-originals.service';

describe('MorphologicalAnalysisOnOriginalsController', () => {
  let controller: MorphologicalAnalysisOnOriginalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MorphologicalAnalysisOnOriginalsController],
      providers: [MorphologicalAnalysisOnOriginalsService],
    }).compile();

    controller = module.get<MorphologicalAnalysisOnOriginalsController>(MorphologicalAnalysisOnOriginalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
