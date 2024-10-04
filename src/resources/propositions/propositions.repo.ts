import { Injectable } from '@nestjs/common'
import { InjectConnection } from 'nest-knexjs'

@Injectable()
export class PropositionsRepo {
  constructor(@InjectConnection() private readonly knex) {}
}
