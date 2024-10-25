import { Injectable } from '@nestjs/common'
import { ValuesOnMorphologicalAnalysisRepo } from './values-on-morphological-analysis.repo'

@Injectable()
export class ValuesOnMorphologicalAnalysisService {
  constructor(
    private readonly valuesOnMorphologicalAnalysisRepo: ValuesOnMorphologicalAnalysisRepo
  ) {}

  findAllValuesOnMorphologicalAnalysisByMorphAnalysisId(
    morphAnalysisId: number,
    orderBy: string
  ) {
    return this.valuesOnMorphologicalAnalysisRepo.findAllValuesOnMorphologicalAnalysisByMorphAnalysisId(
      morphAnalysisId,
      orderBy
    )
  }
}
