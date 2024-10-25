import { Module } from '@nestjs/common'
import { ValuesOnMorphologicalAnalysisService } from './values-on-morphological-analysis.service'
import { ValuesOnMorphologicalAnalysisController } from './values-on-morphological-analysis.controller'
import { ValuesOnMorphologicalAnalysisRepo } from './values-on-morphological-analysis.repo'

const services = [
  ValuesOnMorphologicalAnalysisService,
  ValuesOnMorphologicalAnalysisRepo
]
@Module({
  controllers: [ValuesOnMorphologicalAnalysisController],
  providers: services,
  exports: services
})
export class ValuesOnMorphologicalAnalysisModule {}
