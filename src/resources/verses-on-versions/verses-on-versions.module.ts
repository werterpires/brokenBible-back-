import { Module } from '@nestjs/common'
import { VersesOnVersionsService } from './verses-on-versions.service'
import { VersesOnVersionsController } from './verses-on-versions.controller'
import { VersesOnVersionsRepo } from './verses-on-versions.repo'

const services = [VersesOnVersionsService, VersesOnVersionsRepo]

@Module({
  controllers: [VersesOnVersionsController],
  providers: services,
  exports: services
})
export class VersesOnVersionsModule {}
