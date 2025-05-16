import { Length } from 'class-validator'

export class CreateThemeDto {
  @Length(5, 510)
  themeDescription: string

  @Length(5, 150)
  themeText: string
}
