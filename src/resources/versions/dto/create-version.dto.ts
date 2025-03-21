import { IsString, Length } from 'class-validator'

export class CreateVersionDto {
  @IsString({ message: '#Nome de versão inválida' })
  @Length(5, 150, {
    message: '#O nome de versão precisa ter entre 5 e 150 caracteres'
  })
  versionName: string

  @IsString({ message: '#Abreviação de versão inválida' })
  @Length(2, 20, {
    message: '#A abreviação de versão precisa ter entre 2 e 20 caracteres'
  })
  versionAbbr: string
}
