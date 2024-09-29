import { Module } from '@nestjs/common'
import { ThemesOnPropositionsService } from './themes-on-propositions.service'
import { ThemesOnPropositionsController } from './themes-on-propositions.controller'
import { ThemesOnPropositionsRepo } from './themes-on-propositions.repo'

const services = [ThemesOnPropositionsService, ThemesOnPropositionsRepo]

@Module({
  controllers: [ThemesOnPropositionsController],
  providers: services,
  exports: services
})
export class ThemesOnPropositionsModule {}
