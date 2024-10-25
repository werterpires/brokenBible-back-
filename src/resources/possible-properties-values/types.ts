import { ValueOnMorphologicalAnalysis } from '../values-on-morphological-analysis/types'
import { WordsProperty } from '../words-properties/types'

export interface PossiblePropertyValue {
  possibleValueId: number
  wordsPropertyId: number
  value: string
  implication: string
  wordsProperty?: WordsProperty
  valuesOnMorphologicalAnalysis?: ValueOnMorphologicalAnalysis[]
}
