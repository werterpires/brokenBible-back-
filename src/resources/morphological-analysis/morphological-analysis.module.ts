import { Module } from '@nestjs/common';
import { MorphologicalAnalysisService } from './morphological-analysis.service';
import { MorphologicalAnalysisController } from './morphological-analysis.controller';

@Module({
  controllers: [MorphologicalAnalysisController],
  providers: [MorphologicalAnalysisService],
})
export class MorphologicalAnalysisModule {}
