import { IsNumber, IsString, Length, Max, Min } from 'class-validator'

export class CreateVerseDto {
  @IsNumber()
  chapterId: number

  @IsNumber()
  @Min(1, { message: '#O número do versiculo deve ser maior ou igual a 1' })
  @Max(180, { message: '#O número do versiculo deve ser menor ou igual a 180' })
  verseNumber: number

  @IsString({ message: '#Versiculo inválido' })
  @Length(10, 3000, {
    message: '#O versiculo precisa ter entre 10 e 3000 caracteres'
  })
  verseTranslation: string
}
