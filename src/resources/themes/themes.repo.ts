import { Injectable } from '@nestjs/common'
import { InjectConnection } from 'nest-knexjs'
import { CreateTheme, Theme } from './types'

@Injectable()
export class ThemesRepo {
  constructor(@InjectConnection() private readonly knex) {}

  async getAllThemes() {
    const themesConsult = await this.knex('themes').select('*')
    const theme: Theme[] = themesConsult.map((theme) => {
      return {
        themeDescription: theme.theme_description,
        themeText: theme.theme_text,
        themeId: theme.theme_id
      }
    })

    return theme
  }

  async createTheme(themeData: CreateTheme) {
    const { themeDescription, themeText } = themeData

    const [themeId] = await this.knex('themes').insert({
      theme_description: themeDescription,
      theme_text: themeText
    })

    return themeId
  }

  async getThemeById(themeId: number) {
    const [themeConsult] = await this.knex('themes')
      .select('*')
      .where('theme_id', themeId)
    const theme: Theme = {
      themeDescription: themeConsult.theme_description,
      themeText: themeConsult.theme_text,
      themeId: themeConsult.theme_id
    }

    return theme
  }
}
