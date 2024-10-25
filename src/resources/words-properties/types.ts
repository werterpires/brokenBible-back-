import { PossiblePropertyValue } from '../possible-properties-values/types'

export interface WordsProperty {
  wordsPropertyId: number
  wordsPropertyName: string
  possibleValues?: PossiblePropertyValue[]
}
