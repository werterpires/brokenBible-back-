import { Injectable } from '@nestjs/common'
import { InjectConnection } from 'nest-knexjs'
import { ThemeOnProposition } from './types'
import { Theme } from '../themes/types'

@Injectable()
export class ThemesOnPropositionsRepo {
  constructor(@InjectConnection() private readonly knex) {}

  async findAllThemesOnPropositionByPropositionId(
    propositionId: number,
    orderBy: string
  ): Promise<ThemeOnProposition[]> {
    const themesOnPropositionConsult = await this.knex('themes_on_propositions')
      .leftJoin('themes', 'themes_on_propositions.theme_id', 'themes.theme_id')
      .where('proposition_id', propositionId)
      .orderBy(orderBy)

    const themesOnProposition: ThemeOnProposition[] =
      themesOnPropositionConsult.map((verse) => {
        const theme: Theme = {
          themeId: verse.theme_id,
          themeText: verse.theme_text,
          themeDescription: verse.theme_description
        }
        return <ThemeOnProposition>{
          PropositionId: verse.verse_id,
          themeId: verse.theme_id,
          propositionId: verse.proposition_id,
          theme
        }
      })

    return themesOnProposition
  }
}
