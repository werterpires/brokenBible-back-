import { Module } from '@nestjs/common'
import { MorphologicalAnalysisOnOriginalsService } from './morphological-analysis-on-originals.service'
import { MorphologicalAnalysisOnOriginalsController } from './morphological-analysis-on-originals.controller'
import { MorphologicalAnalysisOnOriginalsRepo } from './morphological-analysis-on-originals.repo'

const services = [
  MorphologicalAnalysisOnOriginalsService,
  MorphologicalAnalysisOnOriginalsRepo
]

@Module({
  controllers: [MorphologicalAnalysisOnOriginalsController],
  providers: services,
  exports: services
})
export class MorphologicalAnalysisOnOriginalsModule {}
