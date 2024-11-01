import { Controller, Get, Param } from '@nestjs/common'
import { RootsOnEtymologicalGroupsService } from './roots-on-etymological-groups.service'

@Controller('roots-on-etymological-groups')
export class RootsOnEtymologicalGroupsController {
  constructor(
    private readonly rootsOnEtymologicalGroupsService: RootsOnEtymologicalGroupsService
  ) {}

  @Get('/root/:rootId/:orderBy')
  async findAllRootOnEtymologicalGroupsByRootId(
    @Param('rootId') rootId: number,
    @Param('orderBy') orderBy: string
  ) {
    return this.rootsOnEtymologicalGroupsService.findAllRootOnEtymologicalGroupsByRootId(
      rootId,
      orderBy
    )
  }
}
