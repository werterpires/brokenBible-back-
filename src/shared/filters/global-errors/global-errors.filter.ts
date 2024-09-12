import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus
} from '@nestjs/common'
import { ErrorsService } from './errors-service.service'
import { Request, Response } from 'express'

import { timestamp } from 'rxjs'

@Catch()
export class GlobalErrorsFilter<T> implements ExceptionFilter {
  constructor(private readonly errorsService: ErrorsService) {}
  catch(exception: T, host: ArgumentsHost) {
    const isHttpException = exception instanceof HttpException
    const status = isHttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()

    let errorResponse: any
    if (isHttpException) {
      // Se já for um HttpException (exceções que o NestJS já trata), retorna normalmente
      errorResponse = exception.getResponse()
    } else {
      // Usa o ErrorsService para tratar a exceção e formatar a resposta
      const message = 'Erro inesperado, contate o suporte'
      errorResponse = this.errorsService.handleErrors(
        exception,
        message,
        request.url
      )
    }

    response.status(status).json({
      statusCode: status,
      timestamp: timestamp(),
      path: request.url,
      error: errorResponse || 'internal server error bonitão'
    })
  }
}
