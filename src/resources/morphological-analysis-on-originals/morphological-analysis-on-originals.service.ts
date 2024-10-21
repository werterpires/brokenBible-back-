import { Injectable } from '@nestjs/common'
import { MorphologicalAnalysisOnOriginalsRepo } from './morphological-analysis-on-originals.repo'
import { MorphologicalAnalysisOnOriginals } from './types'

@Injectable()
export class MorphologicalAnalysisOnOriginalsService {
  constructor(
    private readonly morphologicalAnalysisOnOriginalsRepo: MorphologicalAnalysisOnOriginalsRepo
  ) {}

  async findAllMorphologicalAnalysisOnOriginalsByOriginalId(
    originalId: number,
    orderBy: string
  ): Promise<MorphologicalAnalysisOnOriginals[]> {
    return this.morphologicalAnalysisOnOriginalsRepo.findAllMorphologicalAnalysisOnOriginalsByOriginalId(
      originalId,
      orderBy
    )
  }
}
