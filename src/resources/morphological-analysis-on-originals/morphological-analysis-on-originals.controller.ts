import { Controller, Get, Param } from '@nestjs/common'
import { MorphologicalAnalysisOnOriginalsService } from './morphological-analysis-on-originals.service'

@Controller('morphological-analysis-on-originals')
export class MorphologicalAnalysisOnOriginalsController {
  constructor(
    private readonly morphologicalAnalysisOnOriginalsService: MorphologicalAnalysisOnOriginalsService
  ) {}

  @Get('original/:originalId/:orderBy')
  async findAllMorphologicalAnalysisOnOriginalsByOriginalIdAndOrderBy(
    @Param('originalId') originalId: number,
    @Param('orderBy') orderBy: string
  ) {
    return this.morphologicalAnalysisOnOriginalsService.findAllMorphologicalAnalysisOnOriginalsByOriginalId(
      originalId,
      orderBy
    )
  }
}
