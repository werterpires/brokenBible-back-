import { IsNumber, IsString, Length, Max, Min } from 'class-validator'

export class CreateChapterDto {
  @IsNumber()
  @Min(1, { message: '#O número do capitulo deve ser maior ou igual a 1' })
  @Max(150, { message: '#O número do capitulo deve ser menor ou igual a 150' })
  chapterNumber: number

  @IsString({ message: '#Resumo do capitulo inválido' })
  @Length(5, 255, {
    message: '#O resumo do capitulo precisa ter entre 5 e 255 caracteres'
  })
  chapterSummary: string

  @IsNumber()
  bookId: number
}
