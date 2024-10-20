import { Module } from '@nestjs/common'
import { OriginalsOnVersesService } from './originals-on-verses.service'
import { OriginalsOnVersesController } from './originals-on-verses.controller'
import { OriginalsOnVersesRepo } from './originals-on-verses.repo'

const services = [OriginalsOnVersesService, OriginalsOnVersesRepo]

@Module({
  controllers: [OriginalsOnVersesController],
  providers: services,
  exports: services
})
export class OriginalsOnVersesModule {}
