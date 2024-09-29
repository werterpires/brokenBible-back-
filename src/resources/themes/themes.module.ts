import { Module } from '@nestjs/common'
import { ThemesService } from './themes.service'
import { ThemesController } from './themes.controller'
import { ThemesRepo } from './themes.repo'

const services = [ThemesService, ThemesRepo]

@Module({
  controllers: [ThemesController],
  providers: services,
  exports: services
})
export class ThemesModule {}
