import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException
} from '@nestjs/common'

@Injectable()
export class ErrorsService {
  internalErrors = [
    'ERR_ASSERTION',
    'ER_BAD_FIELD_ERROR',
    'ER_NO_DEFAULT_FOR_FIELD',
    'ER_NO_SUCH_TABLE',
    'ER_NON_UNIQ_ERROR'
  ]
  handleErrors(error: any, message: string, func: string): any {
    console.error('erro para debug:', error)
    if (error.message.startsWith('#')) {
      return error
    } else if (error.code === 'ER_DATA_TOO_LONG') {
      return new BadRequestException(
        `#Algum dado fornecido é maior que o esperado.`
      )
    } else if (error.code === 'ER_TRUNCATED_WRONG_VALUE') {
      const problem = this.getProblematicEntry(error.sqlMessage)
      return new BadRequestException(
        `#O dado '${problem}' não está num formato aceitável.`
      )
    } else if (error.code == 'ER_DUP_ENTRY') {
      const problem = this.getProblematicEntry(error.sqlMessage)
      return new BadRequestException(
        `#Já existe um registro com o seguinte dado: '${problem}' e ele deve ser único.`
      )
    } else if (this.internalErrors.includes(error.code)) {
      return new InternalServerErrorException(
        `#Erro interno. Informe o código "${error.code}" para o time de suporte para correção.`
      )
    } else if (error.code == 'ER_ROW_IS_REFERENCED_2') {
      return new ForbiddenException(
        `#Este item não pode ser apagado porque está sendo utilizado em outra parte do sistema. Para removê-lo, primeiro apague ou desvincule qualquer referência a ele.`
      )
    } else if (error.code == 'ER_NO_REFERENCED_ROW_2') {
      return new BadRequestException(
        `#Não foi possível completar a ação. Certifique-se de que todas as opções selecionadas ou informadas são válidas e existem no sistema.`
      )
    } else {
      console.error(`new error in  ${func}:`)
      console.error(error)
      const errMsg = message
      return new InternalServerErrorException(errMsg)
    }
  }

  getProblematicEntry(message: string) {
    const getProblematicEntry = message.match(/'([^']+)'/) || []

    return getProblematicEntry[1]
  }
}
