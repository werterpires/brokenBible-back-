import { IsIn, IsNumber, IsString, Length, Max, Min } from 'class-validator'
import { Testamento } from '../types'

export class CreateBookDto {
  @IsString({ message: '#Abreviação inválida' })
  @Length(2, 10, {
    message: '#A abreviação precisa ter entre 2 e 10 caracteres'
  })
  bookAbbr: string

  @IsString({ message: '#Nome completo inválido' })
  @Length(5, 150, {
    message: '#O nome completo precisa ter entre 2 e 150 caracteres'
  })
  bookCompleteName: string

  @IsString({ message: '#Nome reduzido inválido' })
  @Length(2, 100, {
    message: '#O nome reduzido precisa ter entre 2 e 100 caracteres'
  })
  bookReducedName: string

  @IsString()
  @IsIn(['Novo', 'Antigo'], {
    message: '#Testamento deve ser "Novo" ou "Antigo"'
  })
  testament: Testamento

  @IsNumber()
  @Min(1, { message: '#Posição deve ser maior ou igual a 1' })
  @Max(66, { message: '#Posição deve ser menor ou igual a 66' })
  bookPosition: number
}
