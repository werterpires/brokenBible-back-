import { Module } from '@nestjs/common'
import { PropositionsService } from './propositions.service'
import { PropositionsController } from './propositions.controller'
import { PropositionsRepo } from './propositions.repo'

const services = [PropositionsService, PropositionsRepo]

@Module({
  controllers: [PropositionsController],
  providers: services,
  exports: services
})
export class PropositionsModule {}
