import { Module } from '@nestjs/common'
import { VersionsService } from './versions.service'
import { VersionsController } from './versions.controller'
import { VersionsRepo } from './versions.repo'

const services = [VersionsService, VersionsRepo]

@Module({
  controllers: [VersionsController],
  providers: services,
  exports: services
})
export class VersionsModule {}
