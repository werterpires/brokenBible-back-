import { IsNumber } from 'class-validator'

import { CreateBookDto } from './create-livro.dto'

export class UpdateBookDto extends CreateBookDto {
  @IsNumber()
  bookId: number
}
