import { Test, TestingModule } from '@nestjs/testing';
import { MorphologicalAnalysisController } from './morphological-analysis.controller';
import { MorphologicalAnalysisService } from './morphological-analysis.service';

describe('MorphologicalAnalysisController', () => {
  let controller: MorphologicalAnalysisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MorphologicalAnalysisController],
      providers: [MorphologicalAnalysisService],
    }).compile();

    controller = module.get<MorphologicalAnalysisController>(MorphologicalAnalysisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
