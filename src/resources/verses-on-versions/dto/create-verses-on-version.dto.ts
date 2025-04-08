import { IsNumber, Length } from 'class-validator'

export class CreateVersesOnVersionDto {
  @IsNumber()
  verseId: number

  @IsNumber()
  versionId: number

  @Length(5, 1500, {
    message: '#O versículo precisa ter entre 5 e 1500 caracteres'
  })
  verseText: string
}
