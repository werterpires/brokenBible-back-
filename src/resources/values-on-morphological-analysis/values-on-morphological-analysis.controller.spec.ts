import { Test, TestingModule } from '@nestjs/testing';
import { ValuesOnMorphologicalAnalysisController } from './values-on-morphological-analysis.controller';
import { ValuesOnMorphologicalAnalysisService } from './values-on-morphological-analysis.service';

describe('ValuesOnMorphologicalAnalysisController', () => {
  let controller: ValuesOnMorphologicalAnalysisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ValuesOnMorphologicalAnalysisController],
      providers: [ValuesOnMorphologicalAnalysisService],
    }).compile();

    controller = module.get<ValuesOnMorphologicalAnalysisController>(ValuesOnMorphologicalAnalysisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
