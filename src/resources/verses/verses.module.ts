import { Module } from '@nestjs/common'
import { VersesService } from './verses.service'
import { VersesController } from './verses.controller'
import { VersesRepo } from './verses.repo'

const services = [VersesService, VersesRepo]

@Module({
  controllers: [VersesController],
  providers: services,
  exports: services
})
export class VersesModule {}
