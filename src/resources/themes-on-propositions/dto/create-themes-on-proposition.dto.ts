import { IsNumber } from 'class-validator'

export class CreateThemesOnPropositionDto {
  @IsNumber()
  themeId: number

  @IsNumber()
  propositionId: number
}
