import { Injectable } from '@nestjs/common'
import { InjectConnection } from 'nest-knexjs'
import { ValueOnMorphologicalAnalysis } from './types'
import { WordsProperty } from '../words-properties/types'
import { PossiblePropertyValue } from '../possible-properties-values/types'

@Injectable()
export class ValuesOnMorphologicalAnalysisRepo {
  constructor(@InjectConnection() private readonly knex) {}

  async findAllValuesOnMorphologicalAnalysisByMorphAnalysisId(
    morphAnalysisId: number,
    orderBy: string
  ): Promise<ValueOnMorphologicalAnalysis[]> {
    const valuesOnMorphAnaylisConsult = await this.knex(
      'values_on_morphological_analysis'
    )
      .leftJoin(
        'possible_properties_values',
        'values_on_morphological_analysis.possible_value_id',
        'possible_properties_values.possible_value_id'
      )
      .leftJoin(
        'words_properties',
        'possible_properties_values.words_property_id',
        'words_properties.words_property_id'
      )
      .where('morph_analysis_id', morphAnalysisId)
      .orderBy(orderBy)

    const valuesOnMorphologicalAnalysis: ValueOnMorphologicalAnalysis[] =
      valuesOnMorphAnaylisConsult.map((value) => {
        const wordsProperty: WordsProperty = {
          wordsPropertyId: value.words_property_id,
          wordsPropertyName: value.words_property_name
        }
        const possiblePropertyValue: PossiblePropertyValue = {
          possibleValueId: value.possible_value_id,
          implication: value.implication,
          value: value.value,
          wordsPropertyId: value.words_property_id,
          wordsProperty
        }
        return <ValueOnMorphologicalAnalysis>{
          morphAnalysisId: value.morph_analysis_id,
          possibleValueId: value.possible_value_id,
          possiblePropertyValue
        }
      })

    return valuesOnMorphologicalAnalysis
  }
}
