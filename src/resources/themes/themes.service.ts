import { Injectable } from '@nestjs/common'
import { ThemesRepo } from './themes.repo'

@Injectable()
export class ThemesService {
  constructor(private readonly themesRepo: ThemesRepo) {}
}
