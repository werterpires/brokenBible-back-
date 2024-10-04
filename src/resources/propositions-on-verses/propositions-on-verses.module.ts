import { Module } from '@nestjs/common'
import { PropositionsOnVersesService } from './propositions-on-verses.service'
import { PropositionsOnVersesController } from './propositions-on-verses.controller'

import { PropositionsOnVersesRepo } from './propositions-on-verses.repo'

const services = [PropositionsOnVersesService, PropositionsOnVersesRepo]

@Module({
  controllers: [PropositionsOnVersesController],
  providers: services,
  exports: services
})
export class PropositionsOnVersesModule {}
