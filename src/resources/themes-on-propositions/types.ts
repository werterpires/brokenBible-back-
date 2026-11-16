import { Proposition } from '../propositions/types'
import { Theme } from '../themes/types'

export interface ThemeOnProposition extends CreateThemesOnProposition {
  theme?: Theme
  proposition?: Proposition
}

export interface CreateThemesOnProposition {
  themeId: number
  PropositionId: number
}
