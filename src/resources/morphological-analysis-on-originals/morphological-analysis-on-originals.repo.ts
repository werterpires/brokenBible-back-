import { Injectable } from '@nestjs/common'
import { InjectConnection } from 'nest-knexjs'
import { MorphologicalAnalysisOnOriginals } from './types'
import { MorphologicalAnalysis } from '../morphological-analysis/types'

@Injectable()
export class MorphologicalAnalysisOnOriginalsRepo {
  constructor(@InjectConnection() private readonly knex) {}

  async findAllMorphologicalAnalysisOnOriginalsByOriginalId(
    originalId: number,
    orderBy: string
  ): Promise<MorphologicalAnalysisOnOriginals[]> {
    const morphAnalysisOnOriginalsConsult = await this.knex(
      'morphological_analysis_on_originals'
    )
      .leftJoin(
        'morphological_analysis',
        'morphological_analysis_on_originals.morph_analysis_id',
        'morphological_analysis.morph_analysis_id'
      )
      .where('original_id', originalId)
      .orderBy(orderBy)

    const morphAnalysisOnOriginals: MorphologicalAnalysisOnOriginals[] =
      morphAnalysisOnOriginalsConsult.map((analysis) => {
        const morphologicalAnalysis: MorphologicalAnalysis = {
          morphAnalysisId: analysis.morph_analysis_id,
          analysisName: analysis.analysis_name
        }

        return <MorphologicalAnalysisOnOriginals>{
          morphAnalysisId: analysis.morph_analysis_id,
          originalId: analysis.original_id,
          morphologicalAnalysis
        }
      })

    return morphAnalysisOnOriginals
  }
}
