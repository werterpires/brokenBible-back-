import { Injectable } from '@nestjs/common'
import { InjectConnection } from 'nest-knexjs'

@Injectable()
export class ThemesRepo {
  constructor(@InjectConnection() private readonly knex) {}
}
