import { Module } from '@nestjs/common'
import { RootsOnEtymologicalGroupsService } from './roots-on-etymological-groups.service'
import { RootsOnEtymologicalGroupsController } from './roots-on-etymological-groups.controller'
import { RootsOnEtymologicalGroupsRepo } from './roots-on-etymological-groups.repo'

const services = [
  RootsOnEtymologicalGroupsService,
  RootsOnEtymologicalGroupsRepo
]

@Module({
  controllers: [RootsOnEtymologicalGroupsController],
  providers: services,
  exports: services
})
export class RootsOnEtymologicalGroupsModule {}
