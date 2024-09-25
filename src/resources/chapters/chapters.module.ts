import { Module } from '@nestjs/common'
import { ChaptersService } from './chapters.service'
import { ChaptersController } from './chapters.controller'
import { ChaptersRepo } from './chapters.repo'
const services = [ChaptersService, ChaptersRepo]
@Module({
  controllers: [ChaptersController],
  providers: services,
  exports: services
})
export class ChaptersModule {}
