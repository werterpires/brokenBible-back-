import { Controller, Get, Param } from '@nestjs/common'
import { ValuesOnMorphologicalAnalysisService } from './values-on-morphological-analysis.service'

@Controller('values-on-morphological-analysis')
export class ValuesOnMorphologicalAnalysisController {
  constructor(
    private readonly valuesOnMorphologicalAnalysisService: ValuesOnMorphologicalAnalysisService
  ) {}

  @Get('morphological-analysis/:morphAnalysisId/:orderBy')
  async findAllValuesOnMorphologicalAnalysisByMorphAnalysisId(
    @Param('morphAnalysisId') morphAnalysisId: number,
    @Param('orderBy') orderBy: string
  ) {
    return this.valuesOnMorphologicalAnalysisService.findAllValuesOnMorphologicalAnalysisByMorphAnalysisId(
      morphAnalysisId,
      orderBy
    )
  }
}
