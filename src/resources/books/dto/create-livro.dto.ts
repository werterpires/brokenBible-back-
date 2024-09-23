import { IsIn, IsNumber, IsString } from 'class-validator'
import { Testamento } from '../types'

export class CreateBookDto {
  @IsString()
  bookAbbr: string

  @IsString()
  bookCompleteName: string

  @IsString()
  bookReducedName: string

  @IsString()
  @IsIn(['Novo', 'Angito'], { message: 'Testamento inválido' })
  testament: Testamento

  @IsNumber()
  bookPosition: number
}
