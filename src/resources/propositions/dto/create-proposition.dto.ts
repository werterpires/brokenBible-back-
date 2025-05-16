import { IsArray, IsNumber, IsString, Length } from 'class-validator'

export class CreatePropositionDto {
  @IsString()
  @Length(5, 255)
  propositionText: string

  @IsArray()
  @IsNumber({}, { each: true })
  versesId: number[]
}
